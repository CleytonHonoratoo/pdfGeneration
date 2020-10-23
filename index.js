const PDFKit = require('pdfkit');
const fs = require('fs');

const pdf = new PDFKit();

// Texto do pdf
pdf.text('Testando 123');

// Adicionando imagen no PDF
pdf.image('path/wallpaper.jpg', {
  fit: [250, 300],
  align: 'center',
  valign: 'center'
});

// Saida do arquivo
pdf.pipe(fs.createWriteStream('documento.pdf'));

// Styles do texto do pdf
pdf.font('fonts/PalatinoBold.ttf').fontSize(25).text('Texto texto', 100, 100);

// Finalização do pdf
pdf.end();