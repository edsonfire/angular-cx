import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartMesComponent } from './pie-chart-mes.component';

describe('PieChartMesComponent', () => {
  let component: PieChartMesComponent;
  let fixture: ComponentFixture<PieChartMesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieChartMesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieChartMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
