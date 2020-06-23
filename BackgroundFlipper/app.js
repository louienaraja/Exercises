const colors = ["gray", "tomato", "gold", "firebrick", "forestgreen"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function background() {
    const randNum = getRandNum();
    document.body.style.backgroundColor = colors[randNum];
    color.textContent = colors[randNum];
});

const getRandNum = () => Math.floor(Math.random() * colors.length);