document.onkeydown = function (event) {
    var e = event || window.event || arguments.callee.caller.arguments[0];
    var thValue = document.getElementById("result");
    // 0
    if (e && e.keyCode == 96 || e && e.keyCode == 48) {
        // 用alert测试自己获取的值是否正确
        //alert(e);
        //alert(e.keyCode);
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
    // 1
    if (e && e.keyCode == 97 || e && e.keyCode == 49) {
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
    // 2
    if (e && e.keyCode == 98 || e && e.keyCode == 50) {
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
    // 3
    if (e && e.keyCode == 99 || e && e.keyCode == 51) {
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
    // 4
    if (e && e.keyCode == 100 || e && e.keyCode == 52) {
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
    // 5
    if (e && e.keyCode == 101 || e && e.keyCode == 53) {
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
    // 6
    if (e && e.keyCode == 102 || e && e.keyCode == 54) {
        if (thValue.innerHTML === '0') {
            thValue.innerHTML = '3';
        }
        else {
            const node = document.createElement("text");
            const textNode = document.createTextNode("6");
            node.appendChild(textNode);
            document.getElementById("result").appendChild(node);
        }
    }
    // 7
    if (e && e.keyCode == 103 || e && e.keyCode == 55) {
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
    // 8
    if (e && e.keyCode == 104 || e && e.keyCode == 56) {
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
    // 9
    if (e && e.keyCode == 105 || e && e.keyCode == 57) {
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
    // .
    if (e && e.keyCode == 110 || e && e.keyCode == 190) {
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

    // +
    if (e && e.keyCode == 107) {
        const node = document.createElement("text");
        const textNode = document.createTextNode("+");
        node.appendChild(textNode);
        document.getElementById("result").appendChild(node);
    }
    // -
    if (e && e.keyCode == 109) {
        const node = document.createElement("text");
        const textNode = document.createTextNode("-");
        node.appendChild(textNode);
        document.getElementById("result").appendChild(node);
    }
    // *
    if (e && e.keyCode == 106) {
        const node = document.createElement("text");
        const textNode = document.createTextNode("*");
        node.appendChild(textNode);
        document.getElementById("result").appendChild(node);
    }
    // ÷
    if (e && e.keyCode == 111) {
        const node = document.createElement("text");
        const textNode = document.createTextNode("/");
        node.appendChild(textNode);
        document.getElementById("result").appendChild(node);
    }
    // Enter
    if (e && e.keyCode == 13) { // 数字键盘的Enter--108没有生效
        // The most important word: textContent
        var thValue = document.getElementById("result").textContent;
        const node = document.createElement("text");
        const textNode = document.createTextNode("=");
        node.appendChild(textNode);
        document.getElementById("result").appendChild(node);
        // alert (eval(thValue));
        document.getElementById('result').innerHTML =  eval(thValue);
    }

    // BackSpace
    if (e && e.keyCode == 8) {
        var thValue = document.getElementById("result").textContent;
        if (thValue === '0') {
            return thValue;
        }
        else {
            // 删除字符串最后一位
            thValue = thValue.slice(0, thValue.length - 1);
            // alert (thValue);
            if (thValue === '') {       // 作用是让th框始终为0
                thValue = 0;
            }
            document.getElementById('result').innerHTML = thValue;
        }
    }

    // C
    if (e && e.keyCode == 27 || e && e.keyCode == 46) {
        document.getElementById('result').innerHTML = '0';
    }

};