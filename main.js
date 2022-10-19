const {app, BrowserWindow} = require('electron');
const path = require('path');

let mainWindow = null; // 声明要打开的主窗口

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width:625,
        height:652,
        icon: path.join(__dirname, './icons/logo.ico'),
    })
    mainWindow.loadFile('Standard/index.html'); // 加载html页面
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});