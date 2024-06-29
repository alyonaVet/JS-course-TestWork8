import Category from '../../components/Category/Category';
import {useCallback, useEffect, useState} from 'react';
import axiosApi from '../../axiosApi';
import {ApiQuoteType} from '../../types';
import QuoteCard from '../../components/QuoteCard/QuoteCard';
import {useNavigate, useParams} from 'react-router-dom';
import {categories, getCategoryTitle} from '../../constans';
import Spinner from '../../components/Spinner/Spinner';


const MainPage = () => {
  const [quotes, setQuotes] = useState<ApiQuoteType>({});
  const [loading, setLoading] = useState(true);


  const params = useParams();
  const navigate = useNavigate();

  const categoryName = params.category;
  const categoryTitle = getCategoryTitle(categories, categoryName);

  const fetchQuotes = useCallback(async (categoryName: string | undefined) => {
    const fetchUrl = !categoryName ? '/quotes.json' : `/quotes.json?orderBy="category"&equalTo="${categoryName}"`;

    try {
      const {data: quotes} = await axiosApi.get<ApiQuoteType>(fetchUrl);
      if (quotes) {
        setQuotes(quotes);
      } else {
        setQuotes({});
      }
    } catch (error) {
      console.error('Network error:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchQuotes(categoryName);
  }, [fetchQuotes, categoryName]);


  const onEdit = (id: string) => {
    navigate(`/quotes/${id}/edit`);
  };

  const deletePost = async (id: string) => {
    try {
      await axiosApi.delete(`/quotes/${id}.json`);
    } finally {
      void fetchQuotes(categoryName);
    }
  };

  return (
    <div className="container mt-3 d-flex">
      <div className="col-3">
        <Category />
      </div>
      <div className="col-9 d-flex flex-column">
        {loading ? (
          <Spinner/>
        ) : (
          <>
            <h3>{categoryTitle}</h3>
            {Object.keys(quotes).length === 0 ? (
              <p className="fs-4 text-secondary align-self-center mt-5">No quotes added yet!</p>
            ) : (
              Object.entries(quotes).map(([id, quote]) => (
                <QuoteCard
                  key={id}
                  quote={quote}
                  onEdit={() => onEdit(id)}
                  onDelete={() => deletePost(id)}
                />
              ))
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default MainPage;