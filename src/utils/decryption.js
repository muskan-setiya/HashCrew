import { async } from '@firebase/util';
import EthCrypto from 'eth-crypto';

export const decrypt = async( privateKey,encryptedString) =>{
    console.log('Started Decryption');

    console.log(encryptedString);
    const encryptedObject = EthCrypto.cipher.parse(encryptedString);
    console.log(encryptedObject)

    const decrypted = await EthCrypto.decryptWithPrivateKey(
        privateKey,
        encryptedObject
    );

    const decryptedPayload = JSON.parse(decrypted);
    console.log(decryptedPayload)

    return decryptedPayload
}