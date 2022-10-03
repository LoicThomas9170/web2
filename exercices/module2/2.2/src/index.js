import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.css';
import logoImage from './img/logo-MyMovies1.png';
// import JSLogo from './img/js-logo.png';

const homePage = `
<div class="text-center">
    <div class="pb-3"> 
        <img="img-thumbnail w-50" src="${logoImage}" alt="Logo"/>
    </div>    
    <h3>Voici mon site myMovies !</h3>

  <p>Ici vous pouvez trouver mes films favoris; )</p>
</div>`;

const main = document.querySelector('main');

main.innerHTML = homePage;
