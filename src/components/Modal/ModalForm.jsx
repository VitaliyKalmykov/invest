import React, {useState} from 'react';
import { useForm } from '@formspree/react';
import TextInput from "../UI/TextInput";
import Button from "../UI/Button";
import RadioInput from "../UI/RadioInput";

const ModalForm = () => {

    {/*стан данних форми */}
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        budget: '',
        message: '',
        consent: false,
    });

    {/*об'єкт з помилками для їх відрисовки*/}
    const [errors, setErrors] = useState({});
    {/*стан для відрисовки UX контенту щодо форми */}
    const [formSubmitted, setFormSubmitted] = useState(false);

    const maxMessageLength = 240; // Максимальна довжина тексту


    const validate = () => {
        const newErrors = {};

        if(!formData.name.trim()) {
            newErrors.name = "Name is required";
        }
        if (!formData.phone.trim()) {
            newErrors.phone = "Phone is required";
        }
        else if (!/^\+?\d{10,15}$/.test(formData.phone)) {
            newErrors.phone = 'Phone must be a valid number.';
        }
        if (!formData.budget ) {
            newErrors.budget = "Choose your budget";
        }
        if (!formData.consent) {
            newErrors.consent = "Please agree to consent your data";
        }
        return newErrors;
    }

    {/*двустороннє зв'язування*/}
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    {/*обробка сабміту*/}
    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = validate();
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            try {
                const response = await fetch("https://formspree.io/f/xgvvrodd", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: formData.name,
                        phone: formData.phone,
                        budget: formData.budget,
                        message: formData.message,
                    }),
                });

                if (response.ok) {
                    setFormSubmitted(true);
                    setFormData({
                        name: '',
                        phone: '',
                        budget: '',
                        message: '',
                        consent: false,
                    });
                } else {
                    console.error("Form submission failed.");
                }
            } catch (error) {
                console.error("An error occurred:", error);
            }
        }
    };

    return (
        <form action="https://formspree.io/f/xgvvrodd" method="POST" onSubmit={handleSubmit} className="flex flex-col items-start p-2 gap-6 xl:text-xl md:text-2xl sm:text-sm">

            {formSubmitted ? (
                <div className="mx-auto">
                    <p className="text-green-900 font-bold">
                        Our specialist will contact you soon!
                    </p>
                </div>
            ) : ""}

            {/*text-inputs*/}

          <div className="flex flex-col gap-4 w-full relative">
              <TextInput name={"name"} value={formData.name} onChange={handleChange} type={"text"} id={"name"} htmlFor={"name"} placeholder={"Your name..."} labelName={"Name:"}/>
              {errors.name && <span className="text-red-500">{errors.name}</span>}
              <TextInput name={"phone"} value={formData.phone} onChange={handleChange} type={"tel"} id={"phone"} htmlFor={"phone"} placeholder={"Your phone..."} labelName={"Phone:"}/>
              {errors.phone && <span className="text-red-500">{errors.phone}</span>}
          </div>

            {/*radio-inputs*/}

            <div className="flex relative flex-col">
                    <h4>Your starting budget:</h4>
                <div className="flex gap-2">
                    {/*мапимо масив на компонент радіоінпут*/}
                    {['<100$', '100$', '200$', '300$', '>300$'].map((budget) => (
                        <RadioInput
                            key={budget}
                            id={budget}
                            name="budget"
                            htmlFor={budget}
                            labelName={budget}
                            value={budget}
                            onChange={handleChange}
                            checked={formData.budget === budget}
                        />
                    ))}
                </div>
                {errors.budget && <span className="text-red-500">{errors.budget}</span>}
            </div>
            {/*textarea*/}
            <div className="w-full">
                <h2>Your requests to our specialists:</h2>
                <textarea
                    className="border-2 h-32 w-full resize-none relative p-2"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    maxLength={maxMessageLength}
                ></textarea>
                <div
                    className={`text-sm absolute ${
                        formData.message.length === maxMessageLength ? 'text-red-500' : 'text-green-500'
                    }`}
                >
                    {formData.message.length}/{maxMessageLength} characters
                </div>
            </div>
            {/*checkbox*/}
            <div className="flex relative gap-2 pb-4">
                <input
                    type="checkbox"
                    id="data-consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                />
                <label htmlFor="data-consent" className="text-nowrap">
                    I agree to the processing of my data
                </label>
                {errors.consent && <span className="absolute text-nowrap top-5 md:top-8 text-lg text-red-500">{errors.consent}</span>}
            </div>
            {/*сабміт кнопка*/}
            <Button
                className="m-auto border-2 pr-6 pl-6 pt-4 pb-4 rounded-xl bg-transparent text-black hover:bg-black hover:text-white transition duration-300"
                type={"submit"}>Send!</Button>
        </form>
    );
};

export default ModalForm;