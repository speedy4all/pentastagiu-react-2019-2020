export const fetchItemsList = async () => {
  try {
    const resp = await fetch(
      "https://my-json-server.typicode.com/speedy4all/pentastagiu-react-2019-2020/movies"
    );
    const data = await resp.json();
    return data;
  } catch (err) {
    console.log(err.message);
    return [];
  } 
};

export const removeOneFromCartAPI = (itemId, cartList) => {
     
    let cartListUpdated = cartList.slice();
    const itemToRemove = cartListUpdated.find(x => x.id === itemId);

    if (itemToRemove && itemToRemove.count === 1) {
      cartListUpdated = cartListUpdated.filter(x => x.id !== itemId);
    } else {
      itemToRemove.count = itemToRemove.count - 1;
    }
    return cartListUpdated;
}
