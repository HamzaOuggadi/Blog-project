var express = require('express');
var router = express.Router();

const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

/* GET comments listing. */
router.get('/', async function(req, res, next) {
  const comments = await prisma.comment.findMany({
  });
  res.send(comments);
});

router.get('/:id', async function(req, res, next) {
  const {id} = req.params
  const comment = await prisma.comment.findUnique({
    where : {
      id: parseInt(id)
    }
  });
  res.send(comment);
});

router.delete('/:id', async function(req, res, next) {
  const {id} = req.params
  const comment = await prisma.comment.delete({
    where : {
      id: parseInt(id)
    }
  });
  res.send(comment);
});

router.post('/', async function(req, res, next) {
  const data = req.body
  const comment = await prisma.comment.create({data})
  res.send(comment);
});

router.patch('/:id', async function(req, res, next) {
  const {id} = req.params
  const data = req.body
  const comment = await prisma.comment.update({
    where: {
      id:parseInt(id)
    },
    data:data
  });
  res.send(comment);
});

module.exports = router;
