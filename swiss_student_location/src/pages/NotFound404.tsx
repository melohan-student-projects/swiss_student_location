import '@assets/style/NotFound404.css'
export default function NotFound404() {
    return (
        <div>
            <a href="https://codepen.io/uiswarup/full/yLzypyY" target="_blank">
                <header className="top-header">
                </header>

                <div>
                    <div className="starsec"></div>
                    <div className="starthird"></div>
                    <div className="starfourth"></div>
                    <div className="starfifth"></div>
                </div>


                <div className="lamp__wrap">
                    <div className="lamp">
                        <div className="cable"></div>
                        <div className="cover"></div>
                        <div className="in-cover">
                            <div className="bulb"></div>
                        </div>
                        <div className="light"></div>
                    </div>
                </div>
                <section className="error">
                    <div className="error__content">
                        <div className="error__message message">
                            <h1 className="message__title">Page Not Found</h1>
                            <p className="message__text">We're sorry, the page you were looking for isn't found here.
                                The link you followed may either be broken or no longer exists. Please try again, or
                                take a look at our.</p>
                        </div>
                        <div className="error__nav e-nav">
                            <a href="" target="_blanck" className="e-nav__link"></a>
                        </div>
                    </div>

                </section>

            </a>
        </div>
    );
};

