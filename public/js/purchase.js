// Optional fields from an earlier template. The checkout page does not
// render these ids; skip them instead of throwing and stopping the script.
const productName = "Headphones";
const quantity = 1;
const price = 10.00;

function readShipping() {
  const shippingEl = document.getElementById("shipping-cost");
  if (!shippingEl) return 0;
  const value = parseFloat(shippingEl.textContent.replace(/[^\d.]/g, ""));
  return Number.isFinite(value) ? value : 0;
}

// Keep the order summary in step with the line quantity, including shipping.
function updateTotalPrice() {
  const prices = document.querySelectorAll(".cart-item .price");
  let itemTotal = 0;
  let itemCount = 0;
  prices.forEach(priceEl => {
    const quantityEl = priceEl.parentElement.querySelector(".quantity");
    const lineQuantity = parseInt(quantityEl.textContent, 10);
    const priceValue = parseFloat(priceEl.textContent.replace("฿", "").replace(",", ""));
    itemCount += lineQuantity;
    itemTotal += lineQuantity * priceValue;
  });
  const summaryQuantity = document.getElementById("summary-quantity");
  if (summaryQuantity) summaryQuantity.textContent = String(itemCount);
  const totalEl = document.querySelector(".total-price");
  if (totalEl) totalEl.textContent = "฿" + (itemTotal + readShipping()).toFixed(2);
}

document.addEventListener("DOMContentLoaded", function() {
  const productNameEl = document.getElementById("product-name");
  const quantityEl = document.getElementById("quantity");
  const priceEl = document.getElementById("price");
  const totalEl = document.getElementById("total");
  if (productNameEl) productNameEl.textContent = productName;
  if (quantityEl) quantityEl.textContent = quantity;
  if (priceEl) priceEl.textContent = price.toFixed(2);
  if (totalEl) totalEl.textContent = price.toFixed(2);

  const paymentForm = document.getElementById("payment-form");
  if (paymentForm) {
    paymentForm.addEventListener("submit", function(event) {
      event.preventDefault();
      // Simulate form submission to a payment gateway here
      alert("Payment submitted! Thank you for your order.");
    });
  }

  // เลือกทุกปุ่มเพิ่มจำนวนสินค้าและกำหนดการทำงานเมื่อคลิก
  document.querySelectorAll(".cart-item .increase-button").forEach(button => {
    button.addEventListener("click", () => {
      const quantityElement = button.parentElement.querySelector(".quantity");
      let next = parseInt(quantityElement.textContent, 10);
      next++;
      quantityElement.textContent = next;
      updateTotalPrice();
    });
  });

  // เลือกทุกปุ่มลดจำนวนสินค้าและกำหนดการทำงานเมื่อคลิก
  document.querySelectorAll(".cart-item .decrease-button").forEach(button => {
    button.addEventListener("click", () => {
      const quantityElement = button.parentElement.querySelector(".quantity");
      let next = parseInt(quantityElement.textContent, 10);
      if (next > 1) {
        next--;
        quantityElement.textContent = next;
        updateTotalPrice();
      }
    });
  });
});
