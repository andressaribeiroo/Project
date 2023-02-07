db.produtos.find({
    $and: [
      { $or: [{
          curtidas: { $eq: 36 } }, {
          vendidos: { $eq: 85 } }] },
    ],
  }, {
    _id: 0,
    nome: 1,
    curtidas: 1,
    vendidos: 1,
  });