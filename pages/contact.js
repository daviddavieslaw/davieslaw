import Layout from '../components/Layout'
import Contact from '../components/Contact'
import { useRouter } from 'next/router'
import { useEffect } from 'react';
const ContactPage = () => {
    const router = useRouter();

    const contactPage = router.pathname === "/contact";

    useEffect(() => {

        if (contactPage) {
            router.push("/#contact")
        }
    }, [])
    return (
        <Layout title="contact">
            <Contact />
        </Layout>
    )
}

export default ContactPage