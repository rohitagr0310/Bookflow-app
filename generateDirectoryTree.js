/* eslint-disable require-jsdoc */
const fs = require("fs");
const path = require("path");

function generateDirectoryTree (dirPath) {
  const stats = fs.statSync(dirPath);

  if (stats.isDirectory()) {
    const dirContents = fs.readdirSync(dirPath);
    const node = {
      name: path.basename(dirPath),
      type: "directory",
      children: []
    };

    dirContents.forEach(item => {
      const itemPath = path.join(dirPath, item);
      node.children.push(generateDirectoryTree(itemPath));
    });

    return node;
  } else {
    return {
      name: path.basename(dirPath),
      type: "file"
    };
  }
}

const srcDirectory = path.resolve(__dirname, "src"); // 'src' folder of your project
const tree = generateDirectoryTree(srcDirectory);

// Write the directory tree to a file
fs.writeFileSync("src_directory_tree.json", JSON.stringify(tree, null, 2));

console.log("Directory tree for src folder generated and saved to src_directory_tree.json");
