import React from 'react'

const Page = () => {
  return (
    <>
    {/* Put your content Here */}
    <section id="hero" className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden">
        
        <div className="z-10 p-6">
             <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-4">
                <span className="block">Abhinav Singh</span>
                <span className="block text-gray-500">Passionate Developer</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-8">
                Hi everyone, I am Abhinav. I build beautiful and immersive web experiences that blend design and technology.
            </p>
            <div className="flex items-center justify-center space-x-4">
                <img src="https://placehold.co/40x40/e5e7eb/e5e7eb?text=A" alt="Tech Logo" className="rounded-full" />
                <img src="https://placehold.co/40x40/e5e7eb/e5e7eb?text=B" alt="Tech Logo" className="rounded-full" />
                <img src="https://placehold.co/40x40/e5e7eb/e5e7eb?text=C" alt="Tech Logo" className="rounded-full" />
                <img src="https://placehold.co/40x40/e5e7eb/e5e7eb?text=D" alt="Tech Logo" className="rounded-full" />
            </div>
        </div>
    </section>
    </>
  )
}

export default Page