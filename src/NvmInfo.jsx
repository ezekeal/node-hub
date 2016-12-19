import React from 'react'

const NvmInfo = React.createClass({

  render () {
    const {version, current, versions, latest, latestLts} = this.props
    return (
      <div>
        <h1>NVM Info</h1>

        <h2>Local Info</h2>
        <div>Version: {version}</div>
        <div>Current Node Version in Use: {current}</div>
        <h3>Installed Versions:</h3>
        <ul>
          {versions.map(v => <li key={v}>{v}</li>)}
        </ul>

        <h2>Remote Info</h2>
        <div>Latest Version: {latest}</div>
        <div>Latest LTS Version: {latestLts}</div>
      </div>
    )
  }
})

export default NvmInfo
