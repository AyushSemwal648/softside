import React from 'react'

import Awards from '../../../Component/HomePage/Awards'
import Blog from '../../../Component/HomePage/Blog'
import Connected from '../../../Component/HomePage/Connected'
import Herosection from '../../../Component/HomePage/Herosection'
import Product from '../../../Component/HomePage/Product'
import Quote from '../../../Component/HomePage/Quote'
import Quotes from '../../../Component/HomePage/Quotes'
import Testimonials from '../../../Component/HomePage/Testimonials'
import Miscelleanous from '../../../Component/HomePage/Miscelleanous'
import Youtube from '../../../Component/HomePage/Youtube'

function Home() {
    return (
        <>
            <Herosection />
            <Miscelleanous/>
            <Product />
            <Youtube/>
            {/* <Quote /> */}
            <Quotes />
            <Testimonials />
            <Awards />
            <Blog />
            <Connected />
           
        </>
    )
}

export default Home