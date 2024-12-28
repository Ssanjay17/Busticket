import React, { useState } from 'react';
import "./Payment.css";

const Payment = () => {
  // State to hold input field values
  const [formData, setFormData] = useState({
    accountNumber: '',
    accountHolderName: '',
    paymentDate: new Date().toISOString().slice(0, 10),
    totalPrice: ''
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:8085/pay/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        const result = await response.json();
        alert('Payment submitted successfully!');
        console.log('Response:', result);
        // Clear form after successful submission
        setFormData({
          accountNumber: '',
          accountHolderName: '',
          paymentDate: '',
          totalPrice: ''
        });
      } else {
        const errorData = await response.json();
        alert(`Failed to submit payment: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error submitting payment:', error);
      alert('An error occurred while submitting the payment.');
    }
  };

  return (
    <div id="overall">
      <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
        <h2>Hey <span>&#128654;</span> Payment Here</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label><b>Account Number:</b></label>
            <input 
              type="text" 
              name="accountNumber" 
              value={formData.accountNumber} 
              onChange={handleChange} 
              required 
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </div>
          
          <div style={{ marginBottom: '15px' }}>
            <label><b>Account Holder Name:</b></label>
            <input 
              type="text" 
              name="accountHolderName" 
              value={formData.accountHolderName} 
              onChange={handleChange} 
              required 
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </div>
          
          <div style={{ marginBottom: '15px', display:'flex'}}>
            <div style={{ marginLeft: '3px'}}>
              <label><b>Booking Date:</b></label>
              <input 
                type="date" 
                name="bookingDate" 
                value={formData.bookingDate} 
                onChange={handleChange}
                required 
                style={{ width: '50%', padding: '10px 0px', marginLeft:'20px'}}
              />
            </div>
          </div>
                    
          <div style={{ marginBottom: '15px' }}>
            <label><b>Total Price:</b></label>
            <input 
              type="text" 
              name="totalPrice" 
              value={formData.totalPrice} 
              onChange={handleChange} 
              required 
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </div>
          
          <button 
            type="submit" 
            style={{ width: '100%', padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          >
            Submit Payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
