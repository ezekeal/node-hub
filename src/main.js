import { app, BrowserWindow, ipcMain } from 'electron'
import path from 'path'
import nvm from './nvm'

let mainWindow = null

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    show: false
  })

  mainWindow.once('ready-to-show', () => mainWindow.show())

  mainWindow.on('closed', () => {
    mainWindow = null
  })
  mainWindow.loadURL(`file://${path.resolve('./assets/index.html')}`)

  ipcMain.on('nvm', (event, msg) => {
    nvm(msg.cmd, (err, stdout, stderr) => {
      if (err) { console.error(err) }
      let data = {}
      data[msg.id] = stdout
      event.sender.send('nvm', data)
    })
  })
})
