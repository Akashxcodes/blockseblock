
// Consensus Mechanism Simulation
//             // Check if the current block's hash is valid

// Simulate random validators
const miner = { name: "Miner1", power: Math.floor(Math.random() * 100) }; // Randomly generated computational power
// Simulate a staker with a random stake amount
const staker = { name: "Staker1", stake: Math.floor(Math.random() * 100) }; // Randomly generated stake amount
const voters = [
  { name: "UserA", vote: "Delegate1" }, // Users voting for delegates
  { name: "UserB", vote: "Delegate2" }, // Each user votes for a delegate
  { name: "UserC", vote: "Delegate1" } // More users voting for delegates
];

// ------- Proof of Work (PoW) --------
function proofOfWork(miner) {
  console.log(" Proof of Work:");
  console.log(` Validator selected: ${miner.name}`); // Miner is selected as validator
  console.log(` Power: ${miner.power}`);
  console.log(` Validator with highest computational power is selected.\n`);
}

// ------- Proof of Stake (PoS) --------
function proofOfStake(staker) {
  console.log(" Proof of Stake:");
  console.log(`Validator selected: ${staker.name}`); // Staker is selected as validator
  console.log(` Stake: ${staker.stake}`);
  console.log(` Validator with highest stake is selected.\n`);
}

// ------- Delegated Proof of Stake (DPoS) --------
function delegatedProofOfStake(voters) {
  console.log("Delegated Proof of Stake:"); // DPoS involves users voting for delegates
  
  // Count votes
  const voteCount = {};
  for (let voter of voters) {
    voteCount[voter.vote] = (voteCount[voter.vote] || 0) + 1; // Increment vote count for each delegate
  }

  // Find top delegate
  const topDelegate = Object.keys(voteCount).reduce((a, b) => // Compare vote counts to find the delegate with the most votes
    voteCount[a] > voteCount[b] ? a : b
  );

  console.log(" Voters:");
  voters.forEach(v => console.log(`- ${v.name} voted for ${v.vote}`)); // Display each voter's choice
  console.log(` Delegate selected: ${topDelegate}`);
  console.log(` Most voted delegate is selected as validator.\n`);
}

// -------- Run Simulations --------
console.log("=== 🔁 Consensus Mechanism Simulation ===\n");
proofOfWork(miner);
proofOfStake(staker);
delegatedProofOfStake(voters);