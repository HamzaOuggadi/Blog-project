var express = require('express');
var router = express.Router();

const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

/* GET posts listing. */
router.get('/', async function(req, res, next) {
  const posts = await prisma.post.findMany({
    include : {tags:true}
  })
  res.send(posts);
});

router.get('/:id', async function(req, res, next) {
  const {id} = req.params
  const post = await prisma.post.findUnique({
    where : {
      id: parseInt(id)
    }
  })
  res.send(post);
});

router.delete('/:id', async function(req, res, next) {
  const {id} = req.params
  const post = await prisma.post.delete({
    where : {
      id: parseInt(id)
    }
  });
  res.send(post);
});

router.post('/', async function(req, res, next) {
  const data = req.body
  const post = await prisma.post.create({data})
  res.send(post);
});

router.patch('/:id', async function(req, res, next) {
  const {id} = req.params
  const data = req.body
  const post = await prisma.post.update({
    where: {
      id:parseInt(id)
    },
    data:data
  });
  res.send(post);
});

module.exports = router;
