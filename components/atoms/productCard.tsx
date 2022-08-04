import React from 'react'
import Button from './button'

interface Props
{
    name: string
    description: string
    image: string
    alt: string
    buttonText: string
    PlaystoreLink: string
    AppstoreLink: string
}

function ProductCard(props: Props) {
    const {name, description, image, alt, buttonText, PlaystoreLink, AppstoreLink} = props

    return (
        <div className='w-fit  h-48 border p-4 flex flex-col justify-between'>
            <div className='mb-3'>
                <h1 className='font-bold'>{name }</h1>
            <p className='text-sm  text-gray-300'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            </div>
            <div className='flex gap-2'>
            <a href={ PlaystoreLink} target="_blank" rel="noreferrer">
            <Button text='PlayStore' />
            </a>
            <a href={AppstoreLink} target="_blank" rel="noreferrer" >
            <Button text='App Store' />
            </a>
            </div>
            
        </div>
    )
}

export default ProductCard
