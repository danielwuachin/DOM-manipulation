const d = document,
    w = window,
    n = navigator;

/* 
se usa el evento del window para que el metodo networkStatus se ejecute
al detectar que esta online o offline
y usando la propiedad del objeto navigator onLine, que devuleve true o false
se establece que es lo que mostrara en la pantalla, si hay o no conexion

*/
export default function networkStatus() {
    const isOnline = () => {
        const $div = d.createElement("div");
        if(n.onLine){
            $div.textContent = "Conexion reestablecida";
            $div.classList.add("online")
            $div.classList.remove("offline");
        }else {
            $div.textContent = "Conexion perdida!";
            $div.classList.add("offline")
            $div.classList.remove("online");
        }

        //para que se inserte al inicio del comienzo
        d.body.insertAdjacentElement("afterbegin", $div);

        //para que desaparezca el mensaje
        setTimeout(() => d.body.removeChild($div), 2000);
    }
    w.addEventListener("online", (e) => isOnline());
    w.addEventListener("offline", (e) => isOnline());
}