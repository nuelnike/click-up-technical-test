export const testCases = () => [{
  "repoName": "Valid click-up test",
  "repoDesc": "this is a simple demo test script.",
  "testTyp": "positive",
  "testCase": "Valid new repository creation"
},{
  "repoName": null,
  "repoDesc": "this ia a simple demo test script.",
  "testTyp": "negative",
  "testCase": "Inalid new repository creation with empty repo name."
},{
  "repoName": "click-up test",
  "repoDesc": null,
  "testTyp": "negative",
  "testCase": "Inalid new repository creation with empty repo description."
},{
  "repoName": null,
  "repoDesc": null,
  "testTyp": "neagtive",
  "testCase": "Inalid new repository creation with empty repo name & description."
}]
