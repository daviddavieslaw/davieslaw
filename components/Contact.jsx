import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css';


const Contact = ({ homePage }) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [select, setSelect] = useState("General Questions");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (name === "" || email === "" || phone === "" || message === "") {
            toast.error('All Fields are Required', {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
            });
        }
        else {
            const formData = {
                name,
                email,
                phone,
                select,
                message
            }
            fetch('/api/sendgrid', {
                method: 'POST',
                body: JSON.stringify(formData)
            });
            toast.success('Message Successful!', {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
            });
        }
    };

    return (
        <>

            <section id="contact" className='w-full max-w-4xl min-h-screen pt-6 pb-0 mx-auto mt-32 rounded-2xl font-garamond'>
                <ToastContainer
                    position="bottom-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                />
                <div className='flex flex-col items-center gap-2 contact-header-container'>
                    <h2 className='text-gradient text-section-h2 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-br from-[#bcbcbc] to-[#6b6b6b]'>Book a Consultation</h2>
                </div>

                <form onSubmit={handleSubmit} className='flex flex-col px-5 py-10 md:grid md:grid-cols-2 gap-x-20 gap-y-7 dark:shadow-none'>
                    <fieldset className='flex flex-col'>
                        <label className='text-lg' htmlFor="name">Full Name</label>
                        <input type="text" id="name" value={name} placeholder="First and Last Name" onChange={(e) => setName(e.target.value)} className="px-4 pt-2 pb-3 text-lg rounded-lg drop-shadow-md dark:drop-shadow-none dark:border dark:bg-transparent" />
                    </fieldset>

                    <fieldset className='flex flex-col'>
                        <label className='text-lg' htmlFor="phone">Phone Number</label>
                        <input type="tel" id="phone" value={phone} placeholder="(xxx)-xxx-xxxx" onChange={(e) => setPhone(e.target.value)} className="px-4 pt-2 pb-3 text-lg rounded-lg dark:bg-transparent drop-shadow-md dark:drop-shadow-none dark:border" />
                    </fieldset>

                    <fieldset className='flex flex-col '>
                        <label className='text-lg' htmlFor="email">Email Address</label>
                        <input type="email" id="email" value={email} placeholder="john@doe.com" onChange={(e) => setEmail(e.target.value)} className="px-4 pt-2 pb-3 text-lg rounded-lg drop-shadow-md dark:drop-shadow-none dark:border dark:bg-transparent" />
                    </fieldset>

                    <fieldset className='flex flex-col'>
                        <label className='text-lg' htmlFor="select">How may we help you?</label>
                        <select id="select" value={select} onChange={(e) => setSelect(e.target.value)} className="px-4 pt-2 pb-3 text-lg rounded-lg drop-shadow-md dark:drop-shadow-none dark:border">
                            <option>General Questions</option>
                            <option>Estate Planning</option>
                            <option>Business Law</option>
                            <option>Elder Law</option>
                            <option>Veterans Planning</option>
                        </select>
                    </fieldset>

                    <fieldset className='flex flex-col col-span-2'>
                        <label className='text-lg' htmlFor='message'>Message</label>
                        <textarea className='p-2 pl-4 text-lg rounded-lg drop-shadow-md dark:drop-shadow-none dark:border dark:bg-transparent' id="message" value={message} rows={6} placeholder='So that we may best assist you, please write a detailed description of the question you have or issue that you may be experiencing.' onChange={(e) => setMessage(e.target.value)} />
                    </fieldset>

                    <button type="submit" className='col-span-2 px-3 py-1 mx-auto text-lg rounded-lg shadow-lg w-36 dark:shadow-none dark:border'>Submit</button>
                </form>


            </section>
        </>
    )
}

export default Contact
