# Excel File Upload Web App

This web application enables users to upload an Excel file, view its contents as a table, and search for specific data within the table.

## Features

- **File Upload:** Users can upload an Excel file containing data.
- **Table Display:** Uploaded Excel file data is displayed as a table on the webpage.
- **Search Feature:** Users can search for specific information within the displayed table.

## Usage

1. **Upload Excel File:**
   - Click the "Upload" button.
   - Choose an Excel file from your local device.

2. **View Table:**
   - Once the file is uploaded, the table displaying the file's data will appear on the page.

3. **Search Data:**
   - Use the search input field provided to enter your search query.
   - The table will dynamically update to display only the rows matching the search query.

## Technologies Used

- **HTML:** Markup for the web page structure.
- **JavaScript:** Handles file upload, Excel parsing, table generation, and search functionality.
- **SheetJS Library:** Utilized for parsing Excel files (`xlsx.full.min.js` from [SheetJS](https://sheetjs.com/)).
