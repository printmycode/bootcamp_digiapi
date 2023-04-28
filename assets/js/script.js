document.querySelector('#search').addEventListener("click", getDigimon);


const nameList = document.getElementById('nameList');

fetch('https://digimon-api.vercel.app/api/digimon/')
    .then((response) => response.json())
    .then((data) => {
        data.forEach(name => {
            const li = document.createElement('li');
            li.textContent = name.name;
            nameList.appendChild(li);
        });
    })
    .catch(error => console.error(error));

function getDigimon() {
    const name = document.querySelector("#digimonName").value;
    var api = 'https://digimon-api.vercel.app/api/digimon/name/'
    var digiName = `${api}${(name)}`
    var digiBox = document.querySelector('.digimonBox')

    fetch(digiName)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        digiBox.innerHTML = ""
        digiBox.innerHTML = `
        <div class="card border border-5 border-dark rounded-3";">
            <img src="${data[0].img}" 
                class="card-img-top" 
                alt="${data[0].name}">
                <div class="card-body digimonInfo">
                    <h5 class="card-title">Nombre:  ${data[0].name}</h5>
                    <p class="card-text">Level:  ${data[0].level}</p>
            </div>
        </div>
        `;
    }).catch((error) => {
        console.log('Digimon no encontrado', error);
    })

}

getDigimon()