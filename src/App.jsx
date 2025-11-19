import { useState, useMemo, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Overview from "./components/Overview";
import Courses from "./components/Courses";
import ComingSoon from "./components/ComingSoon";

const translations = {
  en: {
    Overview: "Overview",
    Courses: "Courses",
    Progress: "Progress",
    Profile: "Profile",
    "E-commerce": "E-commerce Fundamentals",
    "Google Ads": "Google Ads Mastery",
    "Meta Ads": "Meta Ads Professional",
    "Learn how to build, launch and scale an online store.":
      "Learn to build and grow successful online stores with comprehensive training in product selection, store setup, marketing, and scaling strategies.",
    "Master search & display campaigns to grow traffic.":
      "Master Google Ads from basics to advanced strategies. Learn campaign creation, keyword research, optimization techniques, and how to maximize ROI.",
    "Create effective Facebook & Instagram ad funnels.":
      "Become an expert in Facebook and Instagram advertising. Master audience targeting, creative strategies, campaign optimization, and analytics.",
    "Choose a track to begin your learning journey.":
      "Choose a course below to begin your learning journey and start building valuable skills",
    "Coming Soon": "Coming Soon",
    "This section is being prepared and will be available soon.":
      "This section is under construction. Check back soon for exciting updates!",
    "Welcome to NoortoLearn": "Welcome to NoortoLearn",
    "Your gateway to mastering digital marketing and e-commerce":
      "Master E-commerce, Google Ads, and Meta Ads with Professional Training",
    "What is NoortoLearn?": "What is NoortoLearn?",
    "NoortoLearn is an online learning platform designed to help you master the essentials of e-commerce and digital advertising. Whether you're starting your first online store or looking to scale your business with Google and Meta Ads, we provide structured courses to guide you every step of the way.":
      "NoortoLearn is your comprehensive online learning platform dedicated to helping you master the essential skills of digital marketing and e-commerce. Our mission is to empower entrepreneurs, marketers, and business owners with practical knowledge that drives real results. Whether you're just starting your journey in the digital world or looking to advance your existing skills, we offer carefully structured courses with hands-on, real-world applications that you can implement immediately.",
    "What You'll Learn": "What You'll Learn",
    "E-commerce Mastery": "E-commerce Mastery",
    "Build and scale successful online stores with proven strategies and best practices.":
      "Learn how to build, launch, and scale successful online stores from the ground up. Master product sourcing, inventory management, conversion optimization, and customer retention strategies that work in today's competitive market.",
    "Google Ads Expertise": "Google Ads Expertise",
    "Create high-converting ad campaigns and maximize your ROI with Google's advertising platform.":
      "Become proficient in Google Ads and learn to create high-converting search, display, and shopping campaigns. Master keyword research, bid strategies, ad copywriting, and ROI tracking to maximize your advertising budget.",
    "Meta Ads Proficiency": "Meta Ads Proficiency",
    "Master Facebook and Instagram advertising to reach your target audience effectively.":
      "Master the art of advertising on Facebook and Instagram. Learn advanced targeting techniques, creative best practices, campaign optimization, and how to effectively reach and engage your ideal audience across Meta's platforms.",
    "Ready to Start Learning?": "Ready to Start Your Learning Journey?",
    "Explore our courses and begin your journey to becoming a digital marketing expert.":
      "Explore our comprehensive courses and take the first step toward mastering digital marketing and e-commerce. Join thousands of students who are already transforming their businesses and careers.",
    "View Courses →": "View All Courses →",
    "Start Course →": "Start Learning →",
    "Not started": "Not started",
    Progress: "Progress",
    "All rights reserved.": "All rights reserved.",
  },
  fr: {
    Overview: "Aperçu",
    Courses: "Cours",
    Progress: "Progression",
    Profile: "Profil",
    "E-commerce": "Fondamentaux E-commerce",
    "Google Ads": "Maîtrise Google Ads",
    "Meta Ads": "Professionnel Meta Ads",
    "Learn how to build, launch and scale an online store.":
      "Apprenez à construire et développer des boutiques en ligne prospères avec une formation complète sur la sélection de produits, la configuration de boutique, le marketing et les stratégies de croissance.",
    "Master search & display campaigns to grow traffic.":
      "Maîtrisez Google Ads des bases aux stratégies avancées. Apprenez la création de campagnes, la recherche de mots-clés, les techniques d'optimisation et comment maximiser le ROI.",
    "Create effective Facebook & Instagram ad funnels.":
      "Devenez un expert de la publicité sur Facebook et Instagram. Maîtrisez le ciblage d'audience, les stratégies créatives, l'optimisation de campagnes et l'analyse.",
    "Choose a track to begin your learning journey.":
      "Choisissez un cours ci-dessous pour commencer votre parcours d'apprentissage et développer des compétences précieuses",
    "Coming Soon": "Bientôt Disponible",
    "This section is being prepared and will be available soon.":
      "Cette section est en construction. Revenez bientôt pour des mises à jour passionnantes !",
    "Welcome to NoortoLearn": "Bienvenue sur NoortoLearn",
    "Your gateway to mastering digital marketing and e-commerce":
      "Maîtrisez le E-commerce, Google Ads et Meta Ads avec une Formation Professionnelle",
    "What is NoortoLearn?": "Qu'est-ce que NoortoLearn ?",
    "NoortoLearn is an online learning platform designed to help you master the essentials of e-commerce and digital advertising. Whether you're starting your first online store or looking to scale your business with Google and Meta Ads, we provide structured courses to guide you every step of the way.":
      "NoortoLearn est votre plateforme d'apprentissage en ligne complète dédiée à vous aider à maîtriser les compétences essentielles du marketing numérique et du commerce électronique. Notre mission est de donner aux entrepreneurs, aux spécialistes du marketing et aux propriétaires d'entreprise des connaissances pratiques qui génèrent de vrais résultats. Que vous commenciez tout juste votre parcours dans le monde numérique ou que vous cherchiez à améliorer vos compétences existantes, nous proposons des cours soigneusement structurés avec des applications pratiques et concrètes que vous pouvez mettre en œuvre immédiatement.",
    "What You'll Learn": "Ce que vous apprendrez",
    "E-commerce Mastery": "Maîtrise du E-commerce",
    "Build and scale successful online stores with proven strategies and best practices.":
      "Apprenez à construire, lancer et développer des boutiques en ligne prospères à partir de zéro. Maîtrisez l'approvisionnement en produits, la gestion des stocks, l'optimisation des conversions et les stratégies de fidélisation client qui fonctionnent sur le marché concurrentiel d'aujourd'hui.",
    "Google Ads Expertise": "Expertise Google Ads",
    "Create high-converting ad campaigns and maximize your ROI with Google's advertising platform.":
      "Devenez compétent dans Google Ads et apprenez à créer des campagnes de recherche, display et shopping à fort taux de conversion. Maîtrisez la recherche de mots-clés, les stratégies d'enchères, la rédaction publicitaire et le suivi du ROI pour maximiser votre budget publicitaire.",
    "Meta Ads Proficiency": "Compétence Meta Ads",
    "Master Facebook and Instagram advertising to reach your target audience effectively.":
      "Maîtrisez l'art de la publicité sur Facebook et Instagram. Apprenez les techniques de ciblage avancées, les meilleures pratiques créatives, l'optimisation de campagnes et comment atteindre et engager efficacement votre audience idéale sur les plateformes de Meta.",
    "Ready to Start Learning?":
      "Prêt à commencer votre parcours d'apprentissage ?",
    "Explore our courses and begin your journey to becoming a digital marketing expert.":
      "Explorez nos cours complets et faites le premier pas vers la maîtrise du marketing numérique et du commerce électronique. Rejoignez des milliers d'étudiants qui transforment déjà leurs entreprises et leurs carrières.",
    "View Courses →": "Voir tous les cours →",
    "Start Course →": "Commencer l'apprentissage →",
    "Not started": "Non commencé",
    Progress: "Progression",
    "All rights reserved.": "Tous droits réservés.",
  },
  ar: {
    Overview: "نظرة عامة",
    Courses: "الدورات",
    Progress: "التقدم",
    Profile: "الملف الشخصي",
    "E-commerce": "أساسيات التجارة الإلكترونية",
    "Google Ads": "إتقان إعلانات جوجل",
    "Meta Ads": "محترف إعلانات ميتا",
    "Learn how to build, launch and scale an online store.":
      "تعلم بناء وتنمية متاجر إلكترونية ناجحة مع تدريب شامل في اختيار المنتجات وإعداد المتجر والتسويق واستراتيجيات النمو.",
    "Master search & display campaigns to grow traffic.":
      "أتقن إعلانات جوجل من الأساسيات إلى الاستراتيجيات المتقدمة. تعلم إنشاء الحملات والبحث عن الكلمات الرئيسية وتقنيات التحسين وكيفية زيادة عائد الاستثمار.",
    "Create effective Facebook & Instagram ad funnels.":
      "كن خبيراً في الإعلان على فيسبوك وإنستغرام. أتقن استهداف الجمهور والاستراتيجيات الإبداعية وتحسين الحملات والتحليلات.",
    "Choose a track to begin your learning journey.":
      "اختر دورة أدناه لبدء رحلتك التعليمية وابدأ في بناء مهارات قيمة",
    "Coming Soon": "قريبًا",
    "This section is being prepared and will be available soon.":
      "هذا القسم قيد الإنشاء. تحقق مرة أخرى قريباً للحصول على تحديثات مثيرة!",
    "Welcome to NoortoLearn": "مرحبًا بك في نور للتعلم",
    "Your gateway to mastering digital marketing and e-commerce":
      "أتقن التجارة الإلكترونية وإعلانات جوجل وإعلانات ميتا من خلال تدريب احترافي",
    "What is NoortoLearn?": "ما هي نور للتعلم؟",
    "NoortoLearn is an online learning platform designed to help you master the essentials of e-commerce and digital advertising. Whether you're starting your first online store or looking to scale your business with Google and Meta Ads, we provide structured courses to guide you every step of the way.":
      "نور للتعلم هي منصتك التعليمية الشاملة عبر الإنترنت المخصصة لمساعدتك على إتقان المهارات الأساسية للتسويق الرقمي والتجارة الإلكترونية. مهمتنا هي تمكين رواد الأعمال والمسوقين وأصحاب الأعمال بمعرفة عملية تحقق نتائج حقيقية. سواء كنت بدأت للتو رحلتك في العالم الرقمي أو كنت تتطلع إلى تطوير مهاراتك الحالية، فإننا نقدم دورات منظمة بعناية مع تطبيقات عملية واقعية يمكنك تنفيذها على الفور.",
    "What You'll Learn": "ما ستتعلمه",
    "E-commerce Mastery": "إتقان التجارة الإلكترونية",
    "Build and scale successful online stores with proven strategies and best practices.":
      "تعلم كيفية بناء وإطلاق وتوسيع متاجر إلكترونية ناجحة من الصفر. أتقن تحديد المنتجات وإدارة المخزون وتحسين التحويلات واستراتيجيات الاحتفاظ بالعملاء التي تعمل في السوق التنافسي اليوم.",
    "Google Ads Expertise": "خبرة إعلانات جوجل",
    "Create high-converting ad campaigns and maximize your ROI with Google's advertising platform.":
      "كن محترفاً في إعلانات جوجل وتعلم إنشاء حملات بحث وعرض وتسوق عالية التحويل. أتقن البحث عن الكلمات الرئيسية واستراتيجيات المزايدة وكتابة النصوص الإعلانية وتتبع عائد الاستثمار لزيادة ميزانيتك الإعلانية إلى أقصى حد.",
    "Meta Ads Proficiency": "كفاءة إعلانات ميتا",
    "Master Facebook and Instagram advertising to reach your target audience effectively.":
      "أتقن فن الإعلان على فيسبوك وإنستغرام. تعلم تقنيات الاستهداف المتقدمة وأفضل الممارسات الإبداعية وتحسين الحملات وكيفية الوصول والتفاعل بشكل فعال مع جمهورك المثالي عبر منصات ميتا.",
    "Ready to Start Learning?": "هل أنت مستعد لبدء رحلتك التعليمية؟",
    "Explore our courses and begin your journey to becoming a digital marketing expert.":
      "استكشف دوراتنا الشاملة واتخذ الخطوة الأولى نحو إتقان التسويق الرقمي والتجارة الإلكترونية. انضم إلى آلاف الطلاب الذين يحولون بالفعل أعمالهم ومساراتهم المهنية.",
    "View Courses →": "عرض جميع الدورات ←",
    "Start Course →": "ابدأ التعلم ←",
    "Not started": "لم تبدأ",
    Progress: "التقدم",
    "All rights reserved.": "جميع الحقوق محفوظة.",
  },
};

function App() {
  const [lang, setLang] = useState("en");
  const [section, setSection] = useState("overview");
  const [isDark, setIsDark] = useState(true);

  const t = useMemo(
    () => (k) => {
      return translations[lang]?.[k] || k;
    },
    [lang]
  );

  const dir = lang === "ar" ? "rtl" : "ltr";

  // Apply theme class to html element
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-300 ${
        isDark ? "bg-noor-900" : "bg-white"
      }`}
      dir={dir}
    >
      {/* Navbar */}
      <Navbar
        section={section}
        setSection={setSection}
        t={t}
        isDark={isDark}
        setIsDark={setIsDark}
        lang={lang}
        setLang={setLang}
      />

      {/* Main Content (add top padding to avoid being hidden under fixed navbar) */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 md:pt-16 pb-8">
        {section === "overview" && <Overview t={t} isDark={isDark} />}
        {section === "courses" && <Courses t={t} isDark={isDark} />}
        {(section === "progress" || section === "profile") && (
          <ComingSoon t={t} isDark={isDark} />
        )}
      </main>

      {/* Footer */}
      <footer
        className={`border-t ${
          isDark
            ? "bg-noor-800 border-noor-700"
            : "bg-stone-50 border-stone-200"
        } py-6 mt-auto`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            className={`text-sm ${isDark ? "text-noor-600" : "text-stone-500"}`}
          >
            © {new Date().getFullYear()} Noortolearn.{" "}
            {t("All rights reserved.")}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
