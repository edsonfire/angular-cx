import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartAnoComponent } from './pie-chart-ano.component';

describe('PieChartAnoComponent', () => {
  let component: PieChartAnoComponent;
  let fixture: ComponentFixture<PieChartAnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieChartAnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieChartAnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
