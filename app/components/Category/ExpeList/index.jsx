import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class ExpeList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
          <ul className="expe-list bounceIn animated">
            <li className="expe-item1">
              <p className="expe-time">2016.2-2016.5</p>
              <p className="expe-comp">浙江<span>&nbsp;大华&nbsp;</span>技术有限公司</p>
              <p className="expe-job">前端实习生</p>
              <span className="dot-line"></span> 
              <span className="iconfont icon-shijian"></span>
            </li>
            <li className="expe-item2">
              <p className="expe-time">2016.6-2017.7</p>
              <p className="expe-comp">上海<span>&nbsp;光可&nbsp;</span>信息技术有限公司</p>
              <p className="expe-job">前端工程师</p>
              <span className="dot-line"></span> 
              <span className="iconfont icon-shijian"></span>
            </li>
          </ul>
        )
    }
}

export default ExpeList