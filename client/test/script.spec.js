const { TestWatcher } = require("jest");
const script = require("../script");
jest.mock("../script");

global.fetch = require("jest-fetch-mock");

describe("script client-side file", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test("it makes a fetch call to the api url", () => {
    fetchLatestPosts();
    expect(fetch).toHaveBeenCalledWith("http://localhost:3000/journal");
  });
});
