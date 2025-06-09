🧱 Mini Task 1: Build & Explain a Simple Blockchain

This repository contains simulations of basic blockchain concepts using JavaScript. The task is split into three core parts:


1. Blockchain Basics
Definition (in your own words):
A blockchain is a decentralized digital ledger that records transactions across multiple computers. Each block contains data, a timestamp,
 a hash, and the hash of the previous block. This structure ensures that once a block is added, it cannot be altered without changing all subsequent blocks,
making the system secure and tamper-resistant. Blockchain operates on consensus mechanisms like Proof of Work or Proof of Stake to validate transactions without
 a central authority. This makes it highly transparent, secure, and suitable for many trust-based applications.

Real-life use cases:

Supply Chain Management: Track the origin and status of goods in real time (e.g., IBM Food Trust).

Digital Identity: Decentralized IDs for users to control their personal data (e.g., Microsoft ION).

2. Block Anatomy
+-----------------------------+
|        Block                |
+-----------------------------+
| Index: 2                    |
| Timestamp: 2025-06-09       |
| Data: "Transaction Data"    |
| Previous Hash: 0xabc123...  |
| Merkle Root: 0xdef456...    |
| Nonce: 1024                 |
| Hash: 0x789abc...           |
+-----------------------------+

   3. Consensus Conceptualization
Proof of Work (PoW):
A consensus method where miners solve complex mathematical puzzles to add blocks. It requires energy as miners use computational power to find a valid hash, ensuring security and preventing spam or fraud.

Proof of Stake (PoS):
Instead of solving puzzles, validators are chosen based on how many coins they “stake” or lock up. It's more energy-efficient and rewards those with a larger financial stake in the system.

Delegated Proof of Stake (DPoS):
Users vote for a small number of delegates who validate transactions. The most voted delegates are selected, allowing faster consensus and better scalability.



---

📦 1. Blockchain Simulation (blockchain_simulation.js)

Description:

Creates a blockchain with 3 blocks.

Demonstrates how tampering affects the chain's validity.


Example Output:

{
  "chain": [
    {
      "index": 0,
      "data": "Genesis Block",
      "previousHash": "0",
      "hash": "9d4c2f63..."
    },
    {
      "index": 1,
      "data": { "amount": 10 },
      "previousHash": "9d4c2f63...",
      "hash": "cb1f28e5..."
    },
    {
      "index": 2,
      "data": { "amount": 20 },
      "previousHash": "cb1f28e5...",
      "hash": "fd82149e..."
    }
  ]
}

After tampering with block 1:
Is blockchain valid? false


---

⛏ 2. Mining Simulation (mining_simulation.js)

Description:

Simulates Proof-of-Work mining.

Finds a valid hash that starts with 0000.


Example Output:

Mining block...
Block mined: 000045e98a4bd2900a1c9be2e59ddfc83547d729efaa1e4d1ef3013bbd9a8e52
Nonce: 79213
Time taken: 4.129 seconds


---

🗳 3. Consensus Demo (consensus_demo.js)

Description:

Simulates three consensus mechanisms:

PoW: Selects validator with highest power.

PoS: Selects validator with highest stake.

DPoS: Selects delegate with most votes.


Example Output:

--- Proof of Work Simulation ---
PoW selected validator: Bob with power 93
Selected based on highest computational power.

--- Proof of Stake Simulation ---
PoS selected validator: Alice with stake 87
Selected based on highest amount of staked tokens.

--- Delegated Proof of Stake Simulation ---
DPoS selected delegate: Alice with 2 votes
Selected based on most community votes.


