import App from './app';

const server = App.listen(3333, () => {
  const addressInfo = server.address();
  if (addressInfo && typeof addressInfo !== 'string')
    console.log(`running at http://${addressInfo.address}:${addressInfo.port}`);
  else console.log(addressInfo);
});
