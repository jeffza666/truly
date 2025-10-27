// Replace with actual values from your backend
const productName = "Headphones";
const quantity = 1;
const price = 10.00;

document.getElementById("product-name").textContent = productName;
document.getElementById("quantity").textContent = quantity;
document.getElementById("price").textContent = price.toFixed(2);
document.getElementById("total").textContent = price.toFixed(2);

const paymentForm = document.getElementById("payment-form");

paymentForm.addEventListener("submit", function(event) {
  event.preventDefault();
  // Simulate form submission to a payment gateway here
  alert("Payment submitted! Thank you for your order.");
});


document.addEventListener("DOMContentLoaded", function() {
  // เลือกทุกปุ่มเพิ่มจำนวนสินค้าและกำหนดการทำงานเมื่อคลิก
  document.querySelectorAll('.cart-item .increase-button').forEach(button => {
      button.addEventListener('click', () => {
          const quantityElement = button.parentElement.querySelector('.quantity');
          let quantity = parseInt(quantityElement.textContent);
          quantity++;
          quantityElement.textContent = quantity;
          updateTotalPrice(); // เรียกใช้ฟังก์ชันเพื่ออัปเดตราคารวม
      });
  });

  // เลือกทุกปุ่มลดจำนวนสินค้าและกำหนดการทำงานเมื่อคลิก
  document.querySelectorAll('.cart-item .decrease-button').forEach(button => {
      button.addEventListener('click', () => {
          const quantityElement = button.parentElement.querySelector('.quantity');
          let quantity = parseInt(quantityElement.textContent);
          if (quantity > 1) {
              quantity--;
              quantityElement.textContent = quantity;
              updateTotalPrice(); // เรียกใช้ฟังก์ชันเพื่ออัปเดตราคารวม
          }
      });
  });
});

// ฟังก์ชันสำหรับอัปเดตราคารวม
function updateTotalPrice() {
  const prices = document.querySelectorAll('.cart-item .price');
  let totalPrice = 0;
  prices.forEach(price => {
      const quantity = parseInt(price.parentElement.querySelector('.quantity').textContent);
      const priceValue = parseFloat(price.textContent.replace('฿', '').replace(',', ''));
      totalPrice += quantity * priceValue;
  });
  document.querySelector('.total-price').textContent = '฿' + totalPrice.toFixed(2);
}