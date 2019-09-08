import App from './app';

const server = App.listen(3333, () => {
  let { address } = server.address();
  const { port } = server.address();
  address = address === '::' ? 'localhost' : address;
  console.log(`running at http://${address}:${port}`);
});
