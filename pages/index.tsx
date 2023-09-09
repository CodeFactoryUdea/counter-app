import React, { useEffect, useState } from "react"
import Style from "@/styles/Home.module.css"
import CircleButtonComponent from "@/component/CircleButtonComponent"

const Home = () => {

  /*
  recuerde que se usa useState en este caso para poder hacer el binding nuestra variable
  numero y la interfaz de usuario, de está manera tendremos las actualizaciones en la UI.
  */
  const [numero, setNumero] = useState(0)
  // par - impar (RETO: poner dos escalas si es par o impar y si además es primo)
  const [estadoEscala, setEstadoEscala] = useState("par")


  const incrementar = () => {
    setNumero(numero+1)
  }

  function decrementar() {
    setNumero(numero-1)
  }

  useEffect(() => {

    const validarNumero = () => {
      if (numero % 2 == 0) {
        setEstadoEscala("par")
      } else {
        setEstadoEscala("impar")
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
        <CircleButtonComponent buttonName="-" action={decrementar}/>
        <p>{numero}</p>
        <CircleButtonComponent buttonName="+" action={incrementar}/>
      </div>
    </div>
  )
}

export default Home;

