import React from 'react';
import { connect} from 'react-redux'
import * as homeActions from '../../modules/home/home.action';
import Home from './home.component';
const mapStateToProps = (state) => {
    return {
        api: state.api.data
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        apiRequest: () => dispatch(homeActions.apiRequest())
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);