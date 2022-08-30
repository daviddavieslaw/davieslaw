const Accordian = ({
    title,
    desc,
    index,
    toggle,
    clicked
}) => {

    return (
        <div
            className='flex flex-col items-center max-w-3xl px-5 py-2 mx-auto my-5 shadow-lg accordian gap-x-5 dark:shadow-none dark:border dark:border-slate-200 rounded-2xl'
        >

            <div className='flex items-center justify-between w-full py-5 cursor-pointer' onClick={() => toggle(index)}>
                {
                    <h6 className='font-medium text-xl md:text-lg leading-relaxed font-garamond w-[86%]'>
                        {title}
                    </h6>
                }

                <button className={clicked === index ? 'accordian-active accordian-trigger' : 'accordian-trigger'}
                    aria-expanded={clicked === index ? 'true' : 'false'}
                    title="click to reveal answer"
                />

            </div>

            {
                <div className={clicked === index ? 'content accordian-active' : 'content'}
                >
                    <p className='pb-2 text-base font-normal'>{desc}</p>

                </div>
            }

        </div>
    )
}

export default Accordian