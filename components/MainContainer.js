import React, { PropTypes, Component } from 'react'
import Header from './Header'

export default class MainSection extends Component {
  render () {
    let {user, lock, actions} = this.props
    console.log(actions)
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
