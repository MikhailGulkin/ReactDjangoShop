export const defineUidToken = (
  _uid: string | undefined,
  _token: string | undefined
) => {
  return {
    uid: _uid ? _uid : "",
    token: _token ? _token : "",
  };
};
