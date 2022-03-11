import React from "react";
import './second-child.css'

enum SecondChildClassName {
  V1 = 'second-childv1',
  V2 = 'second-childv2'
}
export const SecondChild: React.FC = () => {
  const [className, setClassName] = React.useState<SecondChildClassName>(SecondChildClassName.V1);
  const text = className
  
  const handleClassName = () => {
    if (className === 'second-childv1') {
      setClassName(SecondChildClassName.V2)
    } else {
      setClassName(SecondChildClassName.V1)
    }
  }

  return(
    <div className={className}>
     <button onClick={handleClassName}>Toggle</button>
     {text}
    </div>
  )
}