// import React from 'react'

export default function Header({title,subtitle}) {
  return (
      <div className="header">
          <h2 className="main-header">{ title }</h2>
          <h3 className="sub-header">{ subtitle }</h3>
    </div>
  )
}
