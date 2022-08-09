import React from 'react'
import  {BsWhatsapp} from 'react-icons/bs'

interface Props { }

const Link = "https://wa.link/pva8dc";

function ChatWidget(props: Props) {
    const {} = props

    return (
        <a href={Link} target="_blank" rel="noreferrer"  className='fixed  bottom-3 right-2 bg-green-500 text-white p-3 w-fit rounded-full flex items-center cursor-pointer gap-2'>
           Message us on Whatsapp <BsWhatsapp />
        </a>
    )
}

export default ChatWidget
