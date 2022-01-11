const d = document,
    w = window;


export function smartVideo() {
    const $videos = d.querySelectorAll("video[data-smart-video]");

    //los entries son como los eventos que recibe el addEventListener
    const cb = (entries) =>{
        entries.forEach(entry => {
            if(entry.isIntersecting){
                //si el video es intersectado, dale play
                entry.target.play()
            }else {
                entry.target.pause()
            }

            //al cambiar pestañas se pausa el video
            w.addEventListener("visibilitychange", e => d.visibilityState === "visible" 
            ? entry.target.play()
            : entry.target.pause())
        })
    }
    const observer = new IntersectionObserver(cb, {threshold:0.5});

    //el observe() es para que funcione el observador
    $videos.forEach(el => observer.observe(el))
}