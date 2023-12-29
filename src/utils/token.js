export const extractTokenFromURL = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const token = searchParams.get('token');
  return token || null;
};
