import React, { Component } from 'react';
import classnames from 'classnames';
import './MoreInformationTab.css';
import {
    NavLink,
} from 'reactstrap';

export default class MoreInformationTab extends Component {

    
    render() {
        const slug = this.props.title.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'');
        return (
            <div id={slug} className={classnames(['info-tab',{ active: this.props.activeInfoTab === slug }])}>
                <NavLink
                className={classnames({ active: this.props.activeInfoTab === slug })}
                onClick={() => { this.props.toggleInfoTabs(slug); }}
                >
                    {this.props.title}
                </NavLink>
                <div className={
                    classnames(['contents', 'animated',{
                        fadeIn: this.props.activeInfoTab === slug,
                        fadeOut: this.props.activeInfoTab !== slug
                    }])
                }>
                    {this.props.children}
                </div>
            </div>
        );
    }
}