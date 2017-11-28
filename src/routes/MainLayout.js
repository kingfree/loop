import React from "react"
import {connect} from "dva"
import {TabBar, NavBar} from "antd-mobile"
import {Icon} from "react-fa"
import Home from "../components/Home.js"
import Room from "../components/Room.js"

class MainLayout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "loop"
    }
  }

  renderContent(item) {
    if (item.key === "room") {
      return <Room/>
    } else {
      return <Home/>
    }
  }

  render() {
    const children = this.props.children
    const pathname = this.props.location.pathname
    const tabs = [
      {title: "场地", key: "home", path: "/", icon: "music"},
      {title: "房间", key: "room", path: "/room", icon: "users"},
      {title: "列表", key: "list", path: "/list", icon: "list"},
      {title: "我的", key: "mine", path: "/mine", icon: "user-circle"}
    ].map(item => {
      return <TabBar.Item
        title={item.title}
        key={item.key}
        icon={<Icon size="2x" name={item.icon}/>}
        selectedIcon={<Icon size="2x" name={item.icon}/>}
        selected={pathname === item.path}
        onPress={() => {
          this.props.history.push(item.path)
          this.setState({
            title: item.title
          })
        }}
      >
        <div style={{paddingTop: "50px"}}>
          {pathname === item.path ? this.renderContent(item) : null}
        </div>
      </TabBar.Item>
    })
    return (
      <div
        style={{position: "fixed", height: "100%", width: "100%", top: 0}}>
        <NavBar
          mode="dark"
          style={{position: "fixed", width: "100%", top: 0, zIndex: 9999, backgroundColor: "#cc154d"}}>
          {this.state.title || "loop"}</NavBar>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#cc154d"
          barTintColor="white"
        >
          {tabs}
        </TabBar>
      </div>
    )
  }
}

MainLayout.propTypes = {}

export default connect()(MainLayout)
