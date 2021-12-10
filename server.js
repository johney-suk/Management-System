const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/api/hello', (req, res) => {
//     res.send({ message: 'Hello express!' });
// });

app.get('/api/customers', (req, res) => {
    res.send(
        [
        {
          'id': 1, 
          'image': 'https://placeimg.com/64/64/any',
          'name': '석현일',
          'birthday': '950222',
          'gender': '남자',
          'job': '개발자'
        },
        {
          'id': 2,
          'image': 'https://placeimg.com/64/64/2',
          'name': '탐사수',
          'birthday': '950111',
          'gender': '남자',
          'job': '대학생'
        },
        {
          'id': 3,
          'image': 'https://w.namu.la/s/51f656cb58ffc529724fc1f62dc055430f035f937344cda61f6abcfa0e5001e2bc0cd13ae4a192b30962943a5526da6554ae6445388ced9d468e24369ed4b1f716496cefb2ab0cac148ea830d216ba46d82b0a0c33d2f54759c22ea53cb73ba1d1cd07bf3b24a15227412f7deae9425d',
          'name': '피카츄',
          'birthday': '961011',
          'gender': '남자',
          'job': '포켓몬'
        }
      ]
    );
})

app.listen(port, () => console.log(`Listening on port ${port}`));