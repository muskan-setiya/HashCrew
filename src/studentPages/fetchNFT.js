import axios from "axios";

export const fetchNFT = async(tokenID) =>{
    const apiKey = '04d96c14-71e2-4373-bb67-4f444cabdcfa'

    const contract = '0x55a8dbe6f191b370885d01e30cb7d36d0fa99f16'
    const options = {
        method: 'GET',
        url: `https://api.nftport.xyz/v0/nfts/${contract}/${tokenID}`,
        params: {chain: 'polygon'},
        headers: {'Content-Type': 'application/json', Authorization: apiKey}
      };

    

    return axios.request(options);
}