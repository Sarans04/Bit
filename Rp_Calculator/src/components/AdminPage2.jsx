import React, { useState } from 'react';
import styles from './AdminPage2.module.css'; // Import the CSS Module
import adminImage from '../assets/admin.png'; // Corrected path
import { useNavigate } from 'react-router-dom';

const AdminPage2 = () => {
    const [marks, setMarks] = useState({
        tacMarks: '',
        initialSubmission: '',
        finalSubmission: '',
        plagiarism: ''
    });
    const [error, setError] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!marks.tacMarks || !marks.initialSubmission || !marks.finalSubmission || !marks.plagiarism) {
            setError('Please fill all fields before submitting.');
            return;
        }
        setError('');
        setSubmitted(true); // Show the submission message
        setTimeout(() => {
            navigate('/admin'); // Navigate to the admin page after a delay
        }, 2000); // Navigate to the next page
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setMarks((prevMarks) => ({ ...prevMarks, [name]: value }));
    };

    return (
        <div className={styles.userPage}>
            <h2 className={styles.userHeader}>Admin’s Marks</h2>
            <div className={styles.userContent}>
                <div className={styles.imageSection}>
                    <h3 className={styles.imageTitle}>Tac Marks</h3>
                    <img src={adminImage} alt="Admin" className={styles.userImage} />
                </div>
                <div className={styles.formSection}>
                    <p className={styles.welcome1Text}>Welcome, Admin! You can enter marks here...</p>

                    <form className={styles.userForm} onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="tacMarks">Tac Marks (0-5): </label>
                            <select
                                id="tacMarks"
                                name="tacMarks"
                                value={marks.tacMarks}
                                onChange={handleInputChange}
                            >
                                <option value="" disabled>
                                    Choose
                                </option>
                                {[0, 1, 2, 3, 4, 5].map((mark) => (
                                    <option key={mark} value={mark}>
                                        {mark}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label htmlFor="initialSubmission">Initial Submission (0-5): </label>
                            <select
                                id="initialSubmission"
                                name="initialSubmission"
                                value={marks.initialSubmission}
                                onChange={handleInputChange}
                            >
                                <option value="" disabled>
                                    Choose
                                </option>
                                {[0, 1, 2, 3, 4, 5].map((mark) => (
                                    <option key={mark} value={mark}>
                                        {mark}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label htmlFor="finalSubmission">Final Submission (0-5): </label>
                            <select
                                id="finalSubmission"
                                name="finalSubmission"
                                value={marks.finalSubmission}
                                onChange={handleInputChange}
                            >
                                <option value="" disabled>
                                Choose
                                </option>
                                {[0, 1, 2, 3, 4, 5].map((mark) => (
                                    <option key={mark} value={mark}>
                                        {mark}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label htmlFor="plagiarism">Plagiarism (0-10): </label>
                            <select
                                id="plagiarism"
                                name="plagiarism"
                                value={marks.plagiarism}
                                onChange={handleInputChange}
                            >
                                <option value="" disabled>
                                Choose
                                </option>
                                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((mark) => (
                                    <option key={mark} value={mark}>
                                        {mark}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {error && <p className={styles.errorMessage}>{error}</p>}
                        {submitted && <p className="success-message">Marks Submitted!</p>}
                        <div className={styles.buttonDivSubmit}>
                            <button type="submit">Submit Marks</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminPage2;
