/*Javascript code for TextToAudio function*/
function TextToAudio() {
    let msg = document.getElementById("text-to-speech").value;
    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
    speech.text = msg;
    speech.volume = 7;
    speech.rate = 1;
    speech.pitch = 7;
    window.speechSynthesis.speak(speech);
    }