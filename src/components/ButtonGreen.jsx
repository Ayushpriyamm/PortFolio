import React from 'react'

const ButtonGreen = (props) => {
    const name=props.ButtonName
    const href=props.href
    const target=props.target
  return (
    <div>
      <a  href={href} target={target} >
      <button className='bg-green-500 hover:bg-green-600 rounded-full p-2 px-6 text-xl font-semibold '>
        {name} &rarr;
        
      </button>
      </a>
    </div>
  )
}

export default ButtonGreen