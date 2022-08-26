import axios from 'axios';

export const booksStoreInitialState = {
  addBook: () => {},
};

export default function booksStore() {
  const addBook = async (data, resetForm, setSubmitting) => {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
    const res = await axios.post('api/books/insertbook', data);
  };

  return {
    addBook,
  };
}
