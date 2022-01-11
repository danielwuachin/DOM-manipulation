

/* debes enviar el id del div vacio para la hora
el id o class del boton iniciar
el id o class del boton para quitar */
/* RELOJ */
export const timeStart = (time, start, stop) => {
    const d = document,
        $start = d.getElementById(time);
    
    let clock
    d.addEventListener("click", e => {
        if(e.target.matches(start)){
            clock = setInterval(() => {
                let   hora = new Date().toLocaleTimeString();

                //en vez de insertText(), se usa este y se borra antes de la hora nueva
                $start.textContent = '';
                $start.textContent = hora;
            }, 1000);

            //asi se agrega el disabled a botones
            e.target.disabled = true
        }
        
        if(e.target.matches(stop)){
            clearInterval(clock)
            $start.textContent = '';
            d.querySelector(start).disabled = false
        }
    })
}



/* ALARMA */
/* debes enviar la ubicacion del sonido, el tag del boton play y el de stop */

export function alarm(sound, play, stop){
    let alarmTempo;
    const d = document,
        $alarm = d.createElement("audio");

    $alarm.src = sound;


    d.addEventListener("click", e =>{
        if(e.target.matches(play)){
            alarmTempo = setTimeout(() => {
                $alarm.play()
            }, 1000);
            e.target.disabled = true
        }

        if(e.target.matches(stop)){
            clearTimeout(alarmTempo);
            $alarm.pause()
            $alarm.currentTime = 0;
            d.querySelector(play).disabled = false;
        }
    })
}