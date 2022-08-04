import React from 'react'

interface Props
{
    text: string
}

function SectionHeader(props: Props) {
    const {text} = props

    return (
        <div className='w-full my-2'>
            <div className="bg-white w-64 rounded-md h-2 mb-2"></div>
            <h1 className='text-2xl font-bold'>
                {text}
            </h1>
        </div>
    )
}

export default SectionHeader

