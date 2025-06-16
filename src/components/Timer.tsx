import {useEffect, useRef, useState } from "react"

type TimeArgs = {
    milisegundos: number;
    //segundos?: number;  No es obligatorio osea puede no definirse
}

const Timer = ( { milisegundos }: TimeArgs ) => {

    const [segundos, setSegundos] = useState(0)
    const ref = useRef<NodeJS.Timeout>();

    useEffect(() => {
        clearInterval(ref.current)

        ref.current = setInterval(() => setSegundos(s => s + 1) , 1000);
    },[milisegundos])

  return (
    <>
    <h4>
        Timer: <small>{segundos}</small>
    </h4>
    </>
  )
}

export default Timer