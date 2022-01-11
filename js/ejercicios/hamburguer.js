/* debes enviar el nombre de las clases del panel y del boton
las clases en modo visivle, deben tener el mismo nombre mas -active
 */

export const hamburguer = (panel, panelBtn) => {
    const d = document ;
    
    d.addEventListener("click", e =>{ 
        /* con el * en CSS indica todo lo que este dentro de el */
        if (e.target.matches('.'+panelBtn) ||e.target.matches('.'+panel+' a') || e.target.matches(`${panelBtn} *`)){
            d.querySelector('.'+panel).classList.toggle(`${panel}-active`);
            d.querySelector('.'+panelBtn).classList.toggle(`${panelBtn}-active`);
        }
        
        /* if (e.target.matches('.panel') || e.target.matches('.menu-btn') ){
            console.log('yes')
            $menu.classList.toggle('panel-active')
            $ham.classList.toggle('hamburguer-click');
        } */
    });
}


