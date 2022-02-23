import { useState } from "react";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import {
  ServicesContainer,
  HeroContainer,
  HeroBg,
  // VideoGif,
  VideoGif,
} from "./ServicesElements";
import { Wallet } from '../Connect'
import mintNFT from "../../utils/nft";
import LoadingImg from "../LoadingComponent";

// import ConnectVid from "../../videos/connect.mp4";
// import MintVid from "../../videos/mint.mp4";
import ConnectVid from "../../videos/connect.gif";
import MintVid from "../../videos/mint.gif";

function Mint() {
  const wallet = useWallet()
  const connection = useConnection()
  // const [status, setStatus] = useState("")
  const [mintLoading, setMintLoading] = useState(false)

  const mint = async() => {
    try {
      setMintLoading(true);
      await mintNFT(connection.connection, wallet)
      setMintLoading(false)
    } catch(error) {
      setMintLoading(false)
    }
  }

  return (
    <ServicesContainer id="mint">
      { mintLoading && <LoadingImg /> }
      <HeroContainer>
        <HeroBg>
          <Wallet>
            <VideoGif src={ConnectVid} />
          </Wallet>
        </HeroBg>
          <HeroBg onClick={mint}>
            <VideoGif src={MintVid}/>
          </HeroBg>
      </HeroContainer>
      
    </ServicesContainer>
  );
}

export default Mint;
