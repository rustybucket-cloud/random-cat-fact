function fetchFact() {
    fetch("https://brianiswu-cat-facts-v1.p.rapidapi.com/facts", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "c90b245b31msh46b59787848177ap15892cjsne103b05ba7a8",
		"x-rapidapi-host": "brianiswu-cat-facts-v1.p.rapidapi.com"
	}
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const randomFact = document.querySelector('#randomFact');
            randomFact.innerText = data.text;
        })
        .catch(err => {
            console.error(err);
        });
}
document.querySelector('#button').addEventListener("click", fetchFact);