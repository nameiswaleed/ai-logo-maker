import React from 'react'

const Typography = ({colors,title,slogan,font}) => {
  return (
    <div style={{backgroundColor: colors[2]}} className= "my-2 rounded-md  p-5 flex items-center justify-center flex-col ">
      <h1 style={{color: colors[0]}} className={`text-3xl text-white font-bold ${font}`}>{title ? title : "Logo Name "  }</h1>
      <p className="text-sm custom-spacing text-white lowercase">{slogan ? slogan : "slogan here"}</p>
    </div>
  )
}

export default Typography