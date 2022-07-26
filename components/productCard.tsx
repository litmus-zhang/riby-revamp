import React from 'react'
import Button from './button'

interface Props {}

function ProductCard(props: Props) {
    const {} = props

    return (
        <div className='w-72 border p-4'>
            <div className='mb-3'>
            <h1 className='font-bold'>Riby CoAgent</h1>
            <p className='text-sm  text-gray-500'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            </div>
                <Button text='Read More' />
        </div>
    )
}

export default ProductCard
