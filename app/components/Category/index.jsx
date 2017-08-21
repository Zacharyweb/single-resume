import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
// import ReactSwipe from 'react-swipe'
import AboutMe from './AboutMe'
import TechList from './TechList'
import ExpeList from './ExpeList'

import './style.less'

class Category extends React.Component {
    /*
    轮播图需要用到一个第三方插件 https://github.com/voronianski/react-swipe 根据其文档要求需要安装插件，
    即`npm install react swipe-js-iso react-swipe --save`，这个插件的日常使用我已经验证过，大家可放心使用
    */
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            index: 0
        }
    }
    render() {
        // const opt = {
        //     auto: 5000,
        //     callback: function (index) {
        //         this.setState({index: index});
        //     }.bind(this)
        // }
        return (
            <div id="infoSwiper">
                <div className="carousel-item  bounceInRight animated">
                { this.state.index === 0 ?
                       <AboutMe />
                    : 
                    this.state.index === 1 ? 
                       <TechList/>
                    :
                    this.state.index === 2 ?
                       <ExpeList/>
                    : ''
                }
                </div> 
                <div className="index-container bounceInLeft animated">
                    <ul>
                        <li className={this.state.index === 0 ? "selected" : ''} onClick={this.changeTab.bind(this,0)}>
                          <span>关于我</span>
                          <span className="index-bar"></span> 
                        </li>
                        <li className={this.state.index === 1 ? "selected" : ''} onClick={this.changeTab.bind(this,1)}>
                          <span>技术栈</span>
                          <span className="index-bar"></span> 
                        </li>
                        <li className={this.state.index === 2 ? "selected" : ''} onClick={this.changeTab.bind(this,2)}>
                          <span>工作经历</span>
                          <span className="index-bar"></span> 
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
    changeTab(index){
        this.setState({index})
    }
}

export default Category