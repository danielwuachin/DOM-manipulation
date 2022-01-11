const d = document, 
    w = window;

export function speechReader() {
    const $speechSelect = d.getElementById('speech-select'),
        $speechTextarea = d.getElementById('speech-text'),
        $speechBtn = d.getElementById('speech-btn'),
        speechMessage = new SpeechSynthesisUtterance();

    let voices = [];

    /* para obtener las voces, debes ejecutar un evento llamado voieschanged
    y dentro de el, ejecutar el getVoices() para obtener las voces */
    d.addEventListener('DOMContentLoaded', e => {
        w.speechSynthesis.addEventListener('voiceschanged', (e) =>{
            voices = w.speechSynthesis.getVoices();

            /* agregamos un option por cada voz encontrada */
            voices.forEach((voice) => {
                const $option = d.createElement('option');
                $option.value = voice.name;
                $option.textContent = `${voice.name} *** ${voice.lang}`;

                $speechSelect.appendChild($option)
            })
        })
    });
    
    d.addEventListener('change', e => {
        if(e.target === $speechSelect){
            /* le asignas la voz seleccionada al API para que hable como esa */
            speechMessage.voice = voices.find((voice) => voice.name === e.target.value);
        }
        console.log(speechMessage)
    });

    d.addEventListener('click', e => {
        if(e.target === $speechBtn){
            speechMessage.text = $speechTextarea.value;
            w.speechSynthesis.speak(speechMessage);
        }
    });
    
}