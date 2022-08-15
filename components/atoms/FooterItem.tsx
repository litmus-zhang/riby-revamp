import Link from 'next/link'
import React from 'react'

interface Props {
  text: string
  link: string
}

function FooterItem(props: Props) {
  const { text, link } = props

  return <Link href={link}>{text}</Link>
}

export default FooterItem
