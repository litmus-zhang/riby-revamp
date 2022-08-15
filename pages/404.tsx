import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

interface Props {}

function NotFound(props: Props) {
  const {} = props

  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 5000)
  })

  return (
    <>
      <h1>404</h1>
      <h2>Oops! that page can not be found :( </h2>
      <p>
        Redirecting you to the <Link href="/">home page </Link>in 5 seconds...
      </p>
    </>
  )
}

export default NotFound
