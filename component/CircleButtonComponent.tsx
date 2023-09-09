import React from 'react'
import Style from "@/styles/Home.module.css"


interface CircleButtonProps {
    buttonName: string;
    action: () => void
}

const CircleButtonComponent = ({action, buttonName}: CircleButtonProps) => {

  return (
    <button className={Style.boton} onClick={action}>{buttonName}</button>
  )
}

export default CircleButtonComponent
