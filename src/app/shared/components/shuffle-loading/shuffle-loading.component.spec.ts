import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShuffleLoadingComponent } from './shuffle-loading.component';

describe('ShuffleLoadingComponent', () => {
  let component: ShuffleLoadingComponent;
  let fixture: ComponentFixture<ShuffleLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShuffleLoadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShuffleLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
