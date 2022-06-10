window.onload = () => {
	let balkPressed = false;
	const arrow = document.getElementById('js--arrow');
	const tijdlijn = document.getElementById('js--tijdlijn');
	const header = document.getElementById('js--header');
	const progressiebar = document.getElementById('js--progressiebar');
	const progressiebarVulling = document.getElementById('js--progressiebarVulling');
	const background = document.getElementById('js--background');
	const modal = document.getElementById('js--modal');
	const arrowModal = document.getElementById('js--arrow--modal');
	const startMaandBtn = document.getElementById('js--6wekenbtn');
	const volgendeMaandBtn = document.getElementById('js--6weken--volgendeMaandBtn');

	// naam weergeven in modal met localStorage
	let ingevoerdenaam = localStorage.getItem('naam');
	let naamgebruiker = document.getElementById('js--ingevoerdenaam');
	//let naamRekruut = document.getElementById('js--naamrekruut');

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

	progressiebarVulling.style.width = '80%';

	startMaandBtn.onclick = () => {
		modal.classList.add('uitschalen');
		setTimeout(() => {
			modal.classList.remove('uitschalen');
			background.style.display = 'none';
			modal.style.display = 'none';
		}, 600);
	};

	volgendeMaandBtn.onclick = () => {
		window.location.href = '9uur.html';
	};

	arrowModal.onclick = () => {
		modal.classList.add('uitschalen');
		setTimeout(() => {
			background.style.display = 'none';
			modal.style.display = 'none';
			modal.classList.remove('uitschalen');
		}, 600);
	};

	localStorage.setItem('test7', false);

	arrowLeft.onclick = () => {
	  laatAfbeeldingZien("left");
	};

	arrowRight.onclick = () => {
	  laatAfbeeldingZien("right");
	};

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


};
