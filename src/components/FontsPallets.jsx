import React from 'react'
import { fontStyles } from '../static/fonts'
const FontsPallets = () => {
  return (
    <div className="flex max-w-max items-center justify-center mx-auto space-x-5">
      {fontStyles.map(({fontName,
        className},index) => (
        <div key={index}>
          <span  className={`inline-block p-3 bg-gray-50 border border-slate-200 text-xl ${className}`}>{fontName}</span>
          
        </div>

      ))}
    </div>
  )
}

export default FontsPallets