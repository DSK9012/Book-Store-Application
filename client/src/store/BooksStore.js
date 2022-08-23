import axios from 'axios';

export const booksStoreInitialState = {
  addBook: () => {},
};

export default function booksStore() {
  const addBook = async (data, resetForm, setSubmitting) => {
    console.log(data);
    const res = await axios({
      method: 'post',
      url: '/api/books/insertbook',
      data,
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    console.log(res.data);
  };

  return {
    addBook,
  };
}
