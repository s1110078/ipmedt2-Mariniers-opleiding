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
	const startMaandBtn = document.getElementById('js--6maandenbtn');
	const volgendeBtn = document.getElementById('js--volgendeBtn');
	const tekstArea = document.getElementById('js--text--area');
	// naam weergeven in modal met localStorage
	let ingevoerdenaam = localStorage.getItem('naam');
	let naamgebruiker = document.getElementById('js--ingevoerdenaam');
	let naamRekruut = document.getElementById('js--naamrekruut');
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

	naamgebruiker.innerHTML = ingevoerdenaam;
	naamRekruut.innerHTML = ingevoerdenaam;

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

	progressiebarVulling.style.width = '40%';

	startMaandBtn.onclick = () => {
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

	const gesprekTekst = document.getElementById('js--gesprek--text');
	const keuze1 = document.getElementById('js--keuze1');
	const keuze2 = document.getElementById('js--keuze2');
	const keuze3 = document.getElementById('js--keuze3');
	let gesprekTeksten = [
		', we merken dat alles niet even vlot loopt wanneer er tijdsdruk is.<br/><br/>Waarom heb je hier zoveel moeite mee?',
		', we vinden wel dat je goed je best doet. <br><br>Ook heb je een goede start van de opleiding gehad.',
		', werken met je team is natuurlijk heel belangrijk bij het Korps.<br><br>Irriteer jij je aan bepaalde collega&apos;s?',
		', vind je zelf bepaalde oefeningen nog moeilijk om te doen? Of heb je nog ergens anders problemen mee?',
	];
	let tekstKeuze1 = [
		'Ik wil dingen te snel doen waardoor ik ze verkeerd doe. Sergeant!',
		'Bedankt Sergeant!',
		'Ja Sergeant! Ik irriteer me heel erg aan van Dongen want die is altijd heel er langzaam.',
		'Ik vind de uithoudingsvermogens oefeningen heel zwaar, Sergeant!',
	];
	let tekstKeuze2 = [
		'Ik krijg te weinig slaap waardoor ik me niet kan focussen. Sergeant!',
		'**Knikken**',
		'Ja Sergeant.',
		'Alles gaat me eigenlijk wel makkelijk af.',
	];
	let tekstKeuze3 = [
		'Ik weet niet waar het aanligt.',
		'**Stil blijven**',
		'**Nee schudden**',
		'Het opzetten van de tent gaat nog te langzaam, Sergeant!',
	];
	let geantwoord = ['', '', '', '', ''];

	let x = 0;

	gesprekTekst.innerHTML = gesprekTeksten[x];
	keuze1.innerHTML = tekstKeuze1[x];
	keuze2.innerHTML = tekstKeuze2[x];
	keuze3.innerHTML = tekstKeuze3[x];

	volgendeVraag = () => {
		tekstArea.classList.add('blinking2');
		x++;
		setTimeout(() => {
			tekstArea.classList.remove('blinking2');
		}, 1000);
		if (x == 4) {
			gesprekTekst.innerHTML = ', Bedankt voor dit gesprek!';
			keuze1.innerHTML = 'Geen probleem, Sergeant!';
			keuze2.innerHTML = 'Ik zie je zo wel weer, Sergeant!';
			keuze3.innerHTML = '';
			keuze3.style.display = 'none';
		} else if (x == 5) {
			gesprekTekst.innerHTML =
				', Je gaf de volgende antwoorden:<br>1: ' +
				geantwoord[0] +
				'<br> 2: ' +
				geantwoord[1] +
				'<br> 3: ' +
				geantwoord[2] +
				'<br> 4: ' +
				geantwoord[3] +
				'<br> 5: ' +
				geantwoord[4] +
				'<br><br>Zorg altijd dat je netjes antwoord geeft!<br>Voor deze keer is het goed, je mag gaan!';
			keuze1.innerHTML = '';
			keuze1.style.display = 'none';
			keuze2.innerHTML = '';
			keuze2.style.display = 'none';
			keuze3.innerHTML = '';
			keuze3.style.display = 'none';
			volgendeBtn.style.display = 'block';
			document.getElementsByClassName('gesprek__h2')[0].style.display = 'none';
			document.getElementsByClassName('keuze--wrapper')[0].style.bottom = '10%';
		} else {
			gesprekTekst.innerHTML = gesprekTeksten[x];
			keuze1.innerHTML = tekstKeuze1[x];
			keuze2.innerHTML = tekstKeuze2[x];
			keuze3.innerHTML = tekstKeuze3[x];
		}
	};

	keuze1.onclick = () => {
		geantwoord[x] = keuze1.innerText;
		volgendeVraag();
	};
	keuze2.onclick = () => {
		geantwoord[x] = keuze2.innerText;
		volgendeVraag();
	};
	keuze3.onclick = () => {
		geantwoord[x] = keuze3.innerText;
		volgendeVraag();
	};
	volgendeBtn.onclick = () => {
		localStorage.setItem('test3', true);
		window.location.href = '5maanden.html';
	};
};
