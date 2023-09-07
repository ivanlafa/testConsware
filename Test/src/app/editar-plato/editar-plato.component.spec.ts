import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPlatoComponent } from './editar-plato.component';

describe('EditarPlatoComponent', () => {
  let component: EditarPlatoComponent;
  let fixture: ComponentFixture<EditarPlatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarPlatoComponent]
    });
    fixture = TestBed.createComponent(EditarPlatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
