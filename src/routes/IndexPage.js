import React from 'react'
import { connect } from 'dva'
import { WingBlank, WhiteSpace, Button, Badge } from 'antd-mobile'

const repo = 'http://toyama.moe'

function IndexPage() {
  return (
    <WingBlank>
      <WhiteSpace size='lg'/>
      <Button
        type='primary'
        onClick={() => location.href = repo}>
        Ant design mobile web entry
        <Badge text='new'/>
      </Button>
    </WingBlank>
  )
}

IndexPage.propTypes = {}

export default connect()(IndexPage)
