import React from 'react';

import { ResumedOrderItemProps } from './types';
import * as S from './styles';
import { Text } from '../../../../components/Text';
import { CalendarIcon } from '../../../../icons/CalendarIcon';

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

      <div className="simple product-info">

      </div>

      <div className="simple producer-info">

      </div>

      <div className="simple customer-info">

      </div>

      <div className="payment-info">

      </div>
    </S.Container>
  );
};
