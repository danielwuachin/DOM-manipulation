const d = document,
    ua = navigator.userAgent;

export function userDeviceInfo(id) {
    const $id = d.getElementById(id),
        isMobile = {
            android: () => ua.match(/android/i),
            ios: () => ua.match(/iphone|ipad|ipod/i),
            windows: () => ua.match(/windows phone/i),
            any: function (){
                return this.android() || this.ios() || this.windows();
            },
        },
        isDesktop = {
            linux: () => ua.match(/linuc/i),
            mac: () => ua.match(/mac os/i),
            windows: () => ua.match(/windows nt/i),
            any: function () {
                return this.linux() || this.mac() || this.windows()
            },
        },

        isBrowser = {
            chrome: () => ua.match(/chrome/i),
            safari: () => ua.match (/safari/i),
            firefox: () => ua.match(/firefox/i),
            opera: () => ua.match(/opera|opera mini/i),
            ie: () => ua.match(/msie|iemobile/i),
            edge:() => ua.match(/edg/i),
            any: function () {
                return (
                    this.ie() ||
                    this.edge() ||
                    this.safari() ||
                    this.chrome() ||
                    this.firefox() ||
                    this.opera() ||
                    this.ie() 
                );
            }
        };


    /* en este caso,hacemos una lista para reflejar resultados */

    $id.innerHTML =`
    <ul>
        <li>User agent: <b>${ua}</b></li>
        <li>Plataforma: <b>${
            isMobile.any() ? isMobile.any() : isDesktop.any()}
            </b></li>
        <li>Navegador: <b>${isBrowser.any()}</b></li>
    </ul>
    `;


    /* contnido exclusivo */
    if(isBrowser.chrome()){
        $id.innerHTML += `
            <p><mark>contenido que se ve solo en navegador Chrome</mark></p>
        `;
    }
    if(isDesktop.windows()){
        $id.innerHTML += `
            <p><mark>contenido que se ve solo en sistemas operativos Windows</mark></p>
        `;
    }


    /* hacer redirecciones dependiendo de X factor */
    if(isMobile.android()){
        window.location.href = 'http://127.0.0.1:5500/introduccion.html'
    }

}