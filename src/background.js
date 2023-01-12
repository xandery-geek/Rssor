'use strict'

import { 
  app, 
  protocol, 
  BrowserWindow, 
  Menu,
  globalShortcut
} from 'electron';
import {
  isWindows,
  isMac,
  isLinux,
  isTest,
  isDevelopment,
} from '@/utils/platform';
import installExtension, { VUEJS3_DEVTOOLS } from 'electron-devtools-installer';
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib';
import clc from 'cli-color';

import registerGlobalShortcut from '@/electron/globalShortcut'

const log = text => {
  console.log(`${clc.blueBright('[background.js]')} ${text}`);
};

class Background {
  constructor() {
    this.window = null;

    this.init();
  }
  init() {
    log('initializing');

    // Make sure the app is singleton.
    if (!app.requestSingleInstanceLock()) return app.quit();

    // Scheme must be registered before the app is ready
    protocol.registerSchemesAsPrivileged([
      { scheme: 'app', privileges: { secure: true, standard: true } },
    ]);

    // handle app events
    this.handleAppEvents();
  }

  async initDevtools() {
    // Install Vue Devtools extension
    try {
      await installExtension(VUEJS3_DEVTOOLS);
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString());
    }

    // Exit cleanly on request from parent process in development mode.
    if (isWindows) {
      process.on('message', data => {
        if (data === 'graceful-exit') {
          app.quit();
        }
      });
    } else {
      process.on('SIGTERM', () => {
        app.quit();
      });
    }
  }

  createWindow() {
    const options = {
      width: 1200,
      height: 800,
      webPreferences: {
        // Use pluginOptions.nodeIntegration, leave this alone
        // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
        nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
        contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION
      }
    }
  
    // Create the browser window.
    this.window = new BrowserWindow(options)
  
    // hide menu bar on Microsoft Windows and Linux
    this.window.setMenuBarVisibility(false);
  
    if (process.env.WEBPACK_DEV_SERVER_URL) {
      // Load the url of the dev server if in development mode
      this.window.loadURL(process.env.WEBPACK_DEV_SERVER_URL)

      if (!process.env.IS_TEST) this.window.webContents.openDevTools()

      globalShortcut.register('CommandOrControl+Shift+i', function () {
        this.window.webContents.openDevTools()
      });

    } else {
      createProtocol('app')
      // Load the index.html when not in development
      win.loadURL('app://./index.html')
    }
  }

  handleWindowEvents(){
    this.window.once('ready-to-show', () => {
      this.window.show();
    });
  }

  handleAppEvents() {
    app.on('ready', async () => {
      // This method will be called when Electron has finished
      // initialization and is ready to create browser windows.
      // Some APIs can only be used after this event occurs.
      log('app ready event');

      // for development
      if (isDevelopment & !isTest) {
        this.initDevtools();
      }

      // create window
      this.createWindow();
      this.handleWindowEvents();
      
      //register gloabl shortcut
      registerGlobalShortcut(this.window)

      // init ipcMain

      // create menu
      Menu.setApplicationMenu(null);
    });

    app.on('activate', () => {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      log('app activate event');
      if (this.window === null) {
        this.createWindow();
      } else {
        this.window.show();
      }
    });

    app.on('window-all-closed', () => {
      if (!isMac) {
        app.quit();
      }
    });

    app.on('will-quit', () => {
      // unregister all global shortcuts
      globalShortcut.unregisterAll();
    });

  }
}

new Background();