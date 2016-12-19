import { ipcRenderer } from 'electron'
import NvmInfo from './NvmInfo'

import React from 'react'

const App = React.createClass({

  getInitialState () {
    const PLACEHOLDER = <i className='fa fa-refresh fa-spin fa-fw' />
    // local
    getNvmInfo('version', '--version')
    getNvmInfo('current', 'current')
    getNvmInfo('versions', 'ls node')

    // remote
    getNvmInfo('latest', 'version-remote')
    getNvmInfo('latestLts', 'version-remote --lts')

    ipcRenderer.on('nvm', (e, data) => {
      if (data.versions !== undefined) {
        data.versions = data.versions
          .replace(/\[([;0-9])+m/g, '') // remove colors
          .replace(/\u001b/g, '') // remove escape characters
          .replace('->', '') // remove current version indicator
          .split('\n') // split into verions
          .map(line => line.trim()) // remove extra white space
          .slice(0, -1) // get rid of the blank line
      }
      this.setState(data)
    })

    return {
      version: PLACEHOLDER,
      current: PLACEHOLDER,
      versions: ['...'],
      latest: PLACEHOLDER,
      latestLts: PLACEHOLDER
    }
  },

  render () {
    const {version, current, versions, latest, latestLts} = this.state
    return (
      <div>
        <NvmInfo
          version={version}
          current={current}
          versions={versions}
          latest={latest}
          latestLts={latestLts}
        />
      </div>
    )
  }
})

function getNvmInfo (id, cmd) {
  ipcRenderer.send('nvm', {
    id: id,
    cmd: cmd
  })
}

export default App
