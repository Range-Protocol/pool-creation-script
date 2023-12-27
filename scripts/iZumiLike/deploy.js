const hre = require("hardhat");
const path = require("path");
const fs = require("fs");

const configPath = path.join(__dirname, "./config.json");
async function main() {
	const configData = JSON.parse(fs.readFileSync(configPath));
	const izumiLike = await hre.ethers.getContractAt("IiZumiLike", configData.ammFactory);
	const data = izumiLike.interface.encodeFunctionData("newPool", [
		configData.tokenX,
		configData.tokenY,
		configData.fee,
		configData.currentPoint
	]);
	console.log(data)
	await (await izumiLike.newPool(
		configData.tokenX,
		configData.tokenY,
		configData.fee,
		configData.currentPoint
	)).wait();

	const poolAddress = await izumiLike.pool(
		configData.tokenX,
		configData.tokenY,
		configData.fee
	);
	console.log("Pool Address: ", poolAddress);
	console.log("DONE!");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
