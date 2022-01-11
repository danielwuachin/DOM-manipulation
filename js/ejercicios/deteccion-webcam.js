const d = document,
    n = navigator;
/* 

*/
export function webcam(id){
    const $video = d.getElementById(id);
    
    //se hace una validacion de que el navegador acetpe eso
    if(n.mediaDevices.getUserMedia){
        //getUserMedia es una promesa
        n.mediaDevices.getUserMedia({video:true, audio:true})
        .then((stream) => {
            console.log(stream);
            //se pasa el src como objeto
            $video.srcObject = stream;
            //se usa el metodo play para que fluya el video
            $video.play()
        })
        .catch((err) => {
            $video.insertAdjacentHTML("beforebegin", `<p>Sucedio el siguiente error!: 
            <mark>${err}</mark></p>`);
            console.log(`Sucedio el siguiente error!: ${err}`);
        })
    }
}