
function caesarEncrypt(msg, shift) {

    const charCodes = []
    for (let i = 0; i < msg.length; i++) {
        charCodes.push(msg[i].charCodeAt(0))
    }

    for (let i = 0; i < charCodes.length; i++) {
        charCodes[i] = charCodes[i] + shift
    }

    let result = ''
    for (let i = 0; i < charCodes.length; i++) {
        result = result + String.fromCharCode(charCodes[i])
    }

    return result
}

function caesarDecrypt(encryptedMsg, shift) {
    const charCodes = []
    for (let i = 0; i < encryptedMsg.length; i++) {
        charCodes.push(encryptedMsg[i].charCodeAt(0))
    }

    for (let i = 0; i < charCodes.length; i++) {
        charCodes[i] = charCodes[i] - shift
    }

    let result = ''
    for (let i = 0; i < charCodes.length; i++) {
        result = result + String.fromCharCode(charCodes[i])
    }

    return result
}

const secretMessage = 'RETREATTOMMORROW'
const encryptedMessage = caesarEncrypt(secretMessage, 5)
const decryptedMessage = caesarDecrypt(encryptedMessage, 5)

console.log(secretMessage, encryptedMessage, decryptedMessage)