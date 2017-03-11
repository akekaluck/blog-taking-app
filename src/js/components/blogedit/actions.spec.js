import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './actions';

import moment from 'moment';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('Test logic validate inputs', function(){
  let store = {};

  beforeEach(function(){
     store = mockStore();
  })

  describe('Validate title', function(){
    test('Title more than 64 characters, error', function(){
      const Blog = {
        title: '1234567890123456789012345678901234567890123456789012345678901234567890',
        content: '',
        date: moment()
      }
      store.dispatch(actions.onAddBlog(Blog))
      expect(store.getActions().length).toBe(1);
      expect(store.getActions()[0].type).toBe(actions.CONTENT_BLOG_ERROR);
    })
    test('Title less than 64 characters, Ok', function(){
      const Blog = {
        title: '123456789012345678901234567',
        content: 'test',
        date: moment()
      }
      store.dispatch(actions.onAddBlog(Blog))
      expect(store.getActions()[0].type).toBe(actions.USER_ADD_BLOG);
    })
    test('Title empty, error', function(){
      const Blog = {
        title: '',
        content: 'test',
        date: moment()
      }
      store.dispatch(actions.onAddBlog(Blog))
      expect(store.getActions().length).toBe(1);
      expect(store.getActions()[0].type).toBe(actions.CONTENT_BLOG_ERROR);
    })
    test('Title undefined, error', function(){
      const Blog = {
        title: undefined,
        content: 'test',
        date: moment()
      }
      store.dispatch(actions.onAddBlog(Blog))
      expect(store.getActions().length).toBe(1);
      expect(store.getActions()[0].type).toBe(actions.CONTENT_BLOG_ERROR);
    })
  })

  describe('Validate Date', function(){
    test('Date more than today, ok', function(){
      const Blog = {
        title: '123456789012345678901234567',
        content: 'test',
        date: moment().add(2, 'days')
      }
      store.dispatch(actions.onAddBlog(Blog))
      expect(store.getActions()[0].type).toBe(actions.USER_ADD_BLOG);
    })
    test('Date less than today, error', function(){
      const Blog = {
        title: '123456789012345678901234567',
        content: 'test',
        date: moment().add(-2, 'days')
      }
      store.dispatch(actions.onAddBlog(Blog))
      expect(store.getActions().length).toBe(1);
      expect(store.getActions()[0].type).toBe(actions.CONTENT_BLOG_ERROR);
    })
  })

  describe('Validate Content', function(){
    test('Content is empty, error', function(){
      const Blog = {
        title: '123456789012345678901234567',
        content: '',
        date: moment()
      }
      store.dispatch(actions.onAddBlog(Blog))
      expect(store.getActions().length).toBe(1);
      expect(store.getActions()[0].type).toBe(actions.CONTENT_BLOG_ERROR);
    })
    test('Content is undefined, error', function(){
      const Blog = {
        title: '123456789012345678901234567',
        content: undefined,
        date: moment()
      }
      store.dispatch(actions.onAddBlog(Blog))
      expect(store.getActions().length).toBe(1);
      expect(store.getActions()[0].type).toBe(actions.CONTENT_BLOG_ERROR);
    })
    test('Content normal, ok', function(){
      const Blog = {
        title: '123456789012345678901234567',
        content: 'content is ok',
        date: moment()
      }
      store.dispatch(actions.onAddBlog(Blog))
      expect(store.getActions()[0].type).toBe(actions.USER_ADD_BLOG);
    })
  });

})
