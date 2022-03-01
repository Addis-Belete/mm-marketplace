require("@nomiclabs/hardhat-waffle");
const projectId = "2175d834e04d481eba6fccf6a5967e12"

module.exports = {
	solidity: {
		compilers:
			[
				{
					version: "0.6.5",
				},
				{
					version: "0.8.0",
				},
				{
					version: "0.8.1",
				}
			],
	},
	networks: {
		hardhat: {
			chainId: 1337
		},
		rinkeby: {
			url: `https://rinkeby.infura.io/v3/${projectId}`,
			accounts: ['0x49cb875fbff7c61e5448ab4d5d777ddc28be363a1df3b84d23340acbfe63d55c'] //Private key of the account
		}

	},

};
