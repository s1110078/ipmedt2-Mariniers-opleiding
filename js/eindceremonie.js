window.onload = () => {
	let ingevoerdenaam = localStorage.getItem('naam');
	let naamgebruiker = document.getElementById('js--ingevoerdenaam');
	const scoreBtn = document.getElementById('js--scoreBtn');

	try {
		naamgebruiker.innerHTML = ingevoerdenaam;
	} catch (e) {
		console.log('op deze pagina is er nog geen naam ingevoerd');
	}

	scoreBtn.onclick = () => {
		window.location.href = 'score.html';
	};
};
