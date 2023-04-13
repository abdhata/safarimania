document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent page reload
  
    // Get form data
    const formData = new FormData(event.target);
    const id = parseInt(formData.get('id'));
    const name = formData.get('name');
    const description = formData.get('description');
    const imageFile = formData.get('image');
  
    // Create JavaScript object
    const data = {
      id: id,
      name: name,
      description: description,
      image: "http://127.0.0.1:5500/images/" + imageFile.name // assuming you want to store the image file name
    };
  
    // Send POST request to server to add data to JSON file
    fetch('http://localhost:3000/sites', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        console.log('Data added successfully');

        window.location.href = "index.html";
        // Do something else if needed
        //window.location.href = "index.html";
      } else {
        console.error('Failed to add data');
        // Handle error if needed
      }
    })
    .catch(error => {
      console.error('Failed to add data', error);
      // Handle error if needed
    });
  });
  