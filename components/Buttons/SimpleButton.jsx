import React from 'react'

export const SimpleButton = ({text, bgColor}) => {
  bgColor = bgColor || 'bg-primary'
  return (
    <div className= {` ${bgColor} text-white px-4 py-2 rounded-xl`}>
        {text}
    </div>
  )
}
