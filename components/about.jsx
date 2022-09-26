import Image from 'next/future/image'

const About = () => {
    return (
        <>

            <section id="about" className=" pt-10 mx-auto about-main-content font-garamond max-w-[850px] dark:text-slate-200">
                <h2 className='text-center text-section-h2 '>A Message  from <br className='sm:hidden' /> David Davies</h2>
                <div className='flex flex-col items-center px-4 py-6 lg:p-8 gap-y-8 md:block'>

                    {/* Mobile Image */}
                    <div className='block md:hidden'>
                        <Image
                            src="/david.jpg"
                            alt="bup phone mockup"
                            className="mr-4 rounded-lg "
                            width="300"
                            height="300"
                            quality={100}
                            blurDataURL="/hero-blur.png"
                            placeholder="blur"
                        />
                    </div>

                    {/* 1024px and Up Image */}
                    <div className='hidden md:block'>
                        <Image
                            src="/david.jpg"
                            alt="bup phone mockup"
                            className="mr-4 rounded-lg md:float-left"
                            height="350"
                            width="350"
                            quality={100}
                            blurDataURL="/hero-blur.png"
                            placeholder="blur"
                        />
                    </div>
                    <p className='text-lg lg:ml-4 '>
                        I am thankful that I get to serve selfless clients. Most attorneys who practice in other areas of the
                        law
                        could only dream of working with clients who are motivated not by their own greed and self interest, but
                        by
                        a deep concern for the people that they love.

                        It has been my experience that most people seek out:

                        An Estate Planning Attorney because they want to ensure that their family, their life’s work, and the
                        causes
                        that they hold dear continue to be cared for after they are gone,

                        an Elder Law Attorney because they want to ensure that their parents or other loved ones receive the
                        best
                        possible care and comfort at a time when they can no longer provide those things for themselves.

                        A Business Attorney because they want to avoid conflicts, grievances, government action, or unnecessary
                        litigation. And, they want smooth partnerships, healthy relationships with their employees, the ability
                        to
                        acquire assets, raise capital, avoid unnecessary taxation, and, generally, create an optimum business
                        environment.

                        An Accredited Veteran’s Attorney because they need assistance navigating the waters of the Veterans
                        Administration. Our goal is to assist our men and and women who served with that navigation.

                        Virtually every member of our society will find themselves in at least one of these four situations in
                        their
                        lifetimes. Therefore, it is our goal to turn these often complex problems into manageable solutions.
                    </p>
                </div>
            </section>
        </>

    )
}

export default About