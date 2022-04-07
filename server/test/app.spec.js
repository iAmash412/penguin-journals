const request = require("supertest");
const app = require("../app");

describe("API Server", () => {
  let api;
  beforeAll(() => {
    api = app.listen(5050, () => {
      console.log("Test server running at port 5050");
    });
  });
  afterAll((done) => {
    api.close(done);
    console.log("Gracefully stopping test server");
  });
  it("responds to get / with a status 200", (done) => {
    request(api).get("/").expect(200, done);
  });

  it("responds to get /journal with a status 200", (done) => {
    request(api).get("/journal").expect(200, done);
  });

  it("retrieves a post by id", (done) => {
    request(api).get("/journal/1").expect(200).expect(
      {
        id: 1,
        title: "fwarfwag",
        Content: "wafawr",
        emojiOne: 0,
        emojiTwo: 0,
        emojiThree: 1,
        comments: [],
        timeStamp: "",
      },
      done
    );
  });

  it("retrieve error 404 with id outside of array length", (done) => {
    request(api).get("/journal/200").expect(404, done);
  });

  it("expect error 422 when posting to /journal without data", (done) => {
    request(api).post("/journal").expect(422, done);
  });

  //   it("expect status 200 when data is sent to /journals", (done) => {
  //     // let post = {
  //     //   title: "fwarfwag",
  //     //   Content: "wafawr",
  //     // };

  //     request(api)
  //       .post("/journal")
  //       .send({
  //         title: "fwarfwag",
  //         Content: "wafawr",
  //       })
  //       .expect(200, done);
  //   });
});
