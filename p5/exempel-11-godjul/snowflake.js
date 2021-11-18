//En klass för en snöflinga
class Snowflake {
    constructor(img, x, y) {
        this.img = img || snowflakeImages[parseInt(random(0,15))];
        this.size = random([8, 12, 16, 24, 32, 64]);

        this.x = x || random(0, width - this.size);
        this.y = y || random(0, height - this.size);
        this.pos = createVector(this.x, this.y);

        this.rotationSpeed = random([-0.01, -0.005, 0.005, 0.01]);
        this.angle = 0;

        this.vel = createVector(0, random(0.5, 1.5));

        this.noiseOffset = random(0, 1000000);
    }

    update() {
        this.angle += this.rotationSpeed;

        // För att få en mjukare rörelse använder vi noise istället för random
        // https://p5js.org/reference/#/p5/noise
        let headingOffset = map(noise((this.noiseOffset + frameCount)*0.01), 0, 1, -PI/5, PI/5);
        
        this.vel.setHeading(PI/2 + headingOffset);

        this.pos.add(this.vel);

        if( this.pos.y > height ) {
            this.size = random([8, 12, 16, 24, 32, 64]);
            this.pos = createVector(random(0, width-this.size), 0 - this.size);
            this.pos.x = random(0, width - this.size);
            this.img = snowflakeImages[parseInt(random(0,15))];
        }
    }

    show() {
        // Här förflyttar vi och roterar snöflingan kring sin centrumpunkt (halva storleken)
        let pivot = this.size / 2.0; 
        push();
            translate(this.pos.x + pivot, this.pos.y + pivot);
            rotate(this.angle);
            translate(-pivot, -pivot);
            image(this.img, 0, 0, this.size, this.size);
        pop();
    }
}