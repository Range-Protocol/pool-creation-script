const hre = require("hardhat");
const path = require("path");
const fs = require("fs");

const configPath = path.join(__dirname, "./config.json");
async function main() {
	const configData = JSON.parse(fs.readFileSync(configPath));
	const uniswapLike = await hre.ethers.getContractAt("IUniswapLike", configData.ammFactory);
	await (await uniswapLike.createPool(
		configData.token0,
		configData.token1,
		configData.fee
	)).wait();
	
	const poolAddress = await uniswapLike.getPool(
		configData.token0,
		configData.token1,
		configData.fee
	);
	console.log("Pool Address: ", poolAddress);
	const pool = await hre.ethers.getContractAt("IUniswapLike", poolAddress);
	await (await pool.initialize(configData.sqrtPrice)).wait();
	console.log("DONE!");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
