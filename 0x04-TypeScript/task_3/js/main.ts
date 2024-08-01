// main.ts

/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from "../interface";
import * as CRUD from "crud";

// Create an object called 'row' with the specified values
const row: RowElement = {
    firstName: "Guillaume",
    lastName: "Salva",
};

// Insert the row and get the new row ID
const newRowID: RowID = CRUD.insertRow(row);
console.log(`Insert row {firstName: "${row.firstName}", lastName: "${row.lastName}"}`);

// Update the row with an age field
const updatedRow: RowElement = { ...row, age: 23 };
CRUD.updateRow(newRowID, updatedRow);
console.log(`Update row ${newRowID} {firstName: "${updatedRow.firstName}", lastName: "${updatedRow.lastName}", age: ${updatedRow.age}}`);

// Delete the row with ID 125
CRUD.deleteRow(125);
console.log(`Delete row id 125`);
