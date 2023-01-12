import { ipcMain } from "electron";
import clc from "cli-color";

const log = text => {
    console.log(`${clc.blueBright('[ipcMain.js]')} ${text}`);
};

export function initIpcMain(win) {
    log("initializing icpMain");
    
    ipcMain.on('open-settings', (event, options) => {
        console.log(options);
    });

    ipcMain.on('open-article', (event, options) => {
        console.log(options);
    });
}