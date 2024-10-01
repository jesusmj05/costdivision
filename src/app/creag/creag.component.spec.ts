import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CreagComponent } from './creag.component';

describe('CreagComponent', () => {
  let component: CreagComponent;
  let fixture: ComponentFixture<CreagComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CreagComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
