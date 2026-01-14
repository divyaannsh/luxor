import React, { useState } from "react";
import style from './style.module.css';

const Modal = ({ onClose, title }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        contactNumber: '',
        email: '',
        message: ''
    });
    async function sendEmail(to, subject, text) {
        const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ to, subject, text }),
        });

        const result = await response.json();
        if (response.ok) {
            console.log('Email sent:', result.message);
        } else {
            console.error('Error sending email:', result.error);
        }
    }

    const [errors, setErrors] = useState({});
    // const [success, setSucces] = useState(false);

    const handleCloseClick = (e) => {
        e.preventDefault();
        onClose();
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateForm = () => {
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

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        // sendEmail('recipient@example.com', 'Test Subject', 'Hello, this is a test email.');
        e.preventDefault();
        if (validateForm()) {
            // setSucces(true)
            onClose()

            // try {
            //     const url = `${process.env.NEXT_PUBLIC_BASE_URL}/enquire`;
            //     const response = await fetch(url, {
            //         method: 'POST',
            //         headers: {
            //             'Content-Type': 'application/json'
            //         },
            //         body: JSON.stringify(formData)
            //     });

            //     if (response.ok) {
            //         console.log("Form submitted successfully");
            //         onClose();
            //     } else {
            //         console.error("Form submission error");
            //     }
            // } catch (error) {
            //     console.error("Error submitting form:", error);
            // }
        }
    };

    return (<div className={style.modal_overlay}>
        <div className={style.modal_wrapper}>
            <div className={style.modal}>
                <div className={style.modal_header}>
                    <a href="#" onClick={handleCloseClick}>
                        x
                    </a>
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
                                className={errors.firstName ? style.error : ''}
                                required
                            />
                            {errors.firstName && <span className={style.error_message}>{errors.firstName}</span>}
                        </div>
                        <div className={style.form_group}>
                            <label htmlFor="lastName">Last Name:</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                className={errors.lastName ? style.error : ''}
                                required
                            />
                            {errors.lastName && <span className={style.error_message}>{errors.lastName}</span>}
                        </div>
                        <div className={style.form_group}>
                            <label htmlFor="contactNumber">Contact Number:</label>
                            <input
                                type="text"
                                id="contactNumber"
                                name="contactNumber"
                                value={formData.contactNumber}
                                onChange={handleInputChange}
                                className={errors.contactNumber ? style.error : ''}
                                required
                            />
                            {errors.contactNumber && <span className={style.error_message}>{errors.contactNumber}</span>}
                        </div>
                        <div className={style.form_group}>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className={errors.email ? style.error : ''}
                                required
                            />
                            {errors.email && <span className={style.error_message}>{errors.email}</span>}
                        </div>
                        <div className={style.form_group}>
                            <label htmlFor="message">Message:</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                className={errors.message ? style.error : ''}
                                required
                            />
                            {errors.message && <span className={style.error_message}>{errors.message}</span>}
                        </div>
                        <div className={style.modal_footer}>
                            <button type="submit">Submit</button>
                            <button type="button" onClick={handleCloseClick}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Modal;
