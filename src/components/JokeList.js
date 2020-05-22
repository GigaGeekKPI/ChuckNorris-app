import React from 'react';

class JokeList extends React.Component {

    render() {
        return (
            <ul>{this.props.jokes.map(el => <li>{el.value}</li>)}</ul>
        );
    }
}

export default JokeList;