const SQUARE_COUNT = 3;
document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelector('#square').addEventListener('click', ()=>{
        alert("OMG You Clicked Me")
    });
    let box = document.querySelector('#box');
    for(let i=0; i<SQUARE_COUNT; i++){
        let square = document.createElement('img');
        square.src = 'laughing_man.jpg';
        square.alt = 'Catch the laughing man!';
        square.class = 'square';
        box.appendChild(square);
    }
});