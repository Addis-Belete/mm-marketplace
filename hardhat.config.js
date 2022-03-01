require("@nomiclabs/hardhat-waffle");


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
			url: "",
			accounts: "",

		}

	},

};
