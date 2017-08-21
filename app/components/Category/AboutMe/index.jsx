import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class AboutMe extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="bounceIn animated">
                <ul className="about-me-list">
                    <li>
                        <span className="iconfont icon-shihenianling"></span>
                        <p>年龄/23</p>
                    </li>
                    <li>
                        <span className="iconfont icon-xueli"></span>
                        <p>学历/本科</p>
                    </li>
                    <li>
                        <span className="iconfont icon-zuobiao"></span>
                        <p>坐标/杭州</p>
                    </li>
                    <li>
                        <span className="iconfont icon-lizhi"></span>
                        <p>状态/离职</p>
                    </li>
                </ul>
                <div className="about-me-text">
                    <p>扎实的HTML/CSS/JavaScript基础</p>
                    <p>精通DIV+CSS布局，高效切图+还原页面</p>
                    <p>精通flex布局+百分比布局</p>
                </div>
            </div>     
        )
    }
}

export default AboutMe