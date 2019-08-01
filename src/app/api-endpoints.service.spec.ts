import { TestBed } from "@angular/core/testing";

import { ApiEndpointsService } from "./api-endpoints.service";

fdescribe("ApiEndpointsService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("buildUrl should build a URL object with the params supplied", () => {
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
