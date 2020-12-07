window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();
recognition.lang = 'en-US';

microphone.addEventListener('click', function (event) {
    recognition.start();
});

recognition.addEventListener('result', function (event) {
    input.value = Array.from(event.results)
        .map(function (result) {
            return result[0];
        })
        .map(function (value) {
            return value.transcript;
        });
    getWeatherByUserData();
});