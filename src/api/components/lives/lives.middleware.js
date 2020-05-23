const validation = (field, status, errorJSON, res, next) => {
  if (!field) {
    return res.status(status).json(errorJSON);
  }

  return next();
};

const hasShortTitle = ({ body }, res, next) => {
  const error = {
    field: 'shortTitle',
    error: 'Título curto é obrigatório',
  };

  validation(body.shortTitle, 400, error, res, next);
};

const hasTitle = ({ body }, res, next) => {
  const error = {
    field: 'title',
    error: 'Título é obrigatório',
  };

  validation(body.title, 400, error, res, next);
};

const hasStartDate = ({ body }, res, next) => {
  const error = {
    field: 'startDate',
    error: 'Data de início é obrigatória',
  };

  validation(body.startDate, 400, error, res, next);
};

const hasFinishDate = ({ body }, res, next) => {
  const error = {
    field: 'finishDate',
    error: 'Hora de início é obrigatória',
  };

  validation(body.finishDate, 400, error, res, next);
};

const hasGoals = ({ body }, res, next) => {
  const error = {
    field: 'goals',
    error: 'Objetivos são obrigatórios',
  };

  validation(body.goals, 400, error, res, next);
};

const hasDescription = ({ body }, res, next) => {
  const error = {
    field: 'description',
    error: 'Descrição é obrigatória',
  };

  validation(body.description, 400, error, res, next);
};

const hasShortDescription = ({ body }, res, next) => {
  const error = {
    field: 'shortDescription',
    error: 'Descrição curta é obrigatória',
  };

  validation(body.shortDescription, 400, error, res, next);
};

export {
  hasShortTitle,
  hasTitle,
  hasStartDate,
  hasFinishDate,
  hasGoals,
  hasDescription,
  hasShortDescription,
};
