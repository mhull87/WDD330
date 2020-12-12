const output = document.getElementById('output');

const apiURL = 'https://swapi.co/api/people/';

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
      getNext(fetchJson)
    }
  } catch (error) {
    console.log(error);
  }
}

function renderStarwars(data) {
  document.getElementById('prevBtn').classList.remove('hidden');
  document.getElementById('nextBtn').classList.remove('hidden');
  const peopleList = document.getElementById('output');
  const nextBtn = document.getElementById('nextBtn');

  if (data.next) {
    peopleList.innerHTML = '';
    nextBtn.setAttribute('onclick', `getStarwars('${data.next}')`)
  }

  data.results.forEach(person => {
    const listItem = document.createElement('li');
    listItem.textContent = person.name;
    peopleList.appendChild(listItem);
  });
}

function getPrevious(data) {
  const peopleList = document.getElementById('output');

  if (data.previous) {
    peopleList.innerHTML = '';
    prevBtn.setAttribute('onclick', `getStarwars('${data.previous}')`)
  }
}

function getNext(data) {
  const peopleList = document.getElementById('output');
  const nextBtn = document.getElementById('nextBtn');

  if (data.next) {
    peopleList.innerHTML = '';
    nextBtn.setAttribute('onclick', `getStarwars('${data.next}')`)
  }
  data.results.forEach(person => {
    const listItem = document.createElement('li');
    listItem.textContent = person.name;
    peopleList.appendChild(listItem);
  });
}
