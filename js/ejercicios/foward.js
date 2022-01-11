const d = document;

export function foward(id){
    let $up = d.querySelector(id);
    
    d.addEventListener('scroll', e=> {
        if(window.scrollY < 574){
            $up.classList.add('hidden-btn')
        }else {
            $up.classList.remove('hidden-btn')
        }
    })

    d.addEventListener('click', e =>{
        if(e.target.matches(id) || e.target.matches(id+' *')){
            window.scrollTo({
                behavior: "smooth",
                top: 0,
                left: 0
            })
        }
    })

}