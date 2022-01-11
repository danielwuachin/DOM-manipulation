const d = document;
/* 
necesita el selector del input y el selector de donde haras la busqueda

simplemeente el evento se activa al hacer click en el input
luego evalua si es la tecla escape
y despues a cada texto interno de cada selector, lo compara con el valor del
input y si este contiene algo de lo escrito, le añade o quita la clase filter
*/
export function searchFilters(input, selector) {
    d.addEventListener("keyup", e => {
        if(e.target.matches(input)){

            if(e.key ==="Escape") e.target.value = "";

            d.querySelectorAll(selector).forEach((el) => {
                el.textContent.toLowerCase().includes(e.target.value)
                    ? el.classList.remove('filter')
                    : el.classList.add('filter');
            })
        }
    })
}