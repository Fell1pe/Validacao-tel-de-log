const mode = document.getElementById('mode_icon');

mode.addEventListener('click', () => {
  const form = document.getElementById('login_form');
  if (mode.classList.contains('fa-moon')) {
    mode.classList.remove('fa-moon');
    mode.classList.add('fa-sun');
    form.classList.add('dark');
    return;
  }

  mode.classList.add('fa-moon');
  mode.classList.remove('fa-sun');
  form.classList.remove('dark');
});

const emailInput = document.getElementById('Email'); 

emailInput.setAttribute('required', true);

const loginForm = document.getElementById('login_form');

loginForm.addEventListener('submit', (event) => {
    if (emailInput === ''){
     event.preventDefault(); 
    alert('Por favor, informe seu email.')
    }
});

const login_botton = document.getElementById('login')

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    window.location.href='index.html';
})


