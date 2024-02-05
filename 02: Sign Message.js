const secp = require("ethereum-cryptography/secp256k1");
const hashMessage = require('./hashMessage');

const PRIVATE_KEY = "6b911fd37cdf5c81d4c0adb1ab7fa822ed253ab0ad9aa18d77257c88b29b718e";

async function signMessage(msg) {

    // hashing the message input
    const hashMsg = hashMessage(msg);

    // return sign message output
    return secp.sign(hashMsg, PRIVATE_KEY, {recovered: true});
}

module.exports = signMessage;
