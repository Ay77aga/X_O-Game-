const singl_payer = () => {
  render('cell_singl');
  player = 'X';
  status(`Player: ${player}`);
  let cells = document.querySelectorAll('.cell_singl');

  cells.forEach((cell) => {
    cell.addEventListener('click', function() {
      if (cell.textContent == '') {
        this.textContent = player;
        robot_play(cells);
        audio.play();
      }
      status(`Player: ${player}`);
      win_rols(cells);
    });
  });
  restart(cells);
}
// ########################################
function robot_play(cells) {
  let empty = [];
  cells.forEach((cell) => {
    cell.textContent == '' ? empty.push(cell) : '';
  });
  if (empty.length > 0) {
    empty[Math.floor(Math.random() * empty.length)].textContent = 'O'
  }
}