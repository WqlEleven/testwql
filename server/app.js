const path = require('path')

const express = require('express')
const app = express()
const port = 3000

app.set("views", path.resolve(__dirname, "../client/views"));
app.engine('.html', require('ejs').renderFile);
app.set('view engine', 'html')

app.get('/', (req, res) => {
    res.render('index', {
        config: {
            title: '挖坑大队',
            name1:req.query.a,
            name2:req.query.b,
        }
    })
});
app.get('/ajax', (req, res) => {
    res.json({
        name1: req.query.a,
        name2: req.query.b,
    });
})


app.listen(port, () => console.log(`app listening on port ${port}!`))
