function fetchFact() {
    fetch("https://cat-fact.herokuapp.com/facts/random")
        .then(res => res.json())
        .then(data => {
            const randomFact = document.querySelector('#randomFact');
            randomFact.innerText = data.text;
        })
}
document.querySelector('#button').addEventListener("click", fetchFact);