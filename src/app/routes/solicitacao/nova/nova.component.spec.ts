import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitacaoNovaComponent } from './nova.component';

describe('SolicitacaoNovaComponent', () => {
  let component: SolicitacaoNovaComponent;
  let fixture: ComponentFixture<SolicitacaoNovaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitacaoNovaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitacaoNovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
