import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row } from 'reactstrap';
import SongsContainer from './SongsContainer/SongsContainer';
import ErrorAlert from '../ErrorAlert/ErrorAlert';

class Dashboard extends Component{

  shouldComponentUpdate(nextProps){
    const { error, success, loading } = this.props;
    return nextProps.error.message !== error.message 
    || nextProps.success.message !== success.message
    || nextProps.loading !== loading; 
  };

  render(){
    const { error, loading } = this.props;
    const SongsContainerUx = loading ? null : <SongsContainer/>;
    const ErrorUx = error.status 
    ? <ErrorAlert message={error.message} />  
    : null;

    return (
      <Fragment>
        { ErrorUx }
        { SongsContainerUx }
      </Fragment>
    );
  }     
};

const mapStateToProps = ({fetching, errors, success}) => {
  return { 
    loading: fetching.status,
    error: errors,
    success: success,
  };
}

Dashboard.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object.isRequired,
  success: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(Dashboard);