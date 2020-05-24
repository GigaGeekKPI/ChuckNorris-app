import React from 'react';

class Greeting extends React.Component {
  render() {
    return (
      <div className='Greeting'>
        <h2 className='greeting-header'>Hey!</h2>
        <p className='greeting-paragraph'>Let's find a joke for you:</p>
      </div>
    )
  };
}

export default Greeting;