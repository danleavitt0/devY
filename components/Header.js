import React, { PropTypes, Component } from 'react'
import {AppBar, FlatButton} from 'material-ui'

export default class Header extends Component {
  render () {
    let {user, actions, lock} = this.props
    let button = user
      ? <FlatButton onClick={this._logout.bind(this, actions)} label='Logout'/>
    : <FlatButton onClick={this._showLock.bind(this, lock)} label='Sign In'/>
    return (
      <AppBar title={user.name} iconElementRight={button}/>
    )
  }
  _logout (actions) {
    actions.logout()
  }
  _showLock (lock) {
    lock.show()
  }
}

Header.propTypes = {
  user: PropTypes.object.isRequired,
  lock: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}
