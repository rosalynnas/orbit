// Define a function to create an animation
function animate(element, duration) {
  // Define the keyframes for the animation effect
  const keyframes = [
    { transform: "rotate(0deg)" },
    { transform: "rotate(360deg)" },
  ];

  // Create a KeyframeEffect object
  const keyframeEffect = new KeyframeEffect(element, keyframes, {
    duration: duration, // Animation duration in milliseconds
    iterations: Infinity, // Infinite animation
    easing: "linear", // Linear timing function
  });

  // Create an Animation object
  const animation = new Animation(keyframeEffect, document.timeline);

  // Start the animation
  animation.play();
}

const planets = document.querySelectorAll(".planet.orbit");
const moons = document.querySelectorAll(".moon.orbit");

// Create and initiate animation for celestialBodies
planets.forEach((planet) => {
  animate(planet, 16000);
});

// Create and initiate animation for celestialBodies
moons.forEach((moon) => {
  animate(moon, 2000);
});
