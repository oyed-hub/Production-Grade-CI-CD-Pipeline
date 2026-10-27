const request = require("supertest");
const app = require("../src/server");

describe("Production CI/CD Pipeline API", () => {

    test("GET / should return application information", async () => {
        const response = await request(app).get("/");

        expect(response.statusCode).toBe(200);

        expect(response.body).toEqual({
            message: "Production CI/CD Pipeline API",
            status: "running"
        });
    });

    test("GET /health should return healthy status", async () => {
        const response = await request(app).get("/health");

        expect(response.statusCode).toBe(200);

        expect(response.body).toEqual({
            status: "healthy"
        });
    });

    test("GET /api/info should return application information", async () => {
        const response = await request(app).get("/api/info");

        expect(response.statusCode).toBe(200);

        expect(response.body.application).toBe(
            "Production CI/CD Pipeline"
        );

        expect(response.body.version).toBe("1.0.0");
    });

});