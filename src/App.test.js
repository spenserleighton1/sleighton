// import React from 'react';
// import App from './App.js';
// import { shallow } from 'enzyme';

// describe('App', () => {
//   let wrapper = shallow(<App/>);
//   it('should match the snapShot', () => {
//     console.log('wrap that shit')
//     expect(wrapper).toMatchSnapshot()
//   })
// })

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
