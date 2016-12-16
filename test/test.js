var mongoose = require("mongoose");
var chai = require("chai");
var chaihttp = require("chai-http");
var server = require("../server");
var should = chai.should();

chai.use(chaihttp);

describe('/GET', () => {
	it('it should show welcome message', (done) => {
		chai.request(server)
			.get('/')
			.end((err,res) => {
				res.should.have.status(200);
			done();	
			});
	});
});