import Image from 'next/image'
import React from 'react'
import Button from './button'

interface Props
{
    title: string
    description: string
    image: string
    buttonText: string
    buttonLink: string
}

function Businesscard(props: Props) {
    const {title, description, image, buttonLink, buttonText} = props

    return (
        <div className='p-3 w-fit h-48 border border-gray-800 flex flex-col justify-between'>
            <div className='mb-3'>
                <div className='flex gap-1'>
                    {/* <Image/> */}
                    <h1 className='font-bold
                    '>
                        {title}
                </h1>
                </div>
                <p className='text-sm  text-gray-500'>
                    {description}
                </p>

            </div>
            <a href={buttonLink}>
            <Button text={buttonText} />

            </a>
        </div>
    )
}

export default Businesscard
