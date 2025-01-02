import React, { useState } from 'react';
import './AdminPage.css'; // Import the CSS file
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
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!marks.tacMarks || !marks.initialSubmission || !marks.finalSubmission || !marks.plagiarism) {
            setError('Please fill all fields before submitting.');
            return;
        }
        setError('');
        navigate('/admin2'); // Navigate to the next page
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setMarks((prevMarks) => ({ ...prevMarks, [name]: value }));
    };

    return (
        <div className="user-page">
            <h2 className="user-header">Admin’s Marks</h2>
            <div className="user-content">
                <div className="image-section">
                    <h3 className="image-title">Tac Marks</h3>
                    <img src={adminImage} alt="Admin" className="user-image" />
                </div>
                <div className="form-section">
                    <p className="welcome-text">Welcome, Admin! You can enter marks here...</p>

                    <form className="user-form" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="tacMarks">Tac Marks (0-5): </label>
                            <select
                                id="tacMarks"
                                name="tacMarks"
                                value={marks.tacMarks}
                                onChange={handleInputChange}
                            >
                                <option value="" disabled>
                                    Select Tac Marks
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
                                    Select Initial Submission Marks
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
                                    Select Final Submission Marks
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
                                    Select Plagiarism Marks
                                </option>
                                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((mark) => (
                                    <option key={mark} value={mark}>
                                        {mark}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {error && <p className="error-message">{error}</p>}

                        <div className="button-div-submit">
                            <button type="submit">Next Page</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminPage2;
