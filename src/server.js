const app = require('./app');
const connection = require('./db/connection');

const PORT = 3001;

app.listen(PORT, async () => {
  console.log(`server running on ${PORT}`);
  const [result] = await connection.execute('SELECT 1;');
  if (result) console.log('connection with DB working');
});