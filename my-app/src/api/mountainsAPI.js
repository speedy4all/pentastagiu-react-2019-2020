export const fetchMountainList = async () => {
  try {
    const resp = await fetch(
      "https://my-json-server.typicode.com/mihul87/mockjson/mountains"
    );
    const data = await resp.json();
    return data;
  } catch (err) {
    console.log(err.message);
    return [];
  }
};
