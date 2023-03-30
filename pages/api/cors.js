export default async function handler(req, res) {
  const response = await fetch(req.query.url);
  const buffer = await response.arrayBuffer();

  // set correct header info
  [
    'content-type',
    'content-length',
    'content-disposition'
  ]
  .forEach(prop => {
    res.setHeader(prop, response.headers.get(prop) || '')
  })
  
  // send the file
  res.send(Buffer.from(buffer));
}