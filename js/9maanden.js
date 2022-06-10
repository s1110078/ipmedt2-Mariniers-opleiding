window.onload = () => {
	let balkPressed = false;
	const arrow = document.getElementById('js--arrow');
	const tijdlijn = document.getElementById('js--tijdlijn');
	const header = document.getElementById('js--header');
	const progressiebar = document.getElementById('js--progressiebar');
	const progressiebarVulling = document.getElementById('js--progressiebarVulling');
	const collegabtn = document.getElementById('js--9maandenbtn');
	const background = document.getElementById('js--background');
	const modal = document.getElementById('js--modal');
	const arrowModal = document.getElementById('js--arrow--modal');

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
	const toAchtMaanden = document.getElementById('js--to8maanden');

	toAchtMaanden.onclick = ()=>{
		window.location.href = "8maanden.html";
	};

	//voorscore

	let arrowCounter = 0;

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

	progressiebarVulling.style.width = '20%';
	// progressiebarVulling.innerHTML = '20%';

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

	collegabtn.onclick = () => {
		modal.classList.add('uitschalen');
		setTimeout(() => {
			modal.classList.remove('uitschalen');
			background.style.display = 'none';
			modal.style.display = 'none';
		}, 600);
	};

	arrowModal.onclick = () => {
		modal.classList.add('uitschalen');
		setTimeout(() => {
			background.style.display = 'none';
			modal.style.display = 'none';
			modal.classList.remove('uitschalen');
		}, 600);
	};

	//slideshow werking
	const arrowRight = document.getElementById('js--arrowRight');
	const arrowLeft = document.getElementById('js--arrowLeft');
	const backgroundImg = document.getElementById('js--backgroundImg');
	const nummer = document.getElementById('js--nummer');
	let naamRekruut = document.getElementById('js--naam');
	let plaatjes = [
		'../images/rekruut1.webp',
		'../images/rekruut2.webp',
		'../images/rekruut3.webp',
		'../images/rekruut4.webp',
		'../images/rekruut5.webp',
		'../images/rekruut6.webp',
		'../images/rekruut7.webp',
		'../images/rekruut8.webp',
	];
	let namen = ['van Dongen', 'Berendsen', 'de Jong', 'Vaesen', 'Nuyts', 'Schruijer', 'van Weeswijk', 'Schol'];
	let nummers = ['1/8', '2/8', '3/8', '4/8', '5/8', '6/8', '7/8', '8/8'];

	let i = 0;
	let b = 0;
	let c = 0;

	try {
		backgroundImg.style.backgroundImage = 'url(' + plaatjes[i] + ')';
		naamRekruut.innerHTML = namen[b];
		nummer.innerHTML = nummers[c];

		arrowRight.onclick = () => {
			i++;
			b++;
			c++;
			arrowCounter++;
			backgroundImg.style.backgroundImage = 'url(' + plaatjes[i] + ')';
			naamRekruut.innerHTML = namen[b];
			nummer.innerHTML = nummers[c];
			if (i === plaatjes.length - 1) {
				i = -1;
				b = -1;
				c = -1;
			}
			if (arrowCounter >= 7) {
				localStorage.setItem('test1', true);
			} else {
				localStorage.setItem('test1', false);
			}
		};

		if (arrowCounter >= 7) {
			localStorage.setItem('test1', true);
		} else {
			localStorage.setItem('test1', false);
		}

		arrowLeft.onclick = () => {
			if (i === 0) {
				i = plaatjes.length;
				b = plaatjes.length;
				c = plaatjes.length;
			}
			if (i === -1) {
				i = plaatjes.length - 1;
				b = plaatjes.length - 1;
				c = plaatjes.length - 1;
			}
			i = i - 1;
			b = b - 1;
			c = c - 1;

			backgroundImg.style.backgroundImage = 'url(' + plaatjes[i] + ')';
			naamRekruut.innerHTML = namen[b];
			nummer.innerHTML = nummers[c];
		};
	} catch (e) {
		console.log('werkt niet op deze pagina');
	} finally {
	}
};
