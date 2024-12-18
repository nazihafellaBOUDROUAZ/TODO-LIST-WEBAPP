
import React from 'react'
import Side from './Side.jsx'
function Repport() {
  return (
    <div className=''>
      <Side>
        <h1 className='text-3xl font-bold mb-8 ml-3 'style={{ color: '#9C74FA',fontSize:'28px'  }}>Report a problem or send a feedback:</h1>
        <p >We're here to help! Let us know if you encounter any issues, or share feedback to help us improve Mind Map. Your input makes a difference!</p>
        <form action="" className='flex flex-col w-[65vw]  gap-10'>
          <input type="text" placeholder='Name' className='border-b  border-gray-600  focus:outline-none mt-6' />
          <input type="email" placeholder='Email' className='border-b  border-gray-600  focus:outline-none' />
          <input type="text" placeholder='Write your feedback here' className='border-b  border-gray-600  focus:outline-none'/>
          <button className='btn bg-[#9C74FA] text-white rounded-lg shadow-md'>Send</button>
        </form>
      </Side>
    </div>
  )
}

export default Repport