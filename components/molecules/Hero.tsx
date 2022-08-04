import React from 'react'
import Button from '../atoms/button'
import Image from 'next/image'
import {IoLogoGooglePlaystore} from 'react-icons/io5'

interface Props { }
const data = {
    text: 'Supporting your journey to financial freedom',
    image: 'https://picsum.photos/id/1/1920/1080',
    alt: 'Hero Image',
    paragragh: 'With a number of enterprise tools aimed at collating user information and providing access to financial services, we help businesses reach their targets wherever they may be and efficiently capture user data'
}

function Hero(props: Props) {
    const {} = props

    return (
        <section className='p-3 mt-16 bg-red-50 flex overflow-hidden flex-row sm:flex-col w-full h-screen gap-4'>
            < div >
                <h1 className='text-3xl font-bold'>{data.text}</h1>
                <p className=' text-gray-500 my-3 '>{data.paragragh}</p>
                <Button text='Download Now' />
            </div>
            <div className='pb-4'>
                <div className='w-72 h-72 bg-gray-200'>
                </div>
            </div>
   
        </section>
    )
}

export default Hero
