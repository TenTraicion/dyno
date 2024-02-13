let NUM_IMAGES = 4;
    function getRandomImage() {
      var randomNumber = Math.floor(Math.random() * (NUM_IMAGES)) + 1;
      var imageUrl = 'images/image' + randomNumber + '.jpg'; // Assuming images are named as image1.jpg, image2.jpg, etc.
      document.getElementById('randomImage').src = imageUrl;
    }

    // Call the getRandomImage function when the page loads
    window.onload = getRandomImage;
