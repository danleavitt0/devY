import React, { Component, PropTypes } from 'react'
import {Styles} from 'material-ui'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import MainContainer from '../components/MainContainer'
import * as UserActions from '../actions/user'
let ThemeManager = Styles.ThemeManager()

const lock = new Auth0Lock('Nww9zmVHoam8woWCRqH4ysjvWZhp8HLy', 'danleavitt.auth0.com')

class App extends Component {
  getChildContext () {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    }
  }

  getIdToken () {
    var idToken = localStorage.getItem('userToken')
    var authHash = lock.parseHash(window.location.hash)
    if (!idToken && authHash) {
      if (authHash.id_token) {
        idToken = authHash.id_token
        localStorage.setItem('userToken', authHash.id_token)
      }
      if (authHash.error) {
        console.log('Error signing in', authHash)
        return null
      }
    }
    return idToken
  }

  componentWillMount () {
    const { dispatch } = this.props
    var actions = this.actions = bindActionCreators(UserActions, dispatch)
    lock.getProfile(this.getIdToken(), function (err, profile) {
      if (err) {
        console.log('Error loading the Profile', err)
        return
      }
      actions.login(profile)
    }, this)
  }

  render () {
    const { user } = this.props
    console.log(this.props)
    return (
      <div>
        <MainContainer user={user} lock={lock} actions={this.actions}/>
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
    user: state.login[0].user
  }
}

export default connect(mapStateToProps)(App)
