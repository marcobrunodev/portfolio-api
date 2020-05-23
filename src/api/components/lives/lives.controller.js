import Lives from './lives.model';

const getSchedule = async (req, res) => {
  const lives = await Lives.find({}, { titleShort: 1, photo: 1 });

  res.json(lives);
};

const save = async ({ body }, res) => {
  const startDate = new Date(body.startDate).toUTCString();
  const finishDate = new Date(body.finishDate).toUTCString();
  const live = { ...body, startDate, finishDate };
  const response = await Lives.create(live);

  res.json(response);
};

export { save, getSchedule };
