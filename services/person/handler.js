"use strict";

module.exports.person = async (event) => {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify({
      firstName: "John",
      lastName: "Doe"
    })
  };
};
