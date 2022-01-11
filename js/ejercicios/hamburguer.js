export const hamburguer = (panel, panelBtn) => {
    const d = document ;
    
    d.addEventListener("click", e =>{ 
        if (e.target.matches('.'+panelBtn) ||e.target.matches('.'+panel+' a') || e.target.matches(`${panelBtn} *`)){
            d.querySelector('.'+panel).classList.toggle(`${panel}-active`);
            d.querySelector('.'+panelBtn).classList.toggle(`${panelBtn}-active`);
        }
    });
}


