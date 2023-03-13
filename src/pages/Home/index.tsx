import React, { useState } from 'react';
import { Input } from '../../components/Input';
import { Tag } from '../../components/Tag';
import { TransactionTag } from '../../types/TransactionTag';
import { StringUtils } from '../../utils/StringUtils';

import * as S from './styles';

export const Home: React.FC = () => {
  const [search, setSearch] = useState('');
  const [maxPerPage, setMaxPerPage] = useState(25);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const [transactionTags, setTransactionTags] = useState<TransactionTag[]>([
    { total: 25, status: 'APROVADA' },
    { total: 5, status: 'NEGADA' },
    { total: 1, status: 'BLOQUEADA' },
  ]);

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;

    setSearch(value);
  }

  function handleMaxPerPageChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;

    let maxPerPage = StringUtils.removeAllNoDigitChar(value);

    if(maxPerPage > 1000) {
      maxPerPage = 1000;
    }

    setMaxPerPage(maxPerPage);
  }

  function handleStartDateChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;

    const [year, month, day] = value.split('-');

    // Como o input date trás a numeração dos meses de 0 a 11, aqui é abstraido os valores e incrementado + 1 para o valor do mês, e, por fim, adicionado um 0 a esquerda caso necessário.
    const correctDateValue = `${year}-${(Number(month) + 1).toString().padStart(2, '0')}-${day}`;

    setStartDate(correctDateValue);
  }

  function handleEndDateChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;

    const [year, month, day] = value.split('-');

    // Como o input date trás a numeração dos meses de 0 a 11, aqui é abstraido os valores e incrementado + 1 para o valor do mês, e, por fim, adicionado um 0 a esquerda caso necessário.
    const correctDateValue = `${year}-${(Number(month) + 1).toString().padStart(2, '0')}-${day}`;

    setEndDate(correctDateValue);
  }

  return (
    <S.Container>
      <S.HeaderContainer>
        <div className="search-and-info">
          <div className="search-input">
            <Input
              name='search'
              type='text'
              placeholder='Buscar por nome, preço, produto...'
              value={search}
              onChange={handleSearchChange}
            />
          </div>

          <div className="max-results-input">
            <Input
              name='max-results'
              type='text'
              label='Máx. de produtos p/ pág.'
              small
              value={maxPerPage}
              onChange={handleMaxPerPageChange}
            />
          </div>

          <div className="tags">
            {transactionTags.map(transactionTag => (
              <Tag
                key={Math.random()}
                text={`${transactionTag.total} transaç${transactionTag.total > 1 ? 'ões' : 'ão'} ${transactionTag.status}`}
              />
            ))}
          </div>
        </div>

        <div className="filters">
          <div className="filter-group">
            <Input
              name='transaction-status'
              type="text"
              label='Status da Transação'
            />

            <Input
              name='payment-type'
              type="text"
              label='Tipo de Pagamento'
            />
          </div>

          <div className="filter-group">
            <Input
              name='start-date'
              type="date"
              label='Depois de'
              placeholder='dd/mm/aaaa'
              value={startDate}
              onChange={handleStartDateChange}
            />

            <Input
              name='end-date'
              type="date"
              label='Antes de'
              placeholder='dd/mm/aaaa'
              value={endDate}
              onChange={handleEndDateChange}
            />
          </div>
        </div>
      </S.HeaderContainer>
    </S.Container>
  );
};
