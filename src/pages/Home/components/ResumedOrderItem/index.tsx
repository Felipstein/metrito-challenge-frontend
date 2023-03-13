import React from 'react';

import { Text } from '../../../../components/Text';
import { CalendarIcon } from '../../../../icons/CalendarIcon';
import { TagStatus } from '../../../../components/TagStatus';
import { transactionStatusColor, transactionStatusLabel } from '../../../../types/TransactionStatus';
import { paymentTypeLabel } from '../../../../types/PaymentType';
import { formatCurrency } from '../../../../utils/FormatCurrency';

import { ResumedOrderItemProps } from './types';
import * as S from './styles';

export const ResumedOrderItem: React.FC<ResumedOrderItemProps> = ({ resumedOrderData }) => {
  return (
    <S.Container to={`/order/${resumedOrderData.identification.order_id}`}>
      <div className="main-infos">
        <Text className='data-source' size='lg'>
          {/* Tranforma o valor retornado de "EXEMPLO" para "Exemplo" */}
          {resumedOrderData.identification.data_source
            .toLowerCase()
            .replace(/^\w/, str => str.toUpperCase())
          }
        </Text>

        <Text className='transaction-title' size='xsm'>
          Transação
        </Text>

        <Text className='transaction-content'size='md'>
          {resumedOrderData.transaction.id}
        </Text>

        <Text className='date' size='xsm'>
          <CalendarIcon size={16} />
          {resumedOrderData.transaction.created_date}
        </Text>
      </div>

      <S.UserInfo>
        <Text className='user-info-title' size='xsm'>
          Produto
        </Text>

        {resumedOrderData.product ? (
          <Text className='user-info-content strong' size='lg'>
            {resumedOrderData.product.name}
          </Text>
        ) : (
          <S.NoInfoAbount>
            Nenhuma informação sobre Produto encontrada
          </S.NoInfoAbount>
        )}
      </S.UserInfo>

      <S.UserInfo>
        <Text className='user-info-title' size='xsm'>
          Produtor
        </Text>

        {resumedOrderData.producer ? (
          <Text className='user-info-content' size='md'>
            {resumedOrderData.producer.name}
          </Text>
        ) : (
          <S.NoInfoAbount>
            Nenhuma informação sobre o Produtor encontrada
          </S.NoInfoAbount>
        )}
      </S.UserInfo>

      <S.UserInfo>
        <Text className='user-info-title' size='xsm'>
          Cliente/comprador
        </Text>

        {resumedOrderData.customer ? (
          <Text className='user-info-content' size='md'>
            {resumedOrderData.customer.name}
          </Text>
        ) : (
          <S.NoInfoAbount>
            Nenhuma informação sobre o Cliente/comprador encontrada
          </S.NoInfoAbount>
        )}
      </S.UserInfo>

      <div className="payment-info">
        <div className="transaction-status">
          <TagStatus
            text={transactionStatusLabel[resumedOrderData.transaction.status]}
            color={transactionStatusColor[resumedOrderData.transaction.status]}
          />
        </div>

        <div className="payment-type-and-value">
          <Text size='lg'>
            {formatCurrency(resumedOrderData.transaction.value, resumedOrderData.transaction.currency_code)}
          </Text>

          <TagStatus
            text={paymentTypeLabel[resumedOrderData.transaction.payment_type]}
            color='cyan'
            small
          />
        </div>
      </div>
    </S.Container>
  );
};
