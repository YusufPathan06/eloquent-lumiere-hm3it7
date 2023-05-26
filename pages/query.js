import { gql } from "@apollo/client";

export const GET_USER = gql`
  query {
    accounts {
      id
      name
      banks {
        ifsc
        meta {
          name
          branch
          city
        }
      }
    }
  }
`;

// weather {
//             current {
//               temperature
//               comment
//             }
//             tomorrow {
//               min
//               max
//             }
//           }