//quesry to gen..
import { Chat } from "@pushprotocol/uiweb";
import * as PushAPI from "@pushprotocol/restapi";
import {useWeb3React} from '@web3-react/core';
import logo from './logo.svg';

import  './query.css';

export default function Query(props) {


    return(
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <Chat
          account={props.wallet} //user address
          supportAddress="0xC76139fcB9e4952CE9Fb3183C6c3af69534233FE" //support address
          apiKey="jVPMCRom1B.iDRMswdehJG7NpHDiECIHwYMMv6k2KzkPJscFIDyW8TtSnk4blYnGa8DIkfuacU0"
          env="staging"
        />
      </header>
    </div>
    )
}
