import React, { useState } from 'react';
import "./GMS.css";
import managersData from './managersData';
import PersonPlaceholder from '/PersonPlaceholder.png';

const GMs = () => {
    const [selectedDivision, setSelectedDivision] = useState(null);
    const [selectedZilla, setSelectedZilla] = useState(null);
    const [selectedThana, setSelectedThana] = useState(null);

    const handleDivisionClick = (division) => {
        setSelectedDivision(division === selectedDivision ? null : division);
        setSelectedZilla(null);
        setSelectedThana(null);
    };

    const handleZillaClick = (zilla) => {
        setSelectedZilla(zilla === selectedZilla ? null : zilla);
        setSelectedThana(null);
    };

    const handleThanaClick = (thana) => {
        setSelectedThana(thana === selectedThana ? null : thana);
    };

    return (
        <div className='about-us'>
            {!selectedDivision && (
                <div className='about-us-content'>
                    <h1>AGM</h1>
                    {Object.keys(managersData).map((division) => (
                        <div key={division} className='about-us-section'>
                            <h2 onClick={() => handleDivisionClick(division)}>{division}</h2>
                        </div>
                    ))}
                </div>
            )}

            {selectedDivision && !selectedZilla && !selectedThana && (
                <div className='about-us-content'>
                    <button onClick={() => setSelectedDivision(null)}>Back to Divisions</button>
                    <h1>{selectedDivision}</h1>
                    <h3>AGM</h3>
                    <div className='about-us-directors'>
                        {managersData[selectedDivision].AGM.map((agm, index) => (
                            <div key={index} className='about-us-grid'>
                                <img src={agm.image || PersonPlaceholder} alt={agm.name} />
                                <p>{agm.name}</p>
                            </div>
                        ))}
                    </div>
                    <h3>Zilla Managers</h3>
                    {Object.keys(managersData[selectedDivision]['Zilla Managers']).map((zilla) => (
                        <div key={zilla} className='about-us-grid'>
                            <button onClick={() => handleZillaClick(zilla)}>{zilla}</button>
                        </div>
                    ))}
                </div>
            )}

            {selectedDivision && selectedZilla && !selectedThana && (
                <div className='about-us-content'>
                    <button onClick={() => setSelectedZilla(null)}>Back to Zillas</button>
                    <h1>{selectedZilla}</h1>
                    <h3>Zilla Manager</h3>
                    <div className='about-us-directors'>
                        {managersData[selectedDivision]['Zilla Managers'][selectedZilla]['Zilla Manager'] ? (
                            <div className='about-us-grid'>
                                <img src={managersData[selectedDivision]['Zilla Managers'][selectedZilla]['Zilla Manager'].image || PersonPlaceholder} alt={managersData[selectedDivision]['Zilla Managers'][selectedZilla]['Zilla Manager'].name} />
                                <p>{managersData[selectedDivision]['Zilla Managers'][selectedZilla]['Zilla Manager'].name}</p>
                            </div>
                        ) : (
                            <p>No Zilla Manager available</p>
                        )}
                    </div>
                    <h3>Thana Managers</h3>
                    {managersData[selectedDivision]['Zilla Managers'][selectedZilla]['Thana Managers'].map((thana, index) => (
                        <div key={index} className='about-us-grid'>
                            <button onClick={() => handleThanaClick(thana)}>{thana.thana}</button>
                        </div>
                    ))}
                </div>
            )}

            {selectedThana && (
                <div className='about-us-content'>
                    <button onClick={() => setSelectedThana(null)}>Back to Thanas</button>
                    <div className='about-us-section'>
                        <h3>Thana Managers</h3>
                        <div className='about-us-directors'>
                            <h3>{selectedThana.thana}</h3>
                            <div className='about-us-grid'>
                                <img src={selectedThana.image || PersonPlaceholder} alt={selectedThana.name} />
                                <p>{selectedThana.name}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GMs;
