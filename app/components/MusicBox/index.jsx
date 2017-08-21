import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class TopDeco extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            musicSrc:'',
            flag:false
        }
    }
    render() {
        return (
           <iframe className ={this.props.isShow?'show music-box':"music-box" } src={this.state.musicSrc}></iframe>
        )
       
    }
    componentDidMount() {
        if(!this.state.flag){
            this.setState({
               musicSrc:'http://music.163.com/outchain/player?type=0&id=152402478&auto=0&height=430',
               flag:true
            })
        }
    }
}

export default TopDeco