function ajax(url) {
  fetch(url)
    .then(data => data.json())
    .then(data => requestsGenerator.next(data))
}

function* ajaxGenerator() {
  console.log('Buscando usuários...');
  const users = yield ajax('http://www.mocky.io/v2/5ce5d4992e000016c2f83f96');
  console.log(users);

  console.log('Buscando dados do github...');
  const github = yield ajax('https://api.github.com/users/helderburato');
  console.log(github);

  console.log('Buscando dados do github 2...');
  const github2 = yield ajax('https://api.github.com/users/helderburato');
  console.log(github2);
}

const requestsGenerator = ajaxGenerator();
requestsGenerator.next(); // => Make first request and execute requestsGenerator when receive response
