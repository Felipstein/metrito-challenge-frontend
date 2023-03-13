import React from 'react';

import { ResumedOrderItemProps } from './types';
import * as S from './styles';

export const ResumedOrderItem: React.FC<ResumedOrderItemProps> = ({ resumedOrderData }) => {
  return (
    <S.Container>
      <div className="main-infos">

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
