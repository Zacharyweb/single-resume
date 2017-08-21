import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

var techData = [
    {icon:'icon-html-copy',name:'HTML5'},
    {icon:'icon-css',name:'CSS3'},
    {icon:'icon-jquery',name:'Jquery'},
    {icon:'icon-vue',name:'Vue'},
    {icon:'icon-react',name:'React'},
    {icon:'icon-Webpack',name:'Webpack'},
    {icon:'icon-less',name:'Less'},
    {icon:'icon-git',name:'Git'}
]
class TeachList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this); 
        this.state = {
            techData:techData
        }
    }
    render() {
        return (
            <ul className="tech-list bounceIn animated">
               {
                    this.state.techData.map(function(item,index){
                        return (
                             <li key={index}>
                                 <span className={"iconfont " + item.icon}></span>
                                 <p>{item.name}</p>
                             </li> 
                        )
                    })
               } 
            </ul>
        )
    }
}

export default TeachList