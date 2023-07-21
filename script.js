function toggleMode() {
  const html = document.documentElement;
  // Faz a função do código abaixo
  html.classList.toggle('light');

  // if(html.classList.contains('light')) {
  //     html.classList.remove('light')
  // } else {
  //     html.classList.add('light')
  // }

  // --------------------------------------------

  // Pegar a tag image
  const img = document.querySelector('#profile img');

  // Substituir a imagem
  if (html.classList.contains('light')) {
    // Se tiver light mode, adicionar a imagem light
    img.setAttribute('src', './assets/avatar-light.png');
    img.setAttribute(
      'alt',
      'Foto de Estefany sorrindo, em um fundo com uma paisagem'
    );
  } else {
    // Se tiver sem ligh mode, manter a imagem padrão
    img.setAttribute('src', './assets/avatar-dark.png');
    img.setAttribute('alt', 'Foto de Estefany sorrindo, em um fundo borrado');
  }
}
