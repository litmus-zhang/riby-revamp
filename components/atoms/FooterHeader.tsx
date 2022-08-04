import React from 'react'

interface Props {text: string}

function FooterHeader(props: Props) {
    const { text } = props

    return (
        <strong>{text }</strong>
    )
}

export default FooterHeader
