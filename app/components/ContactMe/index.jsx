import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { hashHistory } from 'react-router'
import './style.less'
class TopDeco extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <span className="resume-download-btn" onClick={this.toMessagePane.bind(this)}>
              <i className="iconfont icon-message"></i>
            </span>
        )
    }
    toMessagePane(){
        location.href = 'http://zachary93.com/guestbook/'
    }
}

export default TopDeco