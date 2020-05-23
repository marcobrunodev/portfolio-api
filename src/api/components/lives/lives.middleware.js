const hasShortTitle = ({ body }, res, next) => {
  if (!body.shortTitle) {
    return res.status(400).json({
      field: 'titleShort',
      error: 'Título curto é obrigatório',
    });
  }

  return next();
};

const hasTitle = ({ body }, res, next) => {
  if (!body.title) {
    return res.status(400).json({
      field: 'title',
      error: 'Título é obrigatório',
    });
  }

  return next();
};

export { hasShortTitle, hasTitle };
