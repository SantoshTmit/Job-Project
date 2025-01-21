// Tag removal
document.querySelectorAll('.close-btn-keywords').forEach((btn) => {
  btn.addEventListener('click', function () {
    this.parentElement.remove();
  });
});

// Clear all functionality
document.querySelector('.action-text').addEventListener('click', function () {
  document.querySelectorAll('.tag').forEach((tag) => tag.remove());
});

// add button functionality

// document.querySelector('.AddIcon').addEventListener('click', function () {
//   const input = document.querySelector('.input-text').value;
//   if (input.trim() !== '') {
//     const newTag = document.createElement('span');
//     newTag.classList.add('tag');
//     newTag.textContent = input;
//     document.querySelector('.tags').appendChild(newTag);

//     // Clear input field
//     document.querySelector('.input-text').value = '';
//   }
// });

document.getElementById('addButton').addEventListener('click', function() {
  const inputContainer = document.getElementById('inputContainer');

  // Create a new input field
  const newInput = document.createElement('input');
  newInput.type = 'text';
  newInput.placeholder = 'Enter keyword';
  newInput.className = 'input-field';

  // Append the new input field to the container
  inputContainer.appendChild(newInput);
});

