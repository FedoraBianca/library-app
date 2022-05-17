import { IBook } from '../interfaces/book';
import { IOrder } from '../interfaces/order';
import moment from 'moment';

const generateId = (length: number): string => {
  let result = '';

  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};

let mockBookList: IBook[] = [
    {
      'ISBN': '978-606-913-439-9',
      'title': 'Principles',
      'borrowPrice': 60,
      'availableItems': 0,
      'totalItems': 9,
    },
    {
      'ISBN': '9783897218765',
      'title': 'JavaScript: The Good Parts',
      'borrowPrice': 70,
      'availableItems': 15,
      'totalItems': 15,
    },
    {
      'ISBN': '978-1981672349',
      'title': 'Functional-Light JavaScript',
      'borrowPrice': 50,
      'availableItems': 8,
      'totalItems': 8,
    },
    {
      'ISBN': '9780735213616',
      'title': 'Breath',
      'borrowPrice': 40,
      'availableItems': 6,
      'totalItems': 8,
    }
];

// Ideally the order will contain a userId but this is the simplified implementation
let mockActiveOrders: IOrder[] = [
  {
    id: generateId(10),
    dateCreated: '12-02-2022',
    ISBN: '978-606-913-439-9',
    bookTitle: 'Principles',
  },
  {
    id: generateId(10),
    dateCreated: '20-03-2022',
    ISBN: '9780735213616',
    bookTitle: 'Breath'
  }
];

let error: undefined;

export interface IApiCallParams {
    route: string;
    type: 'get' | 'post' | 'delete' | 'put' | 'patch';
    data?: any;
}

// Use this to simulate an actual API call
export const ApiCall = (requestParams: IApiCallParams) => {
    const { route, data } = requestParams;
    const lastParticle = route.split('/').pop();
    let found = undefined;

    switch (lastParticle) {
      case 'book-list':
        return {
          data: mockBookList,
          success: true,
          error
        }
      case 'book':
        found = mockBookList.find((book: IBook) => book.ISBN === data.ISBN);

        if (found) {
          return {
            data: found,
            success: false,
            error: 'The book already exists !'
          }
        }
        else {
          mockBookList.unshift(data);
  
          return {
              data: mockBookList,
              success: true,
              error: undefined
          }
        } 
      case 'borrow-book':
        mockActiveOrders.unshift({
            id: generateId(10),
            ISBN: data.ISBN,
            bookTitle: data.title,
            dateCreated: moment().format('MM-DD-YYYY')
          });

        found = mockBookList.find((book: IBook) => book.ISBN === data);

        if (!found || found.availableItems === 0 ) {
          return {
            success: false,
            error: 'Your book is no longer available!'
          }
        }
        else {
          mockBookList = mockBookList.map(book =>
            book.ISBN === data
              ? { ...book, availableItems: book.availableItems ? book.availableItems - 1 : 0 }
              : book
            );
          return {
            success: true,
            error: undefined
          }
        }
      case 'borrowed-books': {
        return {
          data: mockActiveOrders,
          success: true,
          error: undefined
        }
      }
      default: {
        return {
          success: true,
          error: undefined
        }
      }
    }
}