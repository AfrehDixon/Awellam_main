// import React from 'react'
import './Button.css'

export default function Button({title,children,back}) {
  return (
      <div className='btn back'>
          <p className='btn-text'>{ title }</p>
          <p>{ children }</p>
    </div>
  )
}
