document.addEventListener("DOMContentLoaded", () => {
  const menuGrid = document.getElementById("menuGrid");
  const chips = document.querySelectorAll(".chip");
  const langToggle = document.getElementById("langToggle");
  const menuToggle = document.getElementById("menuToggle");
  const nav = document.getElementById("nav");
  let currentFilter = "all";

  document.getElementById("year").textContent = new Date().getFullYear();

  i18n.onChange((lang) => {
    langToggle.textContent = lang === "ar" ? "EN" : "ع";
    renderMenu(menuGrid, currentFilter, lang);
    fillTimeSlots();
    clearErrors();
  });
  langToggle.addEventListener("click", () => i18n.set(i18n.lang === "ar" ? "en" : "ar"));

  // mobile nav
  menuToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });
  nav.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      nav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("is-active"));
      chip.classList.add("is-active");
      currentFilter = chip.dataset.filter;
      renderMenu(menuGrid, currentFilter, i18n.lang);
    });
  });

  // booking
  const form = document.getElementById("bookForm");
  const success = document.getElementById("formSuccess");
  const dateInput = document.getElementById("date");
  const timeSelect = document.getElementById("time");

  const today = new Date();
  const toISODate = (d) => new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  dateInput.min = toISODate(today);

  function fillTimeSlots() {
    const selected = timeSelect.value;
    timeSelect.innerHTML = "";
    const placeholder = new Option(i18n.t("form.pickTime"), "");
    placeholder.disabled = true;
    timeSelect.append(placeholder);

    // friday opens 1pm, last slot 11pm
    const day = dateInput.value ? new Date(dateInput.value + "T00:00").getDay() : null;
    const startHour = day === 5 ? 13 : 7;
    for (let h = startHour; h <= 23; h++) {
      for (const m of [0, 30]) {
        if (h === 23 && m === 30) continue;
        const v = `${String(h).padStart(2, "0")}:${m === 0 ? "00" : "30"}`;
        timeSelect.append(new Option(v, v));
      }
    }
    timeSelect.value = [...timeSelect.options].some((o) => o.value === selected) ? selected : "";
  }
  dateInput.addEventListener("change", fillTimeSlots);

  function setError(field, key) {
    const wrap = form.querySelector(`#${field}`).closest(".field");
    wrap.classList.add("has-error");
    form.querySelector(`.error[data-for="${field}"]`).textContent = i18n.t(key);
  }

  function clearErrors() {
    form.querySelectorAll(".field").forEach((f) => f.classList.remove("has-error"));
    form.querySelectorAll(".error").forEach((e) => (e.textContent = ""));
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    clearErrors();
    success.hidden = true;

    const data = Object.fromEntries(new FormData(form));
    const phone = data.phone.replace(/\s|-/g, "");
    let ok = true;

    if (data.name.trim().length < 2) { setError("name", "err.name"); ok = false; }
    if (!/^05\d{8}$/.test(phone)) { setError("phone", "err.phone"); ok = false; }
    if (!data.date || data.date < dateInput.min) { setError("date", "err.date"); ok = false; }
    if (!data.time) { setError("time", "err.time"); ok = false; }
    if (!ok) return;

    // TODO: send to whatsapp / backend
    success.textContent = i18n.t("ok.booked", { name: data.name.trim(), phone });
    success.hidden = false;
    form.reset();
    fillTimeSlots();
  });

  i18n.init();
});
