import React, { PropTypes, Component } from 'react'
import {AppBar, FlatButton} from 'material-ui'

export default class Header extends Component {
  render () {
    let {user} = this.props
    let button = user
      ? <FlatButton label='Logout'/>
      : <FlatButton onClick={this._showLock.bind(this)} label='Sign In'/>
    return (
      <AppBar title={user} iconElementRight={button}/>
    )
  }
  _showLock () {
    let {actions} = this.props
    actions.login()
  }
}

Header.propTypes = {
  user: PropTypes.object.isRequired,
  lock: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}
