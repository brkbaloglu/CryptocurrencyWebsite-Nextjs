import React from 'react'




async function CryptocurrencyPage({params}) {
  
  return (
    <div className='flex items-center justify-center h-[500px]'>
      <h2>{params.cryptocurrencyPage.charAt(0).toUpperCase() + params.cryptocurrencyPage.slice(1)}</h2>
    </div>
  )
}

export default CryptocurrencyPage