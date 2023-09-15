import React from 'react'

const ButtonGreen = (props) => {
    const name=props.ButtonName
  return (
    <div>
      <button className=' bg-green-500 hover:bg-green-600 rounded-full p-2 px-6 text-xl font-semibold'>
        {name} &rarr;
      </button>
    </div>
  )
}

export default ButtonGreen