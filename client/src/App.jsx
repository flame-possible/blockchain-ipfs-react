import React, { Component } from 'react'
import Web3 from 'web3'
import './App.css'

class App extends Component {
  componentWillMount() {
    this.loadBlockchainData()
  }

  async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
  }

  constructor(props) {
    super(props)
    this.state = { account: '' }
  }

  render() {
    return (
      <div className="container">
        <h1>Hello, World!</h1>
        <p>Your account: {this.state.account}</p>
      </div>
    );
  }
}

export default App;

// // FileUpload Component : Uploads a Single File to IPFS and returns the URL
// import React, { useState } from "react";
// import {FileUpload} from './components/FileUpload';
// import SiteName from './SiteName';
// import TransactionAdd from './TransactionAdd';
// import TransactionShow from './TransactionShow';
// import TransactionInput from './TransactionInput';

// const App = () => {
//   const [fileUrl, setFileUrl] = useState("");

//   return (
//     <div>
      
//       <SiteName />
//       <TransactionInput></TransactionInput>

//       <FileUpload setUrl={setFileUrl} />
//       FileUrl :{" "}
//       <a href={fileUrl} target="_blank" rel="noopener noreferrer">
//         {fileUrl}
//       </a>
//       <br></br>
//       <TransactionAdd>트랜잭션 추가</TransactionAdd>
//       <TransactionShow>트랜잭션 보기</TransactionShow>
//     </div>
//   );
// };

// export default App;