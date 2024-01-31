const randomInt = (min, max) =>
    Math.floor(Math.random() = (max - min + 1) + min);
const randomColor = () =>
    `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

document.querySelector('.nav_link').addEventListener('click', function (e){
    this.style.backgroundColor = randomColor();
    console.log('LINK', e.target, e.currentTarget);
    console.log(e.currentTarget === this);
});

document.querySelector('.nav_link').addEventListener('click', function (e){
    this.style.backgroundColor = randomColor();
    console.log('CONTAINER', e.target, e.currentTarget);
    
});

document.querySelector('.nav_link').addEventListener('click', function (e){
    this.style.backgroundColor = randomColor();
    console.log('NAV', e.target, e.currentTarget);
    
});