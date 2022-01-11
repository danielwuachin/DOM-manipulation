const d = document;

/* 
1 - se resta el tiempo dado del actual en milisegundos

2 - se sacan los dias totales de esos milisegundos con conversion unidades

3 - el residuo del calculo total de dias (con factor de dias), se divide entre el factor de conversion a horas

4 - al residuo de los dias entre factor de horas, se divide entre factor de minutos

5 - al residuo de los dias entre factor de minutos, se vide con conversion a segundos

ejemplo, para los minutos, sacas el residuo en milisegundos de la resta de fechas
ENTRE el factor de conversion a horas, si la division da 12,5 pos el residio sera
0.5 horas expresadas en milisegundos, y eso lo pasas a minutos con el factor
de conversion y listo
solo trabajas con los decimales, si son 123421,23 horas, pues calculas cuanto
es 0,23 horas en minutos con conversion, y listo!!!


*/


/* necesitas el id donde mostrar el contdown
la fecha del evento
y el mensaje final */
export function countdown (id, limitDate, finalMessage) {
    const $countdown = d.querySelector(id),
        countdownDate = new Date(limitDate).getTime();
        

    let countdownTempo = setInterval(() => {
        let now = new Date().getTime(),

        // paso 1
            limitTime = countdownDate - now,
            //paso 2
            days = Math.floor(limitTime / (1000 * 60 * 60 * 24)),

            //paso 3
            hours = ("0" + Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2),

            //paso 4
            minutes = ("0" + Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60))).slice(-2),

            //paso 5
            seconds = ("0" + Math.floor((limitTime % (1000 * 60)) / (1000))).slice(-2);

        $countdown.textContent = `faltan: ${days} dias ${hours} horas ${minutes} minutes ${seconds} segundos`

        if(limitTime <= 0){
            clearInterval(countdownTempo);

            //agregamos mensaje final
            $countdown.textContent = finalMessage;
        }
    }, 1000);

}