const hre = require("hardhat");

async function main() {
	// deploy marketplace
	const Market = await hre.ethers.getContractFactory("Market");
	const market = await Market.deploy();
	await market.deployed();
	console.log("Greater deployed: ", market.address);
	// deploy Nft
	const NFT = await hre.ethers.getContractFactory("NFT");
	const nft = await NFT.deploy(market.address);
	await nft.deployed();
	console.log("NFT deployed: ", nft.address);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
