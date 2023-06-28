function changeTab(event, tabId) {
    // Hide all tab contents
    const tabContents = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabContents.length; i++) {
      tabContents[i].style.display = 'none';
    }
  
    // Remove 'active' class from all tabs
    const tabs = document.getElementsByClassName('tab1');
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('active');
    }
  
    // Show the selected tab content
    const selectedTabContent = document.getElementById(tabId);
    selectedTabContent.style.display = 'block';
  
    // Add 'active' class to the clicked tab
    event.currentTarget.classList.add('active');
  }
  
  // Show the first tab by default
const defaultTab = document.getElementById('tab1');
 defaultTab.style.display = 'block';
function toggleMenu() {
    const menuContent = document.querySelector('.menu-content');
    menuContent.style.display = menuContent.style.display === 'block' ? 'none' : 'block';
  }
  
  // Rest of the code remains the same as in the previous example
  var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})