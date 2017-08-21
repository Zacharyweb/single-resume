import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { hashHistory } from 'react-router'
import MusicBox from '../MusicBox'
import './style.less'

class BottomNav extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            nav:null,
            showMusicBox:false,
        }
        this.setInitNav = this.setInitNav.bind(this);
    }
    render() {
        return (
            <div className="bottom-nav-container">
              <ul>
                <li className={this.state.nav === 0 ? "active nav-item" : 'nav-item'} onClick={this.toHome.bind(this)}><span className="iconfont icon-cf-c02"></span>基本信息</li>
                <li className={this.state.showMusicBox ? "music-btn-rotate music-btn":"music-btn"} onClick={this.showMusic.bind(this)}><span className="iconfont icon-yinle"></span></li>
                <li className={this.state.nav === 1 ? "active nav-item" : 'nav-item'} onClick={this.toProject.bind(this)}><span className="iconfont icon-xiangmu"></span>实战案例</li>
              </ul>
              <MusicBox isShow={this.state.showMusicBox}/>
            </div>
        )
    }
    componentDidMount(){
       this.setInitNav(this.props.currenPath);
    }
    componentWillUpdate(newProps){
       this.setInitNav(newProps.currenPath);
    }
    setInitNav(path){
        if(path === '/'){
            this.setState({nav:0});
        }else if(path === '/project'){
            this.setState({nav:1});
        }else{
            this.setState({nav:-1});
        }
    }
    toHome(){
        hashHistory.push('/');
    }
    toProject(){
        hashHistory.push('/project')
    }
    showMusic(){
       let isShow = this.state.showMusicBox;
       this.setState({
          showMusicBox:!isShow
       });
    }
}
export default BottomNav