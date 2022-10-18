var express = require('express');
var router = express.Router();

const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

/* GET categories listing. */
router.get('/', async function(req, res, next) {
  const categories = await prisma.category.findMany({
    include:{articles:true}
  });
  res.send(categories);
});

router.get('/:id', async function(req, res, next) {
  const {id} = req.params
  const category = await prisma.category.findUnique({
    where : {
      id: parseInt(id)
    }
  });
  res.send(category);
});

router.delete('/:id', async function(req, res, next) {
  const {id} = req.params
  const category = await prisma.category.delete({
    where : {
      id: parseInt(id)
    }
  });
  res.send(category);
});

router.post('/', async function(req, res, next) {
  const data = req.body
  const category = await prisma.category.create({data})
  res.send(category);
});

router.patch('/:id', async function(req, res, next) {
  const {id} = req.params
  const data = req.body
  const category = await prisma.category.update({
    where: {
      id:parseInt(id)
    },
    data:data
  });
  res.send(category);
});

module.exports = router;
