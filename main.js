var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || window.webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

let recognition = new SpeechRecognition();
recognition.continuous = true;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

recognition.onresult = (event) => {
    const speach = event.results[0][0].transcript;
    console.log(speach);
}


recognition.onspeechend = function() {
    console.log(recognition.results);
  }
  
recognition.onerror = function(event) {
    diagnostic.textContent = 'Error occurred in recognition: ' + event.error;
  }

document.body.onclick = () => {
    recognition.start();
    console.log(window.document.body);
    console.log("speech recognition started");
  }


endBtn.onclick = () => {
    recognition.abort();
    console.log("Speech recognition aborted.");
  };