// ar is default, choice saved in localStorage
const translations = {
  ar: {
    title: "سراب | محمصة وقهوة مختصة في جدة",
    brand: "سراب",
    "nav.menu": "المنيو",
    "nav.story": "قصتنا",
    "nav.visit": "زورونا",
    "nav.book": "احجز طاولة",
    "hero.eyebrow": "محمصة مختصة · حي الشاطئ، جدة",
    "hero.title": "قهوة تُحمَّص كل صباح، على بُعد خطوات من البحر",
    "hero.lead": "نختار البن من مزارع صغيرة في إثيوبيا وكولومبيا واليمن، ونحمّصه بكميات قليلة عشان يوصلك طازج.",
    "hero.cta": "احجز طاولتك",
    "hero.cta2": "شوف المنيو",
    "stats.origins": "مصدر بن",
    "stats.rating": "تقييم الزوار",
    "stats.open": "نفتح يوميًا",
    "menu.title": "المنيو",
    "menu.all": "الكل",
    "menu.hot": "حار",
    "menu.cold": "بارد",
    "menu.sweet": "حلى",
    "menu.currency": "ر.س",
    "story.title": "من فكرة صغيرة إلى محمصة الحي",
    "story.p1": "بدأنا بمحمصة منزلية وأصدقاء يجربون كل دفعة. اليوم نحمّص أكثر من 40 كيلو بالأسبوع، وما زلنا نتذوق كل دفعة قبل ما تطلع.",
    "story.p2": "كل كوب يجيك بورقة صغيرة فيها مصدر البن وتاريخ التحميص.",
    "f1.t": "تحميص يومي",
    "f1.d": "دفعات صغيرة كل صباح، ما نخزّن أكثر من أسبوع.",
    "f2.t": "بن من مصدره",
    "f2.d": "نتعامل مباشرة مع مزارع نعرفها بالاسم.",
    "f3.t": "حلى منزلي",
    "f3.d": "كيك وكوكيز نخبزها في نفس اليوم.",
    "book.title": "احجز طاولة",
    "book.lead": "نأكد لك الحجز برسالة واتساب خلال ساعة.",
    "form.name": "الاسم",
    "form.phone": "رقم الجوال",
    "form.date": "التاريخ",
    "form.time": "الوقت",
    "form.guests": "عدد الأشخاص",
    "form.submit": "أرسل طلب الحجز",
    "form.pickTime": "اختر الوقت",
    "err.name": "اكتب اسمك",
    "err.phone": "رقم الجوال لازم يبدأ بـ 05 ويكون 10 أرقام",
    "err.date": "اختر تاريخ من اليوم وطالع",
    "err.time": "اختر وقت",
    "ok.booked": "وصلنا طلبك يا {name}! بنأكد الحجز على {phone}.",
    "visit.title": "زورونا",
    "visit.address": "طريق الكورنيش، حي الشاطئ، جدة",
    "visit.week": "السبت – الخميس",
    "visit.fri": "الجمعة",
    "footer.demo": "مشروع تجريبي لعلامة تجارية خيالية."
  },
  en: {
    title: "Saraab | Specialty coffee roastery in Jeddah",
    brand: "Saraab",
    "nav.menu": "Menu",
    "nav.story": "Our story",
    "nav.visit": "Visit",
    "nav.book": "Book a table",
    "hero.eyebrow": "Specialty roastery · Al Shati, Jeddah",
    "hero.title": "Coffee roasted every morning, steps from the sea",
    "hero.lead": "We source from small farms in Ethiopia, Colombia and Yemen, and roast in small batches so every cup reaches you fresh.",
    "hero.cta": "Book your table",
    "hero.cta2": "See the menu",
    "stats.origins": "coffee origins",
    "stats.rating": "guest rating",
    "stats.open": "open daily",
    "menu.title": "Menu",
    "menu.all": "All",
    "menu.hot": "Hot",
    "menu.cold": "Cold",
    "menu.sweet": "Sweets",
    "menu.currency": "SAR",
    "story.title": "From a home roaster to the neighbourhood roastery",
    "story.p1": "We started with a home roaster and friends tasting every batch. Today we roast over 40 kg a week, and we still cup each batch before it goes out.",
    "story.p2": "Every cup comes with a small card showing the origin and roast date.",
    "f1.t": "Roasted daily",
    "f1.d": "Small batches every morning. Nothing sits for more than a week.",
    "f2.t": "Direct sourcing",
    "f2.d": "We buy straight from farms we know by name.",
    "f3.t": "Homemade sweets",
    "f3.d": "Cakes and cookies baked the same day.",
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
    "visit.title": "Visit us",
    "visit.address": "Corniche Road, Al Shati, Jeddah",
    "visit.week": "Saturday – Thursday",
    "visit.fri": "Friday",
    "footer.demo": "Demo project for a fictional brand."
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
