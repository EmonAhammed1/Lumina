const http = require('http');

function checkHeader(url) {
  return new Promise((resolve) => {
    http.request(url, { method: 'HEAD' }, (res) => {
      resolve(res.statusCode);
    }).on('error', () => resolve(null)).end();
  });
}

async function main() {
  const baseDir = 'http://127.0.0.1:9292/cdn/shop/files';
  const extensions = ['.png', '.jpg', '.jpeg', '.webp'];
  
  const keywords = [
    'nanofibre', 'nanofibra', 'nanofibre-structure', 'fibre', 'fibra',
    'active', 'active-ingredients', 'ingrediente', 'ingrediente-active',
    'penetrare', 'penetrare-profunda', 'profunda', 'deep-penetration',
    'rezultate', 'rezultate-vizibile', 'vizibile', 'visible-results',
    'benefit-1', 'benefit-2', 'benefit-3', 'benefit-4',
    'beneficiu-1', 'beneficiu-2', 'beneficiu-3', 'beneficiu-4',
    'benefit1', 'benefit2', 'benefit3', 'benefit4',
    'beneficiu1', 'beneficiu2', 'beneficiu3', 'beneficiu4',
    'test-1', 'test-2', 'test-3', 'test-4', 'test-5', 'test-6', 'test-7', 'test-8', 'test-9', 'test-10',
    'image-1', 'image-2', 'image-3', 'image-4', 'image-5', 'image-6', 'image-7', 'image-8'
  ];
  
  console.log(`Probing ${keywords.length} keywords...`);
  
  for (const keyword of keywords) {
    for (const ext of extensions) {
      const filename = `${keyword}${ext}`;
      const url = `${baseDir}/${filename}`;
      const status = await checkHeader(url);
      if (status === 200) {
        console.log(`[FOUND] ${filename}`);
      }
    }
  }
  
  console.log('Finished probing keywords!');
}

main();
