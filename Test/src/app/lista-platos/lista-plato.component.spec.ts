import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPlatoComponent } from './lista-plato.component';

describe('ListaPlatoComponent', () => {
  let component: ListaPlatoComponent;
  let fixture: ComponentFixture<ListaPlatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaPlatoComponent]
    });
    fixture = TestBed.createComponent(ListaPlatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
