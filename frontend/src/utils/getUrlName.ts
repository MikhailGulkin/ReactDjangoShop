export const getUrlName = (url: any) => {
  const _url = url.pathname.match(/\/(\w*)\/\d/);
  return _url ? _url[1] : "Hoodie";
};
