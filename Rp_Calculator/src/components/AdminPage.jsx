import React, { useContext, useState } from 'react';
import { PIDsContext } from './PIDsContext';
import './AdminPage.css';  // Import the CSS file

const AdminPage = () => {
    const { pids } = useContext(PIDsContext);
    const [selectedPid, setSelectedPid] = useState('');
    const [initialSubmission, setInitialSubmission] = useState('');
    const [finalSubmission, setFinalSubmission] = useState('');
    const [plagiarismCheck, setPlagiarismCheck] = useState('');
    const [worklog, setWorklog] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!selectedPid) {
            setError('Please select a PID.');
            return;
        }
        setError('');
        // Handle form submission logic here
    };

    return (
        <div className="user-container">
            <h2 className="user-header">Admin Page</h2>
            <div className="user-content">
                <p>Welcome, Admin! You can manage submissions and marks here.</p>
            </div>

            {pids.length > 0 ? (
                <form className="user-form" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="pid-select">Select PID:  </label>
                        <select
                            id="pid-select"
                            value={selectedPid}
                            onChange={(e) => setSelectedPid(e.target.value)}
                        >
                            <option value="" disabled>
                                Choose
                            </option>
                            {pids.map((pid) => (
                                <option key={pid} value={pid}>
                                    {pid}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="initial-submission">Initial Submission (Out of 5):  </label>
                        <select
                            id="initial-submission"
                            value={initialSubmission}
                            onChange={(e) => setInitialSubmission(e.target.value)}
                        >
                            {[...Array(61).keys()].map((mark) => (
                                <option key={mark} value={mark}>
                                    {mark}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="final-submission">Final Submission (Out of 5):  </label>
                        <select
                            id="final-submission"
                            value={finalSubmission}
                            onChange={(e) => setFinalSubmission(e.target.value)}
                        >
                            {[...Array(11).keys()].map((mark) => (
                                <option key={mark} value={mark}>
                                    {mark}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="plagiarism-check">Plagiarism Check:</label>
                        <select
                            id="plagiarism-check"
                            value={plagiarismCheck}
                            onChange={(e) => setPlagiarismCheck(e.target.value)}
                        >
                            {[...Array(11).keys()].map((mark) => (
                                <option key={mark} value={mark}>
                                    {mark}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="worklog">Worklog:</label>
                        <input
                            type="text"
                            id="worklog"
                            value={worklog}
                            onChange={(e) => setWorklog(e.target.value)}
                            placeholder="Enter worklog details"
                        />
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    <button type="submit">Submit</button>
                </form>
            ) : (
                <p>No PIDs available.</p>
            )}
        </div>
    );
};

export default AdminPage;
