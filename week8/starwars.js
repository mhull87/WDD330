const output = document.getElementById('output');

const apiURL = 'https://swapi.dev/api/people';

fetch(apiURL)
.then(response => {
  if(response.ok) {
    return response;
  }
  throw Error(response.statusText);
})
.then(response => response.json())
.then(data => console.log(Object.entries(data)))
.catch(error => console.log('There was an error:', error))