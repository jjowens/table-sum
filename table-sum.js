  function sumRow(tableID, rowIndex) {
    var total = 0;
    var tableObj = document.getElementById(tableID);

    if (tableObj) {
        var rowObj = tableObj.rows[rowIndex];
        var cells = rowObj.getElementsByTagName("td");

        if (cells) {
            for (var colIndex=0; colIndex < cells.length; colIndex++) {
                total += Number(cells[colIndex].innerText);
            }
        }
    }
    return total;
}

function sumColumn(tableID, colIndex) {
    var total = 0;
    var tableObj = document.getElementById(tableID);

    if (tableObj) {
        var rowTotal = tableObj.rows.length;

        console.log("Total Rows: " + rowTotal);

        for (var rowIndex = 0; rowIndex < rowTotal; rowIndex++) {
            var rowObj = tableObj.rows[rowIndex];
            var cells = rowObj.getElementsByTagName("td");

            if (cells) {
                var cellObj = cells[colIndex];

                if (cellObj) {
                    total += Number(cellObj.innerText);
                }

            }
        }

    }
    return total;
}

function sumAllCells(tableID) {
    var total = 0;
    var tableObj = document.getElementById(tableID);

    if (tableObj) {
        var cells = tableObj.getElementsByTagName("td");

        if (cells) {
            for (var colIndex=0; colIndex < cells.length; colIndex++) {
                total += Number(cells[colIndex].innerText);
            }
        }
    }

    return total;
}

function updateSumCell(tableID, sumType, cellID, index) {
    if (sumType === "cols") {
        var total = sumRow(tableID, index);
        var cell = document.getElementById(cellID);

        if (cell) {
            cell.innerText = total;
        }
    }

    if (sumType === "rows") {
        var total = sumColumn(tableID, index);
        var cell = document.getElementById(cellID);

        if (cell) {
            cell.innerText = total;
        }
    }
}

function updateAllSumCells(tableID, cellID) {
    var total = sumAllCells(tableID);
    var cell = document.getElementById(cellID);

    if (cell) {
        cell.innerText = total;
    }
}