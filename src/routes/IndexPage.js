import React from 'react'
import { connect } from 'dva'
import { TabBar, NavBar } from 'antd-mobile'
import { Icon } from 'react-fa'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
      title: 'loop'
    }
  }

  renderContent(pageText) {
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
      </div>
    )
  }

  render() {
    return (
      <div
        style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <NavBar
          mode="dark"
          style={{ position: 'fixed', width: '100%', top: 0, zIndex: 9999, backgroundColor: "#cc154d" }}>
          {this.state.title || 'loop'}</NavBar>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#cc154d"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="首页"
            key="Life"
            badge={1}
            icon={<Icon size="2x" name="music"/>}
            selectedIcon={<Icon size="2x" name="music"/>}
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab'
              })
            }}
            data-seed="logId"
          >
            {this.renderContent('Life')}
          </TabBar.Item>
          <TabBar.Item
            title="场地"
            key="Koubei"
            badge={'new'}
            icon={<Icon size="2x" name="users"/>}
            selectedIcon={<Icon size="2x" name="users"/>}
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab'
              })
            }}
            data-seed="logId1"
          >
            {this.renderContent('Koubei')}
          </TabBar.Item>
          <TabBar.Item
            title="列表"
            key="Friend"
            dot
            icon={<Icon size="2x" name="list"/>}
            selectedIcon={<Icon size="2x" name="list"/>}
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab'
              })
            }}
          >
            {this.renderContent('Friend')}
          </TabBar.Item>
          <TabBar.Item
            title="我的"
            key="my"
            icon={<Icon size="2x" name="user-circle"/>}
            selectedIcon={<Icon size="2x" name="user-circle"/>}
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab'
              })
            }}
          >
            {this.renderContent('My')}
          </TabBar.Item>
        </TabBar>
      </div>
    )
  }
}

IndexPage.propTypes = {}

export default connect()(IndexPage)
