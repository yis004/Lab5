// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const jsConfetti = new JSConfetti()

  var horn=document.getElementById("horn-select");
  horn.addEventListener('change', (event) => {
    
    //Q1A1
    const img=document.getElementsByTagName("img");
    img[0].setAttribute("src","assets/images/"+event.target.value+".svg");
    //Q2A2
    const audioSet=document.getElementsByClassName("hidden");
    //alert(audioSet.length);
    audioSet[0].setAttribute("src","assets/audio/"+event.target.value+".mp3");
  });

  //Q2A1
  var img=document.getElementsByTagName("img");
  var slider=document.getElementById("volume");
  slider.addEventListener('change', (event) => {
    if (slider.value>=1 && slider.value<33){
      img[1].setAttribute("src","assets/icons/volume-level-1.svg");
    }else if (slider.value>=33 && slider.value<67){
      img[1].setAttribute("src","assets/icons/volume-level-2.svg");
    }else if (slider.value>=33 && slider.value<=100){
      img[1].setAttribute("src","assets/icons/volume-level-3.svg");
    }else if (slider.value==0){
      img[1].setAttribute("src","assets/icons/volume-level-0.svg");
    }
  })
  

  //Q3A1
  var buttonPlay=document.getElementsByTagName("button");
  
  buttonPlay[0].addEventListener('click', (event) => {
    const audioSet=document.getElementsByClassName("hidden");
    audioSet[0].volume = slider.value/1000;                                        // Change audio volume based on your setting
    audioSet[0].play();
    
    if (audioSet[0].getAttribute("src")=="assets/audio/party-horn.mp3"){
      
      jsConfetti.addConfetti()
    }
    
    
  })
  
  
  


  
}