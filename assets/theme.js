/**
 * JavaScript principal del tema de Shopify
 */

document.addEventListener('DOMContentLoaded', function() {
  
  // ===== Manejo del Newsletter =====
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(this);
      const email = formData.get('contact[email]');
      
      // Validación básica del email
      if (!isValidEmail(email)) {
        showNewsletterMessage('error', 'Por favor, introduce un correo válido.');
        return;
      }
      
      // Enviar formulario
      fetch(this.action, {
        method: 'POST',
        body: formData,
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      })
      .then(response => {
        if (response.ok) {
          showNewsletterMessage('success', '¡Gracias por suscribirte! Revisa tu correo para confirmar.');
          newsletterForm.reset();
        } else {
          showNewsletterMessage('error', 'Hubo un error. Por favor, intenta de nuevo.');
        }
      })
      .catch(error => {
        showNewsletterMessage('error', 'Hubo un error de conexión. Por favor, intenta de nuevo.');
      });
    });
  }
  
  // ===== Agregar al Carrito =====
  const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
      const productId = this.getAttribute('data-product-id');
      addToCart(productId);
    });
  });
  
  // ===== Animaciones al hacer scroll =====
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);
  
  // Observar elementos que queremos animar
  const animateElements = document.querySelectorAll('.product-card, .testimonial-card, .about-grid');
  animateElements.forEach(el => observer.observe(el));
  
});

// ===== Funciones Auxiliares =====

/**
 * Validar email
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Mostrar mensaje del newsletter
 */
function showNewsletterMessage(type, message) {
  const successMsg = document.getElementById('newsletter-success');
  const errorMsg = document.getElementById('newsletter-error');
  
  // Ocultar todos los mensajes
  successMsg.style.display = 'none';
  errorMsg.style.display = 'none';
  
  // Mostrar el mensaje apropiado
  if (type === 'success') {
    successMsg.textContent = message;
    successMsg.style.display = 'block';
  } else {
    errorMsg.textContent = message;
    errorMsg.style.display = 'block';
  }
  
  // Ocultar después de 5 segundos
  setTimeout(() => {
    successMsg.style.display = 'none';
    errorMsg.style.display = 'none';
  }, 5000);
}

/**
 * Agregar producto al carrito
 */
function addToCart(productId) {
  if (!productId) {
    console.error('Product ID no proporcionado');
    return;
  }
  
  fetch('/cart/add.js', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: productId,
      quantity: 1
    })
  })
  .then(response => response.json())
  .then(data => {
    // Actualizar contador del carrito
    updateCartCount();
    
    // Mostrar notificación
    showNotification('¡Producto agregado al carrito!');
  })
  .catch(error => {
    console.error('Error:', error);
    showNotification('Error al agregar el producto', 'error');
  });
}

/**
 * Actualizar contador del carrito
 */
function updateCartCount() {
  fetch('/cart.js')
    .then(response => response.json())
    .then(cart => {
      const cartCount = document.querySelector('.cart-count');
      if (cartCount) {
        cartCount.textContent = cart.item_count;
      }
    });
}

/**
 * Mostrar notificación temporal
 */
function showNotification(message, type = 'success') {
  // Crear elemento de notificación
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 15px 25px;
    background-color: ${type === 'success' ? '#27ae60' : '#e74c3c'};
    color: white;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    z-index: 10000;
    animation: slideIn 0.3s ease;
  `;
  
  document.body.appendChild(notification);
  
  // Eliminar después de 3 segundos
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Añadir estilos de animación
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(400px);
      opacity: 0;
    }
  }
  
  .animate-in {
    animation: fadeInUp 0.6s ease;
  }
`;
document.head.appendChild(style);
