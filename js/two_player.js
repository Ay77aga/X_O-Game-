const two_player = () => {
  render('cell_two');
  let cells = document.querySelectorAll('.cell_two');
  cells.forEach(function(cell) {
    cell.addEventListener('click', function() {
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