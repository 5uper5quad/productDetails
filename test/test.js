import React from 'react';
import  { shallow, mount} from 'enzyme';
import App from '../client/app.jsx';
import Adapter from "enzyme-adapter-react-15";

Enzyme.configure( { adapter: new Adapter() } );

describe(" App component", () => { 
  test("renders", () => {
    const wrapper = shallow(<App />);
    
    expect(wrapper.exists()).toBe(true);
  });
});



// it("add correctly", () =>{
//   expect(1+1).toEqual(2);
// });

