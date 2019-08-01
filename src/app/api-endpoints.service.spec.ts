import { TestBed } from "@angular/core/testing";

import { ApiEndpointsService } from "./api-endpoints.service";

fdescribe("ApiEndpointsService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should build a URL object with the params supplied", () => {
    const testUrl = new URL("http://test.com");
    const testParams = [
      {
        key: "test",
        value: "string"
      }
    ];
    expect(ApiEndpointsService.buildUrl(testUrl, testParams).href).toEqual(
      "http://test.com/?test=string"
    );
  });

  it("Should return a string ", () => {
    const service: ApiEndpointsService = TestBed.get(ApiEndpointsService);
    expect(
      ApiEndpointsService.buildUrl(new URL("http://test.com"), [
        {
          key: "test",
          value: "string"
        }
      ]).href
    ).toEqual("http://test.com/?test=string");
  });
});
