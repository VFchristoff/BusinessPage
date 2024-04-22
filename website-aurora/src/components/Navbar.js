import React, { useState } from 'react';

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);

    const handleMobileMenu = () => {
        setIsMobile(!isMobile); 
    };

    const navigateToSection = (path) => {
        if (path !== '/#') {
            const sectionId = path.substring(1);
            const section = document.getElementById(sectionId);
            console.log('Section:', section);

            if (section) {
                const top = section.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
            setIsMobile(false);
        }
    };

    return (
        <nav className="lg:mx-0 lg:px-40 inset-x-0 flex flex-col lg:flex-row items-center justify-between bg-slate-950 p-2 z-40 sticky top-0">
            <div className="container mx-5 lg:mx-auto flex items-center justify-between w-full">
                <button onClick={() => navigateToSection('#page-top')} aria-label="Go to top">
                    <img src={require('../images/UI/logo.png')} alt="Logo" width={202} height={202} />
                </button>
                <button
                    className="text-white lg:hidden focus:outline-none"
                    aria-label="Toggle navigation"
                    onClick={handleMobileMenu}
                >
                    {isMobile ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-7 h-7 text-white"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-7 h-7 text-white"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    )}
                </button>
                <div className={`text-stone-200 lg:flex lg:items-center lg:w-auto ${isMobile ? 'block' : 'hidden'}`}>
                    <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8">
                        <li>
                            <button className="nav-link relative group" onClick={() => navigateToSection('#aurora')}>
                                <span>AURORA</span>
                                <span className="nav-link-underline absolute bottom-0 left-0 right-0 h-1 bg-transparent transition group-hover:bg-white" />
                            </button>
                        </li>
                        <li>
                            <button className="nav-link relative group" onClick={() => navigateToSection('#values')}>
                                <span>OUR VALUES</span>
                                <span className="nav-link-underline absolute bottom-0 left-0 right-0 h-1 bg-transparent transition group-hover:bg-white" />
                            </button>
                        </li>
                        <li>
                            <button className="nav-link relative group" onClick={() => navigateToSection('#partners')}>
                                <span>PARTNERS</span>
                                <span className="nav-link-underline absolute bottom-0 left-0 right-0 h-1 bg-transparent transition group-hover:bg-white" />
                            </button>
                        </li>
                        <li>
                            <button className="nav-link relative group" onClick={() => navigateToSection('#contact')}>
                                <span>CONTACT US</span>
                                <span className="nav-link-underline absolute bottom-0 left-0 right-0 h-1 bg-transparent transition group-hover:bg-white" />
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
