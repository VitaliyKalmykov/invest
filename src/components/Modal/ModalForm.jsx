import React, {useState} from 'react';
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

        console.log(formData)

        if (Object.keys(newErrors).length === 0) {
            console.log("form is valid!")
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-start p-7 gap-8">

            {/*text-inputs*/}

          <div className="flex flex-col gap-4 w-full">
              <TextInput name={"name"} value={formData.name} onChange={handleChange} type={"text"} id={"name"} htmlFor={"name"} placeholder={"Your name..."} labelName={"Name:"}/>
              {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
              <TextInput name={"phone"} value={formData.phone} onChange={handleChange} type={"tel"} id={"phone"} htmlFor={"phone"} placeholder={"Your phone..."} labelName={"Phone:"}/>
              {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
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
                {errors.budget && <span className="absolute top-12 text-red-500 text-sm">{errors.budget}</span>}
            </div>
            <div className="w-full">
                <h2>Your requests to our specialists:</h2>
                <textarea
                    className="border-2 w-full resize-none"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>
            </div>
            <div className="flex relative gap-2">
                <input
                    type="checkbox"
                    id="data-consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                />
                <label htmlFor="data-consent">
                    I agree to the processing of my personal data
                </label>
                {errors.consent && <span className="absolute top-6 text-red-500 text-sm">{errors.consent}</span>}
            </div>
            {/*сабміт кнопка*/}
            <Button className="m-auto border-2 pr-6 pl-6 pt-4 pb-4 rounded-xl" type={"submit"}>Send!</Button>
        </form>
    );
};

export default ModalForm;