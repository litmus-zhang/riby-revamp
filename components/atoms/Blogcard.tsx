import Image from 'next/image'
import React from 'react'
import Button from './button'

interface Props { }
const image = "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"

function Blogcard(props: Props) {
    const {} = props

    return (
        <div className='p-4 border rounded-md flex flex-col items-start w-72'>
            <div>
            <Image src={image}
                    height={100}
                    width={160}
                    alt="img"
                    className='rounded-md'
                    layout='responsive'
            />
            <div className='my-4'>
            <h1 className='font-bold'>Blog Title 1</h1>
            <p className='text-sm text-gray-500'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            </div>
            </div>
            <Button text='Read More'/>
            
        </div>
    )
}

export default Blogcard
