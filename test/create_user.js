const request = require('supertest')("https://reqres.in/api/");
const expect = require('chai').expect;
const users = require("../fixtures/users.json");
const Ajv = require("ajv")
const ajv = new Ajv()
const jsonSchema = require("../resources/create_user_response_schema.json")
const validate = ajv.compile(jsonSchema)
const { performance } = require('perf_hooks');

describe('ResReq API Tests', () => {
    users.forEach((user) => {
        it('should create a user successfully', () => {
            //Record the start time before making the API request
            const startTime = performance.now();
            return request
                .post('users')
                .send(user)
                .then((res) => {
                    expect(performance.now() - startTime, "Response time should be less than 2s").to.be.lessThan(2000)
                    expect(res.statusCode, "Status Code should be 201").to.equal(201);
                    expect(validate(res.body), "Response schema should match JSON schema")
                        .to.be.true;
                    expect(res.header, "Headers should contain Content-Type").to.have.property('content-type');
                    expect(res.header["content-type"], "Content-Type should be application/json")
                        .to.include('application/json');
                })
        })
    })
})