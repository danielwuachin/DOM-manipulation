const d = document,
    w = window;

export function responsiveMedia(id, mq, mobileContent, desktopContent){
    let breakpoint = w.matchMedia(mq);
console.log(breakpoint)
    const responsive = (e) =>{
        if (e.matches){
            d.getElementById(id).innerHTML = desktopContent;
        }else {
            d.getElementById(id).innerHTML = mobileContent;
        }
        console.log(breakpoint)
    };
    /* los addListener NO se ejecutan a la carga del documento, solo cuando se cumpla
    su condicion, por ende se ejecuta responsive solo a los + o - 720px */
    breakpoint.addListener(responsive);
    responsive(breakpoint);
}