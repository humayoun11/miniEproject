var LoginForm = document.getElementById('LoginForm')
var RegForm = document.getElementById('RegForm')
var Indicator = document.getElementById('Indicator')

function register() {
  RegForm.style.transform = 'translateX(0px)'
  LoginForm.style.transform = 'translateX(0px)'
  Indicator.style.transform = 'translateX(100px)'
}
function loginpage() {
  RegForm.style.transform = 'translateX(300px)'
  LoginForm.style.transform = 'translateX(300px)'
  Indicator.style.transform = 'translateX(0px)'
}

function registration() {
  var username = document.getElementById('username').value
  var email = document.getElementById('email').value
  var password = document.getElementById('password').value

  localStorage.setItem('localUsername', username)
  localStorage.setItem('localUserEmail', email)
  localStorage.setItem('localUserPassword', password)

  alert('registration successfull')
}
document.getElementById('showuser').innerHTML = user
function login() {
  var user = document.getElementById('Lusername').value
  var password = document.getElementById('Lpassword').value

  var localUser = localStorage.getItem('localUsername')
  var localPass = localStorage.getItem('localUserPassword')

  if (user == localUser && password == localPass) {
    window.location.href = 'userpage.html'
    document.getElementById('showuser').innerHTML = localUser
  } else {
    alert('kindly please correct your credentials')
  }
}
