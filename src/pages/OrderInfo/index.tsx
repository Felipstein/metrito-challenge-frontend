import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FadeLoader } from 'react-spinners';
import { useTheme } from 'styled-components';
import { Button } from '../../components/Button';

import { Text } from '../../components/Text';
import { useFetchData } from '../../hooks/useFetchData';
import { SadIcon } from '../../icons/SadIcon';
import { Order } from '../../types/Order';
import { formatCurrency } from '../../utils/FormatCurrency';

import * as S from './styles';

export const OrderInfo: React.FC = () => {
  const theme = useTheme();
  const { orderId } = useParams();

  const { data: order, errorFeedback, isFetching } = useFetchData<Order>(`http://localhost:3333/v1/orders/${orderId}`);

  return (
    <S.Container>
      <Button asChild>
        <Link to='/'>
          Voltar para lista
        </Link>
      </Button>

      {isFetching && (
        <S.LoaderContainer>
          <Text>Carregando dados sobre o produto...</Text>
          <FadeLoader color={theme.anatomy.colors.orderInfoPage.mainTexts} />
        </S.LoaderContainer>
      )}

      {!isFetching && errorFeedback && (
        <S.ErrorContainer>
          <SadIcon size={48} />
          <Text>Falha ao carregar os dados do produto.</Text>
        </S.ErrorContainer>
      )}

      {!isFetching && !order && (
        <S.ErrorContainer>
          <SadIcon size={48} />
          <Text>Falha ao carregar os dados do produto.</Text>
        </S.ErrorContainer>
      )}

      {!isFetching && !errorFeedback && order && (
        <S.ContentContainer>
          <header>
            <div className="product-name">
              <Text size='sm'>Produto</Text>

              <h1>{order.product.bundles[0].name}</h1>
            </div>
          </header>

          <S.PanelContainer>
            <div className="line-infos">
              <div className="transaction-info">

              </div>

              <div className="order-block-info product">
                <Text className='order-block-info-title'>
                  Informações sobre o Produto
                </Text>

                <div className="datas">
                  <div className="data-info">
                    <Text size='xsm' className='order-info-data-title'>
                      Identificador:
                    </Text>

                    <Text size='sm' className='order-info-data-value'>
                      {order.product.bundles[0].id}
                    </Text>
                  </div>

                  <div className="data-info">
                    <Text size='xsm' className='order-info-data-title'>
                      Nome:
                    </Text>

                    <Text size='sm' className='order-info-data-value'>
                      {order.product.bundles[0].name}
                    </Text>
                  </div>

                  <div className="data-info">
                    <Text size='xsm' className='order-info-data-title'>
                      Quantidade:
                    </Text>

                    <Text size='sm' className='order-info-data-value'>
                      {order.product.bundles[0].quantity}
                    </Text>
                  </div>

                  <div className="data-info">
                    <Text size='xsm' className='order-info-data-title'>
                      Preço:
                    </Text>

                    <Text size='sm' className='order-info-data-value'>
                      {formatCurrency(order.transaction.value, order.transaction.currency_code)}
                    </Text>
                  </div>
                </div>
              </div>

              <div className="order-block-info producer">

                {order.producer ? (
                  <>
                    <Text className='order-block-info-title'>
                  Informações sobre o Produtor
                    </Text>

                    <div className="datas">
                      <div className="data-info">
                        <Text size='xsm' className='order-info-data-title'>
                      Nome:
                        </Text>

                        <Text size='sm' className='order-info-data-value'>
                          {order.producer?.name}
                        </Text>
                      </div>

                      <div className="data-info">
                        <Text size='xsm' className='order-info-data-title'>
                      Telefone:
                        </Text>

                        <Text size='sm' className='order-info-data-value'>
                          {order.producer?.tel}
                        </Text>
                      </div>

                      <div className="data-info">
                        <Text size='xsm' className='order-info-data-title'>
                      Documento:
                        </Text>

                        <Text size='sm' className='order-info-data-value'>
                          {order.producer?.document ? (
                            <>
                              {order.producer?.document.type} - {order.producer?.document.value}
                            </>
                          ) : (
                            <S.NoDocumentInfo>
                          Sem informações sobre documentos
                            </S.NoDocumentInfo>
                          )}
                        </Text>
                      </div>
                    </div>
                  </>
                ) : (
                  <S.NoUserInfo>
                    Sem informações sobre o produtor
                  </S.NoUserInfo>
                )}

              </div>

              <div className="order-block-info customer">

                {order.customer ? (
                  <>
                    <Text className='order-block-info-title'>
                  Informações sobre o Cliente/comprador
                    </Text>

                    <div className="datas">
                      <div className="data-info">
                        <Text size='xsm' className='order-info-data-title'>
                      Nome:
                        </Text>

                        <Text size='sm' className='order-info-data-value'>
                          {order.customer?.name}
                        </Text>
                      </div>

                      <div className="data-info">
                        <Text size='xsm' className='order-info-data-title'>
                      Telefone:
                        </Text>

                        <Text size='sm' className='order-info-data-value'>
                          {order.customer?.telephone}
                        </Text>
                      </div>

                      <div className="data-info">
                        <Text size='xsm' className='order-info-data-title'>
                      Identificador:
                        </Text>

                        <Text size='sm' className='order-info-data-value'>
                          {order.customer?.id}
                        </Text>
                      </div>

                      <div className="data-info">
                        <Text size='xsm' className='order-info-data-title'>
                      E-mail:
                        </Text>

                        <Text size='sm' className='order-info-data-value'>
                          {order.customer?.email}
                        </Text>
                      </div>

                      <div className="data-info">
                        <Text size='xsm' className='order-info-data-title'>
                      Documento:
                        </Text>

                        <Text size='sm' className='order-info-data-value'>
                          {order.customer?.document ? (
                            <>
                              {order.customer?.document.type} - {order.customer?.document.value}
                            </>
                          ) : (
                            <S.NoDocumentInfo>
                          Sem informações sobre documentos
                            </S.NoDocumentInfo>
                          )}
                        </Text>
                      </div>
                    </div>
                  </>
                ) : (
                  <S.NoUserInfo>
                    Sem informações sobre o Cliente/comprador
                  </S.NoUserInfo>
                )}

              </div>
            </div>

            <div className="line-infos">
              <div className="order-block-info commissions">
                <Text className='order-block-info-title'>
                  Comissões
                </Text>

              </div>

              <div className="order-block-info commissions">
                <Text className='order-block-info-title'>
                  Comissões de co-produtores
                </Text>

              </div>
            </div>
          </S.PanelContainer>
        </S.ContentContainer>
      )}

    </S.Container>
  );
};
