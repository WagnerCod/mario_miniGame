
const mario = document.querySelector('.mario');
const cano = document.querySelector('.cano');

const mariojump = () =>{
    mario.classList.add('mariojump');

    setTimeout(() => {
        mario.classList.remove('mariojump');
    }, 700);
}
const loop = setInterval(() => {
 
    const canoPosition = cano.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
        

    if (canoPosition <= 98 && canoPosition > 0 && marioPosition < 95){
        cano.style.animation = 'none';
        cano.style.left = `${canoPosition}px`;

        cano.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
 
        mario.src = './img/game-over.png';
        mario.style.width = "70px";
        mario.style.marginLeft = '50px';

        clearInterval(loop);

    }
}, 10);
document.addEventListener('keydown', mariojump);