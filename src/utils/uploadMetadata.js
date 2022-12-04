import { NFTStorage, File, Blob,storeBlob } from "nft.storage";

export const uploadMetadata = async(fileContent) =>{

    console.log(fileContent);

    //1. Upload to ipfs
    const nftStorageKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEMwMEZlNDVjMjdkQ0FGY2IwN2Q4ZENmMjc1ZmQ1YzlBRGM0NTk3MzUiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2ODg2MzU2MjY1MiwibmFtZSI6Ikhhc2hDcmV3In0.M9pMUuhK8QV3Xcvkx4UotyDxh8jG72FasBsqfTS2S6U'
    const client = new NFTStorage({token:nftStorageKey});
    console.log(client);
   
    const metadata = await client.store({
        name: 'muskan',
        description: `${fileContent}`,
        image:new File([fileContent], 'try.jpg', { type: 'image/jpg' }),
        
    })
    console.log(metadata);
//    console.log(metadata.image);
    return (metadata);
    //console.log(metadata.data);
    
}