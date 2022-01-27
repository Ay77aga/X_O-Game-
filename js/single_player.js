const singl_payer = () => {
  render('cell_singl');
  let cells = document.querySelectorAll('.cell_singl');
  let player = 'X';
  let robot = 'O';
  let state = 'X'
  cells.forEach((cell) => {
    cell.addEventListener('click', function() {
      if (cell.textContent == '') {
        this.textContent = player;
        if (w) {
          robot_play(cells);
        }
        audio.play();
      }
      status(`Player: ${state}`);
      win_rols(cells);
    });
  });
  restart(cells);
}

function robot_play(cells) {
  if (w){
    let empty = [];
  cells.forEach((cell) => {
    cell.textContent == '' ? empty.push(cell) : '';
  });
  if (empty.length > 0) {
    empty[Math.floor(Math.random() * empty.length)].textContent = 'O'
  }
}
}