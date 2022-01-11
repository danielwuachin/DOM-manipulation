const d = document;

/* 
asi como puedes acceder a algo con la notacion del punto, tambien lo puedes hacer
con los formularios, accediendo a los nodos internos de dicho formulario

*/

export function responsiveTester(form){
    const $form = d.getElementById(form);

    let tester;

    //se usa el evento submit, para usar ese boton
    d.addEventListener("submit", (e) => {
        //igual que el target.matches('algo') pero usando variables
        if(e.target === $form){
            e.preventDefault();
            //accedemos al input donde se coloca la url con su name.value
            tester = window.open($form.direction.value, "tester", `innerWidth=${$form.width.value}, innerHeight=${$form.height.value}`)
            console.log(tester)
        }
    })

    d.addEventListener('click', e => {
        if(e.target === $form.cerrar) tester.close();
    })
}