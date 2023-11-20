// JavaScript file (JS/script.js)

document.addEventListener('DOMContentLoaded', function () {
    // Add an event listener to the form submission
    document.querySelector('form').addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the default form submission
  
      // Capture form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const password = document.getElementById('password').value;
      const pizzaType = document.querySelector('.pizza-option button[type="button"]:focus').nextElementSibling.textContent;
      const size = document.getElementById('size').value;
      const crust = document.getElementById('crust').value;
      const sauces = document.getElementById('Sauces').value;
      const toppings = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => checkbox.value);
  
      // Create a Pizza class instance
      const pizzaOrder = new Pizza(name, email, phone, password, pizzaType, size, crust, sauces, toppings);
  
      // Output pizza description to HTML
      displayPizzaOrder(pizzaOrder);
    });
  });
  
  // Pizza class
  class Pizza {
    constructor(name, email, phone, password, pizzaType, size, crust, sauces, toppings) {
      this.name = name;
      this.email = email;
      this.phone = phone;
      this.password = password;
      this.pizzaType = pizzaType;
      this.size = size;
      this.crust = crust;
      this.sauces = sauces;
      this.toppings = toppings;
    }
  }
  
  // Function to display pizza order on the HTML page
  function displayPizzaOrder(pizzaOrder) {
    const pizzaDescription = `
      <h3>Your Pizza Order:</h3>
      <p><strong>Name:</strong> ${pizzaOrder.name}</p>
      <p><strong>Email:</strong> ${pizzaOrder.email}</p>
      <p><strong>Phone:</strong> ${pizzaOrder.phone}</p>
      <p><strong>Password:</strong> ${pizzaOrder.password}</p>
      <p><strong>Pizza Type:</strong> ${pizzaOrder.pizzaType}</p>
      <p><strong>Size:</strong> ${pizzaOrder.size}</p>
      <p><strong>Crust:</strong> ${pizzaOrder.crust}</p>
      <p><strong>Sauces:</strong> ${pizzaOrder.sauces}</p>
      <p><strong>Toppings:</strong> ${pizzaOrder.toppings.join(', ')}</p>
    `;
  
    document.querySelector('.container').insertAdjacentHTML('beforeend', pizzaDescription);
  }
  