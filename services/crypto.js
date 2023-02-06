const crypto = require("crypto");

function encrypt(password) {
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto
        .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
        .toString('hex');
    return {hash, salt}   
}



function decrypt(password,salt) {

    const hash = crypto
        .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
        .toString('hex');

        return hash;

}

module.exports = { encrypt, decrypt }