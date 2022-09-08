import React from "react"


//importing components
import Footer from "./components/Footer"
import Info from "./components/Info"
import About from "./components/About"
import Interest from "./components/Interest"
import style from "./style.css"

export default function App() {
    return (
        <div style={style}>
            <Info className="Info" />
            <About className="about" />
            <Interest className="interest" />
            <Footer className="footer" />
        </div>
    )

}