
export function openSettings(ipcRenderer){
    return () => {
        ipcRenderer.send("open-settings", "settings");
    }
}

export function openArticle(ipcRenderer){
    return (id) => {
        ipcRenderer.send("open-article", `{"id": ${id}}`);
    }   
}
