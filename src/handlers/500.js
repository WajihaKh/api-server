'use strict';

function handleErrors( error, request, response, next ) {
  let output = {
    code: 500,
    route: request.path,
    method: request.method,
    body: request.body,
    query: request.query,
    params: request.params,
    error: error.message,
  };
}

module.exports = handleErrors;
