import React, {ChangeEvent, useState} from 'react';
import {QuoteType} from '../../types';
import AddQuoteForm from '../../components/AddQuoteForm/AddQuoteForm';
import axiosApi from '../../axiosApi';
import {useNavigate} from 'react-router-dom';

const AddQuote = () => {
  const [quote, setQuote] = useState<QuoteType>({
    category: '',
    author: '',
    quote: '',
  });

  const navigate = useNavigate();

  const onFieldChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;

    setQuote((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onFormSubmit = async (event: React.FormEvent)=> {
    event.preventDefault();

    const newQuote = {
      category: quote.category,
      author: quote.author,
      quote: quote.quote,
    };
    try {
      await axiosApi.post('/quotes.json', newQuote);
    }finally {
      navigate('/');
    }
  };

  return (
    <div className="container mt-3">
      <h4>Submit new quote</h4>
        <AddQuoteForm quote={quote} onFieldChange={onFieldChange} onFormSubmit={onFormSubmit} />
    </div>
  );
};

export default AddQuote;