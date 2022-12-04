import axios from "axios";

export const FetchTokenID = async(account_address) =>{
    const apiKey = '04d96c14-71e2-4373-bb67-4f444cabdcfa'
    const options = {
      method: 'GET',
      url: `https://api.nftport.xyz/v0/accounts/${account_address}`,
      params: {chain: 'polygon'},
      headers: {'Content-Type': 'application/json', Authorization: apiKey}
    };

    const res = await axios.request(options);
    console.log(res);

    return res.data.nfts[res.data.total-1].token_id;
}