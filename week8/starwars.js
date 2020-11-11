const output = document.getElementById('output');

const apiURL = 'https://swapi.dev/api/people';

fetch(apiURL)
    .then(response => {
        if (response.ok) {
            return response;
        }
        throw Error(response.statusText);
    })
    .then(response => response.json())
    .then(data => console.log(Object.entries(data)))
    .catch(error => console.log('There was an error:', error))



async function getStarwars(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw Error(response.statusText)
        } else {
            const fetchJson = await response.json();
            renderStarwars(fetchJson)
            getPrevious(fetchJson)
        }
    } catch (error) {
        console.log(error);
    }
}


function renderStarwars(data) {
    const peopleList = document.getElementById('output');
    const btn = document.getElementById('btn');



    if (data.next) {
        btn.textContent = 'next >>';
        peopleList.innerHTML = '';
        btn.setAttribute('onclick', `getStarwars('${data.next}')`)
    }


    console.log(data);

    data.results.forEach(person => {
        const listItem = document.createElement('li');
        listItem.textContent = person.name;
        peopleList.appendChild(listItem);
    });





}

function getPrevious(data) {
    if (data.previous) {
        peopleList.innerHTML = '';
        prevBtn.setAttribute('onclick', `getStarwars('${data.previous}')`)
    }
    console.log(data);

    data.results.forEach(person => {
        const listItem = document.createElement('li');
        listItem.textContent = person.name;
        peopleList.appendChild(listItem);
    });
}