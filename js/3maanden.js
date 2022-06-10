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
	const startMaandBtn = document.getElementById('js--5maandenbtn');

	// naam weergeven in modal met localStorage
	let ingevoerdenaam = localStorage.getItem('naam');
	document.getElementById('js--ingevoerdenaam').innerHTML = ingevoerdenaam;

	// statistieken
	const gestartBalk = document.getElementById('js--gestart');
	const gestoptBalk = document.getElementById('js--gestopt');
	const overBalk = document.getElementById('js--over');
	const volgendeBtn = document.getElementById('js--volgendeBtn');
	const statsTitel = document.getElementById('js--titel--stats');
	let childsGestartBalk = gestartBalk.childNodes;
	let childsGestoptBalk = gestoptBalk.childNodes;
	let childsOverBalk = overBalk.childNodes;
	let bezig = false;
	let x = 0;

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

	let stats6Maanden = () => {
		bezig = true;
		gestartBalk.style.height = '100%';
		gestoptBalk.style.height = '42.31%';
		overBalk.style.height = '57.69%';
		setTimeout(() => {
			childsGestartBalk[1].style.opacity = '1';
			childsGestartBalk[3].style.opacity = '1';
			childsGestoptBalk[1].style.opacity = '1';
			childsGestoptBalk[3].style.opacity = '1';
			childsOverBalk[1].style.opacity = '1';
			childsOverBalk[3].style.opacity = '1';
			bezig = false;
		}, 2000);
	};

	volgendeBtn.onclick = () => {
		if (x == 0) {
			if (bezig == false) {
				bezig = true;
				statsTitel.innerHTML = 'Na 9 maanden';
				gestartBalk.style.height = '100%';
				gestoptBalk.style.height = '67.95%';
				overBalk.style.height = '32.05%';
				statsTitel.classList.add('heartbeat');
				x++;
				setTimeout(() => {
					childsGestoptBalk[3].innerHTML = '53';
					childsOverBalk[3].innerHTML = '25';
					bezig = false;
				}, 2000);
			}
		} else {
			if (bezig == false) {
				localStorage.setItem('test6', true);
				window.location.href = '6weken.html';
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

	progressiebarVulling.style.width = '70%';

	startMaandBtn.onclick = () => {
		modal.classList.add('uitschalen');
		setTimeout(() => {
			modal.classList.remove('uitschalen');
			background.style.display = 'none';
			modal.style.display = 'none';
			stats6Maanden();
		}, 600);
	};

	arrowModal.onclick = () => {
		modal.classList.add('uitschalen');
		setTimeout(() => {
			background.style.display = 'none';
			modal.style.display = 'none';
			modal.classList.remove('uitschalen');
			stats6Maanden();
		}, 600);
	};
};
