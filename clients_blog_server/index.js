const express = require('express')
const app = express();
var cors = require('cors')
const port = 5000;


app.use(cors());

const getData_server = require('./data/categories.json');
const newsGet = require('./data/news.json');



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/dataload', (req, res) => {
    res.send(getData_server)
});

app.get('/news/:id', (req, res) => {
  const ID = req.params.id;
  const Selected = newsGet.find((n) => n._id === ID);
  // console.log(Selected)
    res.send(Selected)
  });

app.get('/allnews', (req, res) => {
    res.send(newsGet)
  });



  app.get('/catgori/:id', (req, res) => {
    const Id = req.params.id;
    if(Id === '0') {
      res.send(newsGet)
    }
    else{
      const Selectedfilter = newsGet.filter((n) => n.category_id === Id);
      // console.log(Selected)
        res.send(Selectedfilter)
    }

    });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
