var express = require('express');
var router = express.Router();

const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()
  
/* GET articles listing. */
router.get('/', async function(req, res, next) {
  const articles = await prisma.article.findMany({
    include:{categories:true, comments:true}
  });
  res.send(articles);
});

router.get('/:id', async function(req, res, next) {
  const {id} = req.params
  const article = await prisma.article.findUnique({
    include:{categories:true, comments:true},
    where : {
      id: parseInt(id)
    }
  });
  res.send(article);
});

router.delete('/:id', async function(req, res, next) {
  const {id} = req.params
  const article = await prisma.article.delete({
    where : {
      id: parseInt(id)
    }
  });
  res.send(article);
});

router.post('/', async function(req, res, next) {
  const data = req.body
  const article = await prisma.article.create({data})
  res.send(article);
});

router.patch('/:id', async function(req, res, next) {
  const {id} = req.params
  const data = req.body
  const article = await prisma.article.update({
    where: {
      id:parseInt(id)
    },
    data:data
  });
  res.send(article);
});

module.exports = router;
