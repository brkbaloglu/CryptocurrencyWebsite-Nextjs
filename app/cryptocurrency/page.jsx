import React from 'react'
import Link from 'next/link'

const API_URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&page=1&sparkline=false"

  const getCryptocurrencies = async() => {
    const response = fetch(API_URL)
    
    return (await response).json()
  }

async function CryptocurrencyPage() {

  const cryptosPromise = getCryptocurrencies()
  const cryptocurrencies = await Promise.all([cryptosPromise])
  console.log(cryptocurrencies[0][0]);

  return (
    <div className='mx-10'>
      <h2 className='font-bold text-4xl my-10'>Cryptocurreny List</h2>
      {
        cryptocurrencies[0].map((cryptocurrency, index) => (
          <div key={index} className='grid grid-cols-3 '>
            <Link href={`/cryptocurrency/${cryptocurrency.name.toLowerCase()}`}>{cryptocurrency.name}</Link>
            <p>Current Price: {cryptocurrency.current_price} $</p>
            <div>
            <p>Last Update: {cryptocurrency.last_updated.slice(0, 10) + " " +cryptocurrency.last_updated.slice(11,19)}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default CryptocurrencyPage