import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracaoAvaliarComponent } from './avaliar.component';

describe('AdministracaoAvaliarComponent', () => {
  let component: AdministracaoAvaliarComponent;
  let fixture: ComponentFixture<AdministracaoAvaliarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministracaoAvaliarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministracaoAvaliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
