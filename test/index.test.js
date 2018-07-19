const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const expect = chai.expect;
const should = chai.should()
chai.use(chaiHttp);

describe('index page', function(){
  it('should render welcome message', function(){
    chai.request(server)
    .get('/')
    .end((req, res) => {
      res.should.have.status(200)
      res.text.should.contain('StickIt')
    })
  })
})
