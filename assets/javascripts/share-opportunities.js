document.addEventListener("DOMContentLoaded", function () {
  const shareButtons = document.querySelectorAll(".share-btn");

  shareButtons.forEach(button => {
    button.addEventListener("click", async () => {
      const title = button.getAttribute("data-title");
      const url = button.getAttribute("data-url");

      // Check if Web Share API is supported
      if (navigator.share) {
        try {
          await navigator.share({
            title: title,
            text: `Check out this opportunity: ${title}`,
            url: url
          });
        } catch (err) {
          console.log("Share canceled or failed:", err);
        }
      } else {
        // Fallback: copy link
        navigator.clipboard.writeText(url);
        alert("Link copied to clipboard! You can share it manually.");
      }
    });
  });
});
