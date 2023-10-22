var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || window.webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

let recognition = new SpeechRecognition();
recognition.continuous = true;
recognition.lang = 'en-US';
recognition.interimResults = true;
recognition.maxAlternatives = 1;

recognition.onresult = (event) => {
    const speech = event.results[0][0].transcript;
    console.log(speech);
}

recognition.onspeechend = function() {
    console.log("this was said:" + recognition.results);
  }
  
recognition.onerror = function(event) {
    diagnostic.textContent = 'Error occurred in recognition: ' + event.error;
  }

  
// document.body.onclick = () => {
//     recognition.start();
//     // console.log(window.document.body);
//     console.log("speech recognition started");
//   }

startBtn.onclick = () => {
  recognition.start();
  // const speech = event.results[0][0].transcript;
  document.getElementById("recordedText").innerHTML = "your speech is being recorded";
  console.log("speech recognition has started");
}

recognition.addEventListener("result", (event) => {
  const resultsToBePrinted = event.results[0][0].transcript;
  diagnostic.textContent = `Results received: ${resultsToBePrinted}.`;
  document.getElementById("recordedText").innerHTML = resultsToBePrinted;
  // bg.style.backgroundColor = resultsToBePrinted;
});


endBtn.onclick = () => {
    recognition.abort();
    console.log("Speech recognition aborted.");
  };