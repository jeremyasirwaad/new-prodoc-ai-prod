import React from 'react'

export const SimpleButton = ({text, bgColor, width}) => {
  bgColor = bgColor || 'bg-primary'
  width = width || ''
  return (
    <div className= {` ${bgColor} text-white px-4 py-2 rounded-xl ${width} `}>
        {text}
    </div>
  )
}
