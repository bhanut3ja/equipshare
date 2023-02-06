import React from 'react'

const BalanceInput = ({label,placeholder}) => {
  return (
    <div className='d-flex flex-column justify-content-around align-items-center'>
        <input className='py-2 px-2 w-75 rounded-3 border' type="text" placeholder={`${placeholder?placeholder:''}`}/>
        <label>{label}</label>
    </div>
  )
}

export default BalanceInput