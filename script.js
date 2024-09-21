function createStars() {
  const container = document.querySelector("body");
  for (let i = 0; i < 1000; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.width = ".1px";
    star.style.height = ".1px";
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";
    container.appendChild(star);
  }
}
createStars();

function createAsteroidBelt(radius, numAsteroids) {
  const asteroidBelt = document.getElementById('asteroidBelt');
  asteroidBelt.innerHTML = ''; // Clear previous asteroids to avoid duplication

  for (let i = 0; i < numAsteroids; i++) {
    const asteroid = document.createElement('div');
    asteroid.className = 'asteroid';
    
    // Random angle and distance within the belt
    const angle = Math.random() * Math.PI * 2;
    const distance = radius + (Math.random() * 20) - 10; // Randomize within a band
    
    // Positioning the asteroid
    const x = Math.cos(angle) * distance + asteroidBelt.clientWidth / 2;
    const y = Math.sin(angle) * distance + asteroidBelt.clientHeight / 2;
    
    asteroid.style.left = `${x}px`;
    asteroid.style.top = `${y}px`;

    asteroidBelt.appendChild(asteroid);
  }
}

// Create an asteroid belt with radius 150px and 100 asteroids
createAsteroidBelt(130, 150);
