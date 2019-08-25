import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRecentTracksComponent } from './my-recent-tracks.component';

describe('MyRecentTracksComponent', () => {
  let component: MyRecentTracksComponent;
  let fixture: ComponentFixture<MyRecentTracksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRecentTracksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRecentTracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
