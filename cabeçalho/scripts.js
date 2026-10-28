function ExpRecMenu() {
 const header = document.querySelector('header');

header.classList.add('animando');
//adicona ou tira a classe//
 header.classList.toggle('menu_aberto');

 setTimeout(() => {
    header.classList.remove('animando');
 }, 250);
}