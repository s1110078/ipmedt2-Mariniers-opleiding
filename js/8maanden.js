window.onload = () => {
	let balkPressed = false;
	const arrow = document.getElementById('js--arrow');
	const tijdlijn = document.getElementById('js--tijdlijn');
	const header = document.getElementById('js--header');
	const progressiebar = document.getElementById('js--progressiebar');
	const progressiebarVulling = document.getElementById('js--progressiebarVulling');
	const background = document.getElementById('js--background');
	const background2 = document.getElementById('js--backgroundmaand8');
	const modal = document.getElementById('js--modal');
	const modal2 = document.getElementById('js--modalmaand8');
	const arrowModal = document.getElementById('js--arrow--modal');
	const collegabtn = document.getElementById('js--9maandenbtn');
	const achtMaandenBtn = document.getElementById('js--8maanden');
	//slider
	let slider = document.getElementById('myRange');
	let output = document.getElementById('demo');

	// naam weergeven in modal met localStorage
	let ingevoerdenaam = localStorage.getItem('naam');
	let naamgebruiker = document.getElementById('js--ingevoerdenaam');

	// button naar 6maanden.html
	let volgendeMaandKnop = document.getElementById('js--9maandenbtn__next');
	let volgendeMaandCloseKnop = document.getElementById('js--arrow--modal--next');

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

	volgendeMaandKnop.onclick = () => {
		window.location.href = '6maanden.html';
	};

	volgendeMaandCloseKnop.onclick = () => {
		modal2.classList.add('uitschalen');
		setTimeout(() => {
			background2.style.display = 'none';
			modal2.style.display = 'none';
			modal2.classList.remove('uitschalen');
		}, 600);
	};

	try {
		naamgebruiker.innerHTML = ingevoerdenaam;
	} catch (e) {
		console.log('op deze pagina is er nog geen naam ingevoerd');
	}

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

	//wanneer je op het kruisje in de navigatie klikt verdwijnt de tijdlijn
	arrow.onclick = () => {
		tijdlijn.style.opacity = 0;
		setTimeout(() => {
			tijdlijn.style.transform = 'scale(0)';
		}, 1200);
		header.style.display = 'flex';
	};

	progressiebarVulling.style.width = '30%';
	// progressiebarVulling.innerHTML = '30%';


	collegabtn.onclick = () => {
		modal.classList.add('uitschalen');
		setTimeout(() => {
			modal.classList.remove('uitschalen');
			background.style.display = 'none';
			modal.style.display = 'none';
		}, 600);
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

	// background.onclick = ()=>{
	// 	modal.classList.add('uitschalen');
	// 	setTimeout(() => {
	// 		background.style.display = 'none';
	// 		modal.style.display = 'none';
	// 		modal.classList.remove('uitschalen');
	// 	}, 600);
	// };

	arrowModal.onclick = () => {
		modal.classList.add('uitschalen');
		setTimeout(() => {
			background.style.display = 'none';
			modal.style.display = 'none';
			modal.classList.remove('uitschalen');
		}, 600);
	};

	//slider
	output.innerHTML = 'te doen';

	slider.oninput = function () {
		if (this.value < 20) {
			output.innerHTML = 'moeilijk';
		} else if (this.value < 50) {
			output.innerHTML = 'matig';
		} else if (this.value < 70) {
			output.innerHTML = 'te doen';
		} else {
			output.innerHTML = 'makkelijk';
		}
	};

	achtMaandenBtn.onclick = () => {
		if (slider.value < 20) {
			localStorage.setItem('rang', 'moeilijk');
			localStorage.setItem('test2', false);
		} else if (slider.value < 50) {
			localStorage.setItem('rang', 'matig');
			localStorage.setItem('test2', false);
		} else if (slider.value < 70) {
			localStorage.setItem('rang', 'te doen');
			localStorage.setItem('test2', true);
		} else {
			localStorage.setItem('rang', 'makkelijk');
			localStorage.setItem('test2', true);

		}

		document.getElementById('js--backgroundmaand8').style.display = 'flex';
		document.getElementById('js--modalmaand8').style.display = 'block';
		document.getElementById('js--moeilijkheid').innerHTML = localStorage.getItem('rang');

		document.getElementById('js--backgroundmaand8').onclick = ()=>{
			document.getElementById('js--modalmaand8').classList.add('uitschalen');
			setTimeout(() => {
				document.getElementById('js--modalmaand8').classList.remove('uitschalen');
				document.getElementById('js--backgroundmaand8').style.display = 'none';
				document.getElementById('js--modalmaand8').style.display = 'none';
			}, 600);
		};


	};
};
