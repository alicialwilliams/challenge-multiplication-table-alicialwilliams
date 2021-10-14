const table = document.getElementById('mult-table');

let output = '';
for (let i = 0; i <= 11; i++) {
    output += '<tr>';
    for (let j = 0; j <= 11; j++) {
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

