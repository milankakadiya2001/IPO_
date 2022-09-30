import gql from "graphql-tag";
export const GET_COMPANY_DETAIL = gql`
query MyQuery {
  Mainline_company_detail_connection(where: {type: {_eq: "Mainline"}, status: {_eq: false}}) {
    edges {
      node {
        about_company
        allotment_link
        anchor_investors
        company_id
        company_img
        company_name
        company_type
        description
        e_date
        end_date
        expected_premium
        flag
        id
        live
        lot_size
        max_price
        min_price
        post_promoter
        pre_promoter
        s_date
        start_date
        status
        subscriber
        type
        year
        company_financials {
          company_id
          financials_id
          id
          key
          value1
          value2
          value3
        }
        company_promoters {
          company_id
          id
          # key
          promoter_id
          value
        }
        ipo_details {
          company_id
          id
          ipo_id
          key
          value
        }
        subscription_details {
          company_id
          id
          key
          sub_id
          value1
          value2
          value3
          value4
        }
        valuations {
          company_id
          id
          key
          valuation_id
          value
        }
      }
    }
  }
}
`;

export const GET_LISTED_COMPANY_DETAIL = gql`
  query MyQuery {
    Mainline_company_detail_connection(
      where: { type: { _eq: "Mainline" }, status: { _eq: true } }
    ) {
      edges {
        node {
          about_company
          company_id
          company_img
          company_name
          description
          e_date
          id
          lot_size
          max_price
          min_price
          s_date
          subscriber
          post_promoter
          pre_promoter
          anchor_investors
          flag
          allotment_link
          status
          company_promoters {
            company_id
            id
            # key
            promoter_id
            value
          }
          year
          company_financials {
            company_id
            financials_id
            id
            key
            value1
            value3
            value2
          }
          company_type
          end_date
          expected_premium
          ipo_details {
            company_id
            id
            ipo_id
            key
            value
          }
          start_date
          subscription_details {
            company_id
            id
            key
            sub_id
            value1
            value2
            value3
            value4
          }
          valuations {
            company_id
            id
            key
            valuation_id
            value
          }
        }
      }
    }
  }
`;

export const GET_NEWS_DETAIL = gql`
  query MyQuery {
    News_news_connection {
      edges {
        node {
          description
          id
          image
          news_id
          title
          url
        }
      }
    }
  }
`;

export const GET_OFFER_DETAIL = gql`
  query MyQuery {
    Offer_offer_connection {
      edges {
        node {
          description
          id
          link
          offer_id
          title
          url
        }
      }
    }
  }
`;

export const GET_SME_COMPANY_DETAIL = gql`
  query MyQuery {
    Mainline_company_detail_connection(
      where: { type: { _eq: "SME" }, status: { _eq: false } }
    ) {
      edges {
        node {
          about_company
          company_id
          company_img
          company_name
          description
          e_date
          id
          lot_size
          max_price
          min_price
          s_date
          subscriber
          post_promoter
          pre_promoter
          anchor_investors
          flag
          allotment_link
          status
          company_promoters {
            company_id
            id
            # key
            promoter_id
            value
          }
          year
          company_financials {
            company_id
            financials_id
            id
            key
            value1
            value3
            value2
          }
          company_type
          end_date
          expected_premium
          ipo_details {
            company_id
            id
            ipo_id
            key
            value
          }
          start_date
          subscription_details {
            company_id
            id
            key
            sub_id
            value1
            value2
            value3
            value4
          }
          valuations {
            company_id
            id
            key
            valuation_id
            value
          }
          type
        }
      }
    }
  }
`;

export const GET_SME_LISTED_COMPANY_DETAIL = gql`
  query MyQuery {
    Mainline_company_detail_connection(
      where: { type: { _eq: "SME" }, status: { _eq: true } }
    ) {
      edges {
        node {
          about_company
          company_id
          company_img
          company_name
          description
          e_date
          id
          lot_size
          max_price
          min_price
          s_date
          subscriber
          post_promoter
          pre_promoter
          anchor_investors
          flag
          allotment_link
          status
          live
          company_promoters {
            company_id
            id
            # key
            promoter_id
            value
          }
          year
          company_financials {
            company_id
            financials_id
            id
            key
            value1
            value3
            value2
          }
          company_type
          end_date
          expected_premium
          ipo_details {
            company_id
            id
            ipo_id
            key
            value
          }
          start_date
          subscription_details {
            company_id
            id
            key
            sub_id
            value1
            value2
            value3
            value4
          }
          valuations {
            company_id
            id
            key
            valuation_id
            value
          }
        }
      }
    }
  }
`;
