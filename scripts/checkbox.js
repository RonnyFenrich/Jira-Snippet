// Auto-Select certain checkboxes when pages loads:
// - New PR -> Delete branch after merge
// - Merge PR -> Transition issue to...
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    autoCheckCheckboxes();
  }, 2000);

  // when user clicks merge button, find checkbox and click it to enable "transition issue"
  setTimeout(function() {
    const mergeButton = document.querySelector("button[data-testid='mergeButton-primary']");
    if (!mergeButton) {
      return;
    }
    mergeButton.onclick = function() {
      setTimeout(function() {
        const checkbox = document.querySelector("input[type='checkbox']");
        if (checkbox && !checkbox.checked) {
          checkbox.click();
        }
      }, 500);
    };
  }, 2000);
});

function autoCheckCheckboxes() {
  const deleteSourceBranch = document.querySelector("label[id^='deleteSourceBranch-']");
  if (deleteSourceBranch) {
    deleteSourceBranch.click();
  }
}
