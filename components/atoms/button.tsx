import React from 'react'

interface Props
{
    text: string
    type?: string
    icon?: Element
}

function Button(props: Props) {
    const {text, type, icon} = props

    return (
        
        <button className='px-4 py-1 flex items-center justify-center w-36 bg-black rounded-sm text-white'> 
            {text}
            <span> 
            </span>
        </button>
    )
}

export default Button
