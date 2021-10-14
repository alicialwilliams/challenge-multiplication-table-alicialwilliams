const table = document.getElementById('mult-table');



let btn = document.getElementById("submit_button").addEventListener("click", createTable)

function createTable(event) {
    let output = '';
    event.preventDefault()
    let numOfRows = document.getElementById("row_input").value
    let numOfColumns = document.getElementById("column_input").value

    console.log(numOfRows)
    console.log(numOfColumns)

    for (let i = 0; i <= parseInt(numOfRows) + 1; i++) {
        output += '<tr>';

        for (let j = 0; j <= parseInt(numOfColumns) + 1; j++) {
            if (i == 0 && j == 0)
                output += '<th>&times</th>'
            else if (j >= 1 && i == 0) {

                output += '<th>' + (j - 1) + '</th>'
            } else if (i >= 1 && j == 0) {
                output += '<th>' + (i - 1) + '</th>'
            } else {
                output += '<td>' + (i - 1) * (j - 1) + '</td>'
            }
        }
        output += '</tr>'
    }

    table.innerHTML = output;
}

