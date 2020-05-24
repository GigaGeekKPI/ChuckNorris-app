import React from 'react'

class Category extends React.Component {

    render() {
        let inForm = (
            <>
                <input type='radio' id={this.props.category} name='category' value={this.props.category} onChange={this.props.onSelect} style={{ display: 'none' }} />
                <div className='Category'>
                    <label htmlFor={this.props.category}>{this.props.category}</label>
                </div>
            </>
        );
        let label;
        if (this.props.category.length) {
            label = <label>{this.props.category}</label>
        }
        let inJoke = <div className='Category'>
            {label}
        </div>

        let data = 'onSelect' in this.props ? inForm : inJoke;

        return (
            <>{data}</>
        );
    }
}

export default Category;