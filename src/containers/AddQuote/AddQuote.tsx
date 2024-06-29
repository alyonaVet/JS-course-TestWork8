import React, {ChangeEvent, useState} from 'react';
import {QuoteType} from '../../types';
import AddQuoteForm from '../../components/AddQuoteForm/AddQuoteForm';

const AddQuote = () => {
  const [quote, setQuote] = useState<QuoteType>({
    category: '',
    author: '',
    quote: '',
  });

  const onFieldChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;

    setQuote((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onFormSubmit = async (event: React.FormEvent)=> {
    event.preventDefault();
  }

  return (
    <div className="container mt-3">
      <h4>Submit new quote</h4>
        <AddQuoteForm quote={quote} onFieldChange={onFieldChange} onFormSubmit={onFormSubmit} />
    </div>
  );
};

export default AddQuote;