import React from 'react';
import sprite from '../../../../assets/symbol-defs.svg';

const ProsConsContent = () => {
    const pros = [
        { id: 1, text: 'Personalized approach to investments.', icon: 'icon-plus' },
        { id: 2, text: 'Experienced and professional team.', icon: 'icon-plus' },
        { id: 3, text: 'Access to exclusive investment opportunities.', icon: 'icon-plus' },
        { id: 4, text: 'Transparent and regular reporting.', icon: 'icon-plus' },
        { id: 5, text: 'Quick response to market changes.', icon: 'icon-plus' },
        { id: 6, text: 'Focus on capital protection strategies.', icon: 'icon-plus' },
        { id: 7, text: 'Global market expertise.', icon: 'icon-plus' },
        { id: 8, text: 'Innovative technologies for analysis.', icon: 'icon-plus' },
        { id: 9, text: '24/7 customer support.', icon: 'icon-plus' },
        { id: 10, text: 'Additional tax and financial consulting services.', icon: 'icon-plus' }
    ];

    const cons = [
        { id: 1, text: 'Risk of market volatility.', icon: "icon-minus" },
        { id: 2, text: 'High minimum investment requirements.', icon: "icon-minus" },
        { id: 3, text: 'Standard management fees apply.', icon: "icon-minus" },
        { id: 4, text: 'Time required to see long-term results.', icon: "icon-minus" },
        { id: 5, text: 'Limited beginner-friendly tools.', icon: "icon-minus" }
    ];

    return (
        <div className="pb-4 pr-4 pl-4 pt-0">
            <div className="pb-6 pr-6 pl-6 text-start flex sm:flex-col gap-2 justify-center">
                <div>
                    <h2 className="text-center text-green-900">Pros</h2>
                    <ul className="flex flex-col gap-4 border-2 p-2 border-green-500">
                        {pros.map(pro => (
                            <li key={pro.id} className="flex items-center gap-2">
                                <svg className="fill-green-300" width="20" height="20">
                                    <use href={`${sprite}#${pro.icon}`}/>
                                </svg>
                                {pro.text}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className="text-center text-red-900">Cons</h2>
                    <ul className="flex flex-col gap-4 border-2 p-2 border-red-500">
                        {cons.map(con => (
                            <li key={con.id} className="flex items-center gap-2">
                                <svg className="fill-red-300" width="20" height="20">
                                    <use href={`${sprite}#${con.icon}`}/>
                                </svg>
                                {con.text}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <h2 className="mb-4">We are always in favor of frankness</h2>
            <div className="text-start font-medium">

                    <p>While no one can guarantee 100% success in the world of investments, we pride ourselves on being
                        upfront and transparent with our clients.</p>


                    <p>Markets are inherently unpredictable, and risk is a natural part of the process.</p>


                    <p>However, what sets us apart is our commitment to providing you with honest insights, thorough
                        analysis, and well-informed strategies tailored to your unique goals.</p>

                    <p>Our priority is to build trust through clear communication and a shared understanding of both
                        opportunities and challenges.</p>

                    <p>With us, you can count on a partner who values integrity and works tirelessly to help you
                        navigate the complexities of the financial world.</p>

            </div>
        </div>
    );
};

export default ProsConsContent;