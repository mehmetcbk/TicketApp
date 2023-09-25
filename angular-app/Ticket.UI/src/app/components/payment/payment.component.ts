import {Component, Input} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})

export class PaymentComponent {
  constructor(private http: HttpClient, private router: Router) {
  }

  baseApiUrl: string = environment.baseapiUrl;
  @Input() eventPrice: number = 0;
  @Input() id: string = "";
  cardholderName: string = "";
  creditCardNumber: string = "";
  expirationDate: string = "";
  cvv: string = "";

  //amount: number=100;
  makePayment() {
    const paymentRequest = {
      cardholderName: this.cardholderName,
      creditCardNumber: this.creditCardNumber,
      expirationDate: this.expirationDate,
      cvv: this.cvv,
      amount: this.eventPrice,
      ticketId:this.id
    };


    this.http.post(this.baseApiUrl + '/api/payments/make-payment', paymentRequest).subscribe(
      (response: any) => {
        console.log('Payment successful:', response);
        this.router.navigate(['/success']);
        // Handle success response from the backend
      },
      (error) => {
        console.error('Payment failed:', error);
        // Handle error response from the backend
        this.router.navigate(['/error']);
      }
    );
  }
}
