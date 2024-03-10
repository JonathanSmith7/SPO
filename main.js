const { app, BrowserWindow, ipcMain } = require('electron');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 1000
  });

  mainWindow.removeMenu();
  mainWindow.loadFile('main.html');
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready',createWindow);

ipcMain.on('quit-app', () => {
  app.quit();
});