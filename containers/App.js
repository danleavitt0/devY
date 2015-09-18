import React, { Component, PropTypes } from 'react'
import {Styles} from 'material-ui'
let ThemeManager = Styles.ThemeManager()
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import MainContainer from '../components/MainContainer'
import * as UserActions from '../actions/user'

class App extends Component {
  getChildContext () {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    }
  }

  componentWillMount () {
    this.lock = new Auth0Lock('Nww9zmVHoam8woWCRqH4ysjvWZhp8HLy', 'danleavitt.auth0.com')
  }

  render () {
    const { user, dispatch } = this.props
    const actions = bindActionCreators(UserActions, dispatch)

    return (
      <div>
        <MainContainer user={user} lock={this.lock} actions={actions}/>
      </div>
    )
  }
}

App.propTypes = {
  user: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object
}

function mapStateToProps (state) {
  console.log(state)
  return {
    user: state.login.user
  }
}

export default connect(mapStateToProps)(App)
