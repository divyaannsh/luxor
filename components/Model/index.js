import React, { useState } from "react";
import { createPortal } from "react-dom";
import style from './style.module.css';

const Modal = ({ onClose, title }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        contactNumber: '',
        email: '',
        message: ''
    });

    // Local form submission - no API dependency
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validate form
        const newErrors = {};
        if (!formData.firstName) newErrors.firstName = "First Name is required";
        if (!formData.lastName) newErrors.lastName = "Last Name is required";
        if (!formData.contactNumber) newErrors.contactNumber = "Contact Number is required";
        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }
        if (!formData.message) newErrors.message = "Message is required";

        if (Object.keys(newErrors).length > 0) {
            // Show errors (you could add error state display)
            console.error("Form validation errors:", newErrors);
            return;
        }

        // Local form submission - just log and close
        console.log("Form submitted locally:", formData);
        alert("Thank you for your enquiry! We will contact you soon.");
        onClose();
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleCloseClick = (e) => {
        e.preventDefault();
        onClose();
    };

    // Use portal to render modal outside normal DOM hierarchy
    return createPortal(
        <div className={style.modal_overlay}>
            <div className={style.modal_wrapper}>
                <div className={style.modal}>
                    <div className={style.modal_header}>
                        <h3>Contact Us</h3>
                        <button onClick={handleCloseClick} className={style.close_button}>
                            ×
                        </button>
                    </div>
                    {title && <h1>{title}</h1>}
                    <div className={style.modal_body}>
                        <form onSubmit={handleSubmit}>
                            <div className={style.form_group}>
                                <label htmlFor="firstName">First Name:</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className={style.form_group}>
                                <label htmlFor="lastName">Last Name:</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className={style.form_group}>
                                <label htmlFor="contactNumber">Contact Number:</label>
                                <input
                                    type="tel"
                                    id="contactNumber"
                                    name="contactNumber"
                                    value={formData.contactNumber}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className={style.form_group}>
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className={style.form_group}>
                                <label htmlFor="message">Message:</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows={4}
                                />
                            </div>
                            <div className={style.modal_footer}>
                                <button type="submit" className={style.submit_button}>Submit</button>
                                <button type="button" onClick={handleCloseClick} className={style.cancel_button}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default Modal;
