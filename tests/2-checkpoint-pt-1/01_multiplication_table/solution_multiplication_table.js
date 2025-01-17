/* eslint-disable no-unused-vars */
function multiplicationTable(rows, columns) {
  const table = [];

  for (let i = 1; i <= rows; i++) {
    const row = [];
    for (let j = 1; j <= columns; j++) {
      row.push(i * j);
    }
    table.push(row);
  }

  return table;
}
