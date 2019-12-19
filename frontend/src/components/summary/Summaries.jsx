import React, { useEffect, useState, useCallback } from 'react';
import Axios from 'axios';
import { useAuth0 } from '../../react-auth0-spa';
import '../../css/main.css';
import SummaryRow from './SummaryRow';
import Pagination from '../Pagination';

const Summaries = ({ t , isDolarCurrency}) => {
  const { user } = useAuth0();
  const { email } = user;

  const [pageable, setPageable] = useState({});
  const [page, setPage] = useState(0);
  const [summaries, setSummaries] = useState([]);

  const getSummariesByPage = useCallback((pageNumber = 0) => {
    const urlGetSummaries = `http://127.0.0.1:8080/client/summaries?email=${email}&page=${pageNumber}&elements=5`;
    Axios.get(urlGetSummaries)
      .then((res) => res.data)
      .then((data) => {
        setSummaries(data.content);
        setPageable(data);
        setPage(pageNumber);
      });
  }, [email]);

  useEffect(() => {
    getSummariesByPage();
  }, [getSummariesByPage]);

  const summariesList = summaries
    .map((summary, key) => <SummaryRow key={key} id={key} summary={summary} t={t} isDolarCurrency={isDolarCurrency}/>);

  return (
    <div className="component-container row justify-content-center">
      <div className="col-12">
        <div className="main-list-container row">
          <div className="main-title col-12">
            <h2>{t('Summaries')}</h2>
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
