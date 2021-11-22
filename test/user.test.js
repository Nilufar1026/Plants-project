// const request = require("supertest");
// const app = require("../app");

// // // const assert = require("assert");

// // const supertest = request(app);

// const userTest = describe("Test user endpoints", () => {
//   test("GET /api/users - Checking for Kalle", (done) => {
//     request(app)
//       .get("/api/users")
//       .expect("Content-Type", /json/)
//       .expect(200, /Kalle/)
//       .end((err, res) => {
//         if (err) return done(err);
//         return done();
//       });
//   });

//   test("GET /api/users - Checking Sven-Åke", (done) => {
//     request(app)
//       .get("/api/users")
//       .expect("Content-Type", /json/)
//       .expect(200, /Sven-Åke/)
//       .end((err, res) => {
//         if (err) return done(err);
//         return done();
//       });
//   });

//   test("GET /api/usersAAAA - Checking for non-existent page", (done) => {
//     request(app)
//       .get("/api/usersAAAA")
//       .expect(404)
//       .end((err, res) => {
//         if (err) return done(err);
//         return done();
//       });
//   });

//   test("GET /api/users - Checking ", async () => {
//     const res = await request(app).get("/api/users");
//     let myVar = true;
//     expect(res.status).toEqual(200);
//     expect(res.type).toEqual(expect.stringContaining("json"));
//     expect(Array.isArray(res.body.data));
//     expect(typeof myVar).toEqual("boolean");
//     expect(res.body.data[2].name).toEqual("Anders");
//   });
// });

// module.exports = userTest;


const request = require("supertest");
const app = require("../app");
// const assert = require("assert");

describe("Test user endpoints", () => {
  test("GET /api/users - Check if content-type are JSON and status 200", (done) => {
    request(app)
      .get("/api/users")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });

  test("GET /api/users - Check if 'Anders' exist in Users database", (done) => {
    request(app)
      .get("/api/users")
      .expect(200, /Anders/)
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });

  test("GET /api/Users - Check if the user object length is greater than 0", async () => {
    const res = await request(app).get("/api/users");
    expect((res.body.users).length).toBeGreaterThan(0)
  });

  
});