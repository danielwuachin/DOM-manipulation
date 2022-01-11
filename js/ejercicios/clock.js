export const timeStart = (time, start, stop) => {
    const d = document,
        $start = d.getElementById(time);
    
    let clock
    d.addEventListener("click", e => {
        if(e.target.matches(start)){
            clock = setInterval(() => {
                let   hora = new Date().toLocaleTimeString();

                $start.textContent = '';
                $start.textContent = hora;
            }, 1000);

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