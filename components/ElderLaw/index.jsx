import Image from 'next/future/image'
import Link from 'next/link'
import { useRouter } from 'next/router';
import FAQ from '../FAQ';

const ElderLawHomeComp = () => {
    const router = useRouter();
    const page = router.pathname;
    return (
        <section className="grid px-2 pt-[145px] lg:pt-44 mx-auto max-w-section">
            <h2 className='text-center text-section-h2 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-br from-[#bcbcbc] to-[#6b6b6b]'>Elder Law</h2>
            <div className='flex flex-col items-center justify-between px-2 pt-8 lg:flex-row gap-y-10 lg:gap-x-10'>
                <Image src="/elder-law.jpeg" width="500" height="500" className="rounded-lg lg:min-w-[500px]" />
                <div className='relative'>
                    <p className='max-w-3xl text-xl'>Elder law is the field of law that covers the varied legal needs of aging
                        populations. Many people think this is an area of law that can be ignored until close to the
                        time of retirement, but it is always a good idea to create a plan early.</p>
                    <ul className='pt-5 pl-4 text-lg list-disc'>
                        <li>Adult Guardianship</li>
                        <li>Retirement Planning </li>
                        <li>Social Security Disability Benefits</li>
                    </ul>
                    <div className='before:absolute before:shadow-contentShadow before:bottom-20 before:rounded-full before:right-20 before:opacity-20 lg:before:hidden' />

                </div>
            </div>

            {page !== "/elderlaw" && <Link href="/elderlaw"><a className='px-3 py-2 mx-auto mt-10 text-lg text-center border rounded-lg w-52 border-slate-400 dark:border-slate-200' >Learn More</a></Link>}
            {page === "/elderlaw" && <FAQ />}

        </section>
    )
}

export default ElderLawHomeComp