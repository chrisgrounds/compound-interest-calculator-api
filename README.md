# compound-interest-calculator-api

![Node.js CI](https://github.com/chrisgrounds/compound-interest-calculator-api/workflows/Node.js%20CI/badge.svg)

A serverless compound interest API on AWS Lambda.

Visit:

https://3jvichlsm2.execute-api.eu-west-2.amazonaws.com/dev/calculate/api?principal=100&interestRate=0.15&monthlyAmount=400&termLength=10

Example output:

```json
{
  "value": 111906.93,
  "history": [
    {
      "year": 1,
      "value": 100
    },
    {
      "year": 2,
      "value": 5324.52
    },
    {
      "year": 3,
      "value": 11388.91
    },
    {
      "year": 4,
      "value": 18428.17
    },
    {
      "year": 5,
      "value": 26599.03
    },
    {
      "year": 6,
      "value": 36083.39
    },
    {
      "year": 7,
      "value": 47092.41
    },
    {
      "year": 8,
      "value": 59871.17
    },
    {
      "year": 9,
      "value": 74704.18
    }
  ],
  "input": {
    "principal": 100,
    "monthlyAmount": 400,
    "interestRate": 0.15,
    "termLength": 10
  }
}
```
