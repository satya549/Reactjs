import React from 'react'

export default function Footer(props) {
  return (
    <div className='row'>
      <button className='btn btn-danger'>Reset</button>
      <div>
        {props.totalAmount}
      </div>
    </div>
  )
}
