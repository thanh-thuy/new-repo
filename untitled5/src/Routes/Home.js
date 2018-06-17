import React, { Component } from 'react';
import { connect} from 'react-redux'
class Home extends Component {
    render() {
        return (
            <div>
                <p>{this.props.count}</p>
                <button onClick={this.props.increment}>+</button>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return { count: state };
};
const mapDispatchToProps = dispatch => {
    return { increment: () => dispatch({type: 'INCREMENT'}) };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);