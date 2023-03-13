import React, { useState } from 'react';
import { Input } from '../../components/Input';
import { Tag } from '../../components/Tag';
import { TransactionTag } from '../../types/TransactionTag';
import { StringUtils } from '../../utils/StringUtils';

import * as S from './styles';

export const Home: React.FC = () => {
  const [search, setSearch] = useState('');
  const [maxPerPage, setMaxPerPage] = useState(25);

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
              type="text"
              label='Depois de'
              placeholder='dd/mm/aaaa'
            />

            <Input
              name='end-date'
              type="text"
              label='Antes de'
              placeholder='dd/mm/aaaa'
            />
          </div>
        </div>
      </S.HeaderContainer>
    </S.Container>
  );
};
