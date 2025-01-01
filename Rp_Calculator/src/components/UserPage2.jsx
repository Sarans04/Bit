import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use this for navigation
import './UserPage2.css';

const UserPage2 = () => {
    const [marks, setMarks] = useState({
        clearObjectives: '',
        originalityCreativity: '',
        technicalProficiency: '',
        implementation: '',
        documentationPresentation: '',
        teamworkCollaboration: '',
        userExperience: '',
        continuousImprovement: '',
        problemSolving: '', // New field
        innovation: '' // New field
    });

    const [error, setError] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

    const handleChange = (field, value) => {
        setMarks((prevMarks) => ({ ...prevMarks, [field]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const allFieldsFilled = Object.values(marks).every((mark) => mark !== '');
        if (!allFieldsFilled) {
            setError('Please fill out all fields.');
            return;
        }
        setError('');
        setShowPopup(true);

        // Automatically navigate after a short delay
        setTimeout(() => {
            setShowPopup(false);
            navigate('/user'); // Replace '/user' with the appropriate route
        }, 2000);
    };

    return (
        <div className="user-page">
            <h2 className="user-header">Reviewer’s Marks</h2>
            <div className="user-content">
                <div className="form-section-left">
                    <form className="user-form" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="clear-objectives">Clear Objectives (out of 5): </label>
                            <select
                                id="clear-objectives"
                                value={marks.clearObjectives}
                                onChange={(e) => handleChange('clearObjectives', e.target.value)}
                            >
                                <option value="" disabled>Choose</option>
                                {[...Array(6).keys()].map((mark) => (
                                    <option key={mark} value={mark}>
                                        {mark}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="originality-creativity">Originality & Creativity (out of 5): </label>
                            <select
                                id="originality-creativity"
                                value={marks.originalityCreativity}
                                onChange={(e) => handleChange('originalityCreativity', e.target.value)}
                            >
                                <option value="" disabled>Choose</option>
                                {[...Array(6).keys()].map((mark) => (
                                    <option key={mark} value={mark}>
                                        {mark}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="technical-proficiency">Technical Proficiency (out of 5): </label>
                            <select
                                id="technical-proficiency"
                                value={marks.technicalProficiency}
                                onChange={(e) => handleChange('technicalProficiency', e.target.value)}
                            >
                                <option value="" disabled>Choose</option>
                                {[...Array(6).keys()].map((mark) => (
                                    <option key={mark} value={mark}>
                                        {mark}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="implementation">Implementation (out of 5): </label>
                            <select
                                id="implementation"
                                value={marks.implementation}
                                onChange={(e) => handleChange('implementation', e.target.value)}
                            >
                                <option value="" disabled>Choose</option>
                                {[...Array(6).keys()].map((mark) => (
                                    <option key={mark} value={mark}>
                                        {mark}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="problem-solving">Problem Solving (out of 5): </label>
                            <select
                                id="problem-solving"
                                value={marks.problemSolving}
                                onChange={(e) => handleChange('problemSolving', e.target.value)}
                            >
                                <option value="" disabled>Choose</option>
                                {[...Array(6).keys()].map((mark) => (
                                    <option key={mark} value={mark}>
                                        {mark}
                                    </option>
                                ))}
                            </select>
                        </div>
                        {error && <p className="error-message">{error}</p>}
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div className="form-section-right">
                    <form className="user-form">
                        <div>
                            <label htmlFor="documentation-presentation">Documentation & Presentation (out of 5): </label>
                            <select
                                id="documentation-presentation"
                                value={marks.documentationPresentation}
                                onChange={(e) => handleChange('documentationPresentation', e.target.value)}
                            >
                                <option value="" disabled>Choose</option>
                                {[...Array(6).keys()].map((mark) => (
                                    <option key={mark} value={mark}>
                                        {mark}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="teamwork-collaboration">Teamwork & Collaboration (out of 5): </label>
                            <select
                                id="teamwork-collaboration"
                                value={marks.teamworkCollaboration}
                                onChange={(e) => handleChange('teamworkCollaboration', e.target.value)}
                            >
                                <option value="" disabled>Choose</option>
                                {[...Array(6).keys()].map((mark) => (
                                    <option key={mark} value={mark}>
                                        {mark}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="user-experience">User Experience & Usability (out of 5): </label>
                            <select
                                id="user-experience"
                                value={marks.userExperience}
                                onChange={(e) => handleChange('userExperience', e.target.value)}
                            >
                                <option value="" disabled>Choose</option>
                                {[...Array(6).keys()].map((mark) => (
                                    <option key={mark} value={mark}>
                                        {mark}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="continuous-improvement">Continuous Improvement & Iteration (out of 5): </label>
                            <select
                                id="continuous-improvement"
                                value={marks.continuousImprovement}
                                onChange={(e) => handleChange('continuousImprovement', e.target.value)}
                            >
                                <option value="" disabled>Choose</option>
                                {[...Array(6).keys()].map((mark) => (
                                    <option key={mark} value={mark}>
                                        {mark}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="innovation">Innovation (out of 5): </label>
                            <select
                                id="innovation"
                                value={marks.innovation}
                                onChange={(e) => handleChange('innovation', e.target.value)}
                            >
                                <option value="" disabled>Choose</option>
                                {[...Array(6).keys()].map((mark) => (
                                    <option key={mark} value={mark}>
                                        {mark}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </form>
                </div>
            </div>
            {showPopup && (
                <div className="popup">
                    <p>Marks submitted successfully!</p>
                </div>
            )}
        </div>
    );
};

export default UserPage2;
