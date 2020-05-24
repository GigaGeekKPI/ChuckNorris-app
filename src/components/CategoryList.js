import React from 'react'
import Category from './Category.js'

class CategoryList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
    }

    async componentDidMount() {
        this.setState({
            categories: await fetch('https://api.chucknorris.io/jokes/categories', {
                method: 'GET'
            }).then(res => res.json())
        })
    }

    render() {
        return (
            <>
                {this.state.categories.map((el, index) => <Category category={el} onSelect={this.props.onChange} key={index} />)}
            </>
        );
    }
}

export default CategoryList;