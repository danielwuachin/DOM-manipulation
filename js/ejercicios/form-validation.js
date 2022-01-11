const d = document;
/* 
no se pasa el nombre del selector como parametro ya que en general, solo tendras un 
contact-form, y asi tambien se llaman esos formularios en bootstrapt o founfation,
asi que esta funcion servira hasta usando esos frameworks

agregas el span que quieres agregar con sis clases 

para las validaciones, podrias hacerlas en el evento submit, tambien
es valido

para hacerlo mas dinamico, se hara con el evento keyup
*/
export function contactFormValidations() {
    const $form = d.querySelector('.contact-form'),
        $inputs = d.querySelectorAll('.contact-form [required]');

    $inputs.forEach(input => {
        const $span = d.createElement("span");
        $span.id = input.name;
        $span.textContent = input.title;
        $span.classList.add('contact-form-error','none');
        input.insertAdjacentElement('afterend', $span);
    });

    d.addEventListener('keyup', (e)=> {
        if(e.target.matches('.contact-form [required]')){
            let $input = e.target,
                pattern = $input.pattern || $input.dataset.pattern;

            
            if(pattern && $input.value !=="") {
                let regex = new RegExp(pattern);
                /* si no valida el valor, se le agrega la clase */
                return !regex.exec($input.value) 
                    ? d.getElementById($input.name).classList.add('is-active')
                    : d.getElementById($input.name).classList.remove('is-active');
            }

            if(!pattern) {
                return $input.value === "" 
                ? d.getElementById($input.name).classList.add('is-active')
                : d.getElementById($input.name).classList.remove('is-active'); 
            }
        }
    });


    /* ultimo video de formularios */

    d.addEventListener('submit', (e) => {
        //e.preventDefault()
        alert('hola')

        const $loader= d.querySelector('.contact-form-loader'),
            $response = d.querySelector('.contact-form-response');
            
        $loader.classList.remove('none');
        setTimeout(() => {
            $loader.classList.add('none');
            $response.classList.remove('none');
            $form.reset();
            setTimeout(() => $response.classList.add('none'), 3000);
            
        }, 3000);
        
    })
}