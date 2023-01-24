import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetToolbarComponent } from './vet-toolbar.component';

describe('VetToolbarComponent', () => {
  let component: VetToolbarComponent;
  let fixture: ComponentFixture<VetToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VetToolbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VetToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
