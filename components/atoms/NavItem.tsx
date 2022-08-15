import React from 'react'

interface Props {
  text: string
  href?: string
}

function NavItem(props: Props) {
  const { text, href } = props

  return (
    <a className="cursor-pointer hover:text-red-500" href={href}>
      {text}
    </a>
  )
}

export default NavItem
