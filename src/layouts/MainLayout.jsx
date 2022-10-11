import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function MainLayout(props) {

    const mainLayout = {
        width: '100%',
        minHeight: '100vh',
        maxWidth: 900,
        margin: '0 auto',
    }

    return (
        <main>
            <Navbar />

            <div style={mainLayout}>
                <h1>Selamat Datang di </h1>
                {props.children}
            </div>

            <Footer />

        </main>
    )
}