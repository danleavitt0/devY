import React, { PropTypes, Component } from 'react'

export default class Header extends Component {
  render () {
    let {name} = this.props.user
    return (
      <div> Header, {name} </div>
    )
  }
}

Header.propTypes = {
  user: PropTypes.object.isRequired
}
