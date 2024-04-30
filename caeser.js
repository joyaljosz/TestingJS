const caesarCipher = (input, shift) => {
    return input.split("").map((letter) => String.fromCharCode(letter.charCodeAt(0) + shift)).join("");
}
module.exports = caesarCipher;