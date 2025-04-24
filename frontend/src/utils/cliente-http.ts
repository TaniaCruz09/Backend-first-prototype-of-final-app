import getHeadersGlobal from "./header-global";

interface optionsClienteHttp {
  method?: string;
  cache?: RequestCache;
  headers?: any;
  body?: any;
}

const feching = async (
  endPoint: string,
  cache: RequestCache = "no-cache",
  metodo: string,
  body: any = null
) => {
  const headers = getHeadersGlobal();

  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}${endPoint}`;
  const options: optionsClienteHttp = {};
  //console.log(endPoint, url, process.env.NEXT_PUBLIC_API_BASE_URL);

  options.method = metodo;
  options.cache = cache;
  options.headers = headers;

  if (body) options.body = JSON.stringify(body);

  const data = await fetch(url, options).then((res) => res.json());

  return data;
};

export default feching;
