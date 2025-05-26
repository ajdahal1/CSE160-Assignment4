class Vector {
    constructor(x, y, z) {
      this.x = x || 0;
      this.y = y || 0;
      this.z = z || 0;
    }

    subtract(v) {
      return new Vector(this.x - v.x, this.y - v.y, this.z - v.z);
    }
    divide(scalar) {
      if (scalar === 0) {
        console.error("Division by zero is not allowed.");
        return this;
      }
      return new Vector(this.x / scalar, this.y / scalar, this.z / scalar);
    }
    cross(v) {
      return new Vector(
        this.y * v.z - this.z * v.y,
        this.z * v.x - this.x * v.z,
        this.x * v.y - this.y * v.x
      );
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
    add(v) {
      return new Vector(this.x + v.x, this.y + v.y, this.z + v.z);
    }
    log() {
      console.log(`Vector(${this.x}, ${this.y}, ${this.z})`);
    }
  }