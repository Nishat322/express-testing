/* eslint-disable indent */
'use strict';
const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../app');

describe('Express App', () => {
    it('should return a message from GET /', () => {
      return supertest(app)
        .get('/')
        .expect(200, 'Hello Express!');
    });
});

describe('GET /quotient', () => {
    it('8/4 should be 2', () => {
      return supertest(app)
        .get('/quotient')
        .query({ a: 8, b: 4 })
        .expect(200, '8 divided by 4 is 2');
    });
    it('should return 400 if \'a\' is missing', () => {
      return supertest(app)
        .get('/quotient')
        .query({b:4})
        .expect(400, 'Please provide a');    
    });
    it('should return 400 if \'b\' is missing', () => {
      return supertest(app)
        .get('/quotient')
        .query({a:8})
        .expect(400, 'Please provide b');
    });
    it ('should return 400 if \'b\' is equal to 0', () => {
      return supertest(app)
        .get('/quotient')
        .query({a:8, b:0})
        .expect(400, 'Cannot divide by 0!');
    });
  });
  