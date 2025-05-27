import React from 'react';
import './TableReservation.css';

const StatusLegend = () => {
  return (
    <div className="status-legend">
      <div className="status-item">
        <span className="status-indicator reserved-indicator"></span>
        <span className="status-label">Reserved</span>
      </div>
      <div className="status-item">
        <span className="status-indicator available-indicator"></span>
        <span className="status-label">Available</span>
      </div>
    </div>
  );
};

export default StatusLegend;