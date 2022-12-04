import { async } from '@firebase/util';
import EthCrypto from 'eth-crypto';

export const encrypt = async(publicKey,data) =>{
    console.log('Started Encryption');
    console.log('Data :',data);

    //encrypt
    const encryptedData = await EthCrypto.encryptWithPublicKey(publicKey,JSON.stringify(data));
    console.log('encrypted data :',encryptedData);
    
    //convert into a string
    const encryptedString =  EthCrypto.cipher.stringify(encryptedData);
    console.log(encryptedString);

    return(encryptedString);
}