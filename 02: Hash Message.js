const { keccak256 } = require("ethereum-cryptography/keccak");
const { utf8ToBytes } = require("ethereum-cryptography/utils");

function hashMessage(message) {
    // turn message into array of bytes
    const bytes = utf8ToBytes(message);

    // hash the bytes message using keccack256
    const hash = keccak256(bytes);

    return hash;
}

module.exports = hashMessage;
