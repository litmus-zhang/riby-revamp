import React from 'react'
import ChatWidget from '../components/atoms/ChatWidget'
import Header from '../components/atoms/Header'
import Footer from '../components/molecules/Footer'

interface Props {}

function Blog(props: Props) {
  const {} = props

  return (
    <div>
      <Header />
      <div className="mt-16"></div>
      Welcome to my Youtube channel
      <Footer />
      <ChatWidget />
    </div>
  )
}

export default Blog
