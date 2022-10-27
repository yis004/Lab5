// explore.js

window.addEventListener('DOMContentLoaded', init);
let voices = [];
function init() {
  var select=document.getElementById("voice-select");
  const synth = window.speechSynthesis;
  function populateVoiceList() {
    
    setTimeout(() => {
      
      voices = window.speechSynthesis.getVoices();
      for (let i = 0; i < voices.length ; i++) {
        const option = document.createElement('option');
        option.textContent = `${voices[i].name} (${voices[i].lang})`;

        if (voices[i].default) {
          option.textContent += ' — DEFAULT';
        }
        option.setAttribute('data-lang', voices[i].lang);
        option.setAttribute('data-name', voices[i].name);
        select.appendChild(option);
      }
    }, 1000);
  }
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }
  var buttonPlay=document.getElementsByTagName("button");
  var input=document.getElementById("text-to-speak");
  var selection=document.getElementById("voice-select");
  var img=document.getElementsByTagName("img");
  buttonPlay[0].addEventListener('click', (event) => {
    //img[0].setAttribute("src","assets/images/smiling-open.png")
    event.preventDefault();
    const utterThis = new SpeechSynthesisUtterance(input.value);
    const selectedOption = selection.selectedOptions[0].getAttribute('data-name');
    
    for (let i = 0; i < voices.length ; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    synth.speak(utterThis)
    utterThis.onstart = function (event) {
      img[0].setAttribute("src","assets/images/smiling-open.png")
    }   
    utterThis.onend = function (event) {
      img[0].setAttribute("src","assets/images/smiling.png")
    }   
    
  })
  
}
