// server/tests/admin.test.js

const chai = require("chai");
const chaiHttp = require("chai-http");
const pool = require("../db.test"); // Assuming you have db.test.js for test database
const app = require("../index"); // Your Express app instance
const { expect } = chai;

chai.use(chaiHttp);

describe("Admin API", () => {
  before(async () => {

  });

  after(async () => {
    // Clean up any data created during testing
    // For example, delete the test admin data created in the "before" hook
  });

  describe("GET /api/admin/admins", () => {
    it("should return a list of admins", async () => {
      const res = await chai.request(app).get("/api/admin/admins");
      expect(res).to.have.status(200);
      expect(res.body).to.be.an("array");
      // You can add more assertions based on your response format
    });
  });
});
