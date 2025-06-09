// mining_simulation.js
const crypto = require('crypto');

class Block {
  constructor(index, timestamp, data, previousHash = '') {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.nonce = 0;
    this.hash = this.calculateHash();
  }

  // Generate SHA-256 hash
  calculateHash() {
    return crypto.createHash('sha256')
      .update(this.index + this.timestamp + JSON.stringify(this.data) + this.previousHash + this.nonce)
      .digest('hex');
  }

  // Simulate Proof-of-Work by mining the block
  mineBlock(difficulty) {
    const target = Array(difficulty + 1).join("0"); // e.g., "0000" for difficulty 4
    const startTime = Date.now();

    while (this.hash.substring(0, difficulty) !== target) {
      this.nonce++;
      this.hash = this.calculateHash();
    }

    const endTime = Date.now();
    const timeTaken = (endTime - startTime) / 1000;

    console.log(`Block mined!`);
    console.log(`Hash: ${this.hash}`);
    console.log(`Nonce attempts: ${this.nonce}`);
    console.log(` Time taken: ${timeTaken} seconds`);
  }
}

// ----------- RUNNING THE MINING SIMULATION ------------
const difficulty = 4; // You can increase this for more challenge
const myBlock = new Block(1, new Date().toISOString(), { amount: 100 }, "0");

console.log("🚀 Starting mining simulation...");
myBlock.mineBlock(difficulty);
