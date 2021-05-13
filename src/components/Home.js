import React from "react";
import image from "../background.jpg"

export default function Home() {
    return (
        <main>
            <img src={image} alt="Computer Science" className="absolute object-cover w-full h-full"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <div className="h-full w-full flex items-center justify-center p-8">
                    <div className="bg-white bg-opacity-50 rounded p-12">
                        <h1 className="text-6xl text-black-300 font-bold cursive leading-none lg:leading-snug home-name">Hello. I'm Ezra</h1>
                    </div>
                </div>
            </section>
        </main>        
    )
}