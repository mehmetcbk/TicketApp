import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketinformationComponent } from './ticketinformation.component';

describe('TicketinformationComponent', () => {
  let component: TicketinformationComponent;
  let fixture: ComponentFixture<TicketinformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketinformationComponent]
    });
    fixture = TestBed.createComponent(TicketinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
