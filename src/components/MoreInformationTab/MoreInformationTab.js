import React, { Component } from 'react';
import classnames from 'classnames';
import ReactFitText from 'react-fittext';
import './MoreInformationTab.css';
import {
    NavLink,
} from 'reactstrap';

export default class MoreInformationTab extends Component {

    constructor(props) {
        super(props);
    }

    
    render() {
        const slug = this.props.title.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'');
        return (
            <div id={slug} className={classnames(['info-tab',{ active: this.props.activeInfoTab === slug }])}>
                <ReactFitText maxFontSize={36}>
                    <NavLink
                    className={classnames({ active: this.props.activeInfoTab === slug })}
                    onClick={() => { this.props.toggleInfoTabs(slug); }}
                    >
                        {this.props.title}
                    </NavLink>
                </ReactFitText>
                <div className={
                    classnames(['contents',{
                        fadeInDown: this.props.activeInfoTab === slug,
                        fadeOutUp: this.props.activeInfoTab !== slug
                    }])
                }>
                    {this.props.children}
                </div>
            </div>
        );
    }
}