import React, { useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import '../../styles/card.css';
import calendarIcon from '../../assets/icon 2/date.svg';
import viewIcon from '../../assets/icon 2/user view.svg';
import categoryIcon from '../../assets/icon 2/category.svg';
import copyIcon from '../../assets/icon 2/copy.svg';

const Card = ({
    heading = "No Title",
    writer = "No Name",
    date = "29 Aug. 24",
    views = 0,
    category = "no cateory",
    description = "No description provided."
}) => {
    const [tooltipText, setTooltipText] = useState('Copy');

    const copyToClipboard = () => {
        navigator.clipboard.writeText(writer).then(() => {
            setTooltipText('Copied');
            setTimeout(() => setTooltipText('Copy'), 2000);
        }).catch(() => {
            setTooltipText('Error');
            setTimeout(() => setTooltipText('Copy'), 2000);
        });
    };

    return (
        <div className="card-card">
            <h2 className="card-heading" title={heading}>
                {heading}
            </h2>

            <div className="card-writer">
                <span style={{ color: "#a09ea3", marginRight: 5, fontWeight: 400 }}>Writer:</span>
                <span style={{ fontWeight: 600 }}>{writer}</span>

                <Tooltip
                    title={tooltipText}
                    TransitionComponent={Zoom}
                    arrow
                    placement="right"
                >
                    <img
                        src={copyIcon}
                        alt="Copy"
                        className="copy-icon"
                        onClick={copyToClipboard}
                        role="button"
                        tabIndex={0}
                        onKeyDown={e => { if (e.key === 'Enter') copyToClipboard(); }}
                        style={{ marginLeft: '8px', cursor: 'pointer', width: '16px', height: '16px' }}
                    />
                </Tooltip>
            </div>

            <hr className="card-hr" />

            <div className="card-info-item">
                <img src={calendarIcon} alt="Date Icon" className="info-icon" />
                <span style={{ color: "#3A3541", fontWeight: 600, fontSize: 15 }}>Date:</span>
                <span style={{ color: "#3A3541", fontWeight: 100, fontSize: 15 }}>{date}</span>
            </div>

            <div className="card-info-item">
                <img src={viewIcon} alt="View Icon" className="info-icon" />
                <span style={{ color: "#3A3541", fontWeight: 600, fontSize: 15 }}>View:</span>
                <span style={{ color: "#3A3541", fontWeight: 100, fontSize: 15 }}>{views}</span>
            </div>

            <div className="card-category">
                <img src={categoryIcon} alt="Category Icon" className="info-icon" />
                <p style={{ fontWeight: 600, color: "#3A3541" }}>{category}</p>
            </div>

            <hr className="card-hr" />

            <p className="card-description">
                {description.length > 150 ? description.slice(0, 150) + '...' : description}
            </p>
        </div>
    );
};

export default Card;
