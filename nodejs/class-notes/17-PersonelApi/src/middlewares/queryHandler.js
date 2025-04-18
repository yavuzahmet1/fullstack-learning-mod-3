"use strict";

module.exports = async (req, res, next) => {
  // FILTERING &  SEARCHING & SORTING & PAGINATION

  // console.log('line 101-->', req.query)

  // Filtering:
  // URL?filter[fieldName1]=value1&filter[fieldName2]=value2
  const filter = req.query?.filter || {};

  // Searching:
  // URL?search[fieldName1]=value1&search[fieldName2]=value2
  // https://www.mongodb.com/docs/manual/reference/operator/query/regex/
  const search = req.query?.search || {};

  // { "<field>": { "$regex": "pattern" } }
  for (let key in search) search[key] = { $regex: search[key] }; // assiging new value
  //console.log(search['key'])

  // Sorting:
  // URL?sort[fieldName]=asc&sort[fieldName2]=desc
  const sort = req.query?.sort || {};

  // Limit:
  let limit = Number(req.query?.limit);
  limit = limit > 0 ? limit : Number(process.env.PAGE_SIZE || 20);

  // Page:
  let page = Number(req.query?.page);
  page = page > 0 ? page : 1;

  // Skip:
  let skip = Number(req.query?.skip);
  skip = skip > 0 ? skip : (page - 1) * limit;

  // console.log('limit--', limit)
  // console.log('skip--', skip)
  // console.log('page--', page)

  res.getModelList = async function (Model, populate = null) {
    return await Model.find({ ...filter, ...search })
      .sort(sort)
      .limit(limit)
      .skip(skip)
      .populate(populate);
  };

  res.getModelListDetails = async (Model) => {
    const data = Model.find({ ...filter, ...search });

    const details = {
      filter: filter,
      search,
      sort,
      skip,
      limit,
      page,
      pages: {
        previous: page > 1 ? page - 1 : false,
        current: page,
        next: page + 1,
        total: Math.ceil(data.length / limit),
      },
      totalRecords: data.length,
    };

    details.pages.next =
      details.pages.next > details.pages.total ? false : details.pages.next;
    if (details.totalRecords <= limit) details.pages = false;
    return details;
  };

  next();
};
