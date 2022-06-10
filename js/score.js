// Hello.
//
// This is JSHint, a tool that helps to detect errors and potential
// problems in your JavaScript code.
//
// To start, simply enter some JavaScript anywhere on this page. Your
// report will appear on the right side.
//
// Additionally, you can toggle specific options in the Configure
// menu.

window.onload = () => {
	const progressiebar = document.getElementById('js--progressiebar');
	const progressiebarVulling = document.getElementById('js--progressiebarVulling');
	const tijdlijn = document.getElementById('js--tijdlijn');
	const header = document.getElementById('js--header');
	const arrow = document.getElementById('js--arrow');

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
	const goInfo = document.getElementById('js--toinfo');
	const toStart = document.getElementById('js--tostart');

	//info btn
	const backgroundInfoModal = document.getElementById('js--backgroundScore');
	const infoModal = document.getElementById('js--modalScore');
	const infoBtn = document.getElementById('js--scoreIcon');
	const arrowInfo = document.getElementById('js--arrowInfo');

  toStart.onclick = ()=>{
    window.location.href = 'index.html';
  };

	goInfo.onclick = ()=>{
		window.location.href = "informatiepagina.html";
	};

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
	};

	//wanneer je op het kruisje in de navigatie klikt verdwijnt de tijdlijn
	arrow.onclick = () => {
		tijdlijn.style.opacity = 0;
		setTimeout(() => {
			tijdlijn.style.transform = 'scale(0)';
		}, 1200);
		header.style.display = 'flex';
	};

	progressiebarVulling.style.width = '100%';


	// de juiste icons toevoegen deze zijn gebonden aan de localStorage
	if (localStorage.getItem('test1') === 'true') {
		document.getElementById('js--icon1').classList.add('fa-check');
		document.getElementById('js--test1Info').innerHTML = "Deze is<b> gehaald </b>doordat u alle rekruten heeft bekeken.";
	} else {
		document.getElementById('js--icon1').classList.add('fa-times');
		document.getElementById('js--test1Info').innerHTML = "Deze is<b> niet gehaald </b>doordat u niet alle rekruten heeft bekeken.";
	}

	if (localStorage.getItem('test2') === 'true') {
		document.getElementById('js--icon2').classList.add('fa-check');
		document.getElementById('js--test2Info').innerHTML = "Deze is<b> gehaald </b>doordat u het tent bouwen niet moeilijk vond.";
	} else {
		document.getElementById('js--icon2').classList.add('fa-times');
		document.getElementById('js--test2Info').innerHTML = "Deze is<b> niet gehaald </b>doordat u het tentbouwen niet makkelijk vond.";
	}

	if (localStorage.getItem('test3') === 'true') {
		document.getElementById('js--icon3').classList.add('fa-check');
		document.getElementById('js--test3Info').innerHTML = " Deze is<b> gehaald </b>doordat u netjes antwoorden gaf op de vragen tijdens het interview.";
	} else {
		document.getElementById('js--icon3').classList.add('fa-times');
		document.getElementById('js--test3Info').innerHTML = " Deze is<b> niet gehaald </b>doordat u niet netjes antwoorden gaf en te vaak schudde met je hoofd.";
	}

	if (localStorage.getItem('test4') === 'true') {
		document.getElementById('js--icon4').classList.add('fa-check');
	} else {
		document.getElementById('js--icon4').classList.add('fa-times');
		document.getElementById('js--test4Info').innerHTML = " Deze is<b> niet gehaald </b>doordat je schoot zonder goed opteletten, daarnaast heeft de sergeant niet gezegd dat je mocht schieten.";
	}

	if (localStorage.getItem('test5') === 'true') {
		document.getElementById('js--icon5').classList.add('fa-check');
		document.getElementById('js--test5Info').innerHTML = " Deze is<b> gehaald </b>doordat je de juiste hoeveelheid water goed warm wist te krijgen in de thermoskan!";
	} else {
		document.getElementById('js--icon5').classList.add('fa-times');
			document.getElementById('js--test5Info').innerHTML = " Deze is<b> niet gehaald </b>doordat je de niet de juiste hoeveelheid water goed warm wist te krijgen in de thermoskan!";
	}

	if (localStorage.getItem('test6') === 'true') {
		document.getElementById('js--icon6').classList.add('fa-check');
		document.getElementById('js--test6Info').innerHTML = " Deze is<b> gehaald </b>doordat je niet bent afgevallen en goed naar de cijfers hebt gekeken.";
	} else {
		document.getElementById('js--icon6').classList.add('fa-times');
		document.getElementById('js--test6Info').innerHTML = " Deze is<b> niet gehaald </b>doordat je zelf bent afgevallen en niet goed naar de cijfers hebt gekeken.";
	}

	if (localStorage.getItem('test7') === 'true') {
		document.getElementById('js--icon7').classList.add('fa-check');
		document.getElementById('js--test7Info').innerHTML = " Deze is<b> gehaald </b>doordat je alle foto's van de loopgraven hebt gezien en de informatie hebt waargenomen.";

	} else {
		document.getElementById('js--icon7').classList.add('fa-times');
		document.getElementById('js--test7Info').innerHTML = " Deze is<b> niet gehaald </b>doordat je niet alle foto's van de loopgraven hebt gezien en niet de informatie hebt waargenomen.";
	}

	if (localStorage.getItem('test8') === 'true') {
		document.getElementById('js--icon8').classList.add('fa-check');
		document.getElementById('js--test8Info').innerHTML = " Deze is<b> gehaald </b>doordat je alle hoofdstukken heb afgerond en naar de eindceremonie bent gegaan.";
	} else {
		document.getElementById('js--icon8').classList.add('fa-times');
		document.getElementById('js--test8Info').innerHTML = " Deze is<b> niet gehaald </b>omdat je niet bent komen opdagen bij de eindceremonie.";
	}

	infoBtn.onclick = ()=>{
		infoModal.classList.add("infoanimatie");
		backgroundInfoModal.style.display = 'flex';
		infoModal.style.display = 'block';
		setTimeout(() => {
			infoModal.classList.remove('infoanimatie');
		}, 600);

	};

	document.getElementById("js--snapBtn").onclick = ()=>{
		infoModal.classList.add('uitschalen');
		setTimeout(() => {
			backgroundInfoModal.style.display = 'none';
			infoModal.style.display = 'none';
			infoModal.classList.remove('uitschalen');
		}, 600);
	};


	arrowInfo.onclick = () => {
		infoModal.classList.add('uitschalen');
		setTimeout(() => {
			backgroundInfoModal.style.display = 'none';
			infoModal.style.display = 'none';
			infoModal.classList.remove('uitschalen');
		}, 600);
	};
};
