import React from 'react';

const ConsultOfflineInfo = () => {
    return (
        <div className="flex xl:flex-row md:flex-col sm:flex-col gap-8 mb-6">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48275.2406113317!2d-77.02560866431844!3d38.88708982472199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7bcdecbb1df%3A0x715969d86d0b76bf!2z0JHRltC70LjQuSDQtNGW0Lw!5e0!3m2!1suk!2sua!4v1737633269312!5m2!1suk!2sua"
                className="h-96 xl:w-96 md:w-full sm:w-full rounded-xl border-4 shadow-lg" allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            <div>
                <h3 className="text-center font-semibold">Details for you</h3>
                <ul className="list-disc flex flex-col gap-2 justify-center">
                    <li>We are open from 8 a.m. to 8 p.m., seven days a week.</li>
                    <li>The first consultation is <span className="font-bold">free</span>, with no obligations.</li>
                    <li>You don't need prior knowledge about investments — we provide comprehensive guidance and
                        support.
                    </li>
                    <li className="text-wrap">Your start-up capital can be as little as <span
                        className="font-bold">$100</span>, making investing accessible to everyone.
                    </li>
                    <li>Our team consists of experienced financial advisors with a track record of successful
                        investments.
                    </li>
                    <li>We offer customized investment plans tailored to your goals and risk preferences.</li>
                    <li>Regular updates and reports on the performance of your investments ensure transparency.</li>
                    <li>Access to exclusive opportunities in stock markets, real estate, and emerging industries.
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ConsultOfflineInfo;