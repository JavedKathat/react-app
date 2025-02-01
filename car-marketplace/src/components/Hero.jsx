import { Search } from './Search'

function Hero() {
  return (
    <div className='flex flex-col items-center px-10 py-20 gap-6 w-full h-[650px]  bg-[#eef0fc]'>
        <h2 className='text-lg font-semibold'>Find cars for sale and for rent near you</h2>
        <h2 className='text-[60px] font-bold'>Find Your Dream Car</h2>
        <Search />
        <img src="/tesla.png" alt="Tesla" className='mt-20' />
    </div>
  )
}

export default Hero