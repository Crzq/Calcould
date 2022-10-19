const tds = document.getElementsByTagName('td');
for (let i in tds) {
    tds[i].onclick = function () {
        operatorEql();
    }
}