import React, { useEffect, useState, useCallback } from 'react';
import Axios from 'axios';
import { useAuth0 } from '../../react-auth0-spa';
import history from '../../utils/history';
import '../../css/main.css';
import SummaryRow from './SummaryRow';
import Pagination from '../Pagination';

const Summaries = (props) => {
  const { t, provider, isDolarCurrency } = props;
  const { user } = useAuth0();
  const { email } = user;

  const [pageable, setPageable] = useState({});
  const [page, setPage] = useState(0);
  const [summaries, setSummaries] = useState([]);
  const [providerId, setProviderId] = useState(null);

  const getSummariesByPage = useCallback((pageNumber = 0) => {
    let urlGetSummaries = '';
    if (provider) {
      urlGetSummaries = providerId
        ? `http://127.0.0.1:8080/provider/${providerId}/summaries?page=${pageNumber}&elements=5`
        : '';
    } else {
      urlGetSummaries = `http://127.0.0.1:8080/client/summaries?email=${email}&page=${pageNumber}&elements=5`;
    }

    if (urlGetSummaries !== '') {
      Axios.get(urlGetSummaries)
        .then((res) => res.data)
        .then((data) => {
          setSummaries(data.content);
          setPageable(data);
          setPage(pageNumber);
        });
    }
  }, [email, providerId, provider]);

  useEffect(() => {
    if (provider) {
      setProviderId(props.match.params.idProvider);
    }
  }, [props.match.params.idProvider, provider]);

  useEffect(() => {
    getSummariesByPage();
  }, [getSummariesByPage]);

  const goBack = () => {
    history.goBack();
  };


  const summariesList = summaries
    .map((summary, key) => (
      <SummaryRow key={key} id={key} summary={summary} t={t} isDolarCurrency={isDolarCurrency} />));

  return (
    <div className="component-container row justify-content-center">
      <div className="col-12">
        <div className="main-list-container row">
          <div className="main-title col-12">
            <div className="row">
              <div className="col-md-2 col-2 align-self-center">
                <h4><button type="button" className="go-back-button" onClick={() => goBack()}>{'<<'}</button></h4>
              </div>
              <div className="col-md-8 offset-md-2 col-10">
                <h2>{t('Summaries')}</h2>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="row">
              <div className="col-5 align-self-center">
                <h4>{t('Create at')}:</h4>
              </div>
              <div className="col-3 align-self-center">
                <h4>{t('Items')}:</h4>
              </div>
              <div className="col-4 align-self-center">
                <h4>{t('Total')}:</h4>
              </div>
            </div>
          </div>
          <div className="col-12">
            {summariesList}
          </div>
        </div>
      </div>
      <div className="col-12">
        <Pagination
          totalPages={pageable ? pageable.totalPages : 0}
          page={page}
          getMenus={getSummariesByPage}
        />
      </div>
    </div>
  );
};

export default Summaries;
