require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  networks: {
    educhain: {
      url: "https://open-campus-codex-sepolia.drpc.org", // Replace with actual RPC endpoint
      chainId: 656476(0xa045c), // Replace with EduChain's specific chain ID
      accounts: [
        "875e7b070c0f280e6c6787ab358bf4dca1dc78104fdcd60debfba741f21d4f7f" // Private key of deploying wallet
      ]
    }
  }
};
