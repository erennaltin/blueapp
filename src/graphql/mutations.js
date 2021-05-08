import gql from 'graphql-tag'
export const LOGIN_USER = gql`
mutation tokenAuth ($username: String!, $password: String!){
  tokenAuth(username: $username, password: $password) {
    token
    success
    errors
  }
}
`
// export const REGISTER_USER = gql`
// mutation createUser($name: String! $email: String! $password: String! ) {
//     createUser( name: $name, email: $email, password: $password) {
//       token
//     }
// }
// `

export const CHECK_USER = gql`query checkUser {
    me {
        username
    }
}`