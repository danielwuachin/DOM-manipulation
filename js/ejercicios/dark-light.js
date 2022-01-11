const d = document,
    ls = localStorage;

/* 
debes enviarle la clase de tu boton y el nombre del tema dark

tambien puedes crear un data-attribute a lo que quieres agregar el dark
y haces un foreach() para agregarselo a todos esos elementos
puedes ver el codigo del profesor ya que esta ehcho asi

podrias pasarle como paraemtros lo que tendra dentro el boton

lo ideal es hacer lo de los data-attributes para no andar escribiendo mucho codigo
cambiando el css de cada elemento
*/



/* funcion sark-light con localStorage */

export function theme(id, dark){
    let $span = d.querySelector(id+'-span');

    const lightMode = () => {
        document.body.classList.remove(dark);
        $span.textContent = 'D';

        //almacenar ultimo cambio en local storage
        ls.setItem('theme','light')
    }

    const darkMode = () => {
        document.body.classList.add(dark);
        $span.textContent = 'L';
        ls.setItem('theme','dark')
    }




    d.addEventListener('click', e =>{
        
        if(e.target.matches(id) || e.target.matches(id+' *')){
            if(document.body.classList.contains(dark)){
                lightMode()
            }else{
                darkMode()
            }
        }
        
    });


    /*  eso es para que a la hora que cargue, vea cual tema aplicar
    estos son metodos del API localStorage del window */
    d.addEventListener('DOMContentLoaded', e => {
        if(ls.getItem('theme') === null) ls.setItem('theme', 'light');
        if(ls.getItem('theme') === 'light') lightMode();
        if(ls.getItem('theme') === 'dark') darkMode();
    })
}




/* este FUNCIONAA, pero es sin localstorage

export function theme(id, dark){
    d.addEventListener('click', e =>{
        let $btn = d.querySelector(id),
            $span = d.querySelector(id+'-span');
        
        if(e.target.matches(id) || e.target.matches(id+' *')){
            document.body.classList.toggle(dark);
            if(document.body.classList.contains(dark)){
                $span.textContent = 'L'
            }else{
                $span.textContent = 'D'
            }
        }
        
    })
} */