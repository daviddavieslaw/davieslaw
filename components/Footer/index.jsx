
const Footer = () => {
    return (
        <footer id="contact" className='flex flex-col items-center py-5 dark:bg-black dark:text-slate-200 font-garamond '>
            <div className='flex flex-col items-center justify-around w-full lg:flex-row gap-y-10'>
                <div className=''>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6530.913486163576!2d-92.453114!3d35.070319!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d282708a8afd87%3A0xbe2799bf07520db4!2s1972%20Dave%20Ward%20Dr%2C%20Conway%2C%20AR%2072034!5e0!3m2!1sen!2sus!4v1661812927858!5m2!1sen!2sus"
                        width="250"
                        height="200"
                        allowFullScreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        className='rounded-lg' />
                </div>
                <div className='flex flex-col text-center lg:text-left gap-y-2' >
                    <h4 className='text-xl font-bold '>Davies Law Firm, PLLC</h4>

                    <p>1972 Dave Ward Dr, Conway, AR 72032</p>
                    <p>(501) 358-4422 (Phone)</p>
                    <p>(501) 358-4933 (Fax)</p>
                    <p>karri@daviddavieslaw.com</p>
                </div>
                <div className='flex flex-col pb-8 text-center lg:items-start gap-y-2'>
                    <h4 className='text-xl font-bold'>Hours</h4>

                    <p>Monday – Thursday: 9am – 4pm</p>
                    <p>Friday – Sunday: Closed</p>
                </div>
            </div>
            <span>Copyright &copy; {new Date().getFullYear()} Davies Law Firm, PLLC</span>
        </footer>
    )
}

export default Footer