
document.querySelectorAll('.close-btn-keywords').forEach((btn) => {
  btn.addEventListener('click', function () {
    this.parentElement.remove();
  });
});

// Clear all functionality
document.querySelector('.action-text').addEventListener('click', function () {
  document.querySelectorAll('.tag').forEach((tag) => tag.remove());
});



document.getElementById('addButton').addEventListener('click', function() {
  const inputContainer = document.getElementById('inputContainer');
  if (!inputContainer.querySelector('.input-field')) {
  // Create a new input field
  const newInput = document.createElement('input');
  newInput.type = 'text';
  newInput.placeholder = 'Enter keyword';
  newInput.className = 'input-field';

  // Append the new input field to the container
  inputContainer.appendChild(newInput);
  }
});

// add skill function for skills
document.getElementById('addButtonskills').addEventListener('click', function () {
  const inputContainer = document.getElementById('inputContainerskills');

  // Check if an input field already exists in the container
  if (!inputContainer.querySelector('.input-field-skills')) {
    // Create a new input field
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.placeholder = 'Enter keyword';
    newInput.className = 'input-field-skills';

    // Append the new input field to the container
    inputContainer.appendChild(newInput);
  }
});


//Serch buttton function
document.getElementById('searchButton').addEventListener('click', () => {
  alert('Searching candidates...');
  // Add functionality here (e.g., navigate to a search page or perform a search)
});




