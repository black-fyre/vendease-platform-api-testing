const request = require('supertest')("https://reqres.in/api/");
const expect = require('chai').expect;
const users = require("../fixtures/users.json");

describe('ResReq API Tests', () => {
    users.forEach((user) => {
        it('should create a user', () => {
            return request
                .post('users')
                .send(user)
                .then((res) => {
                    // expect(res.body.data).not.to.be.empty;
                    expect(res.statusCode).to.equal(201);
                    expect(res.header).to.have.property('content-type')
                    expect(res.header["content-type"]).to.include('application/json')
                    //console.log(JSON.stringify(res, null, "\t"))

                })
        })
    })
})

// Response code /
// Response schema
// Response time is within 2 seconds
// Response header has “Content-Type” /
// with value containing “application/json”/

// "req": {
//     "method": "POST",
//         "url": "https://reqres.in/api/users",
//         "data": {
//         "name": "ronaldo",
//             "job": "player"
//     },
//     "headers": {
//         "content-type": "application/json"
//     }
// },
// "header": {
//     "date": "Tue, 02 Jan 2024 12:31:52 GMT",
//         "content-type": "application/json; charset=utf-8",
//         "content-length": "83",
//         "connection": "close",
//         "report-to": "{\"group\":\"heroku-nel\",\"max_age\":3600,\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?ts=1704198712&sid=c4c9725f-1ab0-44d8-820f-430df2718e11&s=WKMHTDnahgqk0khOz40qUh0UMZFtG1CUkMKwf0kfTGE%3D\"}]}",
//         "reporting-endpoints": "heroku-nel=https://nel.heroku.com/reports?ts=1704198712&sid=c4c9725f-1ab0-44d8-820f-430df2718e11&s=WKMHTDnahgqk0khOz40qUh0UMZFtG1CUkMKwf0kfTGE%3D",
//         "nel": "{\"report_to\":\"heroku-nel\",\"max_age\":3600,\"success_fraction\":0.005,\"failure_fraction\":0.05,\"response_headers\":[\"Via\"]}",
//         "x-powered-by": "Express",
//         "access-control-allow-origin": "*",
//         "etag": "W/\"53-S0J07Fv715w0Zybq6tJDxlytkL4\"",
//         "via": "1.1 vegur",
//         "cf-cache-status": "DYNAMIC",
//         "server": "cloudflare",
//         "cf-ray": "83f305830d11fa3c-AMS"
// },
// "status": 201,
//     "text": "{\"name\":\"ronaldo\",\"job\":\"player\",\"id\":\"634\",\"createdAt\":\"2024-01-02T12:31:52.846Z\"}"
// }