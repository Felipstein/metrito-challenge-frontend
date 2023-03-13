import React, { useEffect, useMemo, useState } from 'react';
import { Input } from '../../components/Input';
import { SelectInput } from '../../components/SelectInput';
import { Tag } from '../../components/Tag';
import { ResumedOrder } from '../../types/ResumedOrder';
import { ResumedOrdersResonse } from '../../types/ResumedOrdersResponse';
import { TransactionStatus } from '../../types/TransactionStatus';
import { TransactionTag } from '../../types/TransactionTag';
import { StringUtils } from '../../utils/StringUtils';
import { ResumedOrderItem } from './components/ResumedOrderItem';

import * as S from './styles';

export const Home: React.FC = () => {
  const [search, setSearch] = useState('');
  const [maxPerPage, setMaxPerPage] = useState(25);
  const [startDate, setStartDate] = useState('2021-04-01');
  const [endDate, setEndDate] = useState('2021-05-30');

  const [resumedOrders, setResumedOrders] = useState<ResumedOrder[]>([]);

  // Atualiza as tags de transações conforme os pedidos forem atualizando também.
  const transactionTags = useMemo<TransactionTag[]>(() => {

    const transactionsStatusTotal = new Map<TransactionStatus, number>();

    // Percorre pedido por pedido para popular o total de cada status de transação
    resumedOrders.forEach((resumedOrder) => {
      const status = resumedOrder.transaction.status as TransactionStatus;

      // Verifica se já possui uma quantidade de transações de tal status. Caso não tiver, comece com 1, e caso tiver, acrescente + 1.
      const total = transactionsStatusTotal.get(status) === undefined ? 1 : transactionsStatusTotal.get(status)! + 1;

      transactionsStatusTotal.set(status, total);
    });

    // Transforma o Map de STATUS: TOTAL em uma lista de TransactionTag
    const transactionTags: TransactionTag[] = [];

    transactionsStatusTotal.forEach((key, value) => {
      transactionTags.push({ total: key, status: value });
    });

    return transactionTags;
  }, [resumedOrders]);

  useEffect(() => {
    async function fetchData() {

      const responseData = await fetch(`http://localhost:3333/v1/orders?start_date=${startDate}&end_date=${endDate}`);

      const response = await responseData.json() as ResumedOrdersResonse;

      console.log(response);

      setResumedOrders(response.data);

    }

    fetchData();

  }, []);

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
            <SelectInput
              name='transaction-status'
              label='Status da Transação'
            >
              <option>Todos</option>
              <option>2</option>
              <option>3</option>
            </SelectInput>

            <SelectInput
              name='payment-type'
              label='Tipo de Pagamento'
            >
              <option>Teste</option>
              <option>2</option>
              <option>3</option>
            </SelectInput>
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

      <S.ResumedOrderItensContainer>
        <S.ResumedOrderItensList>
          {resumedOrders.map(resumedOrder => (
            <ResumedOrderItem
              key={resumedOrder.identification.order_id}
              resumedOrderData={resumedOrder}
            />
          ))}
        </S.ResumedOrderItensList>
      </S.ResumedOrderItensContainer>

      <S.FooterContainer>
        <div className="pagination-info">
          <div className="products-info">
            <span>
              Exibindo <strong>{resumedOrders.length}</strong> produtos.
            </span>
          </div>

          <div className="pages-info">
            <span>
              Página <strong>1</strong> de <strong>4</strong>.
            </span>
          </div>
        </div>

        <div className="pagination-actions">
          <button
            type='button'
          >
            {'<'}
          </button>

          <button
            type='button'
          >
            {'>'}
          </button>
        </div>
      </S.FooterContainer>
    </S.Container>
  );
};
