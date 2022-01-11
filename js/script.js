import {hamburguer} from './ejercicios/hamburguer.js';
import { alarm, timeStart } from './ejercicios/clock.js';
import { moveBall, shorcuts } from './ejercicios/shorcuts.js';
import { countdown } from './ejercicios/countdown.js';
import { foward } from './ejercicios/foward.js';
import { theme } from './ejercicios/dark-light.js';
import { responsiveMedia } from './ejercicios/responsible.js';
import { responsiveTester } from './ejercicios/newWindow.js';
import { userDeviceInfo } from './ejercicios/user-agent.js';
import  networkStatus  from './ejercicios/detectar-conexion.js';
import { webcam } from './ejercicios/deteccion-webcam.js';
import { getGeolocation } from './ejercicios/geolocalizacion.js';
import { searchFilters } from './ejercicios/filtro-busqueda.js';
import { draw } from './ejercicios/sorteo.js';
import { slider } from './ejercicios/slider.js';
import { scrollSpy } from './ejercicios/scroll-spy.js';
import { smartVideo } from './ejercicios/video-inteligente.js';
import { contactFormValidations } from './ejercicios/form-validation.js';
import { speechReader } from './ejercicios/narrador.js';



const d = document;


/* menu de hamburguesa */
d.addEventListener("DOMContentLoaded", e=> {
    hamburguer('panel', 'hamburguer')
})




/* reloj y alarma digital */
d.addEventListener("DOMContentLoaded", e=> {
    timeStart('time', '.timeStart','.timeStop');
    alarm('./assets/alarma.mp3', '#alarmStart','#alarmtStop');
})



/* shorcuts 
 mover la bola */
d.addEventListener("keydown", (e) => {
    moveBall(e, '#ball','#stage');
})



/*  cuenta regresiva */
d.addEventListener("DOMContentLoaded", e=> {
    countdown('#countdown', "2022-10-06", "Ha")
})



/* boton de volver a inicio */
foward('.up')



/* boton de tema dark/light */
theme('.theme', 'dark-body')


/* responsible responsive design tip */
d.addEventListener("DOMContentLoaded", e=> {
    responsiveMedia('youtube',
    "(min-width: 720px)",
    `<a href="https://www.youtube.com/watch?v=Xd9eB--HVKg&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA" target="_blank" rel="noopener">ver video</a>
    `, 
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/Xd9eB--HVKg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
})



d.addEventListener('DOMContentLoaded', e => {
    responsiveTester("responsive-tester")
})



/* user agent */
d.addEventListener('DOMContentLoaded', e => {
    userDeviceInfo('user')
})



/* network status - only appears when have no connection to internet*/
networkStatus();



/* detectar webcam */
webcam('webcam')


/* geolocation */
d.addEventListener('DOMContentLoaded', e => {
    getGeolocation('geolocation')
})



/* search filters */
d.addEventListener('DOMContentLoaded', e => {
    searchFilters('.card-filter', '.card')
})



/* sorteo */
d.addEventListener('DOMContentLoaded', e => {
    draw("#winner-btn", '.player');
})



/* slider - carrusel */
d.addEventListener('DOMContentLoaded', e => {
    slider();
})



/* scrollSpy */
d.addEventListener('DOMContentLoaded', e => {
    scrollSpy();
})



/* smart video */
d.addEventListener('DOMContentLoaded', e => {
    smartVideo()
})



/* form validation */
d.addEventListener('DOMContentLoaded', e => {
    contactFormValidations()
})



/* speech reader
recuerda que estas funciones no van dentro del conten lodader debido a que ya tienne dentro el DOM content loader
*/
speechReader();
