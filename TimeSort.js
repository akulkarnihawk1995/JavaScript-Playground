let data = {
  transactionQueue: [
    {
      payer: 'D2',
      points: 200,
      time: '2/1/2021, 11:10:23 AM'
    },
    {
      payer: 'D1',
      points: 200,
      time: '2/1/2021, 11:03:23 AM'
    },
    {
      payer: 'D',
      points: 200,
      time: '2/1/2021, 11:05:23 AM'
    },
    {
      payer: 'D',
      points: 200,
      time: '2/1/2021, 11:05:23 AM'
    },
  ]
}

transactionQueue = data.transactionQueue.sort(function (a, b) {
    return a.timestamp.localeCompare(b.timestamp);
});
