const PDFDocument = require("pdfkit");
const fs = require("fs");

function example() {
  var doc = new PDFDocument();

  var writeStream = fs.createWriteStream("filename.pdf");
  doc.pipe(writeStream);

  //vertical line to the middle
    doc.lineCap("butt")
        .moveTo(270, 90)//x,y
        .lineTo(270, 230)//x,y
        .stroke();

  //creating row
  row(doc, 90);
  row(doc, 110);
  row(doc, 130);
  row(doc, 150);
  row(doc, 170);
  row(doc, 190);
  row(doc, 210);

  //text in rectangle
  textInRowFirst(doc, "Nombre o razón social", 100);
  textInRowFirst(doc, "RUT", 120);
  textInRowFirst(doc, "Dirección", 140);
  textInRowFirst(doc, "Comuna", 160);
  textInRowFirst(doc, "Ciudad", 180);
  textInRowFirst(doc, "Telefono", 200);
  textInRowFirst(doc, "e-mail", 220);


  row(doc, 190);
  row(doc, 210);
  row(doc, 230);
  row(doc, 250);
  row(doc, 270);
  row(doc, 290);
  row(doc, 310);

  //text in rectangle
  textInRowFirst(doc, "Nombre o razón social", 200);
  textInRowFirst(doc, "RUT", 220);
  textInRowFirst(doc, "Dirección", 240);
  textInRowFirst(doc, "Comuna", 260);
  textInRowFirst(doc, "Ciudad", 280);
  textInRowFirst(doc, "Telefono", 300);
  textInRowFirst(doc, "e-mail", 320);
  doc.end();

  

  //   writeStream.on("finish", function () {
  //     // do stuff with the PDF file
  //     return res.status(200).json({
  //       ok: "ok",
  //     });
  //   });
}

function textInRowFirst(doc, text, heigth) {
  doc.y = heigth;
  doc.x = 30;
  doc.fillColor("black");
  doc.text(text, {
    paragraphGap: 5,
    indent: 5,
    align: "justify",
    columns: 1,
  });
  return doc;
}

function row(doc, heigth) {
  doc.lineJoin("miter").rect(30, heigth, 500, 20).stroke();
  return doc;
}

module.exports = {
  example,
};
