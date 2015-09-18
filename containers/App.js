import React, { Component, PropTypes } from 'react'
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux'
import Header from '../components/Header'
// import * as TodoActions from '../actions/todos'

class App extends Component {
  render () {
    // const { dispatch } = this.props
    // const actions = bindActionCreators(TodoActions, dispatch)

    return (
      <div>
        <Header user={{name: 'Daniel'}} />
      </div>
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired
}

// function mapStateToProps (state) {
//   return {
//     todos: state.count
//   }
// }

// export default connect(mapStateToProps)(App)
export default App
