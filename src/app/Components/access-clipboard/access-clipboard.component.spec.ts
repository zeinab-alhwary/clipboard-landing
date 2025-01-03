import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessClipboardComponent } from './access-clipboard.component';

describe('AccessClipboardComponent', () => {
  let component: AccessClipboardComponent;
  let fixture: ComponentFixture<AccessClipboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccessClipboardComponent]
    });
    fixture = TestBed.createComponent(AccessClipboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
