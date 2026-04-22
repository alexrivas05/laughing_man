const SQUARE_COUNT = 3;
const TIMER_SPEED = 16.6;
const SPEED = 5;

document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelector('#square').addEventListener('click', ()=>{
        alert('OMG You Clicked Me')
    });

    let box = document.querySelector('#box');

    for(let i=0; i<SQUARE_COUNT; i++){
        let square = document.createElement('img');
        square.src = 'laughing_man.jpg';
        square.alt = 'Catch the laughing man!';
        square.className = 'square';
        box.appendChild(square);
    }
    
    Array.from(box.children).forEach((element)=>{
        let dx = SPEED*Math.random()*2-1;
        let dy = SPEED*Math.random()*2-1;

        let x = parseInt(element.style.left) || 0;
        let y = parseInt(element.style.top) || 0;
        setInterval(()=>{
            x+=dx;
            y+=dy;

            element.style.left = x+'px';
            element.style.left = y+'px';

        }, TIMER_SPEED)
    });

});