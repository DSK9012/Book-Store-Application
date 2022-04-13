export const booksStoreInitialState = {
  addBook: () => {},
};

export default function booksStore() {
  const addBook = async (data, resetForm, setSubmitting) => {
    console.log(data);
  };

  return {
    addBook,
  };
}
