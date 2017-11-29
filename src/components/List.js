import React from 'react'
import { connect } from 'dva'
import { List } from 'antd-mobile'
import { Icon } from 'react-fa'

const Item = List.Item
const Brief = Item.Brief

const result = {
  'playlist': {
    'subscribers': [],
    'subscribed': false,
    'creator': {
      'defaultAvatar': false,
      'province': 1000000,
      'authStatus': 0,
      'followed': false,
      'avatarUrl': 'http://p1.music.126.net/Rwj5imABLf4W12zxPQSriQ==/109951163051045317.jpg',
      'accountStatus': 0,
      'gender': 2,
      'city': 1005500,
      'birthday': 781545600000,
      'userId': 62368693,
      'userType': 0,
      'nickname': '原田莓莓',
      'signature': '萌豚+声豚，只听可爱的女孩子唱的歌',
      'description': '',
      'detailDescription': '',
      'avatarImgId': 109951163051045317,
      'backgroundImgId': 18654314278561441,
      'backgroundUrl': 'http://p1.music.126.net/ggBSNN0QZ_V5eDdAumovZA==/18654314278561441.jpg',
      'authority': 0,
      'mutual': false,
      'expertTags': null,
      'experts': null,
      'djStatus': 0,
      'vipType': 0,
      'remarkName': null,
      'avatarImgIdStr': '109951163051045317',
      'backgroundImgIdStr': '18654314278561441',
      'avatarImgId_str': '109951163051045317'
    },
    'tracks': [
      {
        'name': 'MUSIC of DREAM!!!',
        'id': 518077138,
        'pst': 0,
        't': 0,
        'ar': [
          {
            'id': 0,
            'name': 'せな',
            'tns': [],
            'alias': []
          },
          {
            'id': 0,
            'name': 'りえ',
            'tns': [],
            'alias': []
          },
          {
            'id': 0,
            'name': 'みき',
            'tns': [],
            'alias': []
          },
          {
            'id': 0,
            'name': 'かな',
            'tns': [],
            'alias': []
          }
        ],
        'alia': [
          'TV动画《偶像活动Stars 第二年》OP2 / TVアニメ「アイカツスターズ!  2ndシーズン」OP2'
        ],
        'pop': 90,
        'st': 0,
        'rt': null,
        'fee': 0,
        'v': 5,
        'crbt': null,
        'cf': '',
        'al': {
          'id': 36782039,
          'name': 'MUSIC of DREAM!!! / 森のひかりのピルエット',
          'picUrl': 'http://p1.music.126.net/Ebnm6-45GfhwnCGh9TubQg==/109951163061253887.jpg',
          'tns': [],
          'pic_str': '109951163061253887',
          'pic': 109951163061253887
        },
        'dt': 288835,
        'h': {
          'br': 320000,
          'fid': 0,
          'size': 11554525,
          'vd': -5
        },
        'm': {
          'br': 192000,
          'fid': 0,
          'size': 6932733,
          'vd': -4
        },
        'l': {
          'br': 128000,
          'fid': 0,
          'size': 4621836,
          'vd': -4
        },
        'a': null,
        'cd': '',
        'no': 1,
        'rtUrl': null,
        'ftype': 0,
        'rtUrls': [],
        'djId': 0,
        'copyright': 0,
        's_id': 0,
        'rtype': 0,
        'rurl': null,
        'mst': 9,
        'cp': 0,
        'mv': 0
      },
      {
        'name': 'おジャ魔女カｰニバル!!',
        'id': 415786278,
        'pst': 0,
        't': 0,
        'ar': [
          {
            'id': 12074349,
            'name': '茜屋日海夏',
            'tns': [],
            'alias': []
          },
          {
            'id': 12074352,
            'name': '若井友希',
            'tns': [],
            'alias': []
          },
          {
            'id': 12073361,
            'name': '久保田未夢',
            'tns': [],
            'alias': []
          }
        ],
        'alia': [],
        'pop': 5,
        'st': 0,
        'rt': null,
        'fee': 8,
        'v': 5,
        'crbt': null,
        'cf': '',
        'al': {
          'id': 34726178,
          'name': 'カバ☆リス',
          'picUrl': 'http://p1.music.126.net/xn2ZhGwlxThZWGftE3Hk_A==/18494885092595838.jpg',
          'tns': [
            'Cover☆Ris'
          ],
          'pic_str': '18494885092595838',
          'pic': 18494885092595838
        },
        'dt': 213080,
        'h': {
          'br': 320000,
          'fid': 0,
          'size': 8525366,
          'vd': -3.89
        },
        'm': {
          'br': 160000,
          'fid': 0,
          'size': 4262706,
          'vd': -3.47
        },
        'l': {
          'br': 96000,
          'fid': 0,
          'size': 2557641,
          'vd': -3.53
        },
        'a': null,
        'cd': '1',
        'no': 4,
        'rtUrl': null,
        'ftype': 0,
        'rtUrls': [],
        'djId': 0,
        'copyright': 0,
        's_id': 0,
        'rtype': 0,
        'rurl': null,
        'mst': 9,
        'cp': 457010,
        'mv': 0,
        'tns': [
          '麻烦魔女Carnival!!'
        ]
      },
      {
        'name': '最上級ぱらどっくす',
        'id': 513357148,
        'pst': 0,
        't': 0,
        'ar': [
          {
            'id': 12046915,
            'name': 'わーすた',
            'tns': [],
            'alias': []
          }
        ],
        'alia': [],
        'pop': 85,
        'st': 0,
        'rt': null,
        'fee': 8,
        'v': 13,
        'crbt': null,
        'cf': '',
        'al': {
          'id': 36581050,
          'name': '最上級ぱらどっくす',
          'picUrl': 'http://p1.music.126.net/6XrRTCctqbOrhveIuxH06g==/109951163044976045.jpg',
          'tns': [
            '最高级悖论'
          ],
          'pic_str': '109951163044976045',
          'pic': 109951163044976045
        },
        'dt': 219933,
        'h': {
          'br': 320000,
          'fid': 0,
          'size': 8800174,
          'vd': -3
        },
        'm': {
          'br': 192000,
          'fid': 0,
          'size': 5280122,
          'vd': -2
        },
        'l': {
          'br': 128000,
          'fid': 0,
          'size': 3520096,
          'vd': -2
        },
        'a': null,
        'cd': '1',
        'no': 1,
        'rtUrl': null,
        'ftype': 0,
        'rtUrls': [],
        'djId': 0,
        'copyright': 0,
        's_id': 0,
        'rtype': 0,
        'rurl': null,
        'mst': 9,
        'cp': 457010,
        'mv': 5684025,
        'tns': [
          '最高级悖论 (TV动画《Idol Time 美妙天堂》OP2)'
        ]
      },
      {
        'name': 'タチアガレ!',
        'id': 461720097,
        'pst': 0,
        't': 0,
        'ar': [
          {
            'id': 896021,
            'name': 'Wake Up, Girls!',
            'tns': [],
            'alias': []
          }
        ],
        'alia': [],
        'pop': 50,
        'st': 0,
        'rt': null,
        'fee': 8,
        'v': 6,
        'crbt': null,
        'cf': '',
        'al': {
          'id': 35219178,
          'name': '劇場版「Wake Up, Girls! 七人のアイドル」 シアタｰ限定版',
          'picUrl': 'http://p1.music.126.net/RtMEfDrCxfUW2pPdd-1i0g==/17742819137827040.jpg',
          'tns': [
            '剧场版｢Wake Up, Girls! 七人偶像｣ 剧场限定版'
          ],
          'pic_str': '17742819137827040',
          'pic': 17742819137827040
        },
        'dt': 291453,
        'h': {
          'br': 320000,
          'fid': 0,
          'size': 11661105,
          'vd': -3.64
        },
        'm': {
          'br': 160000,
          'fid': 0,
          'size': 5830575,
          'vd': -3.21
        },
        'l': {
          'br': 96000,
          'fid': 0,
          'size': 3498363,
          'vd': -3.26
        },
        'a': null,
        'cd': '1',
        'no': 1,
        'rtUrl': null,
        'ftype': 0,
        'rtUrls': [],
        'djId': 0,
        'copyright': 1,
        's_id': 0,
        'rtype': 0,
        'rurl': null,
        'mst': 9,
        'cp': 457010,
        'mv': 0,
        'tns': [
          '站起来！'
        ]
      }],
    'ordered': true,
    'tags': [],
    'cloudTrackCount': 0,
    'subscribedCount': 0,
    'status': 0,
    'adType': 0,
    'trackNumberUpdateTime': 1511883315359,
    'description': null,
    'specialType': 5,
    'userId': 62368693,
    'coverImgId': 3284241233862619,
    'createTime': 1428322749359,
    'newImported': false,
    'privacy': 0,
    'playCount': 76,
    'trackCount': 141,
    'trackUpdateTime': 1511919373624,
    'updateTime': 1511883315359,
    'commentThreadId': 'A_PL_0_63935152',
    'highQuality': false,
    'coverImgUrl': 'http://p1.music.126.net/bldD9HbN-Mwgt3_ttzIzlg==/3284241233862619.jpg',
    'name': '原田莓莓喜欢的音乐',
    'id': 63935152,
    'shareCount': 0,
    'commentCount': 0
  },
  'code': 200
}

class PlayList extends React.Component {
  constructor (props) {
    super(props)
  }

  enterRoom (item) {
    // this.props.history.push("/room/" + item.id)
  }

  render () {
    const list = result.playlist.tracks.map((item, i) => {
      return (<Item
        key={item.id} multipleLine extra={<Icon size="2x" name="ellipsis-h"/>}
      >
        <span style={{color: 'gray', width: '2em', marginRight: '1ex'}}>{i + 1}.</span>
        {item.name}
        <Brief>{item.ar.map(ar => ar.name).join('/')}</Brief>
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
