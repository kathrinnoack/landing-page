//hier greifen wir auf die API  zu

export function getPaste(id) {
  return fetch(`https://rfvlb.sse.codesandbox.io/${id}`).then(response => {
    if (response.status !== 200) {
      throw new Error(`Invalid request ${response.status}`);
    }
    return response.json();
  });
}
