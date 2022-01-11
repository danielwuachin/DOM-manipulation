const d = document;

/*

seleccionamos cada seccion usando un data-attribute

creamos callback de algo llamado  entries, que son objetos intersection
estos, tienen guardado los atributos como el id
te fumas una, y cuando el intersecting sea true, agregas clase active a sections

a tu intersectionObserver, como parametros opcionales, le pasas
un margen para que no seleccione de a dos los elementos en el menu

cuando ejecutes la constante observer, le ejevutas el metodo observe()
y de parametro le pasas los elementos de tu foreach




//si no se especifica, el root es el documento en si
        //root:
        
        //este es para dar margenes al instersected y evitar seleccionar dos
        acepta solo pixeles asi en comillas
        //rootMargin: "-250px"

        este es del 0 al 1, indicando que porcentaje del elemento debe
        estar visible para que se active 
        si lo pones asi en corchetes, es un ragno entre uno y el otro
        threshold: [0.5 0.75],
*/

export function scrollSpy() {
    const $sections = d.querySelectorAll('section[data-scroll-spy]');

    const cb = (entries) => {
        entries.forEach((entry) => {
            const id = entry.target.getAttribute("id") 
            console.log(id)
            if(entry.isIntersecting){
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("active")
            }else{
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("active")
            }
        })
    }


    const observer = new IntersectionObserver(cb, {
        //si no se especifica, el root es el documento en si
        //root:
        
        //este es para dar margenes al instersected y evitar seleccionar dos
        //rootMargin: "-250px"

        /* este es del 0 al 1, indicando que porcentaje del elemento debe
        estar visible para que se active */
        threshold: 0.5,
    });

    $sections.forEach(el => observer.observe(el));

}