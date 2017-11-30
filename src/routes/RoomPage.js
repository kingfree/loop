import React from 'react'
import { connect } from 'dva'
import axios from 'axios'
import { Button } from 'antd'

class RoomPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: 'loop'
    }
    axios.get('/user').then(({ data }) => {
      console.log(data)
    })
    axios.get('/rooms').then(({ data }) => {
      console.log(data)
    })
  }

  render () {
    return <div>
      <Button>加载</Button>
    </div>
  }
}

RoomPage.propTypes = {}

export default connect()(RoomPage)
