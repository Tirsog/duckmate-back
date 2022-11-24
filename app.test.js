const request = require("supertest")
const baseURL = "http://localhost:3001/api"

describe("GET /posts", () => {
    const newposts = {
    user_name : "cmnd",
    title: "Drink water",
    description: "making an app to drink water",
    stack:"React"
    }
    beforeAll(async () => {
    
    await request(baseURL).post("/post").send(newposts);
    })
    afterAll(async () => {
    await request(baseURL).delete(`/post/?username=${newposts.user_name}`)
    })
    it("should return 200", async () => {
    const response = await request(baseURL).get("/post");
    expect(response.statusCode).toBe(200);
    expect(response.body.error).toBe(undefined);
    });
    it("should return posts", async () => {
    const response = await request(baseURL).get("/post");
    
    expect(response.body.length < 5).toBe(false);
    });
    });