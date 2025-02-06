function loadFonts() {
  const previewInput = document.getElementById("preview");
  const previewDisplay = document.getElementById("preview-display");
  const fontsDiv = document.getElementById("fonts");
  const fontsNum = document.querySelector(".num");

  previewInput.addEventListener("input", loadFonts);

  fetch("fonts.json")
    .then((response) =>
      response.ok ? response.json() : Promise.reject("فشل تحميل ملف JSON")
    )
    .then((data) => {
      if (Array.isArray(data)) {
        fontsDiv.innerHTML = data.length
          ? data
              .map((font) => {
                const fontName = font
                  .replace(".ttf", "")
                  .replace(".otf", "")
                  .replace(".ttc", "");

                let tl = Math.random() * (200 - 50 + 1) + 20;
                let tr = Math.random() * (200 - 50 + 1) + 20;
                let dl = Math.random() * (200 - 50 + 1) + 20;
                let br = Math.random() * (200 - 50 + 1) + 20;

                return `
                <a href="fonts/${font}">
                  <div class="fontItem" style='border-radius: ${tl}px ${tr}px ${dl}px ${br}px;'>
                    <style>@font-face { font-family: '${fontName}'; src: url('fonts/${font}'); }</style>
                    <h2 class="fontTitle" style="font-family: '${fontName}';">${fontName}</h2>
                    <h2 class="fontPreview" style="font-family: '${fontName}';">${
                  previewInput.value || "مُحَمّد سِيّد"
                }</h2>
                  </div>
                </a>`;
              })
              .join("")
          : "لا يوجد خطوط";

        // ✅ تحديث عدد الخطوط
        fontsNum.textContent = data.length;
      } else {
        console.error("البيانات في fonts.json ليست مصفوفة");
      }
    })
    .catch((error) =>
      console.error("حدث خطأ أثناء تحميل أو معالجة ملف JSON:", error)
    );
}

loadFonts();
