const http = async (url) => {
  const resp = await fetch(url);
  return await resp.json();
};

export default http;
