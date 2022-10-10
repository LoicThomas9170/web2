const HomePage = () => {
  const homePage = `
<div class="text-center">    
    <h3>Voici mon site myMovies !</h3>

  <p>Ici vous pouvez trouver mes films favoris; )</p>
</div>`;
  const main = document.querySelector('main');
  main.innerHTML = homePage;
};

export default HomePage;
