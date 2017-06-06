document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {

    chrome.tabs.update({
     url: "http://www.newvision.co.ug/"
});
     
    });
  }, false);