import React from 'react';
import { shallow } from 'enzyme';
import { BlogList } from './bloglist';

function setup(){
  const props = {
    blogs: [
      {title: 'Blog 1', date: new Date(), content: 'Hello world' },
      {title: 'Blog 2', date: new Date(), content: 'Hello world 2' }
    ]
  }

  const enzymeWrapper = shallow(<BlogList { ...props} />)
  return {
    props,
    enzymeWrapper
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
})
