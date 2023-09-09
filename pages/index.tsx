import React, { useEffect, useState } from "react"

import Style from "@/styles/Home.module.css"
import { log } from "console"
import CircleButtonComponent from "@/component/CircleButtonComponent"

const Home = () => {

  const [numero, setNumero] = useState(0)
  // positivo negativo neutro
  const [estadoEscala, setEstadoEscala] = useState("neutro")


  const incrementar = () => {
    setNumero(numero+1)
  }

  function decrementar() {
    setNumero(numero-1)
  }

  useEffect(() => {    

    const validarNumero = () => {
      console.log("llega aqui");
      
      if (numero > 0) {
        setEstadoEscala("positivo")
      } else if (numero < 0) {
        setEstadoEscala("negativo")
      } else {
        setEstadoEscala("neutro")
      }
    }

    validarNumero();


  },[numero])

  


  return (
    <div className={Style.main}>

      <div>
        <p>{estadoEscala}</p>
      </div>
      

      <div className={Style.botones}>
        <CircleButtonComponent buttonName="-" action={incrementar}/>
        <p>{numero}</p>
        <CircleButtonComponent buttonName="+" action={incrementar}/>
      </div>
    </div>
  )
}

export default Home;

