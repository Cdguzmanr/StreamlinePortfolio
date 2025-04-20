import React from 'react'

const AboutIntro = () => {
  return (
    <div className="pt-3 md:pt-6 bg-bone text-night">
        <div className="max-w-3xl md:max-w-5xl lg:max-w-6xl mx-auto px-3 md:px-0 md:flex md:flex-row">
            
            {/* Introduction */}
            <section className="mb-6 md:mx-3 "> 
                <div className="bg-white rounded-lg border">            
                    <h2 className="px-3 py-2 mt-2 text-center text-2xl lg:text-3xl font-bold">About Me</h2>
                    <div className="mx-3 mb-4 px-3 py-2">
                        <div className="border-[#e8e8e8] rounded-lg px-3 py-4 border mb-4">                   
                            <h3 className='text-lg md:text-xl mb-3'><strong>Hello World!</strong> 👋🏻</h3>
                            <div className='text-md md:text-lg leading-relaxed'> 
                            <p>If you've made it here, chances are you're curious to know a little more about me. I'd like to think that's a good thing… so, welcome!</p>

                            <div className='text-center mx-auto max-w-3xl my-5'>
                                <p className='mx-auto'> <em>"You have to know the past to understand the present."</em></p>
                                <p className='text-end'>~ Carl Sagan</p>
                            </div>

                            <p className='mb-3'>Like everyone, my life has been shaped by a collection of stories—moments that defined my values, challenged my beliefs, and influenced how I see the world. Some were small but meaningful, while others completely reshaped my path.</p>
                            <p className='mb-3'>In this section, you'll find a series of personal stories—little snapshots of experiences that have brought me to where I am today. Through them, I hope you get a better sense of who I am, what drives me, and where I'm headed.</p>
                            <p className='mb-3'>So, take a scroll, read at your own pace, and maybe even find something that resonates with you. After all, every story has something to teach us.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}

export default AboutIntro