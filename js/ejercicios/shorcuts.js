const d = document;
let x = 0,
    y = 0;


export function shorcuts (e) {
    if (e.key === 'ArrowUp'){
        alert('lanzaste una alerta con el teclado');
    }
    if (e.key === 'c' && e.altKey === true){
        confirm('lanzaste un confirm con el teclado');
    }
    if (e.key === 'p' && e.altKey === true){
        prompt('lanzaste un prompt con el teclado');
    }
}


export function moveBall(e, ball, stage) {
    const $ball = d.querySelector(ball),
        $stage = d.querySelector(stage),

        limitbBall = $ball.getBoundingClientRect(),
        limitStage = $stage.getBoundingClientRect();

    switch (e.keyCode){
        case 37:
            if(limitbBall.left > (limitStage.left + 2)) {
                e.preventDefault()
                x--
            }
            break;
            
        case 38:
                if(limitbBall.top > (limitStage.top + 2)) {
                    //asi prevenimos el default de esta flecha
                    e.preventDefault()
                    y--;
                }
            break;
        
        case 39:
            if(limitbBall.right < (limitStage.right - 2)) {
                //asi prevenimos el default de esta flecha
                e.preventDefault()
                x++;
            }
            break;
        
        case 40:
            if(limitbBall.bottom < (limitStage.bottom - 2)) {
                //asi prevenimos el default de esta flecha
                e.preventDefault()
                y++;
            }
            break;
        }
    $ball.style.transform = `translate(${x * 8}%, ${y * 8}%)`
}