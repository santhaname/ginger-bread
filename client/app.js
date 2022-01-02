import React from 'react';
import PropTypes from 'prop-types';

function App({ name }) {
  return (
    <p>
      Hello world...  from react
      {name}
    </p>
  );
}
App.propTypes = {
  name: PropTypes.string.isRequired,
};

export default App;
