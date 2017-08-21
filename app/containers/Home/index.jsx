import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import InfoBlock from './subpage/InfoBlock'
import ContactMe from '../../components/ContactMe'
import Category from '../../components/Category'
import BlogLink from '../../components/BlogLink'


class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <ContactMe/>
                <InfoBlock/>
                <Category/>
                <BlogLink/>
                <div className="fill-bottom-block"></div>
            </div>
        )
    }
}
export default Home