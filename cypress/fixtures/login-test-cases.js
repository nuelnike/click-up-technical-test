export const testCases = () => [{
  "username": "valid-username",
  "password": "valid-password",
  "testTyp": "positive",
  "testCase": "Valid User Login."
},
{
  "username": "invalid-username",
  "password": "valid-password",
  "testTyp": "negative",
  "testCase": "Inalid User Login with invalid username"
},
{
  "username": "valid-username",
  "password": "invalid-password",
  "testTyp": "negative",
  "testCase": "Inalid User Login with invalid password"
},
{
  "username": "inactive-username",
  "password": "inactive-password",
  "testTyp": "negative",
  "testCase": "User Login with inactive account"
},
{
  "username": null,
  "password": null,
  "testTyp": "negative",
  "testCase": "User Login with empty user details"
}]
