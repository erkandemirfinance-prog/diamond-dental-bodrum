
"use client";

import { useState } from "react";

const translations = {
  EN: {
    nav: ["Treatments", "Our Clinic", "Contact"],
    eyebrow: "YOUR SMILE, OUR PASSION",
    title: "A beautiful smile begins with",
    accent: "exceptional care.",
    description:
      "Discover personalized dental care in Bodrum, Türkiye, with a team dedicated to your comfort and confidence.",
    primary: "Request a Consultation",
    secondary: "Explore Treatments",
    badge: "PERSONALIZED DENTAL CARE",
    intro: "Confidence in every smile.",
    introText:
      "From your first consultation to your aftercare journey, we are here to guide you.",
    treatmentsLabel: "OUR SERVICES",
    treatmentsTitle: "Care designed around you",
    treatmentsText:
      "Explore our dental services and discover the right options for your needs.",
    cards: [
      ["Dental Implants", "Personalized assessments for missing teeth and restorative options."],
      ["Smile Design", "Explore cosmetic treatment options tailored to your smile."],
      ["Teeth Whitening", "Professional guidance on teeth whitening options."],
    ],
    learn: "Learn more →",
    aboutLabel: "THE DIAMOND EXPERIENCE",
    aboutTitle: "Your dental journey, thoughtfully guided.",
    aboutText:
      "We welcome local and international patients with clear communication, personalized planning and support throughout their visit.",
    contactTitle: "Let's talk about your smile.",
    contactText:
      "Contact our team to discuss your questions and request an initial consultation.",
    contactButton: "Contact Our Team",
    footer: "Personalized dental care in Bodrum, Türkiye.",
    disclaimer:
      "Treatments and outcomes depend on individual clinical assessment.",
  },
  TR: {
    nav: ["Tedaviler", "Kliniğimiz", "İletişim"],
    eyebrow: "GÜLÜŞÜNÜZ, TUTKUMUZ",
    title: "Güzel bir gülüşün başlangıcı",
    accent: "özenli bir bakımdır.",
    description:
      "Bodrum'da, konforunuzu ve güveninizi önemseyen ekibimizle size özel diş hekimliği hizmetlerini keşfedin.",
    primary: "Ön Görüşme Talep Et",
    secondary: "Tedavileri Keşfet",
    badge: "KİŞİYE ÖZEL DİŞ BAKIMI",
    intro: "Her gülüşte güven.",
    introText:
      "İlk görüşmenizden tedavi sonrası desteğe kadar size rehberlik ediyoruz.",
    treatmentsLabel: "HİZMETLERİMİZ",
    treatmentsTitle: "Size özel bakım",
    treatmentsText:
      "Diş hekimliği hizmetlerimizi keşfedin ve ihtiyaçlarınıza uygun seçenekleri değerlendirin.",
    cards: [
      ["Diş İmplantları", "Eksik dişler için kişiye özel değerlendirme ve tedavi seçenekleri."],
      ["Gülüş Tasarımı", "Gülüşünüze uygun estetik tedavi seçeneklerini keşfedin."],
      ["Diş Beyazlatma", "Profesyonel diş beyazlatma seçenekleri hakkında bilgi alın."],
    ],
    learn: "Detaylı bilgi →",
    aboutLabel: "DIAMOND DENEYİMİ",
    aboutTitle: "Diş tedavisi yolculuğunuzda yanınızdayız.",
    aboutText:
      "Yerel ve uluslararası hastalarımızı açık iletişim, kişiye özel planlama ve ziyaret boyunca destekle karşılıyoruz.",
    contactTitle: "Gülüşünüz hakkında konuşalım.",
    contactText:
      "Sorularınızı görüşmek ve ön değerlendirme talep etmek için ekibimizle iletişime geçin.",
    contactButton: "Ekibimize Ulaşın",
    footer: "Bodrum'da kişiye özel diş hekimliği hizmetleri.",
    disclaimer:
      "Tedaviler ve sonuçlar kişisel klinik değerlendirmeye bağlıdır.",
  },
};

const treatments = [
  { icon: "✧", image: "implant" },
  { icon: "◈", image: "smile" },
  { icon: "✦", image: "whitening" },
];

export default function Home() {
  const [language, setLanguage] = useState<"EN" | "TR">("EN");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = translations[language];

  return (
    <main className="min-h-screen bg-[#FBFAF7] text-[#203B35]">
      <header className="sticky top-0 z-50 border-b border-[#E9E3D8] bg-[#FBFAF7]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10">
          <a href="#" aria-label="Diamond Dental Bodrum home" className="leading-tight">
            <span className="block text-xl font-semibold tracking-[0.17em] md:text-2xl">
              DIAMOND
            </span>
            <span className="mt-1 block text-[9px] tracking-[0.32em] text-[#987C4C] md:text-[10px]">
              DENTAL BODRUM
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm md:flex">
            <a className="transition hover:text-[#A0834D]" href="#treatments">{t.nav[0]}</a>
            <a className="transition hover:text-[#A0834D]" href="#clinic">{t.nav[1]}</a>
            <a className="transition hover:text-[#A0834D]" href="#contact">{t.nav[2]}</a>
          </nav>

          <div className="flex items-center gap-3">
            <div className="flex rounded-full border border-[#DDD4C5] p-1 text-xs">
              <button onClick={() => setLanguage("EN")} className={`rounded-full px-3 py-2 ${language === "EN" ? "bg-[#203B35] text-white" : ""}`}>EN</button>
              <button onClick={() => setLanguage("TR")} className={`rounded-full px-3 py-2 ${language === "TR" ? "bg-[#203B35] text-white" : ""}`}>TR</button>
            </div>
            <a href="#contact" className="hidden bg-[#203B35] px-5 py-3 text-sm text-white transition hover:bg-[#31584D] sm:inline-block">
              {t.primary}
            </a>
            <button className="text-2xl md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              {menuOpen ? "×" : "☰"}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="flex flex-col gap-4 border-t border-[#E9E3D8] px-6 py-5 text-sm md:hidden">
            <a href="#treatments" onClick={() => setMenuOpen(false)}>{t.nav[0]}</a>
            <a href="#clinic" onClick={() => setMenuOpen(false)}>{t.nav[1]}</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>{t.nav[2]}</a>
          </nav>
        )}
      </header>


    
<section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:px-10 md:py-24">
  <div className="max-w-xl">
    <p className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-[#987C4C]">
      DIAMOND DENTAL BODRUM
    </p>
    <h1 className="text-5xl font-normal leading-[1.12] tracking-tight text-[#203B35] md:text-6xl">
      {t.title}
    </h1>
    <p className="mt-7 max-w-lg text-base leading-8 text-[#52645D]">
      {t.description}
    </p>
    <div className="mt-9 flex flex-wrap gap-3">
      <a href="#contact" className="bg-[#203B35] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#34564D]">
        {t.primary}
      </a>
      <a href="#treatments" className="border border-[#D9C39A] px-6 py-4 text-sm font-semibold text-[#203B35] transition hover:bg-white">
        {t.secondary}
      </a>
    </div>
    <div className="mt-12 flex items-center gap-4 border-t border-[#D9C39A]/60 pt-6">
      <span className="text-2xl text-[#987C4C]">✧</span>
      <p className="text-sm leading-6 text-[#52645D]">
        Personalized dental care in Bodrum, Türkiye.
      </p>
    </div>
  </div>

  <div className="relative">
    <div className="absolute -right-3 -top-3 h-24 w-24 rounded-full border border-[#D9C39A] md:-right-5 md:-top-5" />
    <img
      src="/images/clinic-hero.png"
      alt="Luxury dental clinic interior"
      className="relative z-10 h-[360px] w-full rounded-sm object-cover shadow-xl md:h-[540px]"
    />
    <div className="absolute -bottom-5 -left-5 z-20 bg-white px-6 py-5 shadow-lg">
      <p className="text-xs uppercase tracking-[0.2em] text-[#987C4C]">DIAMOND</p>
      <p className="mt-1 text-sm font-medium text-[#203B35]">Your smile, our passion</p>
    </div>
  </div>
</section>

      <section id="treatments" className="border-y border-[#E9E3D8] bg-white px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold tracking-[0.24em] text-[#987C4C]">{t.treatmentsLabel}</p>
          <div className="mt-4 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="max-w-xl text-4xl font-normal leading-tight md:text-5xl">{t.treatmentsTitle}</h2>
            <p className="max-w-md text-sm leading-7 text-[#68746D]">{t.treatmentsText}</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {t.cards.map((card, index) => (
              <article key={card[0]} className="group border border-[#E9E3D8] bg-[#FBFAF7] p-7 transition hover:-translate-y-1 hover:shadow-lg md:p-9">
                <span className="text-3xl text-[#987C4C]">{treatments[index].icon}</span>
                <div className="my-7 flex h-32 items-center justify-center bg-[#EEECE4] text-5xl text-[#7A8C7E]">
                  {index === 0 ? "◇" : index === 1 ? "✧" : "✦"}
                </div>
                <h3 className="text-xl font-medium">{card[0]}</h3>
                <p className="mt-3 min-h-14 text-sm leading-6 text-[#68746D]">{card[1]}</p>
                <a href="#contact" className="mt-6 inline-block text-sm font-medium text-[#987C4C]">{t.learn}</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="clinic" className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 md:items-center md:px-10 md:py-24">
        <div className="flex min-h-[300px] items-center justify-center bg-[#E8E8DE] p-10">
          <div className="max-w-sm text-center">
            <span className="text-6xl text-[#987C4C]">✧</span>
            <p className="mt-6 text-3xl font-light">Care with clarity.</p>
            <p className="mt-3 text-sm tracking-[0.2em] text-[#68746D]">COMFORT · TRUST · CARE</p>
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.24em] text-[#987C4C]">{t.aboutLabel}</p>
          <h2 className="mt-5 text-4xl font-normal leading-tight md:text-5xl">{t.aboutTitle}</h2>
          <p className="mt-6 leading-8 text-[#68746D]">{t.aboutText}</p>
          <a href="#contact" className="mt-8 inline-block border-b border-[#987C4C] pb-2 text-sm">{t.primary} ↗</a>
        </div>
      </section>

      <section id="contact" className="bg-[#203B35] px-5 py-16 text-white md:px-10 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold tracking-[0.24em] text-[#D9C39A]">{t.nav[2].toUpperCase()}</p>
          <h2 className="mt-5 text-4xl font-normal leading-tight md:text-6xl">{t.contactTitle}</h2>
          <p className="mx-auto mt-6 max-w-xl leading-7 text-white/70">{t.contactText}</p>
      <a href="https://wa.me/905306442144" className="mt-8 inline-block bg-[#D9C39A] px-7 py-4 text-sm font-semibold text-[#203B35] transition hover:bg-white">{t.contactButton} ↗</a>

          <p className="mt-4 text-xs text-white/50">Email address is a placeholder and must be replaced before launch.</p>
        </div>
      </section>

<section id="consultation" className="bg-[#F8F5EF] px-5 py-16">
  <div className="mx-auto max-w-3xl">
    <h2 className="text-3xl font-semibold text-[#203B35]">
      Request a Free Consultation
    </h2>
    <p className="mt-3 text-sm text-[#68746D]">
      Tell us about your dental needs. We will contact you on WhatsApp.
    </p>

    <form
      className="mt-8 grid gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
        const message = [
          "Hello Diamond Dental Bodrum!",
          `Name: ${data.get("name")}`,
          `Phone: ${data.get("phone")}`,
          `Country: ${data.get("country")}`,
          `Treatment: ${data.get("treatment")}`,
          `Message: ${data.get("message")}`,
        ].join("\n");
        window.open(
          `https://wa.me/905306442144?text=${encodeURIComponent(message)}`,
          "_blank"
        );
      }}
    >
      <input name="name" required placeholder="Full name" className="rounded-lg border border-[#D8D2C6] bg-white p-3 text-sm text-[#203B35]" />
      <input name="phone" required placeholder="WhatsApp / Phone number" className="rounded-lg border border-[#D8D2C6] bg-white p-3 text-sm text-[#203B35]" />
      <input name="country" placeholder="Country" className="rounded-lg border border-[#D8D2C6] bg-white p-3 text-sm text-[#203B35]" />

      <select name="treatment" required defaultValue="" className="rounded-lg border border-[#D8D2C6] bg-white p-3 text-sm text-[#203B35]">
        <option value="" disabled>Select a treatment</option>
        <option>Dental Implants</option>
        <option>Smile Design</option>
        <option>Teeth Whitening</option>
        <option>Veneers / Crowns</option>
        <option>Other / Not sure yet</option>
      </select>

      <textarea name="message" rows={4} placeholder="Tell us what you need (optional)" className="rounded-lg border border-[#D8D2C6] bg-white p-3 text-sm text-[#203B35]" />

      <button type="submit" className="rounded-lg bg-[#203B35] px-6 py-4 text-sm font-semibold text-white hover:bg-[#172D28]">
        Send Request via WhatsApp
      </button>
    </form>
  </div>
</section>
      <footer className="bg-[#172D28] px-5 py-8 text-white/70 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-xs md:flex-row md:items-center">
          <p className="font-medium tracking-[0.18em] text-white">DIAMOND DENTAL BODRUM</p>
          <p>{t.footer}</p>
          <p>{t.disclaimer}</p>
          <p>© 2026 Diamond Dental Bodrum</p>
        </div>
      </footer>
    </main>
  );
}