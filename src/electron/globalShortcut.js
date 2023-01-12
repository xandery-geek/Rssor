import defaultShortcuts from '@/utils/shortcuts';
const { globalShortcut } = require('electron');

import clc from 'cli-color';

const log = text => {
  console.log(`${clc.blueBright('[globalShortcut.js]')} ${text}`);
};

export function registerGlobalShortcut(win) {
    log('registerGlobalShortcut');
    let shortcuts = defaultShortcuts;

    globalShortcut.register(
        shortcuts.find(s => s.id === 'next').globalShortcut,
        () => {
          win.webContents.send('next');
        }
    );
    globalShortcut.register(
        shortcuts.find(s => s.id === 'previous').globalShortcut,
        () => {
          win.webContents.send('previous');
        }
    );
}