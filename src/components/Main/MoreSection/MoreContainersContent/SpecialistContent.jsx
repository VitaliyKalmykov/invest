import React from 'react';
import AnnPic from '../../../../assets/empAnn.jpg';
import CrisPic from '../../../../assets/EmpCris.jpg';
import JennPic from '../../../../assets/empJenn.jpg';
import JohnPic from '../../../../assets/empJohn.jpg';
import LisPic from '../../../../assets/EmpLis.jpg';
import LouPic from '../../../../assets/EmpLou.jpg';
import AshPic from '../../../../assets/EmpAsh.jpg';
import WiPic from '../../../../assets/EmpWi.jpg';

const SpecialistContent = () => {
    const specData = [
        {
            id: 1,
            pic: AnnPic,
            description: "Ann Smith — Senior Investment Advisor with 10+ years of experience in portfolio management and risk analysis."
        },
        {
            id: 2,
            pic: CrisPic,
            description: "Britney Johnson — Financial Analyst specializing in market trends and investment strategies."
        },
        {
            id: 3,
            pic: JennPic,
            description: "Jenn Taylor — Wealth Manager focusing on personalized financial planning and tax optimization."
        },
        {
            id: 4,
            pic: JohnPic,
            description: "John Doe — Corporate Investment Strategist with expertise in mergers and acquisitions."
        },
        {
            id: 5,
            pic: LisPic,
            description: "Louise White — Junior Analyst with a passion for data-driven decision-making and market research."
        },
        {
            id: 6,
            pic: LouPic,
            description: "Bridget Green — Head of Risk Management, ensuring compliance and mitigating financial risks."
        },
        {
            id: 7,
            pic: AshPic,
            description: "Ashley Brown — Client Relationship Manager with a focus on building long-term partnerships."
        },
        {
            id: 8,
            pic: WiPic,
            description: "Barbara Black — Quantitative Analyst specializing in algorithmic trading and predictive models."
        }
    ];

    return (
        <div className="
        xl:p-6
        md:p-4
        sm:p-2
        ">
            <h2 className="
            text-center
            font-semibold
            xl:text-2xl
            md:text-xl
            sm:text-lg
            mb-1
            ">Professionals who are always in touch</h2>
            <div className="grid justify-center
            xl:grid-cols-4
            md:grid-cols-2
            sm:grid-cols-1
            gap-2
            p-6">
                {specData.map((specialist) => (
                    <div
                        key={specialist.id}
                        className="p-2 border rounded-lg shadow-md text-center bg-white"
                    >
                        <img
                            src={specialist.pic}
                            alt={`Specialist ${specialist.id}`}
                            className="w-24 h-24 object-cover mx-auto rounded-full mb-4"
                        />
                        <p className="text-gray-700 text-start text-sm">{specialist.description}</p>
                    </div>
                ))}
            </div>
            <p className="text-start font-medium xl:text-2xl md:text-lg sm:text-sm">
                Our company takes pride in assembling a team of highly skilled and dedicated professionals.
                To ensure only the best candidates join our ranks, we implement a rigorous selection process that evaluates both professional expertise and personal qualities.
            </p>
        </div>
    );
};

export default SpecialistContent;