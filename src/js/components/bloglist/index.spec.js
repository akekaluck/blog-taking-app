import React from 'react';
import sinon from 'sinon';
import { shallow, mount, render } from 'enzyme';
import BlogList from './index';

function setup(){
  const onButtonClick = sinon.spy();
  const props = {
    blogs: [
      {title: 'Blog 1', date: new Date(), content: 'Hello world' },
      {title: 'Blog 2', date: new Date(), content: 'Hello world 2' }
    ],
    showEditBlogPage: onButtonClick,
    showBlogDetailPage: () => {},
    showAddBlogPage: () => {},
    handleClose: () => {},
    handleOK: () => {},
    closeRemoveDlg: () => {},
    removeBlog: ()=>{},
    showRemoveDlg: () => {},
    changefilter: () => {},
    sortBy: 'Date'
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
    expect(enzymeWrapper.find('SubHeader').length).toBe(1)
  })

  test('BlogList child items', () => {
    const { enzymeWrapper } = setup();
    const blogItems = enzymeWrapper.find('BlogItem');
    expect(blogItems.length).toBe(2);
    expect(blogItems.at(0).props().title).toBe('Blog 1');
    expect(blogItems.at(1).props().title).toBe('Blog 2');
  })

})
