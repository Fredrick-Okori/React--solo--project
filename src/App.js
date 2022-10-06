

import React from 'react'
import NavBar from './components/NavBar'
import Contact from "./components/Contact"
import product from "./components/data"



export default function App() {
    const contact = product.map(item => {
        return <Contact
            key={item.id}
        //spread syntax
           {...item}
        />
    })
    return (
        <div>
            <NavBar />
            <div>
               {contact}
            </div>
        </div>

    )
}

