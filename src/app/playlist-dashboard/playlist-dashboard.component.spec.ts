import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistDashboardComponent } from './playlist-dashboard.component';

describe('PlaylistDashboardComponent', () => {
  let component: PlaylistDashboardComponent;
  let fixture: ComponentFixture<PlaylistDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
