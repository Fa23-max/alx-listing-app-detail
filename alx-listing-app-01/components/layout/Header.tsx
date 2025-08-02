import React from 'react'
import { Search } from 'lucide-react'


const Header:React.FC = () => {
  return (
     <header className='w-full h-20 bg-white flex items-center justify-between text-gray-900 px-4'>
      <div className="logo">
        <img src="/assets/Vector.png" alt="Logo" className="h-5" />
      </div>
      <div className="searchBar flex items-center border-1 border-gray-200 p-2 rounded-full" >
        {/* search bar with three inputs and a search icon */}
        <input type="text" placeholder="location..." className="px-2 py-1" /> <hr className='border-gray-200 rotate-90 w-5'/>
        <input type="text" placeholder="checkin" className="px-2 py-1 ml-2" /> <hr className='border-gray-200 rotate-90 w-5'/>
        <input type="date" className="px-2 py-1 ml-2" /> 
        <button className="ml-2 bg-orange-300 text-white px-3 py-1 rounded-full w-10 h-10 flex items-center justify-center">
          <Search color='white' />

        </button>
        
      </div>
      <div className="sign">
        <button className="bg-green-600 text-white px-4 py-2 rounded-full">Sign In</button>
        <button className="border-1 border-gray-200 px-4 py-2 rounded-full ml-2">Sign Up</button>
      </div>
     </header>
  )
}

export default Header