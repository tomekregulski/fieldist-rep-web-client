const formData = {
  Simmer: [
    {
      type: 'select',
      question: 'Was this a good day to be at this store?',
      choices: ['yes', 'no'],
    },
    {
      type: 'select',
      question: 'Were you able to connect with a team member?',
      choices: ['yes', 'no'],
    },
    {
      type: 'checkbox',
      question: 'Which of the following were you able to complete?',
      choices: [
        'neaten shelf',
        'shelf photo',
        'coupons on product',
        'ask about secondary placement',
      ],
    },
    {
      type: 'select',
      question: 'Is this store open to secondary placement?',
      choices: ['yes', 'no', 'N/A - was not able to speak to anyone'],
    },
  ],
  Saso: [
    {
      type: 'select',
      question: 'Was this a good day to be at this store?',
      choices: ['yes', 'no'],
    },
    {
      type: 'select',
      question: 'Were you able to connect with a team member?',
      choices: ['yes', 'no'],
    },
    {
      type: 'checkbox',
      question: 'Which of the following were you able to complete?',
      choices: ['neaten shelf', 'shelf photo', 'coupons on product'],
    },
  ],
  brands: ['Simmer', 'Saso'],
  products: [
    {
      name: 'Simmer',
      products: ['classic', 'garlic', 'basil'],
    },
    {
      name: 'Saso',
      products: ['roja', 'verde'],
    },
  ],
};

export default formData;
