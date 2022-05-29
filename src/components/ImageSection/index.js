import React from 'react'

export default function ImageSection({img}) {

    const styleImg = (image) => ({
        background: `url(${image})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '55vh'
    })

    return (
        <section style={styleImg(img)}></section>
    )
}
