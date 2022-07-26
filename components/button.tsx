import React from 'react'

interface Props
{
    text: string
    type?: string
}

function Button(props: Props) {
    const {text, type} = props

    return (
        <button className='px-4 py-1 flex items-center justify-center w-36 bg-black rounded-sm text-white'> 
            {text}
        </button>
    )
}

export default Button
