import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Photo = styled.img`
    width: 100%;
    height: auto;
    margin-bottom: 20px;
`;

class Shiba extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
    }

    render() {
        const { id, url } = this.props;
 
        return (
            <Link to={`/shiba/${id}`}>
                <Photo src={url} />
            </Link>
        );
    }
}

export default Shiba;
