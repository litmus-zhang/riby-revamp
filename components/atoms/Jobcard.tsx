import React from 'react'
import Button from './button'

interface Props
{
    role: string
    location: string
}

function Jobcard(props: Props) {
    const { location, role } = props

    return (
        <div className='border p-3 flex flex-col rounded-sm'>
            <div className='mb-3'>
            <h1 className='font-bold w-64'>Blockchain Engineer</h1>
            <span className='text-sm  text-gray-500 '>Lagos, Nigeria</span>
            </div>
            
            <Button text='Apply Now' type='button'/>
        </div>
    )
}

export default Jobcard
