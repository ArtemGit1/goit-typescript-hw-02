/*
  Створіть новий тип даних, який підходить для цих двох об'єктів.
*/

const page1: {
  title: string;
  likes: number;
  accounts: string[];
  status: string;
  details?: {
    createAt: Date;
    updateAt: Date;
  }
} = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  }
}

const page2: {
  title: string;
  likes: number;
  accounts: string[];
  status: string;
  details?: {
    createAt: Date;
    updateAt: Date;
  }
} = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}
export {};