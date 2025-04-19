"use strict";

const Department = require("../configs/dbConnection");

module.exports = {
  list: async (req, res) => {
    // const result = await Department.find()
    const result = await res.getModelList(Department);

    res.status(200).send({
      error: false,
      details: await res.getModelListDetails(Department),
      result,
    });
  },
  create: async (req, res) => {
    const result = await Department.create(req.body);
    // bir departmanda bir lead olur
    //todo: eğer yeni bir lead oluşturulursa eski lead değerini false yap
    res.status(201).send({
      error: false,
      result,
    });
  },
  read: async (req, res) => {
    const result = await Department.findOne({ _id: req.params.id });
    res.status(200).send({
      error: false,
      result,
    });
  },
  update: async (req, res) => {
    //todo:eğerki bir update olursa bu update lead olursa eski lead değerini false yap
    const result = await Department.updateOne(
      { _id: req.params.id },
      req.body,
      { runValidators: true, new: true }
    );
    res.status(202).send({
      error: false,
      result,
    });
  },
  delete: async (req, res) => {
    const result = await Department.deleteOne({ _id: req.params.id });
    res.status(result.deleteCount ? 204 : 404).send({
      error: true,
      result: "Data is not found or delete",
    });
  },
};

//todo:ilgili deparmandaki tüm kişileri listeleme query olarak filter değilde buna ait controller olsun istiyoruz
