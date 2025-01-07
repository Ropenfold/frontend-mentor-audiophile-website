'use client'

import Link from 'next/link';
import React from 'react'

interface ButtonProps {
    buttonText: string;
    buttonTitle: string;
    textColour: string;
    colour: string;
    hoverColour: string;
    linkUrl: string;
}

const Button: React.FC <ButtonProps> =  ({ buttonText, textColour, colour, hoverColour, linkUrl }) => {
  return (
    <Link href={`${linkUrl}`}>
    <button className={`w-[168px] h-[40px] font-medium`}
    style={{
      backgroundColor: colour,
      color: textColour,
    }}
    onMouseOver={(e) => {
      if (hoverColour) {
        (e.target as HTMLButtonElement).style.backgroundColor = hoverColour;
      }
    }}
    onMouseOut={(e) => {
      if (hoverColour) {
        (e.target as HTMLButtonElement).style.backgroundColor = colour;
      }
    }}
    >{buttonText}</button></Link>
  )
}

export default Button;