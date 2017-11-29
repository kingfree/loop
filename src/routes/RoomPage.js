import React from 'react'
import { connect } from 'dva'

class RoomPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: 'loop'
    }
  }

  render () {
    return <div></div>
  }
}

RoomPage.propTypes = {}

export default connect()(RoomPage)
