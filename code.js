const table = document.getElementById('mult-table');
let output = '';

for (let i = 0; i <= 10; i++) {
    output += '<tr>';
    for (let j = 0; j <= 10; j++) {
        if (i === 0 && j === 0)
            output += '<th>&times</th>'//x factor
        else {
            if (i === 0 || j === 0)
                output += '<th>' + i * j + '</th>'
            else {
                output += '<td>' + i * j + '</td>'
            }
        }

    }
    output += '</tr>'

}

table.innerHTML = output;