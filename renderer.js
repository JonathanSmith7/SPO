const { remote } = require('electron');

document.getElementById("openWindowButton").addEventListener("click", () => {
    const newWindow = new remote.BrowserWindow({ width: 800, height: 600 });
    newWindow.loadURL('test.html');
});

document.getElementById("startTestButton").addEventListener("click", () => {
    window.location.href = 'test.html';
});