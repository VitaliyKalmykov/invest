import React from 'react';
import TextInput from "../UI/TextInput";
import Button from "../UI/Button";

const ModalForm = () => {
    return (
        <form className="flex flex-col items-start p-7 gap-8">
          <div className="flex flex-col gap-4 w-full">
              <TextInput type={"text"} id={"name"} htmlFor={"name"} placeholder={"Your name..."} labelName={"Name:"}/>
              <TextInput type={"tel"} id={"phone"} htmlFor={"phone"} placeholder={"Your phone..."} labelName={"Phone:"}/>
          </div>
            <div className="flex flex-col">
                    <h4>Your starting budget:</h4>
                <div className="flex gap-2">
                    <div>
                        <input type="radio" id="<100$" name="choice"/>
                        <label htmlFor="<100$">{"<100$"}</label>
                    </div>
                    <div>
                        <input type="radio" id="100$" name="choice"/>
                        <label htmlFor="100$">100$</label>
                    </div>
                    <div>
                        <input type="radio" id="200$" name="choice"/>
                        <label htmlFor="200$">200$</label>
                    </div>
                    <div>
                        <input type="radio" id="300$" name="choice"/>
                        <label htmlFor="300$">300$</label>
                    </div>
                    <div>
                        <input type="radio" id=">300$" name="choice"/>
                        <label htmlFor=">300$">{">300$"}</label>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <h2>Your requests to our specialists:</h2>
                <textarea className="border-2 w-full resize-none"></textarea>
            </div>
            <div className="flex gap-2">
                <input type="checkbox" id="data-consent"/>
                <label htmlFor="data-consent">
                    I agree to the processing of my personal data
                </label>
            </div>
            <Button className="m-auto border-2 pr-6 pl-6 pt-4 pb-4 rounded-xl" type={"submit"}>Send!</Button>
        </form>
    );
};

export default ModalForm;