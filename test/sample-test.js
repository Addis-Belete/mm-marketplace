const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function () {
	it("Should return the new greeting once it's changed", async function () {
		const Greeter = await ethers.getContractFactory("Greeter");
		const greeter = await Greeter.deploy("Hello, world!");
		await greeter.deployed();

		expect(await greeter.greet()).to.equal("Hello, world!");

		const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

		// wait until the transaction is mined
		await setGreetingTx.wait();

		expect(await greeter.greet()).to.equal("Hola, mundo!");
	});
});

describe("NFT ", function () {
	it("should return lists of NFT", async function () {
		const Market = await ethers.getContractFactory("Market");
		const market = await Market.deploy();
		await market.deployed();
		const NFT = await ethers.getContractFactory("NFT");
		const nft = await NFT.deploy(market.address);
		await market.deployed();

		const auctionPrice = ethers.utils.parseUnits('1', 'ether')

		// create two tokens
		expect(await nft.createNFT("https://wwNFTlocation.com"))
		expect(await nft.createNFT("https://www.mytokenlocation2.com"))

	})


})
