import { useState, useEffect } from "react";

export default function ScrollToTop() {

    const [visible, setVisible] = useState("hidden");

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible("block")
        }
        else if (scrolled <= 300) {
            setVisible("hidden")
        }
    };

    const handleScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            /* you can also use 'auto' behaviour
               in place of 'smooth' */
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisible);
    })


    return (
        <div className={`fixed bottom-4 right-4 bg-gray-300 shadow-inner rounded-full p-4 cursor-pointer ${visible}`} onClick={handleScroll}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#1D9bF0">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
        </div>
    )

}