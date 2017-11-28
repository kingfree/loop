import React from 'react'
import { connect } from 'dva'
import { List } from 'antd-mobile'
import { Icon } from 'react-fa'

const Item = List.Item
const Brief = Item.Brief

class PlayList extends React.Component {
  constructor (props) {
    super(props)
  }

  enterRoom (item) {
    // this.props.history.push("/room/" + item.id)
  }

  render () {
    const list = [{
      id: 11279,
      title: 'DAY by DAY',
      artist: '大原一记 / 長谷川明子 / 徳井青空 / 赤﨑千夏 / 津田美波 / 大橋彩香',
      masterId: 12,
      online: 5,
      player: 3,
      dj: '原田莓莓'
    }].map((item, i) => {
      return (<Item
        key={item.id} multipleLine extra={<Icon size="2x" name="ellipsis-h"/>}
      >
        <span style={{color: 'gray', width: '2em', marginRight: '1ex'}}>{i + 1}.</span>
        {item.title}
        <Brief>{item.artist}</Brief>
      </Item>)
    })
    return (
      <div className="home">
        <List renderHeader={() => '我的播放列表'} className="room-list">
          {list}
        </List>
      </div>
    )
  }
}

PlayList.propTypes = {}

export default connect()(PlayList)
