var PdfTable = require("voilab-pdf-table");
const PDFDocument = require("pdfkit");
const fs = require("fs");

function createStatement(invoice, path) {
  let doc = new PDFDocument({ size: "A4", margin: 10 });
  // let table = new PdfTable(doc, { bottomMargin: 30 });

  generateHeader(doc);
  generateCustomerInformation(doc, invoice);
  //   generateInvoiceTable(doc, invoice);
//   generateFooter(doc);

  doc.end();
  doc.pipe(fs.createWriteStream(path));
}

function generateHeader(doc) {
  doc
    .image("images/Logo.png", 30, 20, { width: 200 })
    // .fillColor("#444444")
    .fontSize(10)
    .font("Times-Bold")
    .fillColor("#000000")
    // .text("Jamaica Hardware & Paints, inc.", 110, 57)
    .text("131-01 Jamaica Ave., Richmond Hill, NY 11418", 50, 77)
    .text("Tel: 718-880-1258 Ext. 102 | Fax: 718-887-3951", 50, 87)
    .text("Email: Sales@JamaicaHardware.com", 50, 97)
    .text("Website: www.JamaicaHardware.com", 50, 107)
    .fontSize(20)
    .text("Account Statement", 15, 30, { align: "right" })
    .moveDown();
}

function generateCustomerInformation(doc, invoice) {
  /***********code for account summary block start***********/
  doc.font("Times-Bold").fontSize(20).text("Account Summary", 20, 153);

  //creating row with rectangle for first box
  row(doc, 170, 20, "header");
  row(doc, 190, 70, "");
  row(doc, 260, 20, "header");
  row(doc, 280, 20);

  //vertical line
  doc
    .lineCap("butt")
    .moveTo(100, 260) //x,y about rotation
    .lineTo(100, 300) //x,y about position
    .stroke();

  doc
    .lineCap("butt")
    .moveTo(190, 260) //x,y about rotation
    .lineTo(190, 300) //x,y about position
    .stroke();

  doc
    .lineCap("butt")
    .moveTo(290, 260) //x,y about rotation
    .lineTo(290, 300) //x,y about position
    .stroke();

  doc
    .lineCap("butt")
    .moveTo(390, 260) //x,y about rotation
    .lineTo(390, 300) //x,y about position
    .stroke();

  doc
    .lineCap("butt")
    .moveTo(490, 260) //x,y about rotation
    .lineTo(490, 300) //x,y about position
    .stroke();

  //text in rectangle
  doc.fontSize(13).font("Times-Roman");
  textInRowFirst(doc, "Summary Information", 20, 176, "left");
  textInRowFirst(doc, "Account Number:", 20, 195, "left");
  textInRowFirst(doc, "786", 140, 195, "left");
  textInRowFirst(doc, "Name:", 20, 212, "left");
  textInRowFirst(doc, "Anjuman-E-Badri", 140, 221, "left");
  textInRowFirst(doc, "131-24 Springfield Blvd", 140, 235, "left");
  textInRowFirst(doc, "Jamaica, NY 11413", 140, 249, "left");
  textInRowFirst(doc, "Closing Date:", 330, 195, "left");
  textInRowFirst(doc, "08/10/19", 520, 195, "left");
  textInRowFirst(doc, "Current", 35, 269, "left");
  textInRowFirst(doc, "$0.00", 40, 289, "left");
  textInRowFirst(doc, "1 - 30 Days", 110, 269, "left");
  textInRowFirst(doc, "$0.00", 125, 289, "left");
  textInRowFirst(doc, "31 - 60 Days", 200, 269, "left");
  textInRowFirst(doc, "$0.00", 218, 289, "left");
  textInRowFirst(doc, "61 - 90 Days", 300, 269, "left");
  textInRowFirst(doc, "$58.00", 315, 289, "left");
  textInRowFirst(doc, "Over 90 Days", 400, 269, "left");
  textInRowFirst(doc, "$30.00", 417, 289, "left");
  textInRowFirst(doc, "Balance Due", 495, 269, "left");
  textInRowFirst(doc, "$88.00", 510, 289, "left");


  /**************code for account receivable activity start**************/
  doc
    .font("Times-Bold")
    .fontSize(13)
    .text("A c c o u n t R e c e i v a b l e A c t i v i t y", 20, 345);

  row(doc, 356, 20, "header");
  row(doc, 376, 80, "");
  row(doc, 455, 20, "header");

  doc.fontSize(13).font("Times-Roman");
  textInRowFirst(doc, "Invoice #", 20, 364, "left");
  textInRowFirst(doc, "Date", 147, 364, "left");
  textInRowFirst(doc, "Due Date", 200, 364, "left");
  textInRowFirst(doc, "Details", 258, 364, "left");
  textInRowFirst(doc, "Debit", 393, 364, "left");
  textInRowFirst(doc, "Credit", 460, 364, "left");
  textInRowFirst(doc, "Balance", 530, 364, "left");

  textInRowFirst(doc, "TR-348848", 20, 394, "left");
  textInRowFirst(doc, "05/11/19", 126, 394, "left");
  textInRowFirst(doc, "05/11/19", 205, 394, "left");
  textInRowFirst(doc, "Hand Soap", 258, 394, "left");
  textInRowFirst(doc, "$30.00", 388, 394, "left");
  textInRowFirst(doc, "$30.00", 538, 394, "left");

  textInRowFirst(doc, "TR-349225", 20, 424, "left");
  textInRowFirst(doc, "05/14/19", 126, 424, "left");
  textInRowFirst(doc, "05/14/19", 205, 424, "left");
  textInRowFirst(doc, "Paper Towels", 258, 424, "left");
  textInRowFirst(doc, "$58.00", 388, 424, "left");
  textInRowFirst(doc, "$58.00", 538, 424, "left");

    textInRowFirst(doc, "Total", 326, 463, "left");
    textInRowFirst(doc, "$88.00", 388, 463, "left");
    textInRowFirst(doc, "$0.00", 464, 463, "left");
    textInRowFirst(doc, "$88.00", 538, 463, "left");

  //vertical line
  doc.lineCap("butt").moveTo(100, 356).lineTo(100, 456).stroke();
  doc.lineCap("butt").moveTo(180, 356).lineTo(180, 456).stroke();
  doc.lineCap("butt").moveTo(260, 356).lineTo(260, 456).stroke();
  doc.lineCap("butt").moveTo(360, 356).lineTo(360, 476).stroke();
  doc.lineCap("butt").moveTo(430, 356).lineTo(430, 476).stroke();
  doc.lineCap("butt").moveTo(500, 356).lineTo(500, 476).stroke();
}

function textInRowFirst(doc, text, x, y, align) {
  doc.y = y;
  doc.x = x;
  doc.fillColor("black");
  doc.text(text, {
    paragraphGap: 5,
    indent: 5,
    align: align,
    columns: 1,
    lineBreak: true,
    // width:110
  });
  return doc;
}

function row(doc, y, rectHeight, toColor) {
  if (toColor == "header") {
    doc
      .lineJoin("miter")
      .rect(20, y, 560, rectHeight)
      .fillAndStroke("#fff000", "#000");
  } else {
    doc.lineJoin("miter").rect(20, y, 560, rectHeight).stroke();
  }
  return doc;
}

function generateFooter(doc) {
  let footerTop = 650;
  generateHr(doc, footerTop + 10);

  // vertical line
  doc.save().moveTo(510, 660).lineTo(510, 710).fill("#000000");

  doc
    .fontSize(8)
    .text(
      "All eligible Returns and Exchanges must be made in 7 days with ORIGINAL",
      50,
      footerTop + 30,
      { align: "center", width: 380 }
    )
    .text(
      "Invoice and in original unopened packing. Returns not available on the",
      50,
      footerTop + 40,
      { align: "center", width: 380 }
    )
    .text(
      "following products : Custom Tinted Paint, Hand Tools, Power Tools, Electrical.",
      50,
      footerTop + 50,
      { align: "center", width: 380 }
    )
    .text("Sub Total", 450, footerTop + 20)
    .text("$1.38", 520, footerTop + 20)
    .text("Sales Tax", 450, footerTop + 30)
    .text("$0.12", 520, footerTop + 30)
    .text("Total", 450, footerTop + 40)
    .text("$1.50", 520, footerTop + 40)
    .text("Cash Tendered", 450, footerTop + 50)
    .text("$1.50", 520, footerTop + 50);
}

function generateTableRow(
  doc,
  y,
  item,
  description,
  unitCost,
  quantity,
  lineTotal
) {
  doc
    .fontSize(10)
    .text(item, 50, y)
    .text(description, 150, y)
    .text(unitCost, 280, y, { width: 90, align: "right" })
    .text(quantity, 370, y, { width: 90, align: "right" })
    .text(lineTotal, 0, y, { align: "right" });
}

function generateHr(doc, y) {
  doc.strokeColor("#000000").lineWidth(1).moveTo(50, y).lineTo(550, y).stroke();
}

module.exports = {
  createStatement,
};
