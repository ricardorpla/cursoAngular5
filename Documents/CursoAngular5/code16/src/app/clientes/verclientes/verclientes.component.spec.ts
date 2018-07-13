import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerclientesComponent } from './verclientes.component';

describe('VerclientesComponent', () => {
  let component: VerclientesComponent;
  let fixture: ComponentFixture<VerclientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerclientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerclientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
