import React from 'react'

class Burger extends React.Component {
    render() {
        let icon;

        if (!this.props.hidden) {
            icon = <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="14" cy="14" r="14" fill="#333333" />
                <rect x="7" y="16" width="14" height="2" rx="1" fill="white" />
                <rect x="7" y="10" width="14" height="2" rx="1" fill="white" />
            </svg>
        } else {
            icon = <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="14" cy="14" r="14" fill="#333333" />
                <rect width="14.8492" height="2.12131" rx="1.06065" transform="matrix(0.707103 -0.707111 0.707103 0.707111 8 18.5)" fill="white" />
                <rect width="14.8492" height="2.12131" rx="1.06065" transform="matrix(0.707103 0.707111 -0.707103 0.707111 9.5 8)" fill="white" />
            </svg>
        }
        return (
            <div className='burger' onClick={this.props.toggle}>
                <h2>Favourite</h2>
                <div>
                    {icon}
                </div>
            </div>
        );
    }
}

export default Burger;