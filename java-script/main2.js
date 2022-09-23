
let minhaImagem = document.querySelector('<img src="imagens/img1.webp" alt="">');

minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src');
    if(meuSrc === 'imagens/img1.webp') {
      minhaImagem.setAttribute ('src','imagens/img2.jpg');
    } else {
      minhaImagem.setAttribute ('src','imagens/img1.webp');
    }
}