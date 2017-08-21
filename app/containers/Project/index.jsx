import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Header from '../../components/Header'
import TopNotice from '../../components/TopNotice'
import ProjectList from '../../components/ProjectList'

class Detail extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        // const id = this.props.params.id
        return (
            <div>
              <Header title="实战案例"/>
              <TopNotice/>
              <ProjectList/>
            </div>
        )
    }
}
export default Detail