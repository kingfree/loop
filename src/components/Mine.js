import React from 'react'
import { connect } from 'dva'
import { Button, List } from 'antd-mobile'

const Item = List.Item
const Brief = Item.Brief

class Home extends React.Component {
  constructor (props) {
    super(props)
  }

  enterRoom (item) {
    // this.props.history.push("/room/" + item.id)
  }

  render () {
    const list = [{
      id: 11279,
      name: '樱的音乐空间',
      introduction: 'ACG为主，实际上啥歌都能放 闹群拯救LOOP（误',
      master: '千樱随舞',
      masterId: 12,
      online: 5,
      player: 3,
      dj: '原田莓莓'
    }].map((item) => {
      return (<Item
        key={item.id} multipleLine extra={<div>
        <div><span style={{fontSize: '30px', fontWeight: 'bold'}}>{item.online}</span> 听众</div>
        <Button type="ghost" size="small" inline onClick={this.enterRoom(item)}>进入</Button>
      </div>}
      >
        {item.name}
        <Brief>{item.introduction}</Brief>
      </Item>)
    })
    return (
      <div className="home">
        <List renderHeader={() => '还记得第一次到loop的时间进的第一个房间认识的第一个朋友吗？'} className="room-list">
          {list}
        </List>
      </div>
    )
  }
}

Home.propTypes = {}

export default connect()(Home)
