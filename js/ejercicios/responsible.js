const d = document,
    w = window;
/* 
para que funcione, le envias el id sin #, la media query o width que quieres para
el cambio, y el contenido mobile y desktop


se pueden añadir listener normlaes sin ser eventos
los addListener NO se ejecutan a la carga del documento, solo cuando se cumpla
su condicion

se podia hacer usando el window.resize, por ejemplo
pero lo ideal de este tipo es usando un listener de un metodo matchMedia() aunqeu
este deprecado
*/
export function responsiveMedia(id, mq, mobileContent, desktopContent){
    let breakpoint = w.matchMedia(mq);
console.log(breakpoint)
    const responsive = (e) =>{
        //e.matches devuelve true o false para el listener
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

    /* por lo de arriba, se ejecuta directamente el responsive para que a penas
    cargue la pagina, ya tenga el contenido para mostrar */
    responsive(breakpoint);
}