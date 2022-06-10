window.onload = () => {
	const arrow = document.getElementById('js--arrow');
	const tijdlijn = document.getElementById('js--tijdlijn');
	const progressiebar = document.getElementById('js--progressiebar');
	const progressiebarVulling = document.getElementById('js--progressiebarVulling');
	const header = document.getElementById('js--header');
	const splashbutton = document.getElementById('js--splashbutton');
	const splashscreen = document.getElementById('js--splashscreen');

	let balkPressed = false;

	const background = document.getElementById('js--background');
	const modal = document.getElementById('js--modal');
	const arrowModal = document.getElementById('js--arrow--modal');

	//buttons
	const startbtn = document.getElementById('js--startbtn');
	const startModalBtn = document.getElementById('js--startmodalbtn');

	startModalBtn.onclick = ()=>{
		window.location.href = "gegevens.html";
	};


	//percentage na de eerste modal laten oplopen
	try {
		startbtn.onclick = () => {
			progressiebarVulling.style.width = '15%';
			progressiebarVulling.innerHTML = '15%';
		};
	} catch (e) {
		console.log('de startbutton bestaat niet op deze pagina');
	}

	//wanneer je op het kruisje in de navigatie klikt verdwijnt de tijdlijn
	arrow.onclick = () => {
		tijdlijn.style.opacity = 0;
		setTimeout(() => {
			tijdlijn.style.transform = 'scale(0)';
		}, 1200);
		header.style.display = 'flex';
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

	//wanneer er op start wordt gedrukt begint het
	try {
		splashbutton.onclick = () => {
			setTimeout(() => {
				splashscreen.style.display = 'none';
				progressiebarVulling.style.width = '10%';
				// progressiebarVulling.innerHTML = '10%';
				progressiebar.classList.add('blinking');
			}, 1000);
			splashscreen.style.opacity = 0;
			header.style.display = 'flex';
		};
	} catch (e) {
		console.log('het lukt niet op deze file');
	}

	//animerend typ effect

	try {
		document.getElementById('js--terminal--text').innerHTML = '';

		let typeText = (textToBeTyped) => {
			if (textToBeTyped != '') {
				document.getElementById('js--terminal--text').innerHTML += textToBeTyped[0];
				textToBeTyped.splice(0, 1);
				setTimeout(() => {
					typeText(textToBeTyped);
				}, 150);
			}

		};

		typeText(Array.from('Ben jij een echte marinier?'));
	} catch (e) {
		console.log('het lukt niet op deze file');
	}

	//deze functie zorgt ervoor dat wanneer je op het kruisje klikt de modal animerend verdwijnt
	try {
		arrowModal.onclick = () => {
			modal.classList.add('uitschalen');
			setTimeout(() => {
				background.style.display = 'none';
				modal.style.display = 'none';
				modal.classList.remove('uitschalen');
			}, 600);
		};
	} catch (e) {
		console.log('het lukt niet op deze file');
	}


};
