import { openArticle } from '@/render/ipcRenderer'
const { contextBridge, ipcRenderer } = require('electron')


contextBridge.exposeInMainWorld('ipcRenderer', {
    onOpenArticle: openArticle(ipcRenderer)
})
