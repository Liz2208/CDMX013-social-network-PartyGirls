import { onNavigate } from '../main.js';

export const register = () => {
  const div = document.createElement('div');

  const logoInicio = document.createElement('img');
  logoInicio.id = 'logo';

  const logoGoogle = document.createElement('img');
  logoGoogle.id = 'logoGoogle';

  const buttonLoginOne = document.createElement('button');
  buttonLoginOne.id = 'logIn2';

  const buttonBack = document.createElement('button');
  buttonBack.id = 'buttonBack';

  const inputEmail = document.createElement('input');
  inputEmail.id = 'inputUsername';

  const inputPassword = document.createElement('input');
  inputPassword.id = 'inputPassword';

  const logoTwitter = document.createElement('img');
  logoTwitter.id = 'logoTwitter';

  const logogithub = document.createElement('img');
  logogithub.id = 'logogithub';

  logoInicio.src = './images/logo5.png';
  buttonLoginOne.textContent = 'Create acount';
  buttonBack.textContent = 'Back';
  inputEmail.placeholder = 'Email';
  inputPassword.placeholder = 'Pasword';
  logoGoogle.src = './images/btn_google.png';
  logoTwitter.src = './images/btn_twitter.png';
  logogithub.src = './images/git.png';

  buttonLoginOne.addEventListener('click', () => {
    onNavigate('/');
  });
  buttonBack.addEventListener('click', () => {
    onNavigate('/');
  });

div.append(logoInicio, inputEmail, inputPassword, buttonLoginOne, buttonBack, logoGoogle, logoTwitter, logogithub);

  return div;
};