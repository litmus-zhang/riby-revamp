import React from 'react'
import Button from './button'
import NavItem from './NavItem'

interface Props {}
const Left = [
  {
    text: 'Brand',
    href: '#',
  },
  {
    text: 'Blog',
    href: '#',
  },
  {
    text: 'Contact',
    href: '#',
  },
  {
    text: 'Careers',
    href: '#',
  },
]

const Right = [
  {
    text: 'Products',
    href: '#',
  },
  {
    text: 'Business',
    href: '#',
  },
]

function Header(props: Props) {
  const {} = props

  return (
    <div className="flex  w-full justify-between items-center p-4 bg-gray-200 fixed top-0 left-0 right-0">
      <div className="flex gap-2 items-center justify-center">
        <h1 className="text-xl m-0 font-bold">Riby</h1>
        {Right.map((item, index) => (
          <NavItem key={index} text={item.text} />
        ))}
      </div>
      <div className="flex gap-2 sm:hidden ">
        {Left.map((item, index) => (
          <NavItem key={index} text={item.text} />
        ))}
        <Button text="Sign up" />
      </div>
      <div>
        <div className="cursor-pointer flex flex-col justify-between w-6 h-6">
          <div className="w-full bg-black h-1 rounded-xl"></div>
          <div className="w-full bg-black h-1 rounded-xl"></div>
          <div className="w-full bg-black h-1 rounded-xl"></div>
        </div>
      </div>
    </div>
  )
}

export default Header
