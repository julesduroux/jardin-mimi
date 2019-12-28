export function genereateGrid(rows, columns) {
  let cells = [];

  for (let i = 0; i < rows; i++) {
    cells[i] = [];
    for (let j = 0; j < columns; j++) {
      cells[i][j] = {contents: []};
    }
  }
  return cells;
}
