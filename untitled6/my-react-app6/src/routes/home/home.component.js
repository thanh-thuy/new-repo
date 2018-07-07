import React, {Component} from 'react';

class Home extends Component {


    componentDidMount() {
        console.log(this.props)
        this.props.apiRequest();

    }
    componentDidUpdate() {
        console.log(this.props)

    }

    render() {
        return (
            <div>
                {this.props.api.map((item) => <div key={item.id}>{item.title}</div>)}

            </div>
        );
    }
}

export default Home;