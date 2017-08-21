import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class topNotice extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
          <div className="top-tips-bar">
             <span className="iconfont-wrapper animated rubberBand infinite">
                <i  className="iconfont icon-tongzhi"></i>
             </span>
              <span className="deco-line"></span>
             <p className="animated shake infinite">所有案例源码均已提交到github~</p>
          </div>
        )
    }
}

export default topNotice