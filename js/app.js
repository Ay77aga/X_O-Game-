let status = (text) => document.querySelector('.status').textContent = text;
let player = 'X';
let audio = document.createElement('audio');
audio.src = '../audio/click.mp3';
let btns = document.querySelectorAll('.roles button');
let roles = document.querySelector('.roles');
let container = document.querySelector('.container');
let done = false;
// ########################################

status('Choose Game Roles');
btns.forEach((btn) => {
  btn.addEventListener('click', function() {
    document.querySelector('.status').textContent = `Player: ${player}`;
    if (this.classList.contains('two')) {
      two_player();
      roles.style.transform = 'scale(0)';
    } else {
      singl_payer();
      roles.style.transform = 'scale(0)';
    }
  });
});

// ########################################

//  Functions 
function restart(cells) {
  // ReStart
  document.querySelector('.restart').addEventListener('click', () => {
    cells.forEach((cell) => {
      cell.textContent = '';
      cell.style.background = 'rgba(0, 0, 0, .7;';
    });
    status('Choose Game Roles');
    document.querySelector('.return').style = 'transform scale(0)';
    roles.style.transform = 'scale(1)';
  });
}

//  Render Cells 
function render(_class) {
  container.textContent = '';
  for (let index = 1; index <= 9; index++) {
    let cell = document.createElement('div');
    // cell.textContent = index;
    cell.className = `cell ${_class}`;
    container.appendChild(cell);
  }
}
//  Set Winner Roles
function win_rols(cells) {
  // width
  win(cells[0], cells[1], cells[2]);
  win(cells[3], cells[4], cells[5]);
  win(cells[6], cells[7], cells[8]);
  // height
  win(cells[0], cells[3], cells[6]);
  win(cells[1], cells[4], cells[7]);
  win(cells[2], cells[5], cells[8]);
  //  X
  win(cells[0], cells[4], cells[8]);
  win(cells[2], cells[4], cells[6]);
}

// Catch Winner
function win(cell1, cell2, cell3) {
  if (cell1.textContent == cell2.textContent && cell1.textContent == cell3.textContent && cell3.textContent !== '') {
    cell1.style.background = 'var(--m-color)';
    cell2.style.background = 'var(--m-color)';
    cell3.style.background = 'var(--m-color)';
    document.querySelector('.return h1 span').textContent = `[ ${cell2.textContent} ]`;
    document.querySelector('.return').style.transform = 'scale(1)';
 done = true;
  }
}