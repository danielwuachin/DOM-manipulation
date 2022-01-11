const d = document,
    ls = localStorage;

/* funcion dark-light con localStorage */

export function theme(id, dark){
    let $span = d.querySelector(id+'-span');

    const lightMode = () => {
        document.body.classList.remove(dark);
        $span.textContent = '🌙';

        //almacenar ultimo cambio en local storage
        ls.setItem('theme','light')
    }

    const darkMode = () => {
        document.body.classList.add(dark);
        $span.textContent = '☀️';
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