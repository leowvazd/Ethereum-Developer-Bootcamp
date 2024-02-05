const secp = require("ethereum-cryptography/secp256k1");
const { keccak256 } = require("ethereum-cryptography/keccak");

function getAddress(publicKey) {

    // cut the first byte of the public key (firt byte means if it's in the compressed format or not)
    const firstByte = publicKey.slice(1);

    // get the rest of the public key and keccak into a hash
    const keccak = keccak256(firstByte);

    // slice the last 20 bytes of the keccak hash and return it
    return keccak.slice(-20);
}

module.exports = getAddress;
