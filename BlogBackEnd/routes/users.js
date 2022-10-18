var express = require('express');
var router = express.Router();

const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const users = await prisma.user.findMany({
    include : {articles:true}
  })
  res.send(users);
});

router.get('/:id', async function(req, res, next) {
  const {id} = req.params
  const user = await prisma.user.findUnique({
    where : {
      id: parseInt(id)
    }
  })
  res.send(user);
});

router.delete('/:id', async function(req, res, next) {
  const {id} = req.params
  const user = await prisma.user.delete({
    where : {
      id: parseInt(id)
    }
  });
  res.send(user);
});

router.post('/', async function(req, res, next) {
  const data = req.body
  const user = await prisma.user.create({data})
  res.send(user);
});

router.patch('/:id', async function(req, res, next) {
  const {id} = req.params
  const data = req.body
  const user = await prisma.user.update({
    where: {
      id:parseInt(id)
    },
    data:data
  });
  res.send(user);
});

module.exports = router;
