const d = document,
    w = window;

/*
al igual que el scrollspy, solo creas tu objeto IntersectionObserver
de callback le pasas lo que quieres que se ejecute al mostrarse X cosa
le pasas las opciones de vision que quieras

luego, usando data-attributes en lo que quieres modificar, lo guardas en variable
y a eso, le haces forEach y ejectuas tu objeto IO con el metodo observe()
y de parametro le pasas el elemento sacado del foreach
 */
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

    //el observe() es para que funcione le observador
    $videos.forEach(el => observer.observe(el))
}