import { test, expect } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config();

const email = process.env.TEST_EMAIL;
const password = process.env.TEST_PASSWORD;

test.describe("Auth - POST /api/auth/login", () => {
  test("login succeeds with valid credentials", async ({ request }) => {
    const response = await request.post("api/auth/login", {
      data: {
        email: email,
        password: password,
      },
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.token).toBeDefined();
  });

  test("login fails with wrong password", async ({ request }) => {
    const response = await request.post("api/auth/login", {
      data: {
        email: email,
        password: "wrongPassword",
      },
    });

    expect(response.status()).toBe(400);
  });

  test("login fails when email is missing", async ({ request }) => {
    const response = await request.post("api/auth/login", {
      data: {
        password: password,
      },
    });

    expect(response.status()).toBe(400);
  });
});
