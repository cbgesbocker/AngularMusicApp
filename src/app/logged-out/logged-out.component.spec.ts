import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LoggedOutComponent } from "./logged-out.component";

describe("LoggedOutComponent", () => {
  let component: LoggedOutComponent;
  let fixture: ComponentFixture<LoggedOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoggedOutComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should provide loggedout component", () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("h1").textContent).toContain(
      "Please login to view dashboard"
    );
  });
});
