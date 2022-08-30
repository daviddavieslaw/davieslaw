import { useRouter } from 'next/router';
import React, { useState } from 'react'
import Accordian from './Accordian'
import { BusinessLawFAQ, EstatePlanningFAQ, VeteransPlanningFAQ, ElderLawFAQ } from './FAQArray';

const FAQ = () => {
    const router = useRouter();
    const BusinessLaw = router.pathname === "/businesslaw";
    const EstatePlanning = router.pathname === "/estateplanning";
    const VeteransPlanning = router.pathname === "/veteransplanning";
    const ElderLaw = router.pathname === "/elderlaw";

    const [clicked, setClicked] = useState(null);

    const toggle = index => {
        if (clicked === index) {
            return setClicked(null);
        }
        setClicked(index);
    }

    const PageFAQ = () => {
        if (BusinessLaw) {
            return BusinessLawFAQ.map((faq, index) => (
                <Accordian
                    title={faq.title}
                    desc={faq.description}
                    index={index}
                    toggle={toggle}
                    clicked={clicked}
                    key={faq.title}

                />
            ))
        }

        if (EstatePlanning) {
            return EstatePlanningFAQ.map((faq, index) => (
                <Accordian
                    title={faq.title}
                    desc={faq.description}
                    index={index}
                    toggle={toggle}
                    clicked={clicked}
                    key={faq.title}

                />
            ))
        }

        if (VeteransPlanning) {
            return VeteransPlanningFAQ.map((faq, index) => (
                <Accordian
                    title={faq.title}
                    desc={faq.description}
                    index={index}
                    toggle={toggle}
                    clicked={clicked}
                    key={faq.title}

                />
            ))
        }
        if (ElderLaw) {
            return ElderLawFAQ.map((faq, index) => (
                <Accordian
                    title={faq.title}
                    desc={faq.description}
                    index={index}
                    toggle={toggle}
                    clicked={clicked}
                    key={faq.title}

                />
            ))
        }
    }
    return (
        <>
            <section id="faq" className='w-full py-32 mx-auto max-w-section'>
                <h2 className=' dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-br from-[#bcbcbc] to-[#6b6b6b] font-garamond tracking-wide text-section-h2 text-center '>FAQ</h2>
                {PageFAQ()}
            </section>
        </>
    )
}

export default FAQ