import React from 'react'

class Category extends React.Component {

    render() {
        let inForm = (
            <div>
                <input type='radio' id={this.props.category} name='category' value={this.props.category} onChange={this.props.onSelect} style={{ display: 'none' }} />
                <label htmlFor={this.props.category}>{this.props.category}</label>
                <br />
            </div>
        );

        let inJoke = <p style={{ color: 'red' }}>{this.props.category}</p>

        let data = 'onSelect' in this.props ? inForm : inJoke;

        return (
            <>{data}</>
        );
    }
}

export default Category;