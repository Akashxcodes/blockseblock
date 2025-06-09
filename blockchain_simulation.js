
// MiniTask01: Blockchain Simulation in Node.js
// This code simulates a simple blockchain with block mining and validation.
const crypto = require('crypto'); // Importing the crypto module for hashing

class Block { // Represents a single block in the blockchain
    constructor(index, timestamp, data, previousHash = '') {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.nonce = 0;
        this.hash = this.calculateHash();
    }

    calculateHash() { // Calculates the hash of the block using SHA-256
        // The hash is a combination of the block's index, previous hash, timestamp, data, and nonce
        return crypto.createHash('sha256')
            .update(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce)
            .digest('hex');
    }

    mineBlock(difficulty) { // Mines the block by finding a hash that starts with a certain number of zeros

        const target = Array(difficulty + 1).join('0');
        while (this.hash.substring(0, difficulty) !== target) {
            this.nonce++;
            this.hash = this.calculateHash();
        }
        console.log(`Block mined: ${this.hash} (nonce: ${this.nonce})`);
    }
}

class Blockchain { // Represents the blockchain itself, which is a series of blocks
    constructor() {
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 4;
    }

    createGenesisBlock() { // Creates the first block in the blockchain, known as the genesis block
        // The genesis block has an index of 0, a timestamp, and no previous hash
        return new Block(0, Date.now().toString(), "Genesis Block", "0");
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1]; // Returns the most recent block in the chain
    }

    addBlock(newBlock) { // Adds a new block to the blockchain
        newBlock.index = this.chain.length; // Set the index of the new block
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.mineBlock(this.difficulty);
        this.chain.push(newBlock);
    }

    isChainValid() {
        for (let i = 1; i < this.chain.length; i++) { // Validates the blockchain by checking hashes and previous hashes
            const current = this.chain[i]; // Current block
            const previous = this.chain[i - 1]; // Previous block

            if (current.hash !== current.calculateHash()) return false; // Check if the current block's hash is valid
            // Check if the previous hash of the current block matches the hash of the previous block
            if (current.previousHash !== previous.hash) return false; // Check if the previous hash is correct
        }
        return true;
    }
}

// --- Demo ---
let demoChain = new Blockchain();
demoChain.addBlock(new Block(1, Date.now().toString(), { amount: 10 })); // Adding a block with some data   
demoChain.addBlock(new Block(2, Date.now().toString(), { amount: 20 })); // Adding another block with different data

console.log(JSON.stringify(demoChain, null, 2));

// Tamper test
demoChain.chain[1].data = { amount: 100 };
demoChain.chain[1].hash = demoChain.chain[1].calculateHash();

console.log("Is blockchain valid after tampering?", demoChain.isChainValid());
