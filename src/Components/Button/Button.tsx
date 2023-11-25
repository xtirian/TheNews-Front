import Link from 'next/link'
import React from 'react'
import './style.scss'

const Button = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <Link className='buttonVersion1' href={"/page/feed/latest"}>{children}</Link>
  )
}

export default Button