import {  
    PublicKey, 
  } from '@solana/web3.js'

export const NFTINTERFACEPREFIX = 'nftinterface'
export const pinata_hash = "https://gateway.pinata.cloud/ipfs/QmP8iqV7GwxTyk9kdXp2UUNawwS5nTxaz1m431Q7J4GhKq/"

/******************* from your wallet accounts public keys -----A */
export const update_authority_key = new PublicKey('36RYjWfhhuQx3LZ2Te3i6iU2WPzeAkGipcJcEskcpyB4')
export const fee_receiver_key = new PublicKey('74pxb4Hf5LUyyU5WA7B1DJuoty8Du1jwYhEaHSFcTyWK')

/******************* from contract_deploy.js first lunch -----B */
export const programId = new PublicKey('CnMfvMQtKRq6hFFkuLJ3AZ9tEk6gK2dcA8EUtisSQomF')
