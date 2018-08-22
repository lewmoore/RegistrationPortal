const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const expect = chai.expect;
const should = chai.should()
chai.use(chaiHttp);

describe('About Test', function(){
  it('shouldnt error on load', function(){
    chai.request(server)
    .get('/about')
    .end((req, res) => {
      res.should.have.status(200)
    })
  })
})
