const shell = require("shelljs");
const path = require("path");

// Folder name for export
const exportFolder = "ceylon-travel-tech";

// Step 1: Create the 'ican_fly' folder
shell.mkdir("-p", exportFolder);

// Step 2: Copy 'public' folder to 'ican_fly'
const publicFolder = path.join(__dirname, "../public");
shell.cp("-R", publicFolder, exportFolder);

// Step 3: Prepare the '.next' folder inside 'eats_menu'
const nextFolder = path.join(exportFolder, ".next");
shell.mkdir("-p", nextFolder); // Create .next folder inside eats_menu

// Step 4: Copy the entire 'server' folder from '.next' to 'eats_menu/.next'
const serverFolder = path.join(__dirname, "../.next/server");
if (shell.test("-d", serverFolder)) {
  shell.cp("-R", serverFolder, nextFolder); // Copy the server folder as a whole
} else {
  console.error(`Error: '.next/server' folder not found at ${serverFolder}`);
}

// Step 5: Copy the entire '.next/standalone' folder to the root of 'eats_menu'
const standaloneFolder = path.join(__dirname, "../.next/standalone");
if (shell.test("-d", standaloneFolder)) {
  shell.cp("-R", standaloneFolder, exportFolder); // Copy the entire standalone folder to eats_menu root

  // Explicitly copy server.js if it exists
  const serverJsFile = path.join(standaloneFolder, "server.js");
  if (shell.test("-f", serverJsFile)) {
    console.log(`Copying server.js from ${serverJsFile} to ${exportFolder}`);
    shell.cp(serverJsFile, exportFolder); // Copy server.js to eats_menu root
  } else {
    console.error(`Error: 'server.js' file not found at ${serverJsFile}`);
  }

  // Explicitly copy package.json if it exists
  const packageJsonFile = path.join(standaloneFolder, "package.json");
  if (shell.test("-f", packageJsonFile)) {
    console.log(
      `Copying package.json from ${packageJsonFile} to ${exportFolder}`,
    );
    shell.cp(packageJsonFile, exportFolder); // Copy package.json to eats_menu root
  } else {
    console.error(`Error: 'package.json' file not found at ${packageJsonFile}`);
  }
} else {
  console.error(
    `Error: '.next/standalone' folder not found at ${standaloneFolder}`,
  );
}

const nodeModulesFolder = path.join(standaloneFolder, "node_modules");
if (shell.test("-d", nodeModulesFolder)) {
  console.log(
    `Copying node_modules from ${nodeModulesFolder} to ${exportFolder}`,
  );
  shell.cp("-R", nodeModulesFolder, exportFolder); // Copy node_modules to eats_menu root
} else {
  console.error(
    `Error: 'node_modules' folder not found at ${nodeModulesFolder}`,
  );
}

// Step 6: Copy the '.env.production' file to 'eats_menu'
const envProductionFile = path.join(__dirname, "../.env.production");
if (shell.test("-f", envProductionFile)) {
  shell.cp(envProductionFile, exportFolder); // Copy .env.production to eats_menu
} else {
  console.error(
    `Error: '.env.production' file not found at ${envProductionFile}`,
  );
}

// Step 7: Prepare the static folder inside eats_menu/.next
const exportStaticFolder = path.join(nextFolder, "static");
shell.mkdir("-p", exportStaticFolder); // Create the static folder inside eats_menu/.next

// Step 8: Copy '.next/static' to 'eats_menu/.next/static'
const nextStaticFolder = path.join(__dirname, "../.next/static");
if (shell.test("-d", nextStaticFolder)) {
  shell.cp("-R", `${nextStaticFolder}/*`, exportStaticFolder); // Copy all contents of static to eats_menu/.next/static
} else {
  console.error(
    `Error: '.next/static' folder not found at ${nextStaticFolder}`,
  );
}

// Step 9: Copy all .json files and BUILD_ID from .next to eats_menu/.next
const nextFiles = path.join(__dirname, "../.next");
const jsonFiles = shell.ls(`${nextFiles}/*.json`); // List all .json files
const buildIdFile = path.join(nextFiles, "BUILD_ID");

// Copy .json files
if (jsonFiles.length > 0) {
  shell.cp("-R", jsonFiles, nextFolder); // Copy all .json files to eats_menu/.next
} else {
  console.error(`No .json files found in ${nextFiles}`);
}

// Copy BUILD_ID file
if (shell.test("-f", buildIdFile)) {
  shell.cp(buildIdFile, nextFolder); // Copy BUILD_ID file to eats_menu/.next
} else {
  console.error(`Error: 'BUILD_ID' file not found at ${buildIdFile}`);
}

console.log("Build and export completed successfully!");
