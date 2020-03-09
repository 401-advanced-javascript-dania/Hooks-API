import React from 'react';
import { shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';
import Header from '../component/header.js';
import Footer from '../component/footer.js';
describe('<Header/>',()=>{
  it('exists at the start of our app',()=>{
    let app = shallow(<Header/>);
    expect(app.find('h1').exists()).toBeTruthy();
  });
  it('render correctly',() =>{
    const tree = renderer.create(<Header/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('<Footer/>',()=>{
  it('exists at the start of our app',()=>{
    let app = shallow(<Footer/>);
    expect(app.find('footer').exists()).toBeTruthy();
  });
  it('render correctly',() =>{
    const tree = renderer.create(<Footer/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});