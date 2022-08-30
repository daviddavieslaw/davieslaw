import Image from 'next/future/image'
import Link from 'next/link'

const Hero = () => {
    return (
        <header className="relative flex flex-col items-center justify-center w-full px-2 pt-20 text-white h-80 lg:min-h-screen">
            <Image
                className="absolute top-0 bottom-0 left-0 right-0 w-full h-full"
                height="500"
                width="500"
                priority="true"
                placeholder="blur"
                blurDataURL="/9j/4AAQSkZJRgABAgEASABIAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAHAAoDAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD8BvAf7L3xl8L+Lfh1H4W+FGsaXdaPcanba34i8R+KvhdrAWfXU0nTLm/t/Dtr4qkty9hbWes3lnFFeOZIb3SrMm31XTrvX9RmspVMPio1eSoqtOhFRp0lG6jiFO6VSo7ycHD4qkYpxuuVvlLwko08RhHS54exq1pc1So5e86DhZuEFaKmp/DTlL37NyspL+sP4Y3OlW3w1+HtvqHw68bX1/B4H8Jw317HrnheyjvLyLQNPS5uo7M+NL42iXEyvKtsb28MCuIvtVxs81/Rp08RyQ5cQ6ceSPLBw9o4RsrQ9o5Jz5VpztJytzNJs82rUpurVcsPCcnUm5TU3TUpOTvJU4xcYKT1UE2o35U2lcD/2Q=="
                src="/hero-bg.webp"
                alt="David Davies" />
            <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full object-cover bg-[#000000d4] "></div>
            <div className="relative flex flex-col items-center font-garamond gap-y-4">
                <h1 className='text-center text-hero-h1'>Davies Law Firm, PLLC</h1>
                {/* <hr className='' /> */}
                <h4 className='text-center text-hero-subtitle'>Protecting and Providing <br className='hidden xs:block' /> for Those You Love</h4>
                <Link href="/contact"><a className='px-4 py-2 border rounded-lg hero__cta'>Book a Consultation</a></Link>
            </div>
        </header>
    )
}

export default Hero