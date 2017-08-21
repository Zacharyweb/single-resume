import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router'

import './style.less'

class ListItem extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="project-item animated flipInY">
                <h3>{this.props.data.title}</h3> 
                <ul>
                {
                    this.props.data.items.map(function(item,index){
                        return (
                            <li key={index}>
                                <span className="icon-wrapper">
                                    <i className={"iconfont " + item.icon}></i>
                                </span>    
                                <div className="item-intro">
                                  <h4>{item.name}</h4>
                                </div>
                            </li>
                        )
                    })
                }  
                </ul>
            </div>
        )
    }
}

export default ListItem