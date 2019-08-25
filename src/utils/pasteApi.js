//hier greifen wir auf die API  zu

const url = "http://localhost:8080";

function handleJsonResponse(response) {
  if (response.status !== 200) {
    throw new Error(`Invalid request ${response.status}`);
  }
  return response.json(); //parsed den body
}

export function getPaste(id) {
  return fetch(`${url}${id}`).then(response => handleJsonResponse(response));
}

//Methode ist POST (weil wir was schreiben)
export function postPaste(paste) {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(paste)
  }).then(handleJsonResponse);
}
