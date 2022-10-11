import React from "react";
import MainLayout from "../layouts/MainLayout";

export default function About() {

    const about = {
        width: 900,
        height: 500,
        objectFit: "cover",
        justifyContent: "center",
    }

    return (
        <MainLayout>
            <h1>Halaman About</h1>
            <img src="https://images.pexels.com/photos/1287142/pexels-photo-1287142.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" style={about} />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt atque quasi libero quae! Optio fugiat dolore natus asperiores earum quia neque atque nulla incidunt tenetur, magnam illum odit, reiciendis adipisci.</p>
        </MainLayout>
    )
}