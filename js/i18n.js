// ar is default, choice saved in localStorage
const translations = {
  ar: {
    title: "سراب | محمصة قهوة في جدة",
    brand: "سراب",
    "nav.menu": "المنيو",
    "nav.story": "قصتنا",
    "nav.visit": "الموقع",
    "nav.book": "احجز طاولة",
    "hero.title": "قهوة تتحمّص كل صباح، قريب من البحر",
    "hero.lead": "محمصة صغيرة في حي الشاطئ بجدة. نجيب البن من مزارع نعرفها في إثيوبيا وكولومبيا واليمن، ونحمّصه دفعات صغيرة.",
    "hero.cta": "احجز طاولة",
    "hero.cta2": "شوف المنيو",
    "menu.title": "المنيو",
    "menu.all": "الكل",
    "menu.hot": "حار",
    "menu.cold": "بارد",
    "menu.sweet": "حلى",
    "menu.currency": "ر.س",
    "story.title": "بدينا بمحمصة في البيت",
    "story.p1": "كنا نحمّص لأصحابنا ونسمع رأيهم في كل دفعة. اليوم نحمّص أكثر من 40 كيلو بالأسبوع، وما زلنا نتذوق كل دفعة قبل ما تطلع.",
    "story.p2": "مع كل كوب تجيك بطاقة صغيرة مثل هذي، فيها من وين البن ومتى تحمّص.",
    "card.origin": "المصدر",
    "card.originV": "يرغاتشيفي، إثيوبيا",
    "card.roasted": "تاريخ التحميص",
    "card.notes": "النكهات",
    "card.notesV": "ياسمين، ليمون، عسل",
    "card.brew": "طريقة التحضير",
    "book.title": "احجز طاولة",
    "book.lead": "نأكد لك الحجز برسالة واتساب خلال ساعة.",
    "form.name": "الاسم",
    "form.phone": "رقم الجوال",
    "form.date": "التاريخ",
    "form.time": "الوقت",
    "form.guests": "كم شخص",
    "form.submit": "أرسل طلب الحجز",
    "form.pickTime": "اختر الوقت",
    "err.name": "اكتب اسمك",
    "err.phone": "رقم الجوال لازم يبدأ بـ 05 ويكون 10 أرقام",
    "err.date": "اختر تاريخ من اليوم وطالع",
    "err.time": "اختر وقت",
    "ok.booked": "وصلنا طلبك يا {name}! بنأكد الحجز على {phone}.",
    "visit.title": "وين نكون",
    "visit.address": "طريق الكورنيش، حي الشاطئ، جدة",
    "visit.week": "السبت إلى الخميس",
    "visit.fri": "الجمعة",
    "footer.demo": "علامة تجارية خيالية، صممتها كمشروع للـ Portfolio."
  },
  en: {
    title: "Saraab | Coffee roastery in Jeddah",
    brand: "Saraab",
    "nav.menu": "Menu",
    "nav.story": "Our story",
    "nav.visit": "Find us",
    "nav.book": "Book a table",
    "hero.title": "Coffee roasted every morning, close to the sea",
    "hero.lead": "A small roastery in Al Shati, Jeddah. We buy from farms we know in Ethiopia, Colombia and Yemen, and roast in small batches.",
    "hero.cta": "Book a table",
    "hero.cta2": "See the menu",
    "menu.title": "Menu",
    "menu.all": "All",
    "menu.hot": "Hot",
    "menu.cold": "Cold",
    "menu.sweet": "Sweets",
    "menu.currency": "SAR",
    "story.title": "It started with a home roaster",
    "story.p1": "We used to roast for friends and ask what they thought of every batch. Now we roast over 40 kg a week, and we still taste each batch before it goes out.",
    "story.p2": "Every cup comes with a little card like this one, showing where the beans are from and when they were roasted.",
    "card.origin": "Origin",
    "card.originV": "Yirgacheffe, Ethiopia",
    "card.roasted": "Roasted",
    "card.notes": "Notes",
    "card.notesV": "Jasmine, lemon, honey",
    "card.brew": "Brew",
    "book.title": "Book a table",
    "book.lead": "We'll confirm on WhatsApp within an hour.",
    "form.name": "Name",
    "form.phone": "Mobile number",
    "form.date": "Date",
    "form.time": "Time",
    "form.guests": "Guests",
    "form.submit": "Send booking request",
    "form.pickTime": "Pick a time",
    "err.name": "Please enter your name",
    "err.phone": "Mobile must start with 05 and be 10 digits",
    "err.date": "Pick today or a later date",
    "err.time": "Pick a time",
    "ok.booked": "Thanks {name}! We'll confirm your booking on {phone}.",
    "visit.title": "Find us",
    "visit.address": "Corniche Road, Al Shati, Jeddah",
    "visit.week": "Saturday to Thursday",
    "visit.fri": "Friday",
    "footer.demo": "Fictional brand, designed as a portfolio project."
  }
};

const i18n = {
  lang: "ar",
  listeners: [],

  t(key, vars = {}) {
    const str = translations[this.lang][key] ?? key;
    return str.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? "");
  },

  apply() {
    const root = document.documentElement;
    root.lang = this.lang;
    root.dir = this.lang === "ar" ? "rtl" : "ltr";
    document.title = this.t("title");
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = this.t(el.dataset.i18n);
    });
    this.listeners.forEach((fn) => fn(this.lang));
  },

  set(lang) {
    this.lang = lang;
    try { localStorage.setItem("lang", lang); } catch (_) {}
    this.apply();
  },

  init() {
    let saved = null;
    try { saved = localStorage.getItem("lang"); } catch (_) {}
    this.lang = saved === "en" ? "en" : "ar";
    this.apply();
  },

  onChange(fn) { this.listeners.push(fn); }
};
