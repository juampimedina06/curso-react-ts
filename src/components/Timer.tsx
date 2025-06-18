import {useEffect, useRef, useState } from "react"

type TimerArgs = {
    milisegundos: number;
    //segundos?: number;  No es obligatorio osea puede no definirse
}

const Timer = ( { milisegundos }: TimerArgs ) => {


    const [segundos, setSegundos] = useState(0);
    const ref = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        ref.current && clearInterval(ref.current)

        ref.current = setInterval(() => setSegundos(s => s + 1) , milisegundos);
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