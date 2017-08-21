import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Item from './Item'

import './style.less'

var data = [
    {
       title:'jQuery项目',
       items:[
         {icon:'icon-guanli',name:'好云商PC端后台管理系统',url:''},
       ]
    },    
    {
       title:'Vue项目',
       items:[
         {icon:'icon-iconfontloupan',name:'好云商移动端App',url:''},
       ]
    },
    {
       title:'React项目',
       items:[
         {icon:'icon-jianliku',name:'移动端个人简历',url:''},
       ]
    },
    {
       title:'微信小程序',
       items:[
         {icon:'icon-lin',name:'悦邻舍',url:''},
         {icon:'icon-du-copy',name:'启读App',url:''},
       ]
    },
    {
       title:'原生JavaScript组件',
       items:[
         {icon:'icon-lunbotu',name:'旋转轮播',url:''},
         {icon:'icon-lunbotupian',name:'幻灯轮播',url:''}
       ]
    },
    {
       title:'jQuery封装组件',
       items:[
         {icon:'icon-dianti',name:'电梯导航',url:''},
         {icon:'icon-icon-test',name:'局部放大',url:''}
       ]
    }
]
class List extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data:data
        }
    }
    render() {
        return (
            <div className="project-list-wrapper">
               {
                this.state.data.map(function(item,index){
                    return <Item data={item} key={index}/>
                })
               }
               <div className="fill-bottom-block"></div>
            </div>
        )
    }
}

export default List