import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class BlogLink extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="blog-link-container bounceIn animated" >
               <a>
                   <span className="iconfont icon-boke" onClick={this.toBlog.bind(this)}></span>
                   <p>博客</p>
               </a>
               <a>
                   <span className="iconfont icon-github" onClick={this.toGithub.bind(this)}></span>
                   <p>Github</p>
               </a>
            </div>
        )
    }
    toBlog(){
      location.href = "http://zachary93.com/"
    }
    toGithub(){
      location.href = "https://github.com/Zacharyweb"
    }
}

export default BlogLink