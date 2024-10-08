const fs = require("fs");

let constituentsData = [];

for (let i = 1; i <= 300; i++) {
  constituentsData.push({
    id: `constituent_${i}`,
    name: `Constituent ${i}`,
    videos: [],
    documents: [],
  });
}

const jsonFilePath = "public/constituents.json"; // Path to save the JSON file
fs.writeFileSync(jsonFilePath, JSON.stringify(constituentsData, null, 2));
console.log(`Created JSON file with 300 constituents at: ${jsonFilePath}`);
