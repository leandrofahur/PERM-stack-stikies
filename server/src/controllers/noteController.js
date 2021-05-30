const Note = require("../models/Note");

exports.addNote = async (req, res) => {
  try {
    const { content } = req.body;
    const newNote = await Note.create({ content });

    res.json({
      status: 200,
      route: "/notes",
      message: newNote,
    });
  } catch (error) {
    console.error(error.message);
    res.json({
      status: 500,
      route: "/notes",
      message: error.message,
    });
  }
};

exports.fetchAll = async (req, res) => {
  try {
    const notes = await Note.findAll();
    if (!notes) {
      return res.json({
        status: 500,
        route: "/notes/all",
        message: notes,
      });
    }

    res.json({
      status: 200,
      route: "/notes/all",
      message: notes,
    });
  } catch (error) {
    console.error(error.message);
    res.json({
      status: 500,
      route: "/notes/all",
      message: error.message,
    });
  }
};

exports.fetchById = async (req, res) => {
  const id = req.params.id;

  try {
    const note = await Note.findByPk(id);
    if (!note) {
      return res.json({
        status: 500,
        route: `/notes/${id}`,
        message: note,
      });
    }

    res.json({
      status: 200,
      route: `/notes/${id}`,
      message: note,
    });
  } catch (error) {
    console.error(error.message);
    res.json({
      status: 500,
      route: `/notes/${id}`,
      message: error.message,
    });
  }
};

exports.updateNote = async (req, res) => {
  const id = req.params.id;
  const { content } = req.body;

  try {
    const note = await Note.findByPk(id);
    if (!note) {
      return res.json({
        status: 500,
        route: `/notes/${id}`,
        message: note,
      });
    }

    await note.update({ content });

    res.json({
      status: 200,
      route: `/notes/${id}`,
      message: note,
    });
  } catch (error) {
    console.error(error.message);
    res.json({
      status: 500,
      route: `/notes/${id}`,
      message: error.message,
    });
  }
};

exports.deleteAll = async (req, res) => {
  try {
    await Note.destroy({
      where: {},
      truncate: true,
    });

    const numOfNotes = Note.findAndCountAll();
    console.log(numOfNotes);

    res.json({
      status: 200,
      route: `/notes/all`,
      message: numOfNotes,
    });
  } catch (error) {
    console.error(error.message);
    res.json({
      status: 500,
      route: `/notes/all`,
      message: error.message,
    });
  }
};

exports.deleteById = async (req, res) => {
  const id = req.params.id;

  try {
    const note = await Note.findByPk(id);
    if (!note) {
      return res.json({
        status: 500,
        route: `/notes/${id}`,
        message: note,
      });
    }

    await note.destroy(id);

    res.json({
      status: 200,
      route: `/notes/${id}`,
      message: note,
    });
  } catch (error) {
    console.error(error.message);
    res.json({
      status: 500,
      route: `/notes/${id}`,
      message: error.message,
    });
  }
};
