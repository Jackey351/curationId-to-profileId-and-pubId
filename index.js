/// npm install --save ethers

const { ethers} = require("ethers");
const HubABI = require("./Abi/CurationHub.json")

async function getCuInfo(curationId){
    const rpcNode = "https://polygon-rpc.com";
    const hubAddr = "0x8ad7f01ba25962e07a1f5306255c8bad3ae90a75"
    const provider = ethers.getDefaultProvider(rpcNode);
    const curationHub = await new ethers.Contract(hubAddr, HubABI.abi, provider);

    const info = await curationHub.lensIdsOf(curationId)
    console.log("info : ", info);
}

async function main() {

    const curationId = "0x420c8a9045164aa335cebc94004b86a0b8b2cccda705bc3256bca8b041a4a218";
    await getCuInfo(curationId)
}

main().then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
