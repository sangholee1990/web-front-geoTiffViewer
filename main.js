// アプリケーション作成用のモジュールを読み込み
const path = require("path");
const electron = require("electron");
const app = electron.app;
const { BrowserWindow, ipcMain, dialog } = electron;

// メインウィンドウ
let mainWindow;

function createWindow() {
  // メインウィンドウを作成します
  mainWindow = new BrowserWindow();
  mainWindow.loadFile("./show_rain_distribution.html");

  // メインウィンドウが閉じられたときの処理
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

//  初期化が完了した時の処理
app.on("ready", createWindow);

// 全てのウィンドウが閉じたときの処理
app.on("window-all-closed", () => {
  // macOSのとき以外はアプリを終了させます
  if (process.platform !== "darwin") {
    app.quit();
  }
});
// アプリケーションがアクティブになった時の処理(Macだと、Dockがクリックされた時）
app.on("activate", () => {
  /// メインウィンドウが消えている場合は再度メインウィンドウを作成する
  if (mainWindow === null) {
    createWindow();
  }
});


