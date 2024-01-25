// Function to toggle the drawer
function toggleDrawer() {
  const drawer = document.getElementById("drawer");
  drawer.style.width = drawer.style.width === "250px" ? "0" : "250px";
}

// Function to change the additional info
function changeAdditionalInfo(text) {
  document.getElementById("additionalInfo").textContent = text;
}

// Function to create a computer element
function createComputer(paramName, paramIp) {
  const computer = document.createElement("li");
  computer.className = "computer";

  const screen = document.createElement("div");
  screen.className = "screen";
  computer.appendChild(screen);

  const insedScreen = document.createElement("div");
  insedScreen.className = "insedscreen";
  insedScreen.innerHTML = `PC Name: ${paramName} <br> IP: ${paramIp}`;
  computer.appendChild(insedScreen);

  const stand = document.createElement("div");
  stand.className = "stand";
  computer.appendChild(stand);

  const base = document.createElement("div");
  base.className = "base";
  computer.appendChild(base);

  return computer;
}

// Function to add computers to the list
function addComputersDynamic(computerData) {
  const computersList = document.getElementById("computersList");

  // Clear existing computers
  clearComputers();

  computerData.forEach(({ paramName, paramIp }) => {
    const computer = createComputer(paramName, paramIp);
    computersList.appendChild(computer);
  });
}

// Function to clear all computers
function clearComputers() {
  const computersList = document.getElementById("computersList");
  computersList.innerHTML = "";
}
const initialComputerData = [
  { paramName: "AD0458-0016", paramIp: "106.23.25.23" },
  { paramName: "AD0458-0016", paramIp: "106.23.25.23" },
  { paramName: "AD0458-0016", paramIp: "106.23.25.23" },
  { paramName: "AD0458-0016", paramIp: "106.23.25.23" },
  { paramName: "AD0458-0016", paramIp: "106.23.25.23" },
  { paramName: "AD0458-0016", paramIp: "106.23.25.23" },
  { paramName: "AD0458-0016", paramIp: "106.23.25.23" },
  { paramName: "AD0458-0016", paramIp: "106.23.25.23" },
  { paramName: "AD0458-0016", paramIp: "106.23.25.23" },
  { paramName: "AD0458-0016", paramIp: "106.23.25.23" },
  { paramName: "AD0458-0016", paramIp: "106.23.25.23" },
  { paramName: "AD0458-0016", paramIp: "106.23.25.23" },
  { paramName: "AD0458-0016", paramIp: "106.23.25.23" },
  { paramName: "AD0458-0016", paramIp: "106.23.25.23" },
  { paramName: "AD0458-0016", paramIp: "106.23.25.23" }
  // Add more computer data as needed
];

// Add initial computers
addComputersDynamic(initialComputerData);
