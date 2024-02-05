const secp = require("ethereum-cryptography/secp256k1");
const hashMessage = require("./hashMessage");

async function recoverKey(message, signature, recoveryBit) {

    // hashing the message input
    const hashMsg = hashMessage(message);


    // return recovery key output
    return secp.recoverPublicKey(hashMsg, signature, recoveryBit);
}

module.exports = recoverKey;
