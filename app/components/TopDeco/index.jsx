import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class TopDeco extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            list:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
        }
    }
    render() {
        return (
            <div className="top-deco-container">
                <div className="top-deco-bar"></div>
                <ul>
                  {
                    this.state.list.map(function(item,index){
                        return (

                            <li key={index}></li>)
                    })
                }
                </ul>
            </div>
        )
    }
}

export default TopDeco