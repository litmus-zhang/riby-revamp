import React from 'react'
import FooterItem from '../atoms/FooterItem'
import FooterHeader from '../atoms/FooterHeader'

interface Props
{
    items: object[]
    header: string
}

function FooterCombo(props: Props) {
    const {items, header} = props

    return (
        <div className='flex flex-col gap-2'>
            <FooterHeader text={header} />
            {/* <FooterItem key={items.text} {...items} /> */}
        </div>
        
        
    )
}

export default FooterCombo
