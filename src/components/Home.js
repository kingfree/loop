import React from "react"
import {connect} from "dva"
import {List} from "antd-mobile"
import {Icon} from "react-fa"

const Item = List.Item
const Brief = Item.Brief

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="home">
        <List renderHeader={() => "Align Vertical Center"} className="room-list">
          <Item multipleLine extra="extra content">
            Title <Brief>subtitle</Brief>
          </Item>
        </List>
      </div>
    )
  }
}

Home.propTypes = {}

export default connect()(Home)
