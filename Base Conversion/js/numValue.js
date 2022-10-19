
var bin = document.querySelector('#bin');
var oct = document.querySelector('#oct');
var dec = document.querySelector('#dec');
var hex = document.querySelector('#hex');

function SwitchNum () {
    var binStr = bin.value;
    var octStr = oct.value;
    var decStr = dec.value;
    var hexStr = hex.value;
    //alert(binStr);
    // 二次使用需重新获取值
    var binNum = parseInt(bin.value);
    var octNum = parseInt(oct.value);
    var decNum = parseInt(dec.value);
    var hexNum = parseInt(hex.value);
    if (binStr !== '' && document.getElementById('bin') === document.activeElement) {
        // 用 binStr 也行
        oct.value = Number(('0B' + binStr)).toString(8);
        dec.value = Number(('0B' + binNum)).toString(10);
        hex.value = Number(('0B' + binNum)).toString(16);
    } else if (octStr !== '' && document.getElementById('oct') === document.activeElement) {
        bin.value = Number('0O' + octNum).toString(2);
        dec.value = Number('0O' + octNum).toString(10);
        hex.value = Number('0O' + octNum).toString(16);
    } else if (decStr !== '' && document.getElementById('dec') === document.activeElement) {
        bin.value = decNum.toString(2);
        oct.value = decNum.toString(8);
        hex.value = decNum.toString(16);
    } else if (hexStr !== '' && document.getElementById('hex') === document.activeElement) {
        bin.value = Number('0X' + hexStr).toString(2);
        oct.value = Number('0X' + hexStr).toString(8);
        dec.value = Number('0X' + hexStr).toString(10);
    }
}
// 我懂了，按下数字就相当于onclick
// 谁变，便以谁为基准


document.onkeydown = function (event) {
    var e = event || window.event || arguments.callee.caller.arguments[0];
    // Enter
    if (e && e.keyCode == 13) { // 数字键盘的Enter--108没有生效
        SwitchNum();
        // alert(111)
    }
}

// innerHTML会覆盖原本内容，appendChild是追加内容

/*如果0前面有数字，那么使用appendChild、追加，
如果0前面没有数字或者数字为0，那么使用innerHTML、覆盖。
故此处应考虑用 if 函数*/
function changeValue0() {
    var result = document.activeElement.value;
    if (result === '0') {
        document.activeElement.value = '0';
    } else {
        result += '0';
        return document.activeElement.value = result;
    }
    alert('111');
    SwitchNum();


    /*var thValue = document.getElementById("result");
    // 用alert测试自己获取的值是否正确
    // alert (thValue.innerHTML);
    if (thValue.innerHTML === '0') {
        thValue.innerHTML = '0';
    }
    else {
        var result = document.getElementById('result').innerHTML;
        result += '0';
        return document.getElementById('result').innerHTML = result;
        /!*const node = document.createElement("text");
        const textNode = document.createTextNode("0");
        node.appendChild(textNode);
        document.getElementById("result").appendChild(node);*!/
    }*/
}
function changeValue1() {
    var result = document.activeElement.value;
    if (result === '0') {
        document.activeElement.value = '1';
    } else {
        result += '1';
        return document.activeElement.value = result;
    }
    SwitchNum();

    /*var thValue = document.getElementById("result");
    if (thValue.innerHTML === '0') {
        thValue.innerHTML = '1';
    }
    else {
        var result = document.getElementById('result').innerHTML;
        result += '1';
        return document.getElementById('result').innerHTML = result;
        /!*const node = document.createElement("text");
        const textNode = document.createTextNode("1");
        node.appendChild(textNode);
        document.getElementById("result").appendChild(node);*!/
    }*/
}
function changeValue2() {
    var result = document.activeElement.value;
    if (result === '0') {
        document.activeElement.value = '2';
    } else {
        result += '2';
        return document.activeElement.value = result;
    }
    SwitchNum();

    /*var thValue = document.getElementById("result");
    if (thValue.innerHTML === '0') {
        thValue.innerHTML = '2';
    }
    else {
        var result = document.getElementById('result').innerHTML;
        result += '2';
        return document.getElementById('result').innerHTML = result;
        /!*const node = document.createElement("text");
        const textNode = document.createTextNode("2");
        node.appendChild(textNode);
        document.getElementById("result").appendChild(node);*!/
    }*/
}
function changeValue3() {
    var result = document.activeElement.value;
    if (result === '0') {
        document.activeElement.value = '3';
    } else {
        result += '3';
        return document.activeElement.value = result;
    }
    SwitchNum();

    /*var thValue = document.getElementById("result");
    if (thValue.innerHTML === '0') {
        thValue.innerHTML = '3';
    }
    else {
        var result = document.getElementById('result').innerHTML;
        result += '3';
        return document.getElementById('result').innerHTML = result;
        /!*const node = document.createElement("text");
        const textNode = document.createTextNode("3");
        node.appendChild(textNode);
        document.getElementById("result").appendChild(node);*!/
    }*/
}
function changeValue4() {
    var result = document.activeElement.value;
    if (result === '0') {
        document.activeElement.value = '4';
    } else {
        result += '4';
        return document.activeElement.value = result;
    }
    SwitchNum();

    /*var thValue = document.getElementById("result");
    if (thValue.innerHTML === '0') {
        thValue.innerHTML = '4';
    }
    else {
        var result = document.getElementById('result').innerHTML;
        result += '4';
        return document.getElementById('result').innerHTML = result;
        /!*const node = document.createElement("text");
        const textNode = document.createTextNode("4");
        node.appendChild(textNode);
        document.getElementById("result").appendChild(node);*!/
    }*/
}
function changeValue5() {
    var result = document.activeElement.value;
    if (result === '0') {
        document.activeElement.value = '5';
    } else {
        result += '5';
        return document.activeElement.value = result;
    }
    SwitchNum();

    /*var thValue = document.getElementById("result");
    if (thValue.innerHTML === '0') {
        thValue.innerHTML = '5';
    }
    else {
        var result = document.getElementById('result').innerHTML;
        result += '5';
        return document.getElementById('result').innerHTML = result;
        /!*const node = document.createElement("text");
        const textNode = document.createTextNode("5");
        node.appendChild(textNode);
        document.getElementById("result").appendChild(node);*!/
    }*/
}
function changeValue6() {
    var result = document.activeElement.value;
    if (result === '0') {
        document.activeElement.value = '6';
    } else {
        result += '6';
        return document.activeElement.value = result;
    }
    SwitchNum();

    /*var thValue = document.getElementById("result");
    if (thValue.innerHTML === '0') {
        thValue.innerHTML = '6';
    }
    else {
        var result = document.getElementById('result').innerHTML;
        result += '6';
        return document.getElementById('result').innerHTML = result;
        /!*const node = document.createElement("text");
        const textNode = document.createTextNode("6");
        node.appendChild(textNode);
        document.getElementById("result").appendChild(node);*!/
    }*/
}
function changeValue7() {
    var result = document.activeElement.value;
    if (result === '0') {
        document.activeElement.value = '7';
    } else {
        result += '7';
        return document.activeElement.value = result;
    }
    SwitchNum();

    /*var thValue = document.getElementById("result");
    if (thValue.innerHTML === '0') {
        thValue.innerHTML = '7';
    }
    else {
        var result = document.getElementById('result').innerHTML;
        result += '7';
        return document.getElementById('result').innerHTML = result;
        /!*const node = document.createElement("text");
        const textNode = document.createTextNode("7");
        node.appendChild(textNode);
        document.getElementById("result").appendChild(node);*!/
    }*/
}
function changeValue8() {
    var result = document.activeElement.value;
    if (result === '0') {
        document.activeElement.value = '8';
    } else {
        result += '8';
        return document.activeElement.value = result;
    }
    SwitchNum();

    /*var thValue = document.getElementById("result");
    if (thValue.innerHTML === '0') {
        thValue.innerHTML = '8';
    }
    else {
        var result = document.getElementById('result').innerHTML;
        result += '8';
        return document.getElementById('result').innerHTML = result;
        /!*const node = document.createElement("text");
        const textNode = document.createTextNode("8");
        node.appendChild(textNode);
        document.getElementById("result").appendChild(node);*!/
    }*/
}
function changeValue9() {
    var result = document.activeElement.value;
    if (result === '0') {
        document.activeElement.value = '9';
    } else {
        result += '9';
        return document.activeElement.value = result;
    }
    SwitchNum();

    /*var thValue = document.getElementById("result");
    if (thValue.innerHTML === '0') {
        thValue.innerHTML = '9';
    }
    else {
        var result = document.getElementById('result').innerHTML;
        result += '9';
        return document.getElementById('result').innerHTML = result;
        /!*const node = document.createElement("text");
        const textNode = document.createTextNode("9");
        node.appendChild(textNode);
        document.getElementById("result").appendChild(node);*!/
    }*/
}
function changeValueA() {
    var result = document.activeElement.value;
    if (result === '0') {
        document.activeElement.value = 'A';
    } else {
        result += 'A';
        return document.activeElement.value = result;
    }
    SwitchNum();

    /*var thValue = document.getElementById("result");
    if (thValue.innerHTML === '0') {
        thValue.innerHTML = 'A';
    }
    else {
        var result = document.getElementById('result').innerHTML;
        // 这样是不行的，要提前把A转换成数字
        result = '0X' + result + 'A';
        return document.getElementById('result').innerHTML = result;
        /!*const node = document.createElement("text");
        const textNode = document.createTextNode("A");
        node.appendChild(textNode);
        document.getElementById("result").appendChild(node);*!/
    }*/
}
function changeValueB() {
    var result = document.activeElement.value;
    if (result === '0') {
        document.activeElement.value = 'B';
    } else {
        result += 'B';
        return document.activeElement.value = result;
    }
    SwitchNum();

    /*var thValue = document.getElementById("result");
    if (thValue.innerHTML === '0') {
        thValue.innerHTML = 'B';
    }
    else {
        var result = document.getElementById('result').innerHTML;
        result += 'B';
        return document.getElementById('result').innerHTML = result;
        /!*const node = document.createElement("text");
        const textNode = document.createTextNode("B");
        node.appendChild(textNode);
        document.getElementById("result").appendChild(node);*!/
    }*/
}
function changeValueC() {
    var result = document.activeElement.value;
    if (result === '0') {
        document.activeElement.value = 'C';
    } else {
        result += 'C';
        return document.activeElement.value = result;
    }
    SwitchNum();

    /*var thValue = document.getElementById("result");
    if (thValue.innerHTML === '0') {
        thValue.innerHTML = 'C';
    }
    else {
        var result = document.getElementById('result').innerHTML;
        result += 'C';
        return document.getElementById('result').innerHTML = result;
        /!*const node = document.createElement("text");
        const textNode = document.createTextNode("C");
        node.appendChild(textNode);
        document.getElementById("result").appendChild(node);*!/
    }*/
}
function changeValueD() {
    var result = document.activeElement.value;
    if (result === '0') {
        document.activeElement.value = 'D';
    } else {
        result += 'D';
        return document.activeElement.value = result;
    }
    SwitchNum();

    /*var thValue = document.getElementById("result");
    if (thValue.innerHTML === '0') {
        thValue.innerHTML = 'D';
    }
    else {
        var result = document.getElementById('result').innerHTML;
        result += 'D';
        return document.getElementById('result').innerHTML = result;
        /!*const node = document.createElement("text");
        const textNode = document.createTextNode("D");
        node.appendChild(textNode);
        document.getElementById("result").appendChild(node);*!/
    }*/
}
function changeValueE() {
    var result = document.activeElement.value;
    if (result === '0') {
        document.activeElement.value = 'E';
    } else {
        result += 'E';
        return document.activeElement.value = result;
    }
    SwitchNum();

    /*var thValue = document.getElementById("result");
    if (thValue.innerHTML === '0') {
        thValue.innerHTML = 'E';
    }
    else {
        var result = document.getElementById('result').innerHTML;
        result += 'E';
        return document.getElementById('result').innerHTML = result;
        /!*const node = document.createElement("text");
        const textNode = document.createTextNode("E");
        node.appendChild(textNode);
        document.getElementById("result").appendChild(node);*!/
    }*/
}
function changeValueF() {
    var result = document.activeElement.value;
    if (result === '0') {
        document.activeElement.value = 'F';
    } else {
        result += 'F';
        return document.activeElement.value = result;
    }

    SwitchNum();

    /*var thValue = document.getElementById("result");
    if (thValue.innerHTML === '0') {
        thValue.innerHTML = 'F';
    }
    else {
        var result = document.getElementById('result').innerHTML;
        result += 'F';
        return document.getElementById('result').innerHTML = result;
        /!*const node = document.createElement("text");
        const textNode = document.createTextNode("F");
        node.appendChild(textNode);
        document.getElementById("result").appendChild(node);*!/
    }*/
}
// .比较特殊，前面为0不覆盖,且不能单独输入,且不能在一个数字中出现2次
// 有一种方法，查询数字中 . 的个数，不能大于1个，多了就不能输入了
function changeValueDot() {         // 不知道为何没有生效
    var thValue = document.getElementById("result");
    // alert (thValue.textContent);


    // 1月8日：如果是浮点数，就不能输入 . 了--每输入 . 前，判断是否为浮点数
    if (thValue.textContent === thValue.textContent.slice(0, thValue.length - 2) + '..') {
        thValue.textContent = thValue.textContent.slice(0, thValue.length - 2) + '.';
    }
    else {
        var result = document.getElementById('result').innerHTML;
        result += '.';
        return document.getElementById('result').innerHTML = result;
        /*const node = document.createElement("text");
        const textNode = document.createTextNode(".");
        node.appendChild(textNode);
        document.getElementById("result").appendChild(node);*/
    }
}

function returnZero() {
    document.activeElement.value = '0';
    SwitchNum();
    // document.getElementById('result').innerHTML = '0';
}
