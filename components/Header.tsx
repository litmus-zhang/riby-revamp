import React from 'react'
import Button from './button'

interface Props {}

function Header(props: Props) {
    const {} = props

    return (
        
            <div className='flex  w-full justify-between items-center'>
                    <div className='flex gap-2'>
                        <h1 className='font-bold'>
                            Riby
                        </h1>
                        <p>
                            Business
                        </p>
                        <p>
                            Personal
                        </p>
                    </div>
                    <div className='flex gap-2'>
                        <p>
                            About Us
                        </p>
                        <p>
                            Blog
                        </p>
                        <p className='text-sm'>
                            Contact
                </p>
                <Button text='Sign up'/>
                    </div>
                </div>
    )
}

export default Header