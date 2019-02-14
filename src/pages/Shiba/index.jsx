import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { isEmpty } from 'lodash';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Container = styled.div`
    margin-top: 40px;
`;

const Photo = styled.img`
    width: 100%;
    height: auto;
`;

class Shiba extends Component {
    static propTypes = {
        Shiba: PropTypes.shape({
            shibas: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
            isLoading: PropTypes.bool.isRequired,
        }).isRequired,
    }

    static contextTypes = {
        router: PropTypes.shape({
            history: PropTypes.shape({
                push: PropTypes.func.isRequired,
            }).isRequired,
            route: PropTypes.shape({
                match: PropTypes.shape({
                    params: PropTypes.shape({
                        id: PropTypes.string.isRequired,
                    }).isRequired,
                }).isRequired,
            }).isRequired,
        }).isRequired,
    }

    componentWillMount() {
        // Redirect back to home of we don't
        // have a list of shibas in redux.
        if (this.props.Shiba.shibas.length <= 0) {
            this.context.router.history.push('/');
        }
    }

    getShibaById = (id) => {
        const { Shiba: { shibas } } = this.props;
        return shibas.filter(s => s.id === id)[0] || {};
    }

    render() {
        const { router: { route: { match: { params: { id } } } } } = this.context;
        const shiba = this.getShibaById(id);

        return (
            <Container className="container">
                {isEmpty(shiba) ? (
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="text-center">
                                No shiba with this id found...
                            </h3>
                        </div>
                    </div>
                ) : (
                    <div className="row">
                        <div className="col-md-10 offset-md-1">
                            <Photo src={shiba.url} />
                            <br />
                            <br />
                            <div className="d-flex flex-row justify-content-center">
                                <Link
                                    to="/"
                                    className="btn btn-primary"
                                >
                                    Can I haz more shibas?
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    Shiba: state.Shiba,
});

export default connect(mapStateToProps)(Shiba);
