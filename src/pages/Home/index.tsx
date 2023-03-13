import React, { useMemo, useState } from 'react';
import FadeLoader from 'react-spinners/FadeLoader';
import { useTheme } from 'styled-components';

import { Input } from '../../components/Input';
import { Tag } from '../../components/Tag';
import { Text } from '../../components/Text';
import { useFetchData } from '../../hooks/useFetchData';
import { CactusIcon } from '../../icons/CactusIcon';
import { SadIcon } from '../../icons/SadIcon';
import { ResumedOrdersResponse } from '../../types/ResumedOrdersResponse';
import { TransactionStatus, transactionStatusLabel } from '../../types/TransactionStatus';
import { TransactionTag } from '../../types/TransactionTag';

import { ResumedOrderItem } from './components/ResumedOrderItem';

import * as S from './styles';

export const Home: React.FC = () => {
  const theme = useTheme();

  const [search, setSearch] = useState('');
  const [startDate, setStartDate] = useState('2021-04-01');
  const [endDate, setEndDate] = useState('2021-05-30');

  const { data, errorFeedback, isFetching } = useFetchData<ResumedOrdersResponse>(`http://localhost:3333/v1/orders?start_date=${startDate}&end_date=${endDate}`);

  const resumedOrders = useMemo(() => data?.data, [data]);

  const resumedOrdersFiltered = useMemo(() => {
    if(!resumedOrders) {
      return [];
    }

    if(!search) {
      return resumedOrders;
    }

    return resumedOrders.filter(resumedOrder => resumedOrder.product?.name.toLowerCase().includes(search.toLowerCase()));
  }, [search, resumedOrders]);

  // Atualiza as tags de transações conforme os pedidos forem atualizando também.
  const transactionTags = useMemo<TransactionTag[]>(() => {

    if(!resumedOrders) {
      return [];
    }

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
      transactionTags.push({ total: key, status: transactionStatusLabel[value] });
    });

    return transactionTags;
  }, [resumedOrders]);

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;

    setSearch(value);
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
              placeholder='Buscar por nome de produto...'
              value={search}
              onChange={handleSearchChange}
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
              name='start-date'
              type="date"
              label='Depois de'
              placeholder='dd/mm/aaaa'
              value={startDate}
              onChange={handleStartDateChange}
              disabled
            />

            <Input
              name='end-date'
              type="date"
              label='Antes de'
              placeholder='dd/mm/aaaa'
              value={endDate}
              onChange={handleEndDateChange}
              disabled
            />
          </div>
        </div>
      </S.HeaderContainer>

      {!isFetching && errorFeedback && (
        <S.FailedToFetch>
          <SadIcon size={48} />
          <Text>
            Ocorreu um erro enquanto buscavamos informações sobre os pedidos...
          </Text>
        </S.FailedToFetch>
      )}

      {isFetching && (
        <div className="content-loader">
          <Text className='loading-feedback'>Buscando Pedidos...</Text>
          <FadeLoader color={theme.anatomy.colors.homePage.mainTexts} />
        </div>
      )}

      {!isFetching && !errorFeedback && resumedOrdersFiltered && resumedOrdersFiltered.length > 0 && (
        <S.ResumedOrderItensContainer>
          <S.ResumedOrderItensList>
            {resumedOrdersFiltered.map(resumedOrder => (
              <ResumedOrderItem
                key={resumedOrder.identification.order_id}
                resumedOrderData={resumedOrder}
              />
            ))}
          </S.ResumedOrderItensList>
        </S.ResumedOrderItensContainer>
      )}

      {!isFetching && !errorFeedback && resumedOrdersFiltered && resumedOrdersFiltered.length === 0 && (
        <S.EmptyList>
          <CactusIcon size={48} />
          <Text>
            Nenhum pedido encontrado...
          </Text>
        </S.EmptyList>
      )}

      <S.FooterContainer>
        {!isFetching && !errorFeedback && resumedOrdersFiltered && resumedOrdersFiltered.length > 0 && (
          <>
            <div className="pagination-info">
              <div className="products-info">
                <span>
                  Exibindo <strong>{resumedOrdersFiltered.length}</strong> produtos.
                </span>
              </div>
            </div>
          </>
        )}
      </S.FooterContainer>
    </S.Container>
  );
};
