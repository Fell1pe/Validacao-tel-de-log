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

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('Email');
const passwordInput = document.getElementById('password');

nameInput.setAttribute('required', true);
emailInput.setAttribute('required', true);
passwordInput.setAttribute('required', true);

const loginForm = document.getElementById('login_form');

loginForm.addEventListener('submit', (event) => {
  if (nameInput.value === '' || emailInput.value === '' || passwordInput.value === '') {
    event.preventDefault(); 
    alert('Por favor, preencha todos os campos obrigatórios.');
  }
});
