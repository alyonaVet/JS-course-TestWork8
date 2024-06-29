import React, {ChangeEvent, useState} from 'react';
import {QuoteType} from '../../types';
import AddQuoteForm from '../../components/AddQuoteForm/AddQuoteForm';
import axiosApi from '../../axiosApi';
import {useNavigate} from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner';

const AddQuote = () => {
  const [quote, setQuote] = useState<QuoteType>({
    category: '',
    author: '',
    quote: '',
  });

  const [loading, setLoading] = useState(false);


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
    setLoading(true);

    const newQuote = {
      category: quote.category,
      author: quote.author,
      quote: quote.quote,
    };
    try {
      await axiosApi.post('/quotes.json', newQuote);
    }finally {
      setLoading(false);
      navigate('/');
    }
  };

  let form = (
    <AddQuoteForm
      quote={quote}
      onFieldChange={onFieldChange}
      onFormSubmit={onFormSubmit}
    />
  );

  if (loading) {
    form = <Spinner />
  }

  return (
    <div className="container mt-3">
      <h4>Submit new quote</h4>
      {form}
    </div>
  );
};

export default AddQuote;