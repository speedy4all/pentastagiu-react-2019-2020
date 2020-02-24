export const fetchItems = async () => {
  let data = [];
  try {
    const response = await fetch(
      "https://my-json-server.typicode.com/petreasil/storedb/laptops"
    );
    data = await response.json();
  } catch (err) {
    console.log(err);
  } finally {
    return data;
  }
};
