import React, {useState} from 'react';
import Button from "../../../UI/Button";

const FaqContent = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentAnswer, setCurrentAnswer] = useState('');


    //об'єкт факдата з вопросами та відповідями
    const faqData = [
        {
            id: 1,
            question: "What services does your investment company provide?",
            answer: "We offer portfolio management, financial planning, retirement planning, and investment advisory services tailored to your goals."
        },
        {
            id: 2,
            question: "What types of investment portfolios do you offer?",
            answer: "Our portfolios range from conservative (low risk) to aggressive (high risk) and include options such as stocks, bonds, ETFs, mutual funds, and alternative investments."
        },
        {
            id: 3,
            question: "What is the minimum amount required to start investing?",
            answer: "The minimum amount depends on the portfolio type. Generally, it starts at $5,000 for managed portfolios and $1,000 for self-directed accounts."
        },
        {
            id: 4,
            question: "How do you manage investment risks?",
            answer: "We use a diversified approach, regularly monitor market conditions, and adjust portfolios based on risk tolerance and financial goals."
        },
        {
            id: 5,
            question: "What are the expected returns on investment?",
            answer: "Returns vary based on the portfolio type and market conditions. Historically, our clients have achieved an average annual return of 5-10% over the long term."
        },
        {
            id: 6,
            question: "How do I open an investment account with your company?",
            answer: "You can open an account online through our website or schedule a meeting with one of our advisors for personalized assistance."
        },
        {
            id: 7,
            question: "Do you offer personalized financial advice?",
            answer: "Yes, we provide tailored advice based on your financial goals, risk tolerance, and time horizon."
        },
        {
            id: 8,
            question: "What fees or charges are associated with your services?",
            answer: "We charge an annual management fee ranging from 0.5% to 1.5%, depending on the portfolio size, along with any third-party fees for specific investments."
        },
        {
            id: 9,
            question: "Can I withdraw my money at any time?",
            answer: "Yes, you can withdraw your funds at any time, but some investments may have restrictions or early withdrawal penalties."
        },
        {
            id: 10,
            question: "How do you ensure the security of my investments?",
            answer: "We partner with secure, regulated custodians and use advanced encryption to protect your financial data."
        },
        {
            id: 11,
            question: "What is your company’s investment strategy?",
            answer: "Our strategy combines active and passive management, emphasizing long-term growth, diversification, and minimizing costs."
        },
        {
            id: 12,
            question: "Do you provide regular updates on portfolio performance?",
            answer: "Yes, clients receive monthly reports, quarterly reviews, and real-time updates through our online platform."
        },
        {
            id: 13,
            question: "Can I invest in specific sectors or industries?",
            answer: "Absolutely! We offer customized portfolios focusing on sectors like technology, healthcare, renewable energy, and more."
        },
        {
            id: 14,
            question: "Are there tax benefits to investing with your company?",
            answer: "Depending on the account type (e.g., IRA, 401(k)), you may enjoy tax advantages like deferred taxes or tax-free growth."
        },
        {
            id: 15,
            question: "How experienced is your team of investment managers?",
            answer: "Our team has over 15 years of experience on average, with certifications such as CFA, CFP, and MBA credentials."
        },
        {
            id: 16,
            question: "What happens if the market declines?",
            answer: "We focus on long-term strategies and may rebalance your portfolio to protect against volatility while seeking opportunities."
        },
        {
            id: 17,
            question: "Do you offer ESG (Environmental, Social, and Governance) investment options?",
            answer: "Yes, we provide ESG-focused portfolios for clients interested in socially responsible investing."
        },
        {
            id: 18,
            question: "How do you handle international investments?",
            answer: "We offer global diversification through international stocks, ETFs, and mutual funds to tap into worldwide growth opportunities."
        },
        {
            id: 19,
            question: "What is the process for transferring an existing portfolio to your company?",
            answer: "The process is simple: we assist with paperwork, coordinate with your current provider, and ensure a smooth transfer without disrupting your investments."
        },
        {
            id: 20,
            question: "Do you offer educational resources for beginner investors?",
            answer: "Yes, we have webinars, articles, and one-on-one consultations to help new investors build confidence and knowledge."
        }
    ];

 //відкриття модалки, оновлюємо стан поточної відповіді та модалки
    const openModal = (answer) => {
        setCurrentAnswer(answer);
        setIsModalOpen(true);
    };

    //закриваєм модалку та збрасуєм поточну відповідь
    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentAnswer('');
    };

    return (
        <div>
            <div className="grid gap-4 xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 p-6 border-t">
                {faqData.map(item => (
                    <div className="text-sm text-start
                        flex justify-center items-center flex-col gap-2
                        border p-2" key={item.id}>
                        <p className="border">Question</p>
                        {item.question}
                        <Button onClick={() => openModal(item.answer)} type="button" className={"border p-2 text-sm"}>Answer</Button></div>
                ))}

                {/* Модалка */}
                {isModalOpen && (
                    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
                        <div className="bg-white p-6 rounded-lg w-1/2">
                            <h2 className="text-lg font-bold">Answer</h2>
                            <p className="mt-4 text-lg">{currentAnswer}</p>
                            <Button type="button" className="mt-4 border p-2" onClick={closeModal}>
                                Close
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FaqContent;