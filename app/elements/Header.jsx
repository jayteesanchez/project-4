import React from 'react';
import Helmet from 'react-helmet';

class Header extends React.Component {
  render() {
    return (
      <Helmet
        title="Choices"
      />
    );
  }
}

React.renderToString(<Header />);
let header = Helmet.rewind();

export default header;
