import React, { useState } from 'react';
import { Input } from '../../components/Input';
import { Tag } from '../../components/Tag';
import { TransactionTag } from '../../types/TransactionTag';

import * as S from './styles';

export const Home: React.FC = () => {
  const [transactionTags, setTransactionTags] = useState<TransactionTag[]>([
    { total: 25, status: 'APROVADA' },
    { total: 5, status: 'NEGADA' },
    { total: 1, status: 'BLOQUEADA' }
  ]);

  return (
    <S.Container>
      <S.HeaderContainer>
        <div className="search-and-info">
          <div className="search-input">
            <Input
              name='search'
              type='text'
              placeholder='Buscar por nome, preço, produto...'
            />
          </div>

          <div className="max-results-input">
            <Input
              name='max-results'
              type='number'
              label='Máx. de produtos p/ pág.'
              small
              min={0}
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
