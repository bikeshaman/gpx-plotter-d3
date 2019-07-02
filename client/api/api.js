import origin from '../config';

export function getData() {
  return fetch(`${origin}/data`)
    .then(response => response.json())
    .catch(err => console.log('error fetching data', err));
}

export function postFile(body) {
  return fetch(`${origin}/data`, {
    method: 'POST',
    headers: { 'Content-Type': 'text/xml' },
    body,
  }).then(response => response.json())
    .catch(err => console.log('error posting file', err));
}
