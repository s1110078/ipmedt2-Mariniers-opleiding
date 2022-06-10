window.onload = () => {
	let balkPressed = false;
	const arrow = document.getElementById('js--arrow');
	const tijdlijn = document.getElementById('js--tijdlijn');
	const header = document.getElementById('js--header');
	const progressiebar = document.getElementById('js--progressiebar');
	const progressiebarVulling = document.getElementById('js--progressiebarVulling');
	const background = document.getElementById('js--background');
	const background2 = document.getElementById('js--background2');
	const modal = document.getElementById('js--modal');
	const modal2 = document.getElementById('js--modal2');
	const arrowModal = document.getElementById('js--arrow--modal');
	const arrowModal2 = document.getElementById('js--arrow--modal2');
	const startMaandBtn = document.getElementById('js--4maandenbtn');
	const volgendeMaandBtn = document.getElementById('js--4maandenbtn2');
	// naam weergeven in modal met localStorage
	let ingevoerdenaam = localStorage.getItem('naam');
	let naamgebruiker = document.getElementById('js--ingevoerdenaam');
	//navigatieknoppen
	const startKnop = document.getElementById('js--navStart');
	const negenMaandenKnop = document.getElementById('js--nav9maanden');
	const achtMaandenKnop = document.getElementById('js--nav8maanden');
	const zesMaandenKnop = document.getElementById('js--nav6maanden');
	const vijfMaandenKnop = document.getElementById('js--nav5maanden');
	const vierMaandenKnop = document.getElementById('js--nav4maanden');
	const drieMaandenKnop = document.getElementById('js--nav3maanden');
	const zesWekenKnop = document.getElementById('js--nav6weken');
	const negenUurKnop = document.getElementById('js--nav9uur');
	const eindceremonieKnop = document.getElementById('js--naveindceremonie');
	const scoreKnop = document.getElementById('js--navscore');
	const infoKnop = document.getElementById('js--navinfo');
	// Waterkoker gedeelte
	const actionButton = document.getElementById('js--waterkoker__action__button');
	const volgendeButton = document.getElementById('js--waterkoker__volgende__button');
	const uitlegScherm = document.getElementById('js--waterkoker--uitleg');
	const vullenScherm = document.getElementById('js--waterkoker--vullen');
	const kokenScherm = document.getElementById('js--waterkoker--koken');
	const inschenkenScherm = document.getElementById('js--waterkoker--inschenken');
	const eindScherm = document.getElementById('js--waterkoker--eind');
	const bolletje = document.getElementById('js--waterkoker--vullen--meter--bolletje');
	const timerElement = document.getElementById('js--waterkoker--timer');
	const temperatuur = document.getElementById('js--waterkoker--koken--meter--temperatuur');
	const timerKokerElement = document.getElementById('js--waterkoker--koken--timer');
	const vuurElementUit = document.getElementById('js--waterkoker--koken--waterkoker');
	const vuurElementAan = document.getElementById('js--waterkoker--koken--vuur--aan');
	const thermoskan = document.getElementById('js--waterkoker--inschenken--meter--water');
	const timerInschenkenElement = document.getElementById('js--waterkoker--inschenken--timer');
	const eindText = document.getElementById('js--eindText');
	/* Schermen */
  let huidigeScherm = 1;
  let buttonScherm = 1;
  let schermen = [uitlegScherm, vullenScherm, kokenScherm, inschenkenScherm, eindScherm];
  /* Globale waardes van de meters */
  let globaleSnelheid = 2; //Snelheid waarmee het bolletje/water omhoog gaat in %
  /* Timer */
  let min = 2; //Start minuten
  let sec = 30; //Start seconden
  let diff = 1; //Stappen van de timer
  let interval = 100; //Snelheid van de timer
  let tijdOver = false;
  /* Waterkoker meter */
  let waterPos = 5; //Start positie van bolletje in %
  let waterkokerTimer;
  let waterMeterTimer;
  /* Temperatuur meter */
  let kookPos = 1; //Start positie van lijn in %
  let lijnLengte = 1; //Lengte van lijn in %
  let temperatuurMeterTimer;
  /* Thermoskan meter */
  let thermosPos = 1; //Start positie van lijn in %
  let thermosLijnLengte = 1; //Lengte van lijn in %
  let limitMeters = 95; //De limit hoe hoog de values in de meters gaan
  let thermoskanMeterTimer;
  laatSchermZien(huidigeScherm);
  let resultaatText = "";

	startKnop.onclick = () => {
		if (startKnop.className.split(' ')[2] === 'tijdlijn--done') {
			window.location.href = 'index.html';
		}
	};

	negenMaandenKnop.onclick = () => {
		if (negenMaandenKnop.className.split(' ')[2] === 'tijdlijn--done') {
			window.location.href = '9maanden.html';
		}
	};

	achtMaandenKnop.onclick = () => {
		if (achtMaandenKnop.className.split(' ')[2] === 'tijdlijn--done') {
			window.location.href = '8maanden.html';
		}
	};
	zesMaandenKnop.onclick = () => {
		if (zesMaandenKnop.className.split(' ')[2] === 'tijdlijn--done') {
			window.location.href = '6maanden.html';
		}
	};

	vijfMaandenKnop.onclick = () => {
		if (vijfMaandenKnop.className.split(' ')[2] === 'tijdlijn--done') {
			window.location.href = '5maanden.html';
		}
	};

	vierMaandenKnop.onclick = () => {
		if (vierMaandenKnop.className.split(' ')[2] === 'tijdlijn--done') {
			window.location.href = '4maanden.html';
		}
	};

	drieMaandenKnop.onclick = () => {
		if (drieMaandenKnop.className.split(' ')[2] === 'tijdlijn--done') {
			window.location.href = '3maanden.html';
		}
	};

	zesWekenKnop.onclick = () => {
		if (zesWekenKnop.className.split(' ')[2] === 'tijdlijn--done') {
			window.location.href = '6weken.html';
		}
	};

	negenUurKnop.onclick = () => {
		if (negenUurKnop.className.split(' ')[2] === 'tijdlijn--done') {
			window.location.href = '9uur.html';
		}
	};

	eindceremonieKnop.onclick = () => {
		if (eindceremonieKnop.className.split(' ')[2] === 'tijdlijn--done') {
			window.location.href = 'eindceremonie.html';
		}
	};

	scoreKnop.onclick = () => {
		if (scoreKnop.className.split(' ')[2] === 'tijdlijn--done') {
			window.location.href = 'score.html';
		}
	};

	infoKnop.onclick = () => {
		if (infoKnop.className.split(' ')[2] === 'tijdlijn--done') {
			window.location.href = 'informatiepagina.html';
		}
	};

	naamgebruiker.innerHTML = ingevoerdenaam;
	//naamRekruut.innerHTML = ingevoerdenaam;

	//wanneer er op de tijdlijn wordt gedrukt komt deze in beeld
	progressiebar.onclick = () => {
		tijdlijn.style.opacity = 1;
		tijdlijn.style.transform = 'scale(1)';
		header.style.display = 'none';
		balkPressed = true;
		if (balkPressed == true) {
			progressiebar.classList.remove('blinking');
		}
	};

	//wanneer het toetsenboard word gebruikt om te navigeren werkt dit nog steeds
	progressiebar.onkeydown = (e) => {
		if (e.key != 'Tab') {
			tijdlijn.style.opacity = 1;
			tijdlijn.style.transform = 'scale(1)';
			header.style.display = 'none';
			balkPressed = true;
			if (balkPressed == true) {
				progressiebar.classList.remove('blinking');
			}
		}
	};

	//wanneer je op het kruisje in de navigatie klikt verdwijnt de tijdlijn
	arrow.onclick = () => {
		tijdlijn.style.opacity = 0;
		setTimeout(() => {
			tijdlijn.style.transform = 'scale(0)';
		}, 1200);
		header.style.display = 'flex';
	};

	progressiebarVulling.style.width = '60%';

	startMaandBtn.onclick = () => {
		modal.classList.add('uitschalen');
		setTimeout(() => {
			modal.classList.remove('uitschalen');
			background.style.display = 'none';
			modal.style.display = 'none';
		}, 600);
	};

	volgendeMaandBtn.onclick = () => {
		modal2.classList.add('uitschalen');
		setTimeout(() => {
			modal2.classList.remove('uitschalen');
			background2.style.display = 'none';
			modal2.style.display = 'none';
		}, 600);
		window.location.href = '3maanden.html';
	};

	arrowModal.onclick = () => {
		modal.classList.add('uitschalen');
		setTimeout(() => {
			background.style.display = 'none';
			modal.style.display = 'none';
			modal.classList.remove('uitschalen');
		}, 600);
	};

	arrowModal2.onclick = () => {
		modal2.classList.add('uitschalen');
		setTimeout(() => {
			background2.style.display = 'none';
			modal2.style.display = 'none';
			modal2.classList.remove('uitschalen');
		}, 600);
		window.location.href = '3maanden.html';
	};

	//Verschillende cases voor elke scherm voor de eerste button
  actionButton.onclick = function(event){
    switch(buttonScherm){
      case 0:
        break;
      case 1: //Code voor Kraan Aan button
					actionButton.classList.remove('groene__hover');
					actionButton.classList.add('rode__hover');
          timer();
          waterMeter();
          veranderButton(1, "Kraan uit");
          buttonScherm = 2;
        break;
      case 2: //Code voor Kraan uit button
					actionButton.classList.remove('rode__hover');
					actionButton.classList.remove('groene__hover');
					actionButton.classList.remove('blue__button');
					actionButton.classList.add('transparent__button');
          stopTimer(waterMeterTimer);
          huidigeScherm = 1;
        break;
      case 3: //Code voor Vuur aan button
					actionButton.classList.remove('groene__hover');
					actionButton.classList.add('rode__hover');
          elementOpacity(vuurElementAan, true);
          elementOpacity(vuurElementUit, false);
          stopTimer(waterkokerTimer);
          timer();
          temperatuurMeter();
          veranderButton(1, "Vuur uit");
          buttonScherm = 4;
        break;
      case 4: //Code voor Vuur uit button
					actionButton.classList.remove('rode__hover');
					actionButton.classList.remove('groene__hover');
					actionButton.classList.remove('blue__button');
					actionButton.classList.add('transparent__button');
          elementOpacity(vuurElementAan, false);
          elementOpacity(vuurElementUit, true);
          stopTimer(temperatuurMeterTimer);
          buttonScherm = 5;
        break;
      case 5: //Inschenken
					actionButton.classList.remove('groene__hover');
					actionButton.classList.add('rode__hover');
          thermoskanMeter();
          veranderButton(1, "Stop");
          buttonScherm = 6;
        break;
      case 6: //Stop inschenken
					actionButton.classList.remove('rode__hover');
					actionButton.classList.remove('groene__hover');
					actionButton.classList.remove('blue__button');
					actionButton.classList.add('transparent__button');
          stopTimer(thermoskanMeterTimer);
          stopTimer(waterkokerTimer);
          buttonScherm = 6;
        break;
      default: //Doe niks
    }
  };

  //Zelfde maar voor tweede button
  volgendeButton.onclick = function(event){
    switch(huidigeScherm){
      case 0:
        break;
      case 1:
					actionButton.classList.add('blue__button');
					actionButton.classList.remove('transparent__button');
					actionButton.classList.remove('rode__hover');
					actionButton.classList.add('groene__hover');
          clearSchermen();
          huidigeScherm = 2;
          laatSchermZien(huidigeScherm);
          buttonScherm = 3;
          veranderButton(1, "Vuur aan");
          veranderButton(2, "Volgende stap");
        break;
      case 2:
					actionButton.classList.add('blue__button');
					actionButton.classList.remove('transparent__button');
					actionButton.classList.remove('rode__hover');
					actionButton.classList.add('groene__hover');
          clearSchermen();
          huidigeScherm = 3;
          laatSchermZien(huidigeScherm);
          veranderButton(1, "Inschenken");
          veranderButton(2, "Resultaat");
        break;
      case 3:
					actionButton.classList.add('blue__button');
					actionButton.classList.remove('transparent__button');
					actionButton.classList.remove('rode__hover');
					actionButton.classList.add('groene__hover');
          eindResultaat();
          clearSchermen();
          huidigeScherm = 4;
          laatSchermZien(huidigeScherm);
          modal.classList.add('uitschalen');
          setTimeout(() => {
            modal.classList.remove('uitschalen');
            background.style.display = 'none';
            modal.style.display = 'none';
          }, 600);
        break;
      case 4:
        break;
      default: //Doe niks
    }
  };

  //Verander de tekst van de buttons
  function veranderButton(b, t){
    if (b == 1)
      actionButton.innerHTML = t;
    if (b == 2)
      volgendeButton.innerHTML = t;
  }

  //Zet elke scherm op None
  function clearSchermen(){
    for (let i=1; i<schermen.length-1; i++){
      schermen[i].style.display = "none";
    }
  }

  //Laat de gekozen scherm zien
  function laatSchermZien(s){
    schermen[s].style.display = "block";
  }

  //De timer voor het water koken
  function timer(s){
    waterkokerTimer = setInterval(()=>{
      if (min <= 0 && sec <= 0){
        min = 0;
        sec = 0;
        tijdOver = true;
        stopTimer(waterkokerTimer);
      }
      if (sec < 10){
        timerElement.innerHTML = "0"+min+" : 0"+sec;
        timerKokerElement.innerHTML = "0"+min+" : 0"+sec;
        timerInschenkenElement.innerHTML = "0"+min+" : 0"+sec;
        if (sec <= 0){
          min--;
          sec = 60;
        }
      } else {
        timerElement.innerHTML = "0"+min+" : "+sec;
        timerKokerElement.innerHTML = "0"+min+" : "+sec;
        timerInschenkenElement.innerHTML = "0"+min+" : "+sec;
      }
      sec -= diff;
    },interval);
  }
  //De meter van de rode balletje
  function waterMeter(s){
    waterMeterTimer = setInterval(function(){
      if (waterPos >= limitMeters){
        stopTimer(waterMeterTimer);
      } else {
        waterPos += globaleSnelheid;
        bolletje.style.top = waterPos + "%";
      }
    }, interval);
  }

  //Temperatuur meter
  function temperatuurMeter(s){
    temperatuurMeterTimer = setInterval(function(){
      if (kookPos >= limitMeters){
        stopTimer(temperatuurMeterTimer);
      } else {
        kookPos += globaleSnelheid;
        lijnLengte += globaleSnelheid;
        temperatuur.style.top = kookPos + "%";
        temperatuur.style.height = lijnLengte + "%";
      }
    }, interval);
  }
  //Thermoskan meter
  function thermoskanMeter(s){
    limitMeters = waterPos;
    thermoskanMeterTimer = setInterval(function(){
      if (thermosPos >= limitMeters){
        stopTimer(thermoskanMeterTimer);
      } else {
        thermosPos += globaleSnelheid;
        thermosLijnLengte += globaleSnelheid;
        thermoskan.style.top = thermosPos + "%";
        thermoskan.style.height = thermosLijnLengte + "%";
      }
    }, interval);
  }

  function stopTimer(t){
    clearInterval(t);
  }

  function elementOpacity(e, b){
    if (b == true)
      e.style.opacity = "1";
    else
      e.style.opacity = "0";
  }

  function eindResultaat(){
    localStorage.setItem('test5', false);
    if (min <= 0 && sec <= 0){
      tijdOver = true;
    }
    if (kookPos < 65){
      resultaatText = "Noem je dit heet water, rekruut?! <br> Dit kan echt niet, volgende keer moet dit veel beter!";
    }
    if (thermosPos < 80){
      resultaatText = "Noem je dit een volle kan water, rekruut?! <br>Op deze manier heb je niet genoeg water voor de hele dag!";
    }
    if (thermosPos > 86){
      resultaatText = "Je thermoskan is te vol, rekruut! <br>Zo gaat het water uit je fles in je tas, lijkt me niet zo handig!";
    }
    if (tijdOver == true){
      resultaatText = "Je bent te langzaam, rekruut! <br>Kom op! <br>doe beter je best!";
    }
    if (thermosPos >= 80 && thermosPos <= 86 && kookPos >= 65 && tijdOver == false){
      resultaatText = "Goed gedaan, rekruut! Dit is een goed gevulde thermoskan met heet water.";
      localStorage.setItem('test5', true);
    }
    eindText.innerHTML = resultaatText;
  }











};
