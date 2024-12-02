import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackSnippetsComponent } from './track-snippets.component';

describe('TrackSnippetsComponent', () => {
  let component: TrackSnippetsComponent;
  let fixture: ComponentFixture<TrackSnippetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrackSnippetsComponent]
    });
    fixture = TestBed.createComponent(TrackSnippetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
