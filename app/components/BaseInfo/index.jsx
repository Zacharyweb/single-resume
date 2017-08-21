import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Motto from 'motto'
import './style.less'

var mottoTimer = null;
class BaseInfo extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
           showBaseInsoText:false,
        }
        this.bindMotto = this.bindMotto.bind(this);
    }
    render() {
        return (
            <div className="base-info-container">
                <img className="user-avtar animated bounceIn" src={require('../../static/img/user.png')}/>
                <h1 id="myMooto"></h1>
                {
                    this.state.showBaseInsoText?
                    <div className="base-info-text flipInX animated">
                        <p>我叫{this.props.userInfo.userName}</p>
                        <p>一名前端工程师</p>
                    </div> : ''
                }
              
            </div>
        )
    }
    componentDidMount() {
       this.bindMotto();
    }
    bindMotto(){
        var _this = this;
        var motto = new Motto('#myMooto', {
            lyric: '这是最坏的时代，也是最好的时代。',
            showUpSpeed: 150,
            flashSpeed: 0,
            flashTimeout: 0,
            callback: function() {
                
            }
        })
        mottoTimer = setTimeout(function(){
            _this.setState({showBaseInsoText:true});
        }.bind(this),2700)
    }
    componentWillUnmount(){
        clearTimeout(mottoTimer)
    }
}

export default BaseInfo
