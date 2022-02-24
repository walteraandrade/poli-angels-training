import fromEvent from 'xstream/extra/fromEvent';
import xs from 'xstream';

const app = document.querySelector('#root');

const h1 = (children) => {
  return {
    tagName: 'H1',
    children
  }
}

const span = (children) => {
  return {
    tagName: 'SPAN',
    children
  }
}

const div = (children) => {
  return {
    tagName: 'DIV',
    children
  }
}

const main = (source) => {
    const eventStream = source.DOM.selectEvent('span', 'click')
    
    return {
    DOM: eventStream.startWith(null).map(() => 
    xs.periodic(1000)
    .fold(prev => prev + 1, 0)
    .map(item => (
      div([
        span([`Seconds elapsed: ${item}`])
      ])
    )))
    .flatten(),
    log: xs.periodic(10000)
    }
}

const domHandler = (objStream) => {
    const createElement = (obj) => {
      const newElement = document.createElement(obj.tagName);
      obj.children.forEach((child) => {
        if(typeof child === 'object' ){ 
        newElement.appendChild(createElement(child));
      } else {
        newElement.textContent = child
      }
      })
      return newElement
    }

    const selectEvent = (tagName, eventType) => {
      return fromEvent(document, eventType)
        .filter(event => event.target.tagName === tagName.toUpperCase())
    }

    objStream.subscribe({
      next: obj => {
        app.textContent = ''
        const element = createElement(obj)
        app.appendChild(element)
      }
    })
    
    const domSource = {
      selectEvent
    }

  return domSource
}

const logHandler = (textStream) => {
    textStream.subscribe({
      next: str => {
        console.log(str)
      }
    })
}

const run = (main, drivers) => {
    const fakeSinks = {};
    Object.keys(drivers).forEach(key => {
      fakeSinks[key] = xs.create(); 
    });
    
    const sources = {};
    Object.keys(drivers).forEach(key => {
      sources[key] = drivers[key](fakeSinks[key]);
    });
    
    const sinks = main(sources);
    
    Object.keys(sinks).forEach(key => {
      fakeSinks[key].imitate(sinks[key]);
    });
};

run(main, { DOM: domHandler, log: logHandler});