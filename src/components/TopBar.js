import React from 'react'

export default function TopBar() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0 }}>
      <img width={'20%'} src={require('../media/logo.png')} />
    </div>
  )
}
