import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import * as S from './DataSources.style';
import { fp, apiDomain } from '../../../config';
import Spinner from '../../../components/Spinner';
import ErrorMessage from '../../MyCompany/Team/ErrorMessage';
import SearchWithAddButton from '../../../components/SearchWithAddButton';
import CardBasicData from '../../../components/CardBasicData';

const URL = `${apiDomain}/datasource.php`;

function DataSources() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  async function doFetch(initialURL, initialOptions) {
    try {
      setIsError(false);
      setIsLoading(true);
      const options = {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      };
      const axiosData = {
        ...initialOptions,
        fp,
        atomic_session: 0,
        command: 'list_all',
      };
      const result = await Axios.post(initialURL, axiosData, options);
      setData(result.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  }

  useEffect(() => {
    doFetch(URL);
  }, []);

  return (
    <S.Wrapper>
      <SearchWithAddButton name="Data Sources" buttonText="Add Data Source" />
      <S.DataSourcesContainer>
        {isLoading ? <Spinner /> : null}
        {isError ? (
          <ErrorMessage doFetch={doFetch} url={URL}>
            Error loading data
          </ErrorMessage>
        ) : null}
        {data
          ? data.map((item) => <CardBasicData key={item.id} data={item} />)
          : null}
      </S.DataSourcesContainer>
    </S.Wrapper>
  );
}

export default DataSources;
