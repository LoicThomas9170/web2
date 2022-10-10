import logo from '../../img/js-logo.png';
import Navigate from '../Router/Navigate';

const Footer = () => {
  const footer = document.querySelector('footer');
  footer.innerHTML = `<h1 class="animate__animated animate__bounce animate__delay-2s text-center">
        ce site est développé à l'aide de 
        <img src="./img/js-logo.png" height="30px" alt="Logo JS" />
    </h1>`;

  renderSmallImage(footer, logo, 'logoJS');
  attachOnLogoJSClick();
};

export default Footer;

function renderSmallImage(wrapper, url, id) {
  const image = new Image(); // or document.createElement('img');
  image.src = url;
  image.height = 50;
  if (id) image.id = id;
  wrapper.appendChild(image);
}

function attachOnLogoJSClick() {
  const pizza = document.querySelector('#logoJS');
  pizza.addEventListener('click', () => {
    Navigate('/');
  });
}
