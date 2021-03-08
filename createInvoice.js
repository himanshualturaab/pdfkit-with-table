var PdfTable = require('voilab-pdf-table');
const PDFDocument = require("pdfkit");
const fs = require("fs");

function createInvoice(invoice, path) {
  let doc = new PDFDocument({ size: "A4", margin: 50 });
  // let table = new PdfTable(doc, { bottomMargin: 30 });

  generateHeader(doc);
  generateCustomerInformation(doc, invoice);
  generateInvoiceTable(doc, invoice);
  generateFooter(doc);

  doc.end();
  doc.pipe(fs.createWriteStream(path));
}

function generateHeader(doc) {
  doc
    .image("images/Logo.png", 50, 45, { width: 200 })
    // .fillColor("#444444")
    .fontSize(8)
    // .text("Jamaica Hardware & Paints, inc.", 110, 57)
    .text("131-01 Jamaica Ave., Richmond Hill, NY 11418", 68, 105)
    .text("Tel: 718-880-1258 Ext. 102 | Fax: 718-887-3951", 68, 115)
    .text("Email: Sales@JamaicaHardware.com", 68, 125)
    .text("www.JamaicaHardware.com", 68, 135)
    .fontSize(20)
    .text("Invoice", 200, 60, { align: "right" })
    .fontSize(12)
    .text("Invoice #:", 400, 85, { align: "left" })
    .text("411429", 470, 85)
    .text("Account #:", 400, 100)
    .text("3478458940", 470, 100)
    .text("Page:", 400, 115)
    .text("1 of 1", 470, 115)
    .text("Date:", 400, 130)
    .text("7/18/2020", 470, 130)
    .text("Time:", 400, 145)
    .text("6:03:40 AM", 470, 145)
    .text("Sales Rep:", 400, 160)
    .text("1", 470, 160)
    .text("Terminal #:", 400, 175)
    .text("1", 470, 175)
    .moveDown();
}

function generateCustomerInformation(doc, invoice) {
  const invoiceTableTop = 205;

  // vertical line
  doc
    .save()
    .moveTo(118, 200)
    .lineTo(118, 266)
    .fill('#000000');

  doc
    .save()
    .moveTo(390, 200)
    .lineTo(390, 266)
    .fill('#000000');

  generateHr(doc, 200);
  doc.font("Helvetica-Bold").fillColor("#000000");
  generateTableRow(
    doc,
    invoiceTableTop,
    "Bill To",
    "Daljit Singh",
    "Ship To",
    "Daljit Singh"
  );
  generateHr(doc, invoiceTableTop + 10);

  doc
    .text("Daljit Singh", 150, invoiceTableTop + 20)
    .text("89-33, 133 Street", 150, invoiceTableTop + 30)
    .text("Richmond Hill, NY 11416", 150, invoiceTableTop + 40)
    .text("Tel:347-846-8940", 150, invoiceTableTop + 50)

    .text("Daljit Singh", 407, invoiceTableTop + 20)
    .text("89-33, 133 Street", 407, invoiceTableTop + 30)
    .text("Richmond Hill, NY 11416", 407, invoiceTableTop + 40)
    .text("Tel:347-846-8940", 407, invoiceTableTop + 50)

  generateHr(doc, invoiceTableTop + 60);

  // for reference
  doc
    .save()
    .moveTo(125, 265)
    .lineTo(125, 285)
    .fill('#000000');

  // for comment
  doc
    .save()
    .moveTo(395, 265)
    .lineTo(395, 285)
    .fill('#000000');

  doc
    .text("Reference:", 50, invoiceTableTop + 70)
    .text("this is test reference", 150, invoiceTableTop + 70)
    .text("Comment:", 320, invoiceTableTop + 70)
    .text("test comment", 410, invoiceTableTop + 70)

  generateHr(doc, invoiceTableTop + 80);
}

function generateInvoiceTable(doc, invoice) {
  let i;
  const invoiceMainTableTop = 330;

  generateHr(doc, invoiceMainTableTop);

  doc
  .text("Line", 50, invoiceMainTableTop + 9)
  .text("Item No", 83, invoiceMainTableTop + 9)
  .text("Description", 133, invoiceMainTableTop + 9)
  .text("UOM", 350, invoiceMainTableTop + 9)
  .text("QTY", 400, invoiceMainTableTop + 9)
  .text("Price", 450, invoiceMainTableTop + 9)
  .text("Ext. Price", 500, invoiceMainTableTop + 9);

  generateHr(doc, invoiceMainTableTop+23);

  doc
  .text("1", 55, invoiceMainTableTop + 28)
  .text("5498464", 83, invoiceMainTableTop + 28)
  .text("SE1 House Key Segal sample...", 133, invoiceMainTableTop + 28)
  .text("", 350, invoiceMainTableTop + 28)
  .text("1", 410, invoiceMainTableTop + 28)
  .text("$1.38", 450, invoiceMainTableTop + 28)
  .text("$1.38", 513, invoiceMainTableTop + 28);

  generateHr(doc, invoiceMainTableTop+38);
  
  doc
  .text("2", 55, invoiceMainTableTop + 42)
  .text("5498464", 83, invoiceMainTableTop + 42)
  .text("SE1 House Key Segal sample testing product", 133, invoiceMainTableTop + 42)
  .text("", 350, invoiceMainTableTop + 42)
  .text("10", 410, invoiceMainTableTop + 42)
  .text("$10.38", 450, invoiceMainTableTop + 42)
  .text("$10.38", 513, invoiceMainTableTop + 42);

  generateHr(doc, invoiceMainTableTop+52);
}

function generateFooter(doc) {
  let footerTop = 650;
  generateHr(doc, footerTop + 10);

  // vertical line
  doc
    .save()
    .moveTo(510, 660)
    .lineTo(510, 710)
    .fill('#000000');

  doc
    .fontSize(8)
    .text("All eligible Returns and Exchanges must be made in 7 days with ORIGINAL", 50, footerTop + 30, { align: "center", width: 380 })
    .text("Invoice and in original unopened packing. Returns not available on the", 50, footerTop + 40, { align: "center", width: 380 })
    .text("following products : Custom Tinted Paint, Hand Tools, Power Tools, Electrical.", 50, footerTop + 50, { align: "center", width: 380 })
    .text("Sub Total", 450, footerTop + 20)
    .text("$1.38", 520, footerTop + 20)
    .text("Sales Tax", 450, footerTop + 30)
    .text("$0.12", 520, footerTop + 30)
    .text("Total", 450, footerTop + 40)
    .text("$1.50", 520, footerTop + 40)
    .text("Cash Tendered", 450, footerTop + 50)
    .text("$1.50", 520, footerTop + 50)
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
  doc
    .strokeColor("#000000")
    .lineWidth(1)
    .moveTo(50, y)
    .lineTo(550, y)
    .stroke();
}

module.exports = {
  createInvoice
};
