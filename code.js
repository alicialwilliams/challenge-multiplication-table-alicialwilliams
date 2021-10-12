const table = document.getElementById('mult-table');
let output = '';

for (let i = 1; i <= 12; i++) {
    output += '<tr>';
    for (let j = 1; j <= 12; j++) {
        if (i === 1 && j === 1)
            output += '<th>&times</th>'//x factor
        else {
            if (i === 1 || j === 1)
                output += '<th>' + i * j + '</th>'
            else {
                output += '<td>' + i * j + '</td>'
            }
        }

    }
    output += '</tr>'

}

table.innerHTML = output;