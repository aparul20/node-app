//This is the First Way to write the test
/*var expect  = require('chai').expect;
var request = require('request');

describe('Status and content', function() {
    describe ('Main page', function() {
        it('content', function(done) {
            request('http://localhost:3000/' , function(error, response, body) {
                expect(body).to.equal('hello world - app1');
                done();
            });
        });
    });
});
*/

//This is the Second Way to write the test
var request = require('supertest');
var app = require('../index.js');
describe('GETFUNCTION /', function() {
 it('respond with hello world', function(done) {
 //navigate to root and check the the response is "hello world"
 request(app).get('/').expect('hello world - app', done);
 });
});