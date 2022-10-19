// innerHTML会覆盖原本内容，appendChild是追加内容

/*如果0前面有数字，那么使用appendChild、追加，
如果0前面没有数字或者数字为0，那么使用innerHTML、覆盖。
故此处应考虑用 if 函数*/
function changeValue0() {
    var thValue = document.getElementById("result");
    // 用alert测试自己获取的值是否正确
    // alert (thValue.innerHTML);
    if (thValue.innerHTML === '0') {
        thValue.innerHTML = '0';
    }
    else {
        const node = document.createElement("text");
        const textNode = document.createTextNode("0");
        node.appendChild(textNode);
        document.getElementById("result").appendChild(node);
    }
}
function changeValue1() {
    var thValue = document.getElementById("result");
    if (thValue.innerHTML === '0') {
        thValue.innerHTML = '1';
    }
    else {
        const node = document.createElement("text");
        const textNode = document.createTextNode("1");
        node.appendChild(textNode);
        document.getElementById("result").appendChild(node);
    }
}
function changeValue2() {
    var thValue = document.getElementById("result");
    if (thValue.innerHTML === '0') {
        thValue.innerHTML = '2';
    }
    else {
        const node = document.createElement("text");
        const textNode = document.createTextNode("2");
        node.appendChild(textNode);
        document.getElementById("result").appendChild(node);
    }
}
function changeValue3() {
    var thValue = document.getElementById("result");
    if (thValue.innerHTML === '0') {
        thValue.innerHTML = '3';
    }
    else {
        const node = document.createElement("text");
        const textNode = document.createTextNode("3");
        node.appendChild(textNode);
        document.getElementById("result").appendChild(node);
    }
}
function changeValue4() {
    var thValue = document.getElementById("result");
    if (thValue.innerHTML === '0') {
        thValue.innerHTML = '4';
    }
    else {
        const node = document.createElement("text");
        const textNode = document.createTextNode("4");
        node.appendChild(textNode);
        document.getElementById("result").appendChild(node);
    }
}
function changeValue5() {
    var thValue = document.getElementById("result");
    if (thValue.innerHTML === '0') {
        thValue.innerHTML = '5';
    }
    else {
        const node = document.createElement("text");
        const textNode = document.createTextNode("5");
        node.appendChild(textNode);
        document.getElementById("result").appendChild(node);
    }
}
function changeValue6() {
    var thValue = document.getElementById("result");
    if (thValue.innerHTML === '0') {
        thValue.innerHTML = '6';
    }
    else {
        const node = document.createElement("text");
        const textNode = document.createTextNode("6");
        node.appendChild(textNode);
        document.getElementById("result").appendChild(node);
    }
}
function changeValue7() {
    var thValue = document.getElementById("result");
    if (thValue.innerHTML === '0') {
        thValue.innerHTML = '7';
    }
    else {
        const node = document.createElement("text");
        const textNode = document.createTextNode("7");
        node.appendChild(textNode);
        document.getElementById("result").appendChild(node);
    }
}
function changeValue8() {
    var thValue = document.getElementById("result");
    if (thValue.innerHTML === '0') {
        thValue.innerHTML = '8';
    }
    else {
        const node = document.createElement("text");
        const textNode = document.createTextNode("8");
        node.appendChild(textNode);
        document.getElementById("result").appendChild(node);
    }
}
function changeValue9() {
    var thValue = document.getElementById("result");
    if (thValue.innerHTML === '0') {
        thValue.innerHTML = '9';
    }
    else {
        const node = document.createElement("text");
        const textNode = document.createTextNode("9");
        node.appendChild(textNode);
        document.getElementById("result").appendChild(node);
    }
}
// .比较特殊，前面为0不覆盖,且不能单独输入,且不能在一个数字中出现2次
// 有一种方法，查询数字中 . 的个数，不能大于1个，多了就不能输入了
function changeValueDot() {         // 不知道为何没有生效
    var thValue = document.getElementById("result");
    // alert (thValue.textContent);



    if (thValue.textContent === thValue.textContent.slice(0, thValue.length - 2) + '..') {
        thValue.textContent = thValue.textContent.slice(0, thValue.length - 2) + '.';
    }
    else {
        const node = document.createElement("text");
        const textNode = document.createTextNode(".");
        node.appendChild(textNode);
        document.getElementById("result").appendChild(node);
    }
}

function returnZero() {
    document.getElementById('result').innerHTML = '0';
}
