
import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {

    const [isOpen, setIsOpen] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const closeModal = () => {
        setIsOpen(false);
        setIsSent(false);
    };

    const sendEmail = (e) => {
        e.preventDefault();

        setIsSending(true);

        emailjs
            .sendForm(
                "service_5nyg4e6",
                "template_r20fnzm",
                e.target,
                {
                    publicKey: "pUTHMizGtcwnpegGj",
                }
            )
            .then(
                () => {
                    e.target.reset();
                    setIsSending(false);
                    setIsSent(true);
                },
                (error) => {
                    console.error("EmailJS Error:", error);

                    alert("Failed to send message. Please try again.");

                    setIsSending(false);
                }
            );
    };

    return (
        <>
            {/* Contact Section */}

            <section className="contact-section" id="contact">

                <p className="section-label">
                    05 — CONTACT
                </p>

                <h2>
                    Let's build something
                    <span> together.</span>
                </h2>

                <p>
                    Have a project, idea or opportunity?
                    I'd love to hear from you.
                </p>

                <button
                    type="button"
                    className="primary-button"
                    onClick={() => {
                        setIsSent(false);
                        setIsOpen(true);
                    }}
                >
                    Get In Touch →
                </button>

            </section>


            {/* Contact Popup */}

            {isOpen && (

                <div
                    className="contact-modal-overlay"
                    onClick={closeModal}
                >

                    <div
                        className="contact-modal"
                        onClick={(e) => e.stopPropagation()}
                    >

                        {/* Close Button */}

                        <button
                            type="button"
                            className="modal-close"
                            onClick={closeModal}
                        >
                            ×
                        </button>


                        {/* Modal Content */}

                        {isSent ? (

                            <div className="thank-you-message">

                                <div className="thank-you-icon">
                                    ✓
                                </div>

                                <h3>
                                    Thank You!
                                </h3>

                                <p>
                                    Your message has been sent successfully.
                                    I'll get back to you as soon as possible.
                                </p>

                                <button
                                    type="button"
                                    className="primary-button"
                                    onClick={closeModal}
                                >
                                    Close
                                </button>

                            </div>

                        ) : (

                            <>

                                {/* Modal Header */}

                                <p className="section-label">
                                    GET IN TOUCH
                                </p>

                                <h2>
                                    Let's talk about
                                    <span> your project.</span>
                                </h2>

                                <p className="modal-description">
                                    Have a project in mind or just want to say hello?
                                    Fill out the form and I'll get back to you.
                                </p>


                                {/* Contact Form */}

                                <form
                                    className="contact-form"
                                    onSubmit={sendEmail}
                                >

                                    <div className="form-group">

                                        <label htmlFor="name">
                                            Name
                                        </label>

                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="Your name"
                                            required
                                        />

                                    </div>


                                    <div className="form-group">

                                        <label htmlFor="email">
                                            Email
                                        </label>

                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="you@example.com"
                                            required
                                        />

                                    </div>


                                    <div className="form-group">

                                        <label htmlFor="subject">
                                            Subject
                                        </label>

                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            placeholder="What would you like to talk about?"
                                        />

                                    </div>


                                    <div className="form-group">

                                        <label htmlFor="message">
                                            Message
                                        </label>

                                        <textarea
                                            id="message"
                                            name="message"
                                            rows="5"
                                            placeholder="Tell me about your project..."
                                            required
                                        ></textarea>

                                    </div>


                                    <button
                                        type="submit"
                                        className="primary-button form-submit"
                                        disabled={isSending}
                                    >
                                        {isSending
                                            ? "Sending..."
                                            : "Send Message →"
                                        }
                                    </button>

                                </form>

                            </>

                        )}

                    </div>

                </div>

            )}

        </>
    );
}

export default Contact;
