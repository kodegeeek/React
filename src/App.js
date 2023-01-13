import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Footer from "./components/Footer"
// import ReactDOM from "react-dom"


export default function App() {
    return (
        <div className="container">
            <Navbar />
            <Main />
            <Footer />
        </div>

    )
}