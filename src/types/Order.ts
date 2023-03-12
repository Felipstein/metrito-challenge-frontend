export interface Order {
  identification: {
    data_source: string;
    order_id: string;
  };
  transaction: {
    status: string;
    created_date: string;
    updated_date: string;
    value: number;
    currency_code: string;
    discount_value: string | null;
    freight: string | null;
    freight_type: string | null;
    payment_type: string;
    payment_card_brand: string | null;
    payment_line: string | null;
    payment_bar_code: string | null;
    payment_url: string | null;
    billet_url: string | null;
    pix_qrcode: string | null;
    pix_emv: string | null;
    pix_ref: string | null;
    pix_expiration_date: string | null;
    pix_creation_date: string | null;
    pix_url: string | null;
    is_upsell: string | null;
  };
  product: {
    bundles: [
      {
        id: string | null;
        name: string | null;
        quantity: number | null;
        price: number | null;
        products: [
          {
            id: string;
            name: string;
            quantity: number;
            price: number;
          }
        ] | null;
      }
    ];
  };
  producer: {
    name: string;
    document: {
      value: string;
      type: string;
    };
    tel: string;
  } | null;
  customer: {
    id: string;
    name: string;
    email: string;
    telephone: string;
    document: {
      value: string;
      type: string;
    };
  } | null;
  commission: {
    commissions_list: [
      {
        source: string;
        value: number;
        currency_code: string;
        user: {
          name: string;
          email: string;
          ucode: string;
        };
      }
    ];
    co_production_commission: [
      {
        source: string;
        value: number;
        currency_code: string;
        user: {
          name: string;
          email: string;
          ucode: string;
        };
      }
    ];
  };
  metadata: {
    affiliate_id: string | null;
    utm_source: string | null;
    utm_medium: string | null;
    utm_campaign: string | null;
  };
}
