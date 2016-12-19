import { exec } from 'child_process'

const SOURCE_NVM = `source ${process.env.NVM_DIR}/nvm.sh`

module.exports = function (cmd, cb) {
  exec(`${SOURCE_NVM} && nvm ${cmd}`, cb)
}
