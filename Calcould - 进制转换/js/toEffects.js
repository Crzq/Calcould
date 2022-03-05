

// Like Value for DOTA2, this js document is main for " = ".
// = 的作用不仅是输出 = ，同时要计算结果
// 运算符像小数点一样，不能单独使用，但可重复使用
/*又遇到了相同的问题：关于乘与除，保险用 * 与 / ，所以想使 ×, ÷ 能有相同的作用。
From backgroundColor:
<input type="button" value="设为自定义颜色" onclick="color(prompt('请输入颜色或其代码','#3de1ad'))">
若是能输入红色代替red就更智能*/

function operatorAdd() {
    // 这种 str = str + '+' 推翻了以前的运算方式，从而开启了进制转换的大门
    var result = document.getElementById('result').innerHTML;
    // alert(typeof result);
    result = result + '+';
    // alert(result);
    return document.getElementById('result').innerHTML = result;

    /*const node = document.createElement("text");
    const textNode = document.createTextNode("+");
    node.appendChild(textNode);
    document.getElementById("result").appendChild(node);*/
}
function operatorSub() {
    var result = document.getElementById('result').innerHTML;
    result += '-';
    return  document.getElementById('result').innerHTML = result;
    /*const node = document.createElement("text");
    const textNode = document.createTextNode("-");
    node.appendChild(textNode);
    document.getElementById("result").appendChild(node);*/
}
function operatorMul() {
    var result = document.getElementById('result').innerHTML;
    result += '*';
    return document.getElementById('result').innerHTML = result;
    /*const node = document.createElement("text");
    const textNode = document.createTextNode("*");
    node.appendChild(textNode);
    document.getElementById("result").appendChild(node);*/
}
function operatorDiv() {
    var result = document.getElementById('result').innerHTML;
    result += '/';
    return document.getElementById('result').innerHTML = result;
    /*const node = document.createElement("text");
    const textNode = document.createTextNode("/");
    node.appendChild(textNode);
    document.getElementById("result").appendChild(node);*/
}


/*要有这样的效果：点击等于号，能够：
1.输出等号 2.计算等号前的式子，总之Python可以算出来*/
// 注意：输出结果保留式子应为追加，在等号后，或者只输出结果，为覆盖
function operatorEql() {
    SwitchNum();
    /*var result = document.getElementById('result').innerHTML;
    // result += '=';
    alert(result)
    return document.getElementById('result').innerHTML = eval(result);
    // The most important word: textContent
    /!*var thValue = document.getElementById("result").textContent;
    const node = document.createElement("text");
    const textNode = document.createTextNode("=");
    node.appendChild(textNode);
    document.getElementById("result").appendChild(node);*!/
    // alert (eval(thValue));
    // document.getElementById('result').innerHTML =  eval(thValue);*/
}



function operatorRmv() {
    var result = document.activeElement.value;
    if (result === '0') {
        return result;
    } else {
        result = result.slice(0, result.length - 1);
        if (result === '') {
            result = '0';
        }
        document.activeElement.value = result;
    }
    SwitchNum();
    /*// removeChild()默认是从[0]开始删除，所以要实现backspace退格，要获取元素个数；
    // （而且使用等号计算后，会一下子删除所有元素）
    // 或者说根据th的宽度，设一个比较大的数，用if函数一个一个减。
    // 再或者转换成数组，删除

    var thValue = document.getElementById("result").textContent;
    // thValue.removeChild(thValue.childNodes[0]);
    // alert (thValue);
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
    }*/
}




