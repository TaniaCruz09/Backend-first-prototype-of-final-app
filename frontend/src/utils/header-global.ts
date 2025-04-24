const getHeadersGlobal = () => {
  //const apiKey = 'probando';
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const headers = new Map();
  headers.set("Content-Type", "application/json; charset=utf-8");
  headers.set("api-key", apiKey);

  return headers;
};

export default getHeadersGlobal;
