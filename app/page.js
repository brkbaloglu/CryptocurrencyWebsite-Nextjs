import Image from "next/image";
import cryptoHomePage from "../assets/crypto.jpeg"
import Link from "next/link";

const API_URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&page=1&sparkline=false"

  const getCryptocurrencies = async() => {
    const response = fetch(API_URL)
    
    return (await response).json()
  }

async function Home() {

  const cryptosPromise = getCryptocurrencies()
  const cryptocurrencies = await Promise.all([cryptosPromise])
  console.log(cryptocurrencies[0]);

  return (
   <div>
    <div className="relative">
      <Image width={1920} height={1080} src={cryptoHomePage}></Image>
      <div className="absolute top-80 left-10">
        <h4 className="text-2xl font-bold">Buy & Sell Crypto 24/7 using your account</h4>
        <h2 className="text-4xl font-bold">Invest in Cryptocurrency</h2>
        <h6 className="text-lg font-bold">Buy, Sell, and store hundreds of cryptocurrencies</h6>
        <div className="flex items-center justify-center mt-5">
          <Link className="bg-white text-black font-bold px-4 py-2 rounded-xl text-xl" href="/cryptocurrency">Learn More</Link>
        </div>
      </div>
    </div>
    <div className="flex items-center justify-center h-[200px]">
      {cryptocurrencies[0].slice(0,5).map((cryptocurrency, index) => (
        <div key={index} className="mx-5 border-2 p-5 rounded-2xl">
          <h3 className="font-bold text-2xl border-b-2 mb-2">{cryptocurrency.name}</h3>
          <h3>Current Price: {cryptocurrency.current_price} $</h3>
          <h3>Last Update: {cryptocurrency.last_updated.slice(0, 10)}</h3>
        </div>
      ))}
    </div>
   </div>
  );
}


export default Home