import React from 'react'

const Footer = () => {
    let footerStyle={
        position: "relative",
        width: "100%",
        height:"10vh",
        top: "10vh"
      }
  return (
    <div className='bg-dark text-light' style={footerStyle}>
      <p className='text-center'>
        Copyright &copy; todolist.com
        </p>
    </div>
  )
}

export default Footer
