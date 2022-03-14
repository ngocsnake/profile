function fire() {
  var count = 300;

  function fire(particleRatio, opts) {
    confetti(Object.assign({}, opts, {
      particleCount: Math.floor(count * particleRatio)
    }));
  }

  fire(0.25, {
    spread: 30, //DO RONG  
    startVelocity: 60, //DO CAO
    angle: 70,
    particleCount: 7,
    origin: {
      x: 0.25,
      y: 1
    }
  });
  fire(0.25, {
    spread: 30, //DO RONG 
    startVelocity: 60, //DO CAO
    angle: 110,
    particleCount: 100,
    origin: {
      x: 0.75,
      y: 1
    }
  });
  fire(0.25, {
    spread: 30, //DO RONG  
    startVelocity: 60, //DO CAO
    angle: 60,
    particleCount: 7,
    origin: {
      x: 0.25,
      y: 1
    }
  });
  fire(0.25, {
    spread: 30, //DO RONG  
    startVelocity: 60, //DO CAO
    angle: 120,
    particleCount: 100,
    origin: {
      x: 0.75,
      y: 1
    }
  });
}