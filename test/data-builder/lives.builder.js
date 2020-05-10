import faker from 'faker';

const generateName = () => {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();

  return `${firstName} ${lastName}`;
};

const generateGoals = (number = 1) =>
  [...Array(number).keys()].map(() => faker.random.words());

const randomLivesInfoWithoutGuest = (options = {}) => {
  const blank = {};

  return Object.assign(
    blank,
    {
      title: faker.lorem.words(5),
      titleShort: faker.lorem.words(3),
      photo: faker.image.animals(300, 300),
      startDate: faker.date.future(),
      finishDate: faker.date.future(),
      goals: generateGoals(faker.random.number(5)),
      description: faker.lorem.paragraph(),
    },
    { ...options }
  );
};

export default {
  randomLivesInfoWithoutGuest,
  generateName,
};
