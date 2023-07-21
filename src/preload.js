const { contextBridge } = require('electron')

contextBridge.exposeInMainWorld('chubDocument_spawned', {
  desktop: true
})

