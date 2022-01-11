const d = document,
    n = navigator;

export function getGeolocation(id) {
    const $id = d.getElementById(id),
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
        $id.innerHTML = `<p><mark>Error ${err.code}: ${err.message}</mark></p>`
        console.log(`<p><mark>Error ${err.code}: ${err.message}</mark></p>`);
    };
    n.geolocation.getCurrentPosition(success, error, options)
}