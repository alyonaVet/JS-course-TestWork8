import React, {ChangeEvent, useCallback, useEffect, useState} from 'react';
import {QuoteType} from '../../types';
import {useNavigate, useParams} from 'react-router-dom';
import axiosApi from '../../axiosApi';
import AddQuoteForm from '../../components/AddQuoteForm/AddQuoteForm';
import Spinner from '../../components/Spinner/Spinner';

const EditQuote = () => {

  const [quote, setQuote] = useState<QuoteType>({
    category: '',
    author: '',
    quote: '',
  });

  const [loading, setLoading] = useState(false);


  const params = useParams();
  const navigate = useNavigate();

  const onFieldChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;

    setQuote((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const fetchQuote = useCallback(async () => {
    try {
      const {data: quote} = await axiosApi.get(`/quotes/${params.id}.json`);

      setQuote(quote);

    } catch (error) {
      console.error('Network error:', error);
    }
  }, []);

  useEffect(() => {
    void fetchQuote();
  }, [fetchQuote]);

  const onFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    const editedQuote = {
      category: quote.category,
      author: quote.author,
      quote: quote.quote,
    };

    try {
      await axiosApi.put(`/quotes/${params.id}.json`, editedQuote);
    } finally {
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
      <h4>Edit quote</h4>
      {form}
    </div>
  );
};

export default EditQuote;