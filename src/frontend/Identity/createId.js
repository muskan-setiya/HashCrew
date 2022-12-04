import EthCrypto from 'eth-crypto';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import {Link} from 'react-router-dom';

export default function CreateId() {
    const [id,setId] = useState('')

    const onCreate = () => {
        setId(EthCrypto.createIdentity);
        const identity = id;
        console.log(identity);
    }

    return(
        <div className='body'>
            <Link to={'/createIdentity'}>
            <Button variant="success" onClick={onCreate}>Success</Button>
            </Link>
            <div>
                <center>
                    These are your credentials.
                    <br/> Don't share your private key with anyone else! 
                    <br/>
                    
                Address : <code>{id.address}</code><br/>
                Public Key : <code> {id.publicKey}</code><br/>
                Private Key : <code> {id.privateKey}</code><br/>


                </center>
            </div>
        </div>
    )
}