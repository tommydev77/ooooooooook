window.addEventListener('load', () => {
	let 
		input = document.getElementById('search'),
		sendBtn = document.getElementById('sendBtn'),
		resultsDiv = document.getElementsByClassName('results')[0];

	sendBtn.addEventListener('click', () => {
		resultsDiv.innerHTML = ''

		let url = 'https://api.unsplash.com/search/photos?client_id=M4tosJ0ZVtdOsBKPnaDIMQ3ik-IZf1OlhOWMIGfwSJw&query='+input.value;
		let fet = fetch(url);
		let then = fet.then((x) => {
			let js = x.json(); 

			js.then((data) => {
				for (var i = 0; i <= data.results.length; i++) {
					console.log(data.results[i].urls.full)

					let itemDiv = document.createElement('div');
					itemDiv.className = 'item';

					itemDiv.innerHTML = `<img src="${data.results[i].urls.full}" alt="Url">`;

					resultsDiv.appendChild(itemDiv);
				}
			})
		})
	})
})