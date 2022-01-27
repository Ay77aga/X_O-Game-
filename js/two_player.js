const two_player = () => {
  render('cell_two');
  let cells = document.querySelectorAll('.cell_two');
  cells.forEach(function(cell) {
    cell.addEventListener('click', function() {
      // console.log(this.id);
      if (player == 'O' && this.textContent == '') {
        this.textContent = 'O';
        player = 'X';
      }
      if (player == 'X' && this.textContent == '') {
        this.textContent = 'X';
        player = 'O';
      }
      audio.play();
      status(`Player: ${player}`);
      win_rols(cells);
    });
  });
  restart(cells);
}

function win_rols(cells) {
  win(cells[0], cells[1], cells[2]);
  win(cells[3], cells[4], cells[5]);
  win(cells[6], cells[7], cells[8]);
  win(cells[0], cells[3], cells[6]);
  win(cells[1], cells[4], cells[7]);
  win(cells[2], cells[5], cells[8]);
  win(cells[0], cells[4], cells[8]);
  win(cells[2], cells[4], cells[6]);
}
let w = true;
function win(cell1, cell2, cell3) {
  if (cell1.textContent == cell2.textContent && cell1.textContent == cell3.textContent && cell3.textContent !== '') {
    cell1.style.background = 'var(--m-color)';
    cell2.style.background = 'var(--m-color)';
    cell3.style.background = 'var(--m-color)';
    document.querySelector('.return h1 span').textContent = `[ ${cell2.textContent} ]`;
    document.querySelector('.return').style.transform = 'scale(1)';
  w = false;
    
  }
}