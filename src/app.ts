import express, { Request, Response } from 'express';
import bodyParser from 'body-parser'

const app = express();
const port = 3000;
const dataset = [
  {
    email: "jim@gmail.com",
    number: "221122",
  },
  {
    email: "jam@gmail.com",
    number: "830347",
  },
  {
    email: "john@gmail.com",
    number: "221122",
  },
  {
    email: "jams@gmail.com",
    number: "349425",
  },
  {
    email: "jams@gmail.com",
    number: "141424",
  },
  {
    email: "jill@gmail.com",
    number: "822287",
  },
  {
    email: "jill@gmail.com",
    number: "822286",
  },
]

app.use(bodyParser.json());

app.get('/api', (req: Request, res: Response) => {
  const { email, number } = req.query;

  const result = dataset.filter((data) => {
    return data.email === email && (number ? data.number === number : true);
  })

  setTimeout(() => {
    res.json(result);
  }, 5000);
  
});

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});
