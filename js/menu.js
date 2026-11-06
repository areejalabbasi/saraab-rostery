// prices in SAR
const menuItems = [
  { id: "v60", cat: "hot", price: 22, tag: { ar: "يتغير أسبوعيًا", en: "Rotates weekly" },
    name: { ar: "V60 إثيوبي", en: "Ethiopian V60" },
    desc: { ar: "يرغاتشيفي، نكهات ياسمين وليمون.", en: "Yirgacheffe with jasmine and lemon notes." } },
  { id: "flat", cat: "hot", price: 18,
    name: { ar: "فلات وايت", en: "Flat white" },
    desc: { ar: "دبل شوت مع حليب مخملي.", en: "Double shot with velvety milk." } },
  { id: "saudi", cat: "hot", price: 15,
    name: { ar: "قهوة سعودية", en: "Saudi coffee" },
    desc: { ar: "بن خولاني بالهيل والزعفران، مع تمر.", en: "Khawlani beans, cardamom and saffron, served with dates." } },
  { id: "cold-brew", cat: "cold", price: 20,
    name: { ar: "كولد برو", en: "Cold brew" },
    desc: { ar: "منقوع 18 ساعة، ناعم وقليل الحموضة.", en: "Steeped 18 hours. Smooth, low acidity." } },
  { id: "spanish", cat: "cold", price: 21, tag: { ar: "الأكثر طلبًا", en: "Most ordered" },
    name: { ar: "سبانش لاتيه", en: "Spanish latte" },
    desc: { ar: "إسبريسو وحليب مكثف على ثلج.", en: "Espresso and condensed milk over ice." } },
  { id: "tonic", cat: "cold", price: 23,
    name: { ar: "إسبريسو تونك", en: "Espresso tonic" },
    desc: { ar: "تونك بارد مع شريحة برتقال.", en: "Chilled tonic with an orange slice." } },
  { id: "basbousa", cat: "sweet", price: 16,
    name: { ar: "بسبوسة بالقشطة", en: "Basbousa with cream" },
    desc: { ar: "تنخبز كل صباح.", en: "Baked fresh every morning." } },
  { id: "cookie", cat: "sweet", price: 12,
    name: { ar: "كوكيز تمر وجوز", en: "Date & walnut cookie" },
    desc: { ar: "طري من الداخل ومقرمش من برا.", en: "Soft centre, crisp edges." } }
];

function renderMenu(container, filter, lang) {
  const items = filter === "all" ? menuItems : menuItems.filter((m) => m.cat === filter);
  const currency = i18n.t("menu.currency");

  container.innerHTML = "";
  for (const item of items) {
    const li = document.createElement("li");

    const line = document.createElement("div");
    line.className = "line";
    const name = document.createElement("span");
    name.textContent = item.name[lang];
    if (item.tag) {
      const tag = document.createElement("span");
      tag.className = "tag";
      tag.textContent = item.tag[lang];
      name.append(tag);
    }
    const dots = document.createElement("span");
    dots.className = "dots";
    const price = document.createElement("span");
    price.className = "price";
    price.textContent = `${item.price} ${currency}`;
    line.append(name, dots, price);

    const desc = document.createElement("p");
    desc.className = "desc";
    desc.textContent = item.desc[lang];

    li.append(line, desc);
    container.append(li);
  }
}
