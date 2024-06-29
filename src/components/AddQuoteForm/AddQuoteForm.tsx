import React, {ChangeEvent} from 'react';
import {QuoteType} from '../../types';

interface QuoteFormProps {
  quote: QuoteType;
  onFieldChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  onFormSubmit: (event: React.FormEvent) => void;
}

const AddQuoteForm: React.FC<QuoteFormProps> = ({quote, onFormSubmit, onFieldChange}) => {
  return (
    <form onSubmit={onFormSubmit}>
      <div>
        <label htmlFor="task-type" className="col-form-label">Category</label>
      </div>
      <select
        className="form-select w-50 mb-3"
        id="category"
        name="category"
        required
        onChange={onFieldChange}
        value={quote.category}
      >
        <option defaultValue="" disabled>Select Category</option>
        <option value="star-wars">Star Wars</option>
        <option value="famous-people">Famous people</option>
        <option value="saying">Saying</option>
        <option value="humour">Humour</option>
        <option value="motivational">Motivational</option>
      </select>
      <div className="form-group">
        <label htmlFor="author">Author</label>
        <input
          type="text"
          name="author"
          id="author"
          required
          className="form-control w-50 mb-3"
          onChange={onFieldChange}
          value={quote.author}
        />
      </div>
      <div className="form-group mt-3">
        <label htmlFor="quote">Quote text</label>
        <textarea
          name="quote"
          id="quote"
          required
          className="form-control"
          onChange={onFieldChange}
          value={quote.quote}
        />
      </div>
      <button type="submit" className="btn btn-primary mt-4">
        Save
      </button>
    </form>
  );
};

export default AddQuoteForm;