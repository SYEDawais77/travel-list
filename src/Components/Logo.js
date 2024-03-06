import React from 'react'
import '../index.css'
import '../assets/logo.png'


export default function Logo() {
  return (
    <div>
      <div className='logo'>
      <img className='logo-img' src={require('../assets/logo.png')} alt="Logo" />
      <h1>Packing List</h1>
      <img className='briefcase' src={require('../assets/briefcase.png')} alt="Logo" />
      </div>
    </div>
  )
}
