// const { createInvoice } = require("./createInvoice.js");
const { createStatement } = require("./createStatement.js");
const { example } = require("./samplepdf.js");

const invoice = [
  {
    invoiceNumber: "TR-348848",
    date: "05/11/19",
    dueDate: "05/11/19",
    details: "hand soap",
    debit: "$30.00",
    credit: "",
    balance: "$30.00",
  },
  {
    invoiceNumber: "TR-349225",
    date: "05/14/19",
    dueDate: "05/14/19",
    details: "paper towel",
    debit: "$58.00",
    credit: "",
    balance: "$58.00",
  },
  {
    invoiceNumber: "TR-348848",
    date: "05/11/19",
    dueDate: "05/11/19",
    details: "hand soap",
    debit: "$30.00",
    credit: "",
    balance: "$30.00",
  },
  {
    invoiceNumber: "TR-349225",
    date: "05/14/19",
    dueDate: "05/14/19",
    details: "paper towel",
    debit: "$58.00",
    credit: "",
    balance: "$58.00",
  },
];
// createInvoice(invoice, "invoice.pdf");
createStatement(invoice, "statementPDF.pdf");
// example();
