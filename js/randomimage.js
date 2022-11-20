const myButton = document.querySelector('button');
const image = document.querySelector('img');
const images = ["pic1.jpeg", "pic2.jpeg", "pic3.jpeg", "pic4.webp"];


myButton.addEventListener('click', changeImage);

function changeImage() {
    let randomImage = Math.floor(Math.random() * images.length);
    image.src = "images/" + images[randomImage];
}