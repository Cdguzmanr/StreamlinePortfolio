import React from 'react'

const Home = () => {
  return (
    <div className='bg-bone h-screen'>
        
        <section className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-6xl lg:text-8xl font-bold text-night mb-4">Pura Vida!</h1>
        <p className="text-base px-8 lg:text-xl text-poppy mb-8">
          My name is Carlos and I'm a Software Developer <br />
          currently working at Fox Valley Technical College 🧑🏻‍💻
        </p>
        <a href="#Contact" className="bg-poppy text-white py-2 px-4 rounded hover:scale-105">
          Contact Me
        </a>
      </section>

    </div>
  )
}

export default Home