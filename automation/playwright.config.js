import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  use: {
    baseURL: process.env.BASE_URL,
    extraHTTPHeaders: {
      ContentType: "application/json",
    },
  },
});
