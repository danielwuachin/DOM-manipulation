const d = document,
    n = navigator;
/* 
te conectas a traves de internet o del gps
solo le padas el id de donde quieres anexar la ubicadcion

tambien hay un metodo que creo que se llama watchPosition el cual
es para compartir la ubicacion en tiempo real mientras te mueves
*/
export function getGeolocation(id) {
    const $id = d.getElementById(id),
    //parametros para la geolocalizacion
        options = {
            enableHighAccuracy:true,
            timeout: 50000,
            //esto es para que no guarde nada en cache
            maximunAge: 0
        };

    const success = position => {
        const coords = position.coords;
        console.log(position);

        $id.innerHTML = `
        <p>Tu posicion actual es:</p>
        <ul>
            <li>Latitud: ${coords.latitude}</li>
            <li>Longitud: ${coords.longitude}</li>
            <li>Precision: ${coords.accuracy}</li>
        </ul>
        <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},15z" rel="noopener" target="_blank">Ver ubacion en Maps</a>
        `
    }

    const error = err => {
        //esto devuelve un objeto, aqui especificamos el error
        $id.innerHTML = `<p><mark>Error ${err.code}: ${err.message}</mark></p>`
        console.log(`<p><mark>Error ${err.code}: ${err.message}</mark></p>`);
    };
    n.geolocation.getCurrentPosition(success, error, options)
}