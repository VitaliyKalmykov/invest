import React from 'react';
import OfficeConsult from '../../../assets/OfficeConsult.jpg';

const ConsultOffline = () => {
    return (
        <div>
            <h2 className="text-center pt-6 pb-6 font-medium">Visit our office in Washington</h2>
            <div className="flex gap-8">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48275.2406113317!2d-77.02560866431844!3d38.88708982472199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7bcdecbb1df%3A0x715969d86d0b76bf!2z0JHRltC70LjQuSDQtNGW0Lw!5e0!3m2!1suk!2sua!4v1737633269312!5m2!1suk!2sua"
                    className="w-96 h-96 rounded-xl border-4 shadow-lg" allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
                <div className="flex-1">
                    <h3 className="text-center font-semibold">Details for you</h3>
                    <ul className="list-disc flex flex-col gap-2 justify-center">
                        <li>We are open from 8 a.m. to 8 p.m.</li>
                        <li>The first consultation is <span className="font-bold">free </span></li>
                        <li>You don't need to know about investments, we have this knowledge</li>
                        <li className="text-nowrap">Your start-up capital can be anything from $100</li>
                        <li></li>
                    </ul>
                </div>
                <img className={"w-96 h-96"} src={OfficeConsult} alt={"Office"}/>
            </div>
        </div>
    );
};

export default ConsultOffline;