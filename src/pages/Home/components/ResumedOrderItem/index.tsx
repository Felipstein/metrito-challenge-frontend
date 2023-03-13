import React from 'react';

import { ResumedOrderItemProps } from './types';
import * as S from './styles';
import { Text } from '../../../../components/Text';
import { CalendarIcon } from '../../../../icons/CalendarIcon';
import { TagStatus } from '../../../../components/TagStatus';
import { transactionStatusColor, transactionStatusLabel } from '../../../../types/TransactionStatus';
import { paymentTypeLabel } from '../../../../types/PaymentType';

export const ResumedOrderItem: React.FC<ResumedOrderItemProps> = ({ resumedOrderData }) => {
  return (
    <S.Container>
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

      <div className="block-info">
        <Text className='title' size='xsm'>
          Produto
        </Text>

        <Text className='content strong' size='lg'>
          {resumedOrderData.product?.name}
        </Text>
      </div>

      <div className="block-info">
        <Text className='title' size='xsm'>
          Produtor
        </Text>

        <Text className='content' size='md'>
          {resumedOrderData.producer?.name}
        </Text>
      </div>

      <div className="block-info">
        <Text className='title' size='xsm'>
          Cliente/comprador
        </Text>

        <Text className='content' size='md'>
          {resumedOrderData.customer?.name}
        </Text>
      </div>

      <div className="payment-info">
        <div className="transaction-status">
          <TagStatus
            text={transactionStatusLabel[resumedOrderData.transaction.status]}
            color={transactionStatusColor[resumedOrderData.transaction.status]}
          />
        </div>

        <div className="payment-info">
          <Text size='lg'>
            {resumedOrderData.transaction.currency_code}
            {resumedOrderData.transaction.value}
          </Text>

          <TagStatus
            text={paymentTypeLabel[resumedOrderData.transaction.payment_type]}
            color='cyan'
          />
        </div>
      </div>
    </S.Container>
  );
};
