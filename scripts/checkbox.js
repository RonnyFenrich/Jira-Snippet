// Auto-Select certain checkboxes when pages loads:
// - New PR -> Delete branch after merge
// - Merge PR -> Transition issue to...
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    autoCheckCheckboxes();
  }, 2000);

  // when user clicks merge button, find checkbox and click it to enable "transition issue"
  setTimeout(function() {
    document.querySelector("button[data-testid='mergeButton-primary']").onclick = function() {
      setTimeout(function() {
        if (!document.querySelector("input[type='checkbox']").checked) {
          document.querySelector("input[type='checkbox']").click()
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
