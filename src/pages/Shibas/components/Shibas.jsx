import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Shiba from './Shiba';

class Shibas extends Component {
    static propTypes = {
        items: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        })).isRequired,
        isLoading: PropTypes.bool.isRequired,
    }

    render() {
        const { items, isLoading } = this.props;

        return (
            <div>
                {isLoading ? (
                    <div className="d-flex flex-row justify-content-center">
                        <FontAwesomeIcon
                            icon="sync-alt"
                            size="5x"
                            spin
                        />
                    </div>
                ) : (
                    items.map((item) => (
                        <div
                            key={item.id}
                            className="row"
                        >
                            <div className="col-md-4 offset-md-4 col-lg-6 offset-lg-3">
                                <Shiba
                                    id={item.id}
                                    url={item.url}
                                />
                            </div>
                        </div>
                    ))
                )}
            </div>
        );
    }
}

export default Shibas;
