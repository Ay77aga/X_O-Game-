let status = (text) => document.querySelector('.status').textContent = text;
let player = 'X';
let audio = document.createElement('audio');
audio.src = '../audio/click.mp3';
let btns = document.querySelectorAll('.roles button');
let roles = document.querySelector('.roles');
let container = document.querySelector('.container');



status('Choose Game Roles');
btns.forEach((btn) => {
  btn.addEventListener('click', function() {
    document.querySelector('.status').textContent = `Player: ${player}`;
    if (btn.classList.contains('two')) {
      two_player();
      roles.style.transform = 'scale(0)';
    } else if (btn.classList.contains('singl')) {
      w = true;
      singl_payer();
      roles.style.transform = 'scale(0)';
    }
  });
});

function restart(cells) {
  // ReStart
  document.querySelector('.restart').addEventListener('click', () => {
    cells.forEach((cell) => {
      cell.textContent = '';
      cell.style.background = 'transparent';
      console.log(cell.textContent)
    });
    status('Choose Game Roles');
    document.querySelector('.return').style = 'transform scale(0)';
    roles.style.transform = 'scale(1)';
  });
}

//  render cell 
function render(ss) {
  container.textContent = '';
  for (let index = 1; index <= 9; index++) {
    let cell = document.createElement('div');
    // cell.textContent = index;
    cell.className = `cell ${ss}`;
    container.appendChild(cell);
  }

}