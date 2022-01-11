const d = document,
    w = window;

export function responsiveMedia(id, mq, mobileContent, desktopContent){
    let breakpoint = w.matchMedia(mq);

    const responsive = (e) =>{
        if (e.matches){
            d.getElementById(id).innerHTML = desktopContent;
        }else {
            d.getElementById(id).innerHTML = mobileContent;
        }

    };
    /* los addListener NO se ejecutan a la carga del documento, solo cuando se cumpla
    su condicion, por ende se ejecuta responsive solo a los + o - 720px */
    breakpoint.addListener(responsive);
    responsive(breakpoint);
}