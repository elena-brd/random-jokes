const apiURL = 'https://api.chucknorris.io/jokes/random';
const button = document.getElementById('btn');
const jokeContainer = document.querySelector('.jokes')
const p = document.createElement('p');


const getJoke = () => {
    fetch(apiURL)
        .then(result => result.json())
        .then(data => {
            p.innerHTML = data.value;
            jokeContainer.appendChild(p);
        })
}


button.addEventListener('click', getJoke);
document.addEventListener('DOMContentLoaded', getJoke);

