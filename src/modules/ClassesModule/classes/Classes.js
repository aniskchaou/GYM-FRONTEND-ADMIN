import React, { useState } from 'react';

const Classes = () => {
    const [program, setProgram] = useState('');
    const [coach, setCoach] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [maxMembers, setMaxMembers] = useState('');
    const [classType, setClassType] = useState('');
    const [recurringDays, setRecurringDays] = useState([]);
    const [availableFrom, setAvailableFrom] = useState('');
    const [availableUntil, setAvailableUntil] = useState('');
    const [automaticCancellation, setAutomaticCancellation] = useState(false);
    const [minTimeToSignOut, setMinTimeToSignOut] = useState('');
    const [minTimeToSignIn, setMinTimeToSignIn] = useState('');
    const [defaultVisibility, setDefaultVisibility] = useState(true);
    const [freeClasses, setFreeClasses] = useState(false);
    const [signupsAfterStart, setSignupsAfterStart] = useState(false);

    const handleRecurringDaysChange = (e) => {
        const { value } = e.target;
        setRecurringDays((prevDays) => {
            if (prevDays.includes(value)) {
                return prevDays.filter((day) => day !== value);
            } else {
                return [...prevDays, value];
            }
        });
    };

    return (
        <div>
            <h2>Classes Information</h2>
            <label>
                Program:
                <input type="text" value={program} onChange={(e) => setProgram(e.target.value)} />
            </label>
            <br />
            <label>
                Coach:
                <input type="text" value={coach} onChange={(e) => setCoach(e.target.value)} />
            </label>
            <br />
            <label>
                Start Time (h):
                <input type="text" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
            </label>
            <br />
            <label>
                End Time (h):
                <input type="text" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
            </label>
            <br />
            <label>
                Max number of members:
                <input type="number" value={maxMembers} onChange={(e) => setMaxMembers(e.target.value)} />
            </label>
            <br />
            <label>
                Classes Type:
                <select value={classType} onChange={(e) => setClassType(e.target.value)}>
                    <option value="">Select Type</option>
                    <option value="Recurring">Recurring</option>
                    {/* Add other types if needed */}
                </select>
            </label>
            {classType === 'Recurring' && (
                <>
                    <label>
                        Days:
                        <br />
                        <input type="checkbox" value="Mo" checked={recurringDays.includes("Mo")} onChange={handleRecurringDaysChange} /> Mo
                        <input type="checkbox" value="Tu" checked={recurringDays.includes("Tu")} onChange={handleRecurringDaysChange} /> Tu
                        <input type="checkbox" value="We" checked={recurringDays.includes("We")} onChange={handleRecurringDaysChange} /> We
                        <input type="checkbox" value="Th" checked={recurringDays.includes("Th")} onChange={handleRecurringDaysChange} /> Th
                        <input type="checkbox" value="Fr" checked={recurringDays.includes("Fr")} onChange={handleRecurringDaysChange} /> Fr
                        <input type="checkbox" value="Sa" checked={recurringDays.includes("Sa")} onChange={handleRecurringDaysChange} /> Sa
                        <input type="checkbox" value="Su" checked={recurringDays.includes("Su")} onChange={handleRecurringDaysChange} /> Su
                    </label>
                    <br />
                    <label>
                        Available from:
                        <input type="text" value={availableFrom} onChange={(e) => setAvailableFrom(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        Available until:
                        <input type="text" value={availableUntil} onChange={(e) => setAvailableUntil(e.target.value)} />
                    </label>
                </>
            )}
            <br />
            <label>
                Automatic cancellation Disabled:
                <input type="checkbox" checked={automaticCancellation} onChange={(e) => setAutomaticCancellation(e.target.checked)} />
            </label>
            <br />
            <label>
                Min time to sign out:
                <input type="text" value={minTimeToSignOut} onChange={(e) => setMinTimeToSignOut(e.target.value)} />
            </label>
            <br />
            <label>
                Min time to sign in:
                <input type="text" value={minTimeToSignIn} onChange={(e) => setMinTimeToSignIn(e.target.value)} />
            </label>
            <br />
            <label>
                Default (Always visible):
                <input type="checkbox" checked={defaultVisibility} onChange={(e) => setDefaultVisibility(e.target.checked)} />
            </label>
            <br />
            <label>
                Free classes:
                <input type="checkbox" checked={freeClasses} onChange={(e) => setFreeClasses(e.target.checked)} />
            </label>
            <br />
            <label>
                Signups after classes start:
                <input type="checkbox" checked={signupsAfterStart} onChange={(e) => setSignupsAfterStart(e.target.checked)} />
            </label>
        </div>
    );
};

export default Classes;
