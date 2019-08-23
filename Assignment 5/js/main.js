document.querySelector("#company").innerText = "The Arborist";
document.querySelector("#slogan").innerText = "Events and Arrays";

// Create an array with the 4 trees listed
const trees = ["oak", "Pine", "aspen", "Bald Cypress"];
const errorElement = document.querySelector("#error");
const displayResults = document.querySelector("#displayResults");

// Display the list of trees inside displayResults div
const listTrees = () => {
  let treeList = "";
  trees.forEach(tree => {
    treeList += `${tree} <br>`;
  });
  displayResults.innerHTML = `${treeList} <span>${
    trees.length
  } elements long</span>`;
  errorElement.textContent = "";
};

listTrees();

// Add a redwood to the end of treesList
document.querySelector("#add_redwood").onclick = () => {
  trees.push("redwood");
  listTrees();
};

// Add pear to the start of treesList
document.querySelector("#add_pear").onclick = () => {
  trees.unshift("Pear");
  listTrees();
};

// Sort treesList
document.querySelector("#sortTrees").onclick = () => {
  if (trees.length > 1) {
    trees.sort();
    listTrees();
  } else {
    errorElement.textContent = "There are not enough trees to sort.";
  }
};

// Make lowercase
document.querySelector("#lowerTrees").onclick = () => {
  if (trees.length > 0) {
    let lowerCaseTrees = trees.map(tree => tree.toLowerCase());
    trees.splice(0, trees.length, ...lowerCaseTrees);
    listTrees();
  } else {
    errorElement.textContent = "There are no trees to make lowercase.";
  }
};

// Remove first tree from treesList
document.querySelector("#remove_tree1").onclick = () => {
  if (trees.length > 0) {
    trees.shift();
    listTrees();
  } else {
    errorElement.textContent = "There are no trees to remove.";
  }
};

// Remove second tree from treesList
document.querySelector("#remove_tree2").onclick = () => {
  if (trees.length > 1) {
    trees.splice(1, 1);
    listTrees();
  } else {
    errorElement.textContent = "There is no second tree to remove.";
  }
};

// Remove last tree from treesList
document.querySelector("#remove_treeLast").onclick = () => {
  if (trees.length > 0) {
    trees.pop();
    listTrees();
  } else {
    errorElement.textContent = "There are no trees to remove.";
  }
};

// Get tree 3 and alert
document.querySelector("#showName3").onclick = () => {
  if (trees.length > 2) {
    alert(`The 3rd tree in the list is a(n) ${trees[2]}.`);
  } else {
    errorElement.textContent = "There is no 3rd tree.";
  }
};
// Get tree 4 and alert
document.querySelector("#showName4").onclick = () => {
  if (trees.length > 3) {
    alert(`The 4th tree in the list is a(n) ${trees[3]}.`);
  } else {
    errorElement.textContent = "There is no 4th tree.";
  }
};
