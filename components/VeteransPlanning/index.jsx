import Image from 'next/future/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import FAQ from '../FAQ'

const VeteransPlanningHomeComp = () => {
    const router = useRouter();
    const page = router.pathname;

    return (
        <section className="grid px-2 py-[145px] lg:pt-48 mx-auto max-w-section">

            <h2 className='dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-br from-[#bcbcbc] to-[#6b6b6b] text-center text-section-h2'>Veterans&#39; Planning</h2>
            <div className='flex flex-col items-center justify-between px-2 pt-8 lg:flex-row-reverse gap-y-10 lg:gap-x-10'>
                <Image src="/veterans-planning.jpeg" width="500" height="500" className="rounded-lg lg:min-w-[500px]" />
                <div className='relative'>
                    <p className='max-w-3xl text-xl'>Veterans’ planning is the field of law that covers the varied legal needs of those
                        who have served our country.</p>
                    <ul className='pt-5 pl-4 text-lg list-disc'>
                        <li>War-time Veteran’s Benefits</li>
                    </ul>
                    <div className='before:absolute before:shadow-contentShadow before:bottom-20 before:rounded-full before:right-20 before:opacity-20 lg:before:hidden' />

                </div>
            </div>

            {page !== "/veteransplanning" && <Link href="/veteransplanning"><a className='px-3 py-2 mx-auto mt-10 text-lg text-center border rounded-lg w-52 border-slate-400 dark:border-slate-200'>Learn More</a></Link>}

            {page === "/veteransplanning" && <FAQ />}

        </section>
    )
}

export default VeteransPlanningHomeComp