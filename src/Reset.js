import React, { Component } from 'react';
import { connect } from 'react-redux';

import { resetGame } from './actions'; 

export class UnconnectedReset extends Component {
    /**
     * @method constructor
     * @param {object} props - Component props
     * @returns {undefined}
     */
    constructor(props) {
        super(props);

        this.startReset.bind(this);
    }

    startReset(ev) {
        ev.preventDefault();

        this.props.resetGame();
    }

    render() {
        return(
            this.props.success
                ?
            <div data-test="reset-control">
                <button className="btn btn-primary" data-test="reset-button" onClick={(ev) => {this.startReset(ev)}}>New word</button>
            </div>
                :
            null
        );
    }
}

const mapStateToProps = ({ success }) => {
    return { success };
}

export default connect(mapStateToProps, { resetGame })(UnconnectedReset);