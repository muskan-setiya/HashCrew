import axios from 'axios';
import {updateDoc,doc} from "firebase/firestore";
import {db} from "../firebaseConfig";
import EthCrypto from 'eth-crypto';

export const mintNFT = async(encMetadata,Id,studentKey,Name) => {

  const address = EthCrypto.publicKey.toAddress(studentKey);
  console.log(address);
   
    const apiKey = '04d96c14-71e2-4373-bb67-4f444cabdcfa' 
    console.log('encMetadata',encMetadata);
    console.log(Id)

    const options = {
        method: 'POST',
        url: 'https://api.nftport.xyz/v0/mints/easy/urls',
        headers: {'Content-Type': 'application/json', Authorization: apiKey},
        data: {
          chain: 'polygon',
          name: Name,
          description: encMetadata,
          file_url:"https://ipfs.io/ipfs/bafkreift2liwd3arnd6s7xar44kyi4a53kutdqq7qteiyh3as73jfhw6hu",
          mint_to_address: address
        }
        
      };


   return axios.request(options)
}
