/* JavaScript Document */

const save = document.querySelector('#save');
save.onclick = function menu () {
    // alert(document.querySelector('#box').style.display);
    if (document.querySelector('#list').style.display === 'block') {
        document.querySelector('#list').style.display = 'none';
        document.querySelector('#menu').style.backgroundColor = 'transparent';
        document.querySelector('#menu').style.animation = 'disappear .1s linear';
        document.querySelector('#list').style.animation = 'disappear .1s linear';
        document.querySelector('#notice').style.display = 'block';
    } else {
        document.querySelector('#list').style.display = 'block';
        document.querySelector('#menu').style.backgroundColor = 'rgb(231, 231, 231)';
        document.querySelector('#menu').style.animation = 'spread .1s linear';
        document.querySelector('#list').style.animation = 'spread .1s linear';
        document.querySelector('#notice').style.display = 'none';
    }
}


