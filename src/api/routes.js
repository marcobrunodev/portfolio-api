import lives from './components/lives/lives.routes';

export default (server) => {
  const { PREFIX } = process.env;

  lives(server, PREFIX);
};
