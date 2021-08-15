"use strict";
import { readFileSync } from 'fs';

export async function monster(event) {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    // body: getMonster(event.queryStringParameters.index)
    body: JSON.stringify({
      "_id": "5ef77d210b1bb138c55cbc04",
      "index": "aboleth",
      "name": "Aboleth",
      "size": "Large",
      "type": "aberration",
      "subtype": null,
      "alignment": "lawful evil"
    })
  };
}

function getMonster(index) {
  try {
    return readFileSync('./data/' + index + '.json', 'utf8')
  } catch (err) {
    return JSON.stringify({
      errorId: 1,
      errorMessage: "monster not found"
    })
  }
}