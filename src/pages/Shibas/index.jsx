import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getShibas } from '../../services/Shiba/actions';
import ListOfShibas from './components/Shibas';

const Title = styled.h1`
  text-align: center;
  margin-top: 20px;
`;

class Shibas extends Component {
  static propTypes = {
    Shiba: PropTypes.shape({
      shibas: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
      isLoading: PropTypes.bool.isRequired,
    }).isRequired,
    getShibas: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.getShibas();
  }

  render() {
    const { Shiba: { shibas, isLoading } } = this.props;
 
    return (
      <div className="container">
        <Title>
          Shibagram <span role="img" aria-label="dogs taking photos">📸🐶❤️</span>
        </Title>
        <ListOfShibas
          items={shibas}
          isLoading={isLoading}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  Shiba: state.Shiba,
});

const mapDispatchToProps = {
  getShibas,
};

export default connect(mapStateToProps, mapDispatchToProps)(Shibas);
