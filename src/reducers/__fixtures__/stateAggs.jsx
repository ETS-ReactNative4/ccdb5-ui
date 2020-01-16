export default {
  foo: {},
  issue: {
    doc_count: 1000,
    issue: {
      buckets: [
        { key: 'alpha', doc_count: 600 },
        { key: 'bar', doc_count: 150 },
        { key: 'car', doc_count: 125 },
        { key: 'delta', doc_count: 75 },
        { key: 'elephant', doc_count: 50 }
      ]
    }
  },
  product: {
    doc_count: 1000,
    product: {
      doc_count_error_upper_bound: 0,
      sum_other_doc_count: 0,
      buckets: [
        { key: 'foo', doc_count: 600 },
        { key: 'goo', doc_count: 150 },
        { key: 'hi', doc_count: 125 },
        { key: 'indigo', doc_count: 75 },
        { key: 'joker', doc_count: 50 }
      ]
    }
  },
  state: {
    doc_count: 469472,
    state: {
      buckets: [
        { key: 'CA', doc_count: 62519, product: { buckets: [ { key: 'fo prod', doc_count: 100 }] }, issue: { buckets: [ { key: 'issue o', doc_count: 100 }] } },
        { key: 'FL', doc_count: 47358, product: { buckets: [ { key: 'fo', doc_count: 100 }] }, issue: { buckets: [ { key: 'issue o', doc_count: 100 }] } },
        { key: 'TX', doc_count: 44469, product: { buckets: [ { key: 'fo rod', doc_count: 100 }] }, issue: { buckets: [ { key: 'issue o', doc_count: 100 }] } },
        { key: 'GA', doc_count: 28395, product: { buckets: [ { key: 'fo prod', doc_count: 100 }] }, issue: { buckets: [ { key: 'issue o', doc_count: 100 }] } },
        { key: 'NY', doc_count: 26846, product: { buckets: [ { key: 'fo prod', doc_count: 100 }] }, issue: { buckets: [ { key: 'issue o', doc_count: 100 }] } },
        { key: 'IL', doc_count: 18172, product: { buckets: [ { key: 'fo prd', doc_count: 100 }] }, issue: { buckets: [ { key: 'issue o', doc_count: 100 }] } },
        { key: 'PA', doc_count: 16054, product: { buckets: [ { key: 'fo prod', doc_count: 100 }] }, issue: { buckets: [ { key: 'issue o', doc_count: 100 }] } },
        { key: 'NC', doc_count: 15217, product: { buckets: [ { key: 'fo prod', doc_count: 100 }] }, issue: { buckets: [ { key: 'issue o', doc_count: 100 }] } },
        { key: 'NJ', doc_count: 15130, product: { buckets: [ { key: 'fo prod', doc_count: 100 }] }, issue: { buckets: [ { key: 'issue o', doc_count: 100 }] } },
        { key: 'OH', doc_count: 14365, product: { buckets: [ { key: 'fo prod', doc_count: 100 }] }, issue: { buckets: [ { key: 'issue o', doc_count: 100 }] } },
        { key: 'VA', doc_count: 12901, product: { buckets: [ { key: 'fo prod', doc_count: 100 }] }, issue: { buckets: [ { key: 'issue o', doc_count: 100 }] } },
        { key: 'MD', doc_count: 12231, product: { buckets: [ { key: 'fo prod', doc_count: 100 }] }, issue: { buckets: [ { key: 'issue o', doc_count: 100 }] } },
        { key: 'MI', doc_count: 10472, product: { buckets: [ { key: 'fo prod', doc_count: 100 }] }, issue: { buckets: [ { key: 'issue o', doc_count: 100 }] } },
        { key: 'AZ', doc_count: 10372, product: { buckets: [ { key: 'fo prod', doc_count: 100 }] }, issue: { buckets: [ { key: 'issue o', doc_count: 100 }] } },
        { key: 'TN', doc_count: 9011, product: { buckets: [ { key: 'fo prod', doc_count: 100 }] }, issue: { buckets: [ { key: 'issue o', doc_count: 100 }] } },
        { key: 'WA', doc_count: 8542, product: { buckets: [ { key: 'fo prod', doc_count: 100 }] }, issue: { buckets: [ { key: 'issue o', doc_count: 100 }] } },
        { key: 'MA', doc_count: 8254, product: { buckets: [ { key: 'fo prod', doc_count: 100 }] }, issue: { buckets: [ { key: 'issue o', doc_count: 100 }] } },
        { key: 'MO', doc_count: 7832, product: { buckets: [ { key: 'fo prod', doc_count: 100 }] }, issue: { buckets: [ { key: 'issue o', doc_count: 100 }] } },
        { key: 'SC', doc_count: 7496, product: { buckets: [ { key: 'fo prod', doc_count: 100 }] }, issue: { buckets: [ { key: 'issue o', doc_count: 100 }] } },
        { key: 'CO', doc_count: 7461, product: { buckets: [ { key: 'fo prod', doc_count: 100 }] }, issue: { buckets: [ { key: 'issue o', doc_count: 100 }] } },
        { key: 'NV', doc_count: 7095, product: { buckets: [ { key: 'fo prod', doc_count: 100 }] }, issue: { buckets: [ { key: 'issue o', doc_count: 100 }] } },
        { key: 'LA', doc_count: 6369, product: { buckets: [ { key: 'fo prod', doc_count: 100 }] }, issue: { buckets: [ { key: 'issue o', doc_count: 100 }] } },
        { key: 'AL', doc_count: 6178, product: { buckets: [ { key: 'fo prod', doc_count: 100 }] }, issue: { buckets: [ { key: 'issue o', doc_count: 100 }] } },
        { key: 'IN', doc_count: 5659, product: { buckets: [ { key: 'fo prod', doc_count: 100 }] }, issue: { buckets: [ { key: 'issue o', doc_count: 100 }] } },
        { key: 'MN', doc_count: 4957, product: { buckets: [ { key: 'fo prod', doc_count: 100 }] }, issue: { buckets: [ { key: 'issue o', doc_count: 100 }] } },
        { key: 'CT', doc_count: 4685, product: { buckets: [ { key: 'fo prod', doc_count: 100 }] }, issue: { buckets: [ { key: 'issue o', doc_count: 100 }] } },
        { key: 'WI', doc_count: 4443, product: { buckets: [ { key: 'fo prod', doc_count: 100 }] }, issue: { buckets: [ { key: 'issue o', doc_count: 100 }] } },
        { key: 'OR', doc_count: 4261, product: { buckets: [ { key: 'fo prod', doc_count: 100 }] }, issue: { buckets: [ { key: 'issue o', doc_count: 100 }] } },
        { key: 'UT', doc_count: 3693, product: { buckets: [ { key: 'fo prod', doc_count: 100 }] }, issue: { buckets: [ { key: 'issue o', doc_count: 100 }] } },
        { key: 'KY', doc_count: 3392, product: { buckets: [ { key: 'fo prod', doc_count: 100 }] }, issue: { buckets: [ { key: 'issue o', doc_count: 100 }] } },
        { key: 'MS', doc_count: 3237, product: { buckets: [ { key: 'fo prod', doc_count: 100 }] }, issue: { buckets: [ { key: 'issue o', doc_count: 100 }] } },
        { key: 'OK', doc_count: 2989, product: { buckets: [ { key: 'fo prod', doc_count: 100 }] }, issue: { buckets: [ { key: 'issue o', doc_count: 100 }] } },
        { key: 'AR', doc_count: 2691, product: { buckets: [ { key: 'fo prod', doc_count: 100 }] }, issue: { buckets: [ { key: 'issue o', doc_count: 100 }] } },
        { key: 'DC', doc_count: 2493, product: { buckets: [ { key: 'fo prod', doc_count: 100 }] }, issue: { buckets: [ { key: 'issue o', doc_count: 100 }] } },
        { key: 'KS', doc_count: 2307, product: { buckets: [ { key: 'fo prod', doc_count: 100 }] }, issue: { buckets: [ { key: 'issue o', doc_count: 100 }] } },
        { key: 'NM', doc_count: 2176, product: { buckets: [ { key: 'fo prod', doc_count: 100 }] }, issue: { buckets: [ { key: 'issue o', doc_count: 100 }] } },
        { key: 'DE', doc_count: 2160, product: { buckets: [ { key: 'fo prod', doc_count: 100 }] }, issue: { buckets: [ { key: 'issue o', doc_count: 100 }] } },
        { key: '', doc_count: 1824, product: { buckets: [ { key: 'fo prod', doc_count: 100 }] }, issue: { buckets: [ { key: 'issue o', doc_count: 100 }] } },
        { key: 'IA', doc_count: 1751, product: { buckets: [ { key: 'fo prod', doc_count: 100 }] }, issue: { buckets: [ { key: 'issue o', doc_count: 100 }] } },
        // NOTE: Hawaii intentionally left out to test patching of data
        // { key: 'HI', doc_count: 1552, product: { buckets: [ { key: 'fo prod', doc_count: 100 }] }, issue: { buckets: [ { key: 'issue o', doc_count: 100 }] } },
        { key: 'ID', doc_count: 1436, product: { buckets: [ { key: 'fo prod', doc_count: 100 }] }, issue: { buckets: [ { key: 'issue o', doc_count: 100 }] } },
        { key: 'NH', doc_count: 1408, product: { buckets: [ { key: 'fo prod', doc_count: 100 }] }, issue: { buckets: [ { key: 'issue o', doc_count: 100 }] } },
        { key: 'NE', doc_count: 1343, product: { buckets: [ { key: 'fo prod', doc_count: 100 }] }, issue: { buckets: [ { key: 'issue o', doc_count: 100 }] } },
        { key: 'RI', doc_count: 1166, product: { buckets: [ { key: 'fo prod', doc_count: 100 }] }, issue: { buckets: [ { key: 'issue o', doc_count: 100 }] } },
        { key: 'ME', doc_count: 1155, product: { buckets: [ { key: 'fo prod', doc_count: 100 }] }, issue: { buckets: [ { key: 'issue o', doc_count: 100 }] } },
        { key: 'WV', doc_count: 1075, product: { buckets: [ { key: 'fo prod', doc_count: 100 }] }, issue: { buckets: [ { key: 'issue o', doc_count: 100 }] } },
        { key: 'PR', doc_count: 909, product: { buckets: [ { key: 'fo prod', doc_count: 100 }] }, issue: { buckets: [ { key: 'issue o', doc_count: 100 }] } },
        { key: 'MT', doc_count: 788, product: { buckets: [ { key: 'fo prod', doc_count: 100 }] }, issue: { buckets: [ { key: 'issue o', doc_count: 100 }] } },
        { key: 'ND', doc_count: 637, product: { buckets: [ { key: 'fo prod', doc_count: 100 }] }, issue: { buckets: [ { key: 'issue o', doc_count: 100 }] } },
        { key: 'SD', doc_count: 535, product: { buckets: [ { key: 'fo prod', doc_count: 100 }] }, issue: { buckets: [ { key: 'issue o', doc_count: 100 }] } },
        { key: 'AK', doc_count: 524, product: { buckets: [ { key: 'fo prod', doc_count: 100 }] }, issue: { buckets: [ { key: 'issue o', doc_count: 100 }] } },
        { key: 'WY', doc_count: 450, product: { buckets: [ { key: 'fo prod', doc_count: 100 }] }, issue: { buckets: [ { key: 'issue o', doc_count: 100 }] } },
        { key: 'VT', doc_count: 446, product: { buckets: [ { key: 'fo prod', doc_count: 100 }] }, issue: { buckets: [ { key: 'issue o', doc_count: 100 }] } },
        { key: 'AE', doc_count: 194, product: { buckets: [ { key: 'fo prod', doc_count: 100 }] }, issue: { buckets: [ { key: 'issue o', doc_count: 100 }] } },
        { key: 'AP', doc_count: 153, product: { buckets: [ { key: 'fo prod', doc_count: 100 }] }, issue: { buckets: [ { key: 'issue o', doc_count: 100 }] } },
        { key: 'GU', doc_count: 85, product: { buckets: [ { key: 'fo prod', doc_count: 100 }] }, issue: { buckets: [ { key: 'issue o', doc_count: 100 }] } },
        { key: 'FM', doc_count: 54, product: { buckets: [ { key: 'fo prod', doc_count: 100 }] }, issue: { buckets: [ { key: 'issue o', doc_count: 100 }] } },
        { key: 'VI', doc_count: 51, product: { buckets: [ { key: 'fo prod', doc_count: 100 }] }, issue: { buckets: [ { key: 'issue o', doc_count: 100 }] } },
        { key: 'UNITED STATES MINOR OUTLYING ISLANDS', doc_count: 28, product: { buckets: [ { key: 'fo prod', doc_count: 100 }] }, issue: { buckets: [ { key: 'issue o', doc_count: 100 }] } },
        { key: 'AA', doc_count: 9, product: { buckets: [ { key: 'fo prod', doc_count: 100 }] }, issue: { buckets: [ { key: 'issue o', doc_count: 100 }] } },
        { key: 'MP', doc_count: 7, product: { buckets: [ { key: 'fo prod', doc_count: 100 }] }, issue: { buckets: [ { key: 'issue o', doc_count: 100 }] } },
        { key: 'AS', doc_count: 6, product: { buckets: [ { key: 'fo prod', doc_count: 100 }] }, issue: { buckets: [ { key: 'issue o', doc_count: 100 }] } },
        { key: 'MH', doc_count: 3, product: { buckets: [ { key: 'fo prod', doc_count: 100 }] }, issue: { buckets: [ { key: 'issue o', doc_count: 100 }] } },
        { key: 'PW', doc_count: 1, product: { buckets: [ { key: 'fo prod', doc_count: 100 }] }, issue: { buckets: [ { key: 'issue o', doc_count: 100 }] } },
      ]
    }
  }
}
