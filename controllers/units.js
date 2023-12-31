//controllers/units.js
// const Course = require("./models/units");
const { encryptId, decryptId } = require("../middleware/encrypt");
const unitsMod = require("../models/units");
exports.list = (req, res) => {
  const { title, id, desc, sort, page, pageSize } = req.query; // Get the query parameters from the URL

  // Build the filtering object based on the provided parameters
  const filter = {};
  if (title) {
    filter.title = title;
  }
  if (id) {
    filter.id = id;
  }
  if (desc) {
    filter.desc = desc;
  }

  // Build the sorting object based on the provided sort parameter
  const sortOptions = [];
  if (sort === "title") {
    sortOptions.push(["title", "ASC"]);
  } else if (sort === "title_desc") {
    sortOptions.push(["title", "DESC"]);
  } else if (sort === "id") {
    sortOptions.push(["id", "ASC"]);
  } else if (sort === "id_desc") {
    sortOptions.push(["id", "DESC"]);
  } else if (sort === "desc") {
    sortOptions.push(["desc", "ASC"]);
  } else if (sort === "desc_desc") {
    sortOptions.push(["desc", "DESC"]);
  }

  // Calculate the offset based on the page number and page size
  const pageNumber = parseInt(page) || 1;
  const pageSizeNumber = parseInt(pageSize) || 10;
  const offset = (pageNumber - 1) * pageSizeNumber;

  // Use the filter, sortOptions, limit, and offset in the findAll() method
  unitsMod
    .findAll({
      where: filter,
      order: sortOptions,
      limit: pageSizeNumber,
      offset: offset,
    })
    .then((mods) => {
      const unitData = mods.map((unit) => ({
        id: encryptId(unit.dataValues.id),
        title: unit.dataValues.title,
        desc: unit.dataValues.desc,
      }));
      if (unitData.length === 0) {
        res.send("No thing added yet");
      } else {
        res.json(unitData);
      }
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
};
//units/?title=math&sort=title :  units with the title equal to "math", sorted in ascending order of titles.
//units/?id=2&sort=id_desc :  unit with id equal to 2, sorted in descending order of IDs.
//units/?desc=&sort=desc_desc :  units with an empty desc (description), sorted in descending order of descriptions.
// Filter by parameters with sorting
exports.getById = async (req, res) => {
  const { id } = req.params; // Get the unit ID from the URL parameter

  unitsMod
    .findByPk(id)
    .then((unit) => {
      if (!unit) {
        return res.status(404).send({
          message: "units Not Found",
        });
      }
      const plainUnit = unit.toJSON();
      plainUnit.id = encryptId(unit.id);
      res.json(plainUnit);
    })
    .catch((error) => res.status(400).send(error));
};
exports.create = async (req, res) => {
  const { title, desc } = req.body; // Assuming you are receiving the data in the request body

  // Post request
  unitsMod
    .create({
      title: title,
      desc: desc,
    })
    .then((newCourse) => {
      console.log("=====>New unit added:");

      res.status(201).send("New unit added:");
    })
    .catch((err) => {
      console.error("Error adding new unit:", err);
      res.status(500).send("Error adding new unit:");
    });
};

exports.update = async (req, res) => {
  const { id } = req.params; // Get the unit ID from the URL parameter
  const { title, desc } = req.body; // Get the updated data from the request body

  unitsMod
    .update(
      {
        title: title,
        desc: desc,
      },
      {
        where: { id: id },
      }
    )
    .then((result) => {
      if (result[0] === 1) {
        console.log("=====>units updated successfully");
        res.status(200).send("units updated successfully");
      } else {
        console.log("=====>units not found or not updated");
        res.status(404).send("units not found or not updated");
      }
    })
    .catch((err) => {
      console.error("Error updating unit:", err);
      res.status(500).send("Error updating unit:");
    });
};

exports.delete = async (req, res) => {
  const { id } = req.params; // Get the unit ID from the URL parameter

  unitsMod
    .destroy({
      where: { id: id },
    })
    .then((result) => {
      if (result === 1) {
        console.log("=====>units deleted successfully");
        res.status(200).send("units deleted successfully");
      } else {
        console.log("=====>units not found or not deleted");
        res.status(404).send("units not found or not deleted");
      }
    })
    .catch((err) => {
      console.error("Error deleting unit:", err);
      res.sendStatus(500);
    });
};
exports.test = async (req, res) => {
  const { method, url, params, query, body } = req;

  // Combine extracted properties into a new object
  const requestData = {
    method,
    url,
    params,
    query,
    body,
  };

  res.json(requestData); // Send the requestData object as JSON response
  console.log(requestData); // Log the extracted request data
};
