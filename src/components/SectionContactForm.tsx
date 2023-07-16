import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";

export const SectionContactForm = () => {
    return (
        <section className="contactFormBg">
            <div className="contactFormContainer">
                <div className="contactFormContainerGetIn">
                    <div>
                        <h3>Get in Touch</h3>
                        <h4>No Hesitation! let’s talk to us</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ut elit tellus, luctus nec ullamcorper mattis,
                            pulvinar dapibus leo.Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Ut elit tellus, luctus
                            nec ullamcorper mattis, pulvinar dapibus leo.
                        </p>
                    </div>
                    <div className="contactFormList">
                        <AiOutlineMail />
                        <div className="contactFormListSpan">
                            <span>mail us</span>
                            <span>info@example.com</span>
                        </div>
                    </div>
                    <div className="contactFormList">
                        <AiOutlinePhone />
                        <div className="contactFormListSpan">
                            <span>call us</span>
                            <span>(888) 655-452-5678</span>
                        </div>
                    </div>
                    <div className="contactFormList">
                        <IoLocationOutline />
                        <div className="contactFormListSpan">
                            <span>location</span>
                            <span>151 jing st. mhg VIF 2000, Japan</span>
                        </div>
                    </div>
                </div>
                <div className="contactFormInputs">
                    <h2>Have Any Question?</h2>
                    <span>Let us know how to get back to you.</span>
                    <hr />
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="text" placeholder="Telephone" />
                    <span>Message:</span>
                    <textarea placeholder="Type Your Message"></textarea>
                    <button>Send Message</button>
                </div>
            </div>
        </section>
    );
};
