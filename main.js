const app = document.getElementById('typewriter');

const typewriter = new Typewriter(app, {
    loop: true,
    delay: 75
});

typewriter
    .typeString('Los mejores talentos de la región')
    .pauseFor(700)
    .start();