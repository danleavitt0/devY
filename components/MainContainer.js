import React, { PropTypes, Component } from 'react'
import Header from './Header'

export default class MainSection extends Component {
  render () {
    let {user, lock, actions} = this.props
    return (
      <div>
        <Header user={user} lock={lock} actions={actions}/>
      </div>
    )
  }
}

MainSection.propTypes = {
  user: PropTypes.object.isRequired,
  lock: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}
