import { useTranslations } from "use-intl";

const Home = () => {
  const t = useTranslations();

  const ExcelJS = require("exceljs");

  // Create a new workbook
  const workbook = new ExcelJS.Workbook();

  // Add a worksheet
  const worksheet = workbook.addWorksheet("Sheet1");

  // Set the header row
  worksheet.addRow(["Name", "Age", "City"]);

  // Add some data
  worksheet.addRow(["John", 25, "New York"]);
  worksheet.addRow(["Jane", 30, "London"]);
  worksheet.addRow(["Bob", 35, "Paris"]);

  // Format the header row
  worksheet.getRow(1).font = { bold: true, color: { argb: "FF0000" } }; // Red
  worksheet.getRow(1).fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFC080" } }; // Orange background

  // Format the data rows
  worksheet.getRow(2).getCell(2).font = { italic: true, color: { argb: "008000" } }; // Green
  worksheet.getRow(3).getCell(1).numFmt = "0.00%"; // Format as percentage
  worksheet.getRow(3).getCell(1).font = { bold: true, color: { argb: "0000FF" } }; // Blue

  // Save the file
  workbook.xlsx
    .writeFile("example.xlsx")
    .then(function () {
      console.log("File saved!");
    })
    .catch(function (err) {
      console.error("Error saving file:", err);
    });
  return <h1>{t("home")}</h1>;
};

export default Home;
