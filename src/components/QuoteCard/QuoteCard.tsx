import React from 'react';
import {QuoteType} from '../../types';

interface QuoteCardProps {
  quote: QuoteType;
  onEdit: () => void;
  onDelete: () => void;
}
const QuoteCard: React.FC<QuoteCardProps> = ({ quote, onEdit, onDelete}) => {
  return (
    <div className="d-flex flex-column align-items-start mb-3 border rounded-1 p-3 w-100">
      <p className="mt-2">{quote.quote}</p>
      <p>- {quote.author}</p>
      <div className="d-flex mt-3">
        <button className="btn btn-secondary me-3 px-4" onClick={onEdit}>Edit</button>
        <button className="btn btn-danger" onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default QuoteCard;