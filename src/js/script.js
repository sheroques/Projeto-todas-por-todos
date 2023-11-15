function toggleSidebar() {
  var sidebarContainer = document.getElementById("ui-sidebar");
  if (sidebarContainer.classList.contains("hidden")) {
    sidebarContainer.classList.remove("hidden");
  } else {
    sidebarContainer.classList.add("hidden");
  }
}
