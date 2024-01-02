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
        it('should create a user', () => {
            //Record the start time before making the API request
            const startTime = performance.now();
            return request
                .post('users')
                .send(user)
                .then((res) => {
                    // Assert the response time is within 2000 milliseconds
                    expect(performance.now() - startTime).to.be.lessThan(2000)
                    expect(res.statusCode).to.equal(201);
                    expect(validate(res.body), "JSON schema is valid").to.be.true;
                    expect(res.header).to.have.property('content-type');
                    expect(res.header["content-type"]).to.include('application/json');


                    //console.log(JSON.stringify(res, null, "\t"))

                })
        })
    })
})