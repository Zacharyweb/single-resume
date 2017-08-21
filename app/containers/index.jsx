import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import LocalStore from '../util/localStore'
import { USERNAME } from '../config/localStoreKey'
import * as userInfoActionsFromOtherFile from '../actions/userinfo' 

import BottomNav from '../components/BottomNav'
class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            initDone: false,
            currenPath:this.props.location.pathname
        }
        this.watchHash = this.watchHash.bind(this);
    }
    render() {
        return (
            <div>
                {
                    this.state.initDone
                    ? this.props.children
                    : <div>正在加载...</div>
                }
                <BottomNav currenPath={this.state.currenPath}/>
            </div>
        )
    }
    componentDidMount() {
        // 获取用户名称
        let userName = LocalStore.getItem(USERNAME)
        if (userName == null) {
            userName = '朱两边'
        }
        this.props.userInfoActions.update({
            userName: userName
        })
        // 更改状态
        this.setState({
            initDone: true
        })
        this.watchHash();
    }
    watchHash(){
        var _this = this;
        window.addEventListener('hashchange',function(){
            _this.setState({
                currenPath:_this.props.location.pathname
            })
        }) 
    }
}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch),
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
