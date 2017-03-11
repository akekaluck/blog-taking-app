import React from 'react';
import sinon from 'sinon';
import { shallow, mount, render } from 'enzyme';
import { BlogList } from './index';

function setup(){
  const onButtonClick = sinon.spy();
  const props = {
    blogs: [
      {title: 'Blog 1', date: new Date(), content: 'Hello world' },
      {title: 'Blog 2', date: new Date(), content: 'Hello world 2' }
    ],
    onEdit: onButtonClick,
    onDetail: () => {},
    onAdd: () => {},
    handleClose: () => {},
    handleOK: () => {},
    onRemoveDlgClose: () => {},
    onRemoveBlog: ()=>{},
    onShowRemoveDlg: () => {}
  }

  const enzymeWrapper = shallow(<BlogList { ...props} />)
  return {
    props,
    enzymeWrapper,
    onButtonClick
  }
}

describe('components', () => {
  test('BlogList', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('div').hasClass('blog-list-container')).toBe(true)
  })

  test('BlogList child items', () => {
    const { enzymeWrapper } = setup();
    const blogItems = enzymeWrapper.find('BlogItem');
    expect(blogItems.length).toBe(2);
    expect(blogItems.at(0).props().title).toBe('Blog 1');
    expect(blogItems.at(1).props().title).toBe('Blog 2');
  })
  //
  // test('BlogList child items click', () => {
  //   const { enzymeWrapper, onButtonClick } = setup();
  //   const blogItems = enzymeWrapper.find('BlogItem');
  //   console.log(blogItems.find('button'));
  //   blogItems.at(0).find('button').at(0).simulate('click')
  //   expect(onButtonClick.callCount).toBe(1);
  // })
})
