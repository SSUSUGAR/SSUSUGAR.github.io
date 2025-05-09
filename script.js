// Robot Animation (Zhezhe Qian, 3/19/25)
let robotSketch = function(p) {
  p.setup = function() {
    let canvas = p.createCanvas(400, 400, p.WEBGL);
    canvas.parent('robotCanvasContainer');
    p.background(0);
    
    // Add event listener for the replay button
    let replayButton = p.select('#robotReplayButton');
    replayButton.mousePressed(() => {
      p.frameCount = 0;
      p.setup();
    });
  };

  p.draw = function() {
    p.background(135, 206, 235); // Sky blue for the sky
    p.ambientLight(255);
    p.directionalLight(255, 255, 255, 0, -1, 0.5);
    p.pointLight(200, 200, 200, 0, -200, 200);

    // Mountain terrain
    p.push();
    p.translate(0, 200, 0);
    p.rotateX(p.PI / 6);
    p.fill(100, 150, 100, 200);
    p.noStroke();
    p.plane(800, 800);
    p.pop();

    // Robot with animation
    p.push();
    let moveX = p.cos(p.frameCount * 0.25) * 5;
    let moveZ = p.frameCount * 5;
    let rbt = p.cos(p.frameCount * 0.18) * 10;
    p.translate(moveX, 50 + rbt, moveZ - 400);

    // Body
    p.push();
    p.translate(0, -50, 0);
    p.fill(150, 100, 50, 230);
    p.specularMaterial(100);
    p.box(120, 120, 120);
    
    // Bin
    p.translate(0, -60, 60);
    p.fill(100, 80, 60, 240);
    p.box(80, 40, 40);
    p.pop();

    // Head
    p.push();
    p.translate(0, -100 + p.sin(p.frameCount * 0.1) * 2, 0);
    p.fill(180, 180, 180, 240);
    p.specularMaterial(150);
    p.box(80, 60, 80);
    
    // Neck
    p.translate(0, 30, 0);
    p.fill(150, 100, 50, 230);
    p.box(40, 20, 40);
    
    // Eyes
    p.push();
    p.translate(-20, -110, 40);
    p.fill(0, 0, 0, 255);
    p.box(20, 20, 10);
    p.fill(255, 255, 255, 200);
    p.translate(0, 0, 5);
    p.box(16, 16, 2);
    p.pop();

    p.push();
    p.translate(20, -110, 40);
    p.fill(0, 0, 0, 255);
    p.box(20, 20, 10);
    p.fill(255, 255, 255, 200);
    p.translate(0, 0, 5);
    p.box(16, 16, 2);
    p.pop();
    p.pop();

    // Tracks
    p.push();
    p.translate(-80, 40, 0);
    p.fill(100, 80, 60, 240);
    p.specularMaterial(255);
    p.rotateX(p.PI / 2);
    p.cylinder(40, 120, 24, 3);
    for (let i = -50; i <= 50; i += 25) {
      p.push();
      p.translate(0, i, 20);
      p.fill(80, 60, 40, 200);
      p.cylinder(10, 10, 24, 1);
      p.pop();
    }
    p.pop();

    p.push();
    p.translate(80, 40, 0);
    p.fill(100, 80, 60, 240);
    p.specularMaterial(255);
    p.rotateX(p.PI / 2);
    p.cylinder(40, 120, 24, 3);
    for (let i = -50; i <= 50; i += 25) {
      p.push();
      p.translate(0, i, 20);
      p.fill(80, 60, 40, 200);
      p.cylinder(10, 10, 24, 1);
      p.pop();
    }
    p.pop();

    // Arms
    p.push();
    p.translate(-70, -50, 40);
    p.fill(150, 100, 50, 230);
    p.specularMaterial(255);
    p.box(20, 80, 20);
    p.translate(0, 40, 20);
    p.box(20, 20, 40);
    p.translate(0, 10, 20);
    p.fill(180, 180, 180, 240);
    p.box(20, 20, 20);
    p.pop();

    p.push();
    p.translate(70, -50, 40);
    p.fill(150, 100, 50, 230);
    p.specularMaterial(255);
    p.box(20, 80, 20);
    p.translate(0, 40, 20);
    p.box(20, 20, 40);
    p.translate(0, 10, 20);
    p.fill(180, 180, 180, 240);
    p.box(20, 20, 20);
    p.pop();
    p.pop();
    
    // Shadow
    p.push();
    p.translate(moveX, 150, moveZ - 400);
    p.rotateX(p.PI/2);
    p.fill(0, 0, 0, 50);
    p.noStroke();
    p.ellipse(0, 0, 200, 100);
    p.pop();
  };
};

// Rocket Animation (Zhezhe Qian, 3/12/25)
let rocketSketch = function(p) {
  p.setup = function() {
    let canvas = p.createCanvas(800, 800);
    canvas.parent('rocketCanvasContainer');
    
    // Add event listener for the replay button
    let replayButton = p.select('#rocketReplayButton');
    replayButton.mousePressed(() => {
      p.setup();
    });
  };

  p.draw = function() {
    p.background(10, 20, 40); // Dark blue-black space color
    
    // Draw random stars
    p.fill('#FFFFFF');
    for (let i = 0; i < 350; i++) {
      let x = p.random(0, p.width);
      let y = p.random(0, p.height);
      let size = p.random(1, 3);
      p.ellipse(x, y, size, size);
    }
    
    // Draw Earth in the background
    p.fill(0, 100, 200); // Blue for oceans
    p.ellipse(200, 600, 250, 250);
    
    // Landmasses
    p.fill('#2ED65E'); // Green for land
    p.beginShape();
    p.vertex(150, 510);
    p.vertex(200, 500);
    p.vertex(250, 550);
    p.vertex(200, 600);
    p.endShape(p.CLOSE);
    
    p.fill(139, 69, 19); // Brown for continent
    p.ellipse(270, 650, 80, 50);
    
    // Atmosphere
    p.noStroke();
    for (let i = 0; i < 10; i++) {
      p.fill(255, 255, 255, 20);
      p.ellipse(200, 600, 250 + i * 2, 250 + i * 2);
    }
    
    // Main body of the rocket
    p.fill('#FFD700'); // Gold
    p.rect(300, 200, 200, 400, 60);
    
    // Nose cone
    p.fill(190); // Gray
    p.triangle(300, 200, 500, 200, 400, 40);
    
    // Fins
    p.fill(165); // Gray
    p.triangle(300, 450, 230, 620, 300, 600); // Left fin
    p.triangle(500, 450, 570, 620, 500, 600); // Right fin
    
    // Windows
    p.fill('#00BFFF'); // Blue
    p.ellipse(400, 270, 30, 30);
    p.ellipse(400, 330, 30, 30);
    p.ellipse(400, 390, 30, 30);
    p.ellipse(400, 450, 30, 30);
    
    // Thrusters
    p.fill('#FFAA38'); // Orange
    p.triangle(320, 600, 480, 600, 400, 750); // Outer flame
    p.fill('#FF3333'); // Red
    p.triangle(350, 620, 450, 620, 400, 730); // Inner flame
    
    // Left Booster Body
    p.fill('#FFD700'); // Gold
    p.rect(230, 500, 50, 150, 15);
    
    // Left Booster Fire
    p.fill('#FFAA38'); // Orange
    p.triangle(230, 650, 280, 650, 255, 750); // Outer flame
    p.fill('#FF3333'); // Red
    p.triangle(240, 670, 270, 670, 255, 730); // Inner flame
    
    // Right Booster Body
    p.fill('#FFD700'); // Gold
    p.rect(520, 500, 50, 150, 15);
    
    // Right Booster Fire
    p.fill('#FFAA38'); // Orange
    p.triangle(520, 650, 570, 650, 545, 750); // Outer flame
    p.fill('#FF3333'); // Red
    p.triangle(530, 670, 560, 670, 545, 730); // Inner flame
  };
};

// Synonymous Crystal (Zhezhe Qian, 3/10/25)
let crystalSketch = function(p) {
  let angle = 0;
  let maxLevels = 5;
  let startTime;

  p.setup = function() {
    let canvas = p.createCanvas(800, 800);
    canvas.parent('crystalCanvasContainer');
    p.background(0);
    p.noFill();
    p.stroke(255);
    startTime = p.millis(); // Record start time

    // Add event listener for the replay button
    let replayButton = p.select('#crystalReplayButton');
    replayButton.mousePressed(() => {
      angle = 0;
      startTime = p.millis();
      p.setup();
    });
  };

  p.draw = function() {
    if (p.millis() - startTime < 1000) {
      return; // Wait for 1 second before starting
    }

    p.background(0, 20);
    p.translate(p.width / 2, p.height / 2);
    p.rotate(angle);
    drawRomanesco(200, maxLevels);
    angle += 0.01;
  };

  function drawRomanesco(size, levels) {
    if (levels <= 0) return;

    let goldenRatio = 1.618;
    let currentSize = size;

    for (let i = 0; i < 12; i++) {
      let t = i / 12 * p.TWO_PI;
      let sinOffset = p.sin(t + angle) * currentSize * 0.2;
      let cosOffset = p.cos(t + angle * 2) * currentSize * 0.2;
      let r = currentSize * p.pow(goldenRatio, i / 12) + sinOffset + cosOffset;
      let theta = i * p.PI * 0.5;
      let x = r * p.cos(theta);
      let y = r * p.sin(theta);

      p.stroke((levels + i) % 2 === 0 ? 255 : 100);

      p.push();
      p.translate(x, y);
      p.rotate(theta + p.sin(angle));
      let budSize = currentSize / 8 + p.cos(angle) * currentSize / 16;
      p.beginShape();
      p.vertex(-budSize, -budSize * 2);
      p.vertex(budSize, -budSize * 2);
      p.vertex(0, budSize * 2);
      p.endShape(p.CLOSE);
      p.pop();

      p.push();
      p.translate(x, y);
      p.rotate(-theta + p.cos(angle * 1.5));
      let ellipseSize = currentSize / 10 + p.sin(angle * 2) * currentSize / 20;
      p.ellipse(0, 0, ellipseSize, ellipseSize * 1.5);
      p.pop();

      if (i % 2 === 0) {
        p.push();
        p.translate(x * 0.8, y * 0.8);
        p.rotate(theta + angle * 2);
        let quadSize = currentSize / 12 + p.sin(angle * 3) * currentSize / 24;
        p.beginShape();
        p.vertex(-quadSize, -quadSize);
        p.vertex(quadSize, -quadSize);
        p.vertex(quadSize * 1.2, quadSize);
        p.vertex(-quadSize * 1.2, quadSize);
        p.endShape(p.CLOSE);
        p.pop();
      }

      if (i % 3 === 0) {
        p.push();
        p.translate(x, y);
        p.scale(1 / goldenRatio);
        p.rotate(p.sin(angle) * 0.5);
        drawRomanesco(size / goldenRatio, levels - 1);
        p.pop();
      }

      if (i % 4 === 0) {
        p.push();
        p.translate(x * 1.1, y * 1.1);
        let circleSize = currentSize / 20 + p.cos(angle * 4) * currentSize / 40;
        p.ellipse(0, 0, circleSize, circleSize);
        p.pop();
      }
    }
  }
};

// Sprout Brake (Zhezhe Qian, 3/25/25)
let sproutSketch = function(p) {
  let t = 0;
  let particles = [];
  let notes = [];

  p.setup = function() {
    let canvas = p.createCanvas(800, 800);
    canvas.parent('sproutCanvasContainer');
    p.colorMode(p.HSB, 360, 100, 100);

    // Initialize particles with aerodynamic properties
    for (let i = 0; i < 50; i++) {
      particles.push(new AeroParticle());
    }

    // Initialize musical notes
    for (let i = 0; i < 8; i++) {
      notes.push({
        freq: 261.63 * p.pow(2, i/12), // Music note frequencies starting from middle C
        x: p.random(-300, 300),
        y: p.random(-200, 200),
        duration: p.random(60, 120)
      });
    }

    // Add event listener for the replay button
    let replayButton = p.select('#sproutReplayButton');
    replayButton.mousePressed(() => {
      t = 0;
      particles = [];
      notes = [];
      p.setup();
    });
  };

  p.draw = function() {
    p.background(0, 20);
    p.translate(p.width/2, p.height/2);

    intricateMathematicalArt();

    // Update and display aerodynamic particles
    for (let p of particles) {
      p.update();
      p.display();
    }

    // Display musical notes
    drawMusicalNotes();

    t += 0.02;
  };

  function intricateMathematicalArt() {
    for (let i = 0; i < 360; i += 10) {
      let angle = p.radians(i);
      let x = 200 * p.sin(3 * angle + t) * p.cos(angle);
      let y = 200 * p.sin(2 * angle - t) * p.sin(angle);
      let r = 150 * p.abs(p.cos(t * 0.5)) * p.sin(angle * 2);
      let spiralX = r * p.cos(angle + t);
      let spiralY = r * p.sin(angle + t);

      let hue = (p.sin(t) * 360 + i) % 360;
      let saturation = p.abs(p.cos(t * 2)) * 100;
      let brightness = p.abs(p.sin(t * 3)) * 100;

      p.push();
      p.rotate(angle + t);

      p.noFill();
      p.stroke(hue, saturation, brightness);
      p.strokeWeight(2);
      p.bezier(
        x, y,
        x + 50 * p.sin(t), y + 50 * p.cos(t),
        spiralX + 30 * p.cos(t * 2), spiralY + 30 * p.sin(t * 2),
        spiralX, spiralY
      );

      p.fill(hue, saturation, brightness, 50);
      let ellipseSize = 20 * (1 + p.sin(t + angle));
      p.ellipse(
        x + 100 * p.cos(t + angle),
        y + 100 * p.sin(t + angle),
        ellipseSize * p.cos(t),
        ellipseSize * p.sin(t)
      );
      p.pop();
    }

    p.push();
    p.rotate(t);
    p.stroke(360 * p.abs(p.sin(t)), 100, 100);
    p.strokeWeight(1);
    p.noFill();
    drawFractal(0, 0, 100, 5);
    p.pop();
  }

  function drawFractal(x, y, len, depth) {
    if (depth === 0) return;
    let angle = t * 0.5;
    p.ellipse(x, y, len * p.sin(t), len * p.cos(t));
    let newLen = len * 0.7;
    drawFractal(x + len * p.cos(angle), y + len * p.sin(angle), newLen, depth - 1);
    drawFractal(x - len * p.cos(angle), y - len * p.sin(angle), newLen, depth - 1);
  }

  function drawMusicalNotes() {
    for (let note of notes) {
      p.push();
      let pulse = p.sin(t * note.freq * 0.01);

      // Note head
      p.fill((note.freq * t) % 360, 80, 100);
      p.noStroke();
      p.ellipse(note.x, note.y, 20 * (1 + pulse), 15);

      // Note stem
      p.stroke((note.freq * t) % 360, 80, 100);
      p.strokeWeight(2);
      p.line(note.x + 10, note.y, note.x + 10, note.y - 40 * (1 + pulse));

      // Note flag (for eighth notes)
      if (p.frameCount % note.duration < 30) {
        p.noFill();
        p.bezier(
          note.x + 10, note.y - 40 * (1 + pulse),
          note.x + 20, note.y - 50 * (1 + pulse),
          note.x + 30, note.y - 40 * (1 + pulse),
          note.x + 25, note.y - 30 * (1 + pulse)
        );
      }
      p.pop();
    }
  }

  // Aerodynamic Particle class
  class AeroParticle {
    constructor() {
      this.pos = p.createVector(p.random(-p.width/2, p.width/2), p.random(-p.height/2, p.height/2));
      this.vel = p.createVector(0, 0);
      this.acc = p.createVector(0, 0);
      this.size = p.random(5, 15);
      this.drag = p.random(0.95, 0.99); // Aerodynamic drag coefficient
      this.lift = p.random(0.1, 0.3);  // Lift force
    }

    update() {
      // Aerodynamic forces simulation
      let wind = p.createVector(
        p.noise(t, this.pos.y * 0.01) - 0.5,
        p.noise(t + 1000, this.pos.x * 0.01) - 0.5
      ).mult(0.5);

      // Lift force perpendicular to velocity
      let liftForce = this.vel.copy().rotate(p.HALF_PI).normalize().mult(this.lift);

      // Combine forces
      this.acc.add(wind);
      this.acc.add(liftForce);

      // Apply drag
      this.vel.mult(this.drag);
      this.vel.add(this.acc);
      this.vel.limit(5);
      this.pos.add(this.vel);
      this.acc.mult(0);

      // Boundary wrapping with aerodynamic bounce
      if (this.pos.x > p.width/2) {
        this.pos.x = p.width/2;
        this.vel.x *= -0.8;
      }
      if (this.pos.x < -p.width/2) {
        this.pos.x = -p.width/2;
        this.vel.x *= -0.8;
      }
      if (this.pos.y > p.height/2) {
        this.pos.y = p.height/2;
        this.vel.y *= -0.8;
      }
      if (this.pos.y < -p.height/2) {
        this.pos.y = -p.height/2;
        this.vel.y *= -0.8;
      }
    }

    display() {
      let hue = (p.noise(this.pos.x * 0.01, this.pos.y * 0.01) * 360 + t * 100) % 360;
      p.fill(hue, 80, 100, 70);
      p.noStroke();

      // Aerodynamic shape (teardrop-like)
      p.push();
      p.translate(this.pos.x, this.pos.y);
      p.rotate(this.vel.heading());
      p.beginShape();
      p.vertex(this.size, 0);
      p.quadraticVertex(
        this.size * 0.5, this.size * 0.5,
        0, this.size * 0.3
      );
      p.quadraticVertex(
        -this.size * 2, 0,
        0, -this.size * 0.3
      );
      p.quadraticVertex(
        this.size * 0.5, -this.size * 0.5,
        this.size, 0
      );
      p.endShape(p.CLOSE);
      p.pop();
    }
  }
};

// Initialize all sketches
new p5(robotSketch);
new p5(rocketSketch);
new p5(crystalSketch);
new p5(sproutSketch);