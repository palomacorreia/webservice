const Artigo = require("../models/Artigo");

module.exports = {
  async index(req, res) {
    console.log("index");
    
    const artigo = await Artigo.find({arquivo_qtd_revisores: {$gt : 2}})
      .sort({ artigo_media: -1 })
      .limit(20);

    console.log(artigo);
    return res.json(artigo);
  }
};
