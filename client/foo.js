const service = axios.create({
  baseURL: 'https://localhost:3000/',
  withCredentials: true
});

const $login = document.querySelector('#login')
const $logout = document.querySelector('#logout')
const $islogged = document.querySelector('#islogged')

$login.onclick = function () {
    service.get('/login')
        .then(res => console.log('login ok'))
        .catch(err => console.error('login nok'))
}
$islogged.onclick = function () {
    service.get('/islogged')
        .then(res => console.log('logged', res.data))
        .catch(err => console.error('not logged'))
}

$logout.onclick = function () {
    service.get('/logout')
        .then(res => console.log('logout ok'))
        .catch(err => console.error('logout nok'))
}