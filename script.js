let colors = ['#000000', '#14213d', '#fca311', '#e5e5e5', '#ef476f'];

document.getElementById('button').addEventListener('click', changeColor);

function changeColor(){
    let color = parseInt(Math.random()*colors.length);
    document.querySelector('body').style.backgroundColor = colors[color];
    document.querySelector('button').style.backgroundColor = colors[color];
}
