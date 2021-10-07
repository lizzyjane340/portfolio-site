
// input length validation for forms
const emailInput = document.getElementById('emailInput');

if (emailInput != null) {  
  emailInput.addEventListener('input', () => {
  if (!emailInput.checkValidity()) {
    emailInput.innerHTML = emailInput.validationMessage;
    } 
  });
}

const messageInput = document.getElementById('messageInput');

if (messageInput != null) {  
    messageInput.addEventListener('input', () => {
    if (!messageInput.checkValidity()) {
      messageInput.innerHTML = messageInput.validationMessage;
      } 
    });
  }
