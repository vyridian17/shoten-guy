// if request reaches this point in code, we have an error
// throw error and send error (next()) down to next block
// to be handled

const notFound = (req, res, next) => {
  const error = new Error(`Not Found`)
  error.status = 404;
  next(error)
}

// now handle the error, checking status and responding with
// the message and stack

const errorHandler = (err, req, res, next) => {
  res.status(err.status || 500)
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  })
}

export { notFound, errorHandler }