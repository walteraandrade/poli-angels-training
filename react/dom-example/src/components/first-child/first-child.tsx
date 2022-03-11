import React from "react"
import { SecondChild } from "../second-child";
import './first-child.css'

enum FirstChildClassName {
  V1 = 'first-childv1',
  V2 = 'first-childv2'
}


export const FirstChild: React.FC = ({ children }) => {
  const [className, setClassName] = React.useState<FirstChildClassName>(FirstChildClassName.V1);

  const handleClassName = () => {
    if (className === 'first-childv1') {
      setClassName(FirstChildClassName.V2)
    } else {
      setClassName(FirstChildClassName.V1)
    }
  }

  return (
    <div className={`${className}`} >
      <SecondChild />
      <button onClick={handleClassName}>{children}</button>
      <SecondChild />
    </div>
  )
}