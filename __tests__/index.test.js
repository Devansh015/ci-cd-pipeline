/**
 * @jest-environment node
 */

const request = require("supertest");
const app = require("../app");

describe("This is a test for the Node JS Web Server", () => {
  test("Should return 200 response", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
  });

  test("Should contain 'web server' in response body", async () => {
    const response = await request(app).get("/");

    expect(response.text).toContain("web server");
  });
});
