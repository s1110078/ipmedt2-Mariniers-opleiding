//slideshow werking
const arrowRight = document.getElementById('js--6weken--arrowRight');
const arrowLeft = document.getElementById('js--6weken--arrowLeft');
const backgroundImg = document.getElementById('js--6weken--img');
const nummer = document.getElementById('js--6weken--nummer');
const textOverlay = document.getElementById('js--6weken--overlay');
let teller = 0;
let slideShowText = ["Een marinier moet altijd een goed uitzicht hebben op het veld.",
                     "Ook moet een marinier altijd paraat staan om actie te ondernemen.",
                     "Teamwork in deze loopgraven is van groot belang.",
                     "Een slapende marinier is dus geen optie op het veld!"];

localStorage.setItem('test7', false);

arrowLeft.onclick = () => {
  laatAfbeeldingZien("left");
}

arrowRight.onclick = () => {
  laatAfbeeldingZien("right");
}

function laatAfbeeldingZien(s){
  if (s == "left" && teller > 0)
    if (teller > 3)
      teller -= 2;
    else
      teller--;

  if (s == "right" && teller < 3)
    if (teller < 0)
      teller += 2;
    else
      teller++;

  for (let i=1;i<5;i++)
      backgroundImg.classList.remove('zesWeken'+i);
  backgroundImg.classList.add('zesWeken'+(teller+1));
  textOverlay.innerHTML = slideShowText[teller];
  nummer.innerHTML = (teller+1)+"/4";
  if (teller == 3)
    localStorage.setItem('test7', true);
}
