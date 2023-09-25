using TicketApp.Controllers;

namespace TicketApp.Services
{
    public class PaymentService
    {
        private List<PaymentInfo> _payments = new List<PaymentInfo>();

        public PaymentResult MakePayment(PaymentRequest paymentRequest)
        {
            // Validate payment data (e.g., credit card number, expiration date, CVV)
            if (!IsValidCreditCard(paymentRequest.CreditCardNumber) || !IsValidExpirationDate(paymentRequest.ExpirationDate) || !IsValidCVV(paymentRequest.CVV))
            {
                return new PaymentResult { Success = false, Message = "Invalid payment information" };
            }

            // Simulate credit card payment processing
            // You can generate a random result for success/failure
            bool paymentSuccess = GenerateRandomPaymentResult();

            if (paymentSuccess)
            {
                _payments.Add(new PaymentInfo
                {
                    Amount = paymentRequest.Amount,
                    CardholderName = paymentRequest.CardholderName,
                    CreditCardNumber = paymentRequest.CreditCardNumber,
                    ExpirationDate = paymentRequest.ExpirationDate,
                });
            }

            return new PaymentResult { Success = paymentSuccess, Message = paymentSuccess ? "Payment successful" : "Payment failed" };
        }

        // Validation methods (implement as needed)
        private bool IsValidCreditCard(string creditCardNumber) { /* Implement validation */ return true; }
        private bool IsValidExpirationDate(string expirationDate) { /* Implement validation */return true; }
        private bool IsValidCVV(string cvv) { /* Implement validation */ return true; }

        private bool GenerateRandomPaymentResult()
        {
            // Simulate a random payment result (true for success, false for failure)
            //Random random = new Random();
            //return random.Next(0, 2) == 0; // This will return true (success) or false (failure) randomly
            return true;//for testing

        }
    }

    public class PaymentInfo
    {
        public decimal Amount { get; set; }
        public string CardholderName { get; set; }
        public string CreditCardNumber { get; set; }
        public string ExpirationDate { get; set; }
    }
    public class PaymentResult
    {
        public bool Success { get; set; }
        public string Message { get; set; }
    }

}
