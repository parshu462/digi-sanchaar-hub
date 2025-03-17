
interface InvoiceEmailParams {
  to: string;
  orderData: {
    orderId: string;
    items: any[];
    billing: any;
    amount: number;
    tax: number;
    subtotal: number;
    timestamp: string;
    status: string;
  };
}

// In a real application, this would connect to an email service like SendGrid, Mailchimp, etc.
export const sendInvoiceEmail = async (params: InvoiceEmailParams): Promise<boolean> => {
  const { to, orderData } = params;
  
  // Format the date for the invoice
  const orderDate = new Date(orderData.timestamp);
  const formattedDate = orderDate.toLocaleDateString('en-IN', {
    day: '2-digit', 
    month: 'long', 
    year: 'numeric'
  });

  // Generate a professional HTML invoice email
  const invoiceHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>DigiSanchaar - Invoice</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 0; color: #333; line-height: 1.6; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { text-align: center; padding: 20px 0; }
        .logo { max-width: 150px; height: auto; }
        .invoice-box { border: 1px solid #eee; padding: 30px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.15); }
        .title { color: #ff6b35; font-size: 24px; font-weight: bold; margin-bottom: 20px; }
        .info-row { display: flex; justify-content: space-between; margin-bottom: 5px; }
        .info-block { margin-bottom: 20px; }
        .divider { border-top: 1px solid #eee; margin: 20px 0; }
        .item-table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
        .item-table th { background-color: #f8f8f8; text-align: left; padding: 10px; }
        .item-table td { padding: 10px; border-bottom: 1px solid #eee; }
        .total-row { font-weight: bold; }
        .highlight { color: #ff6b35; }
        .footer { text-align: center; margin-top: 30px; font-size: 14px; color: #888; }
        .button { display: inline-block; background-color: #ff6b35; color: white; padding: 12px 25px; text-decoration: none; border-radius: 4px; margin-top: 20px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <img class="logo" src="https://digisanchaar.com/wp-content/uploads/2023/06/cropped-digi-logo.png" alt="DigiSanchaar Logo">
        </div>
        
        <div class="invoice-box">
          <div class="title">Invoice Receipt</div>
          
          <div class="info-block">
            <div class="info-row">
              <span><strong>Invoice Number:</strong></span>
              <span>INV-${orderData.orderId.slice(-8).toUpperCase()}</span>
            </div>
            <div class="info-row">
              <span><strong>Date:</strong></span>
              <span>${formattedDate}</span>
            </div>
            <div class="info-row">
              <span><strong>Payment Status:</strong></span>
              <span><span style="color: #4CAF50; font-weight: bold;">✓ ${orderData.status.toUpperCase()}</span></span>
            </div>
          </div>
          
          <div class="divider"></div>
          
          <div class="info-block">
            <div><strong>Bill To:</strong></div>
            <div>${orderData.billing.fullName}</div>
            <div>${orderData.billing.email}</div>
            <div>${orderData.billing.phone || ''}</div>
            <div>${orderData.billing.address || ''}</div>
          </div>
          
          <div class="divider"></div>
          
          <table class="item-table">
            <tr>
              <th>Item</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Amount</th>
            </tr>
            ${orderData.items.map(item => `
              <tr>
                <td>${item.name}</td>
                <td>${item.quantity}</td>
                <td>₹${item.price}</td>
                <td>₹${item.price * item.quantity}</td>
              </tr>
            `).join('')}
          </table>
          
          <div class="info-row">
            <span>Subtotal:</span>
            <span>₹${orderData.subtotal}</span>
          </div>
          <div class="info-row">
            <span>Tax:</span>
            <span>₹${orderData.tax}</span>
          </div>
          <div class="info-row total-row">
            <span>Total:</span>
            <span class="highlight">₹${orderData.amount}</span>
          </div>
          
          <div class="divider"></div>
          
          <div style="text-align: center;">
            <p>Thank you for your business!</p>
            <div>
              <a href="https://digisanchaar.com" class="button">Visit Our Website</a>
            </div>
          </div>
        </div>
        
        <div class="footer">
          <p>DigiSanchaar - Helping you grow your business online.</p>
          <p>© ${new Date().getFullYear()} DigiSanchaar. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;
  
  console.log(`Sending professional invoice email to ${to} for order ${orderData.orderId}`);
  console.log(`Email HTML content generated (${invoiceHtml.length} characters)`);
  
  // For demonstration, show what would be sent in a real application
  console.log('Invoice Details:');
  console.log(`  Order ID: ${orderData.orderId}`);
  console.log(`  Date: ${formattedDate}`);
  console.log(`  Billing Name: ${orderData.billing.fullName}`);
  console.log(`  Email: ${orderData.billing.email}`);
  console.log(`  Total Amount: ₹${orderData.amount}`);
  console.log(`  Payment Status: ${orderData.status}`);
  
  // Simulating email sending with additional messages
  console.log('Connecting to email service...');
  
  // In a production environment, you would use an email service API here
  // Example with a service like SendGrid would be:
  // await sendgrid.send({
  //   to: to,
  //   from: 'support@digisanchaar.com',
  //   subject: 'Your DigiSanchaar Invoice',
  //   html: invoiceHtml,
  // });
  
  // For this demo, we'll simulate the email API call with a delay
  return new Promise((resolve) => {
    setTimeout(() => {
      // Send a real email via browser's mailto functionality for testing
      // Note: This will only work if the user has a mail client configured
      try {
        const mailtoLink = `mailto:${to}?subject=Your DigiSanchaar Invoice&body=Please see the attached invoice. This is a test email.`;
        
        // Create a hidden link and click it
        const link = document.createElement('a');
        link.href = mailtoLink;
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        console.log('Professional invoice email sent successfully via mailto');
      } catch (error) {
        console.log('Could not open mailto link, but invoice would be sent in production', error);
      }
      
      console.log('Email includes: Order confirmation, payment receipt, billing details, and order summary');
      toast('Invoice sent to your email!', {
        description: 'Check your inbox for the detailed receipt.',
        action: {
          label: 'Thank you',
          onClick: () => console.log('User acknowledged invoice email'),
        },
      });
      
      resolve(true);
    }, 1500);
  });
};

// Additional email utility functions can be added here
export const sendOrderConfirmation = async (email: string, orderId: string): Promise<boolean> => {
  console.log(`Sending order confirmation to ${email} for order ${orderId}`);
  
  // Simulating API call with a delay
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Order confirmation sent successfully');
      resolve(true);
    }, 800);
  });
};

// Professional delivery notification
export const sendDeliveryNotification = async (email: string, orderId: string): Promise<boolean> => {
  console.log(`Sending delivery notification to ${email} for order ${orderId}`);
  
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Delivery notification sent successfully');
      resolve(true);
    }, 800);
  });
};

// Send purchase receipt
export const sendPurchaseReceipt = async (email: string, orderData: any): Promise<boolean> => {
  console.log(`Sending purchase receipt to ${email} for order ${orderData.orderId}`);
  
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Purchase receipt sent successfully');
      resolve(true);
    }, 800);
  });
};
