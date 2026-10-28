// Shared by both pages: collection names, style names, contacts.
const WA = '201111112724';                       // Ink Fusion's WhatsApp line
const SALES = ['01111113339', '01145000600', '01111114351', '01110055500'];   // from the catalogue cover
const GROUPS = {
  CER: { name: 'بلاطات سيراميك', en: 'Ceramic tiles', note: 'كتالوج السيراميك 2026' },
  GRO: { name: 'أفكار للأماكن', en: 'Room ideas', note: 'التصميمات متركبة في مطابخ وحمامات وواجهات' },
  RM: { name: 'رخام', en: 'Marble', note: 'كتالوج الرخام RM' },
  ART: { name: 'لوحات مودرن', en: 'Modern wall art', note: '27 نوع: ورد، تجريدي، خط عربي، مراكب…' },
  CLS: { name: 'لوحات كلاسيك', en: 'Classic paintings', note: 'لوحات عالمية مشهورة' },
  MRB: { name: 'ملمس رخام', en: 'Marble textures', note: 'خلفيات رخام' },
  WCR: { name: 'سيراميك نقش وتلافيرا', en: 'Relief & Talavera tiles', note: 'نقش بارز وتلافيرا' },
};
const STYLES = { abstract: 'تجريدي', 'ancient-egypt': 'مصري قديم', animals: 'حيوانات', 'arabic-calligraphy': 'خط عربي',
  birds: 'طيور', 'black-white': 'أبيض وأسود', boat: 'مراكب', butterflies: 'فراشات', christian: 'مسيحي', circle: 'دوائر',
  crescent: 'هلال', flowers: 'ورد', fruit: 'فاكهة', girl: 'بنات', islamic: 'إسلامي', japanese: 'ياباني', 'kaaba-kiswa': 'كسوة الكعبة',
  landscapes: 'مناظر طبيعية', leaves: 'أوراق شجر', lighthouse: 'فنار', mosque: 'مساجد', 'old-city': 'مدينة قديمة', portrait: 'بورتريه',
  sea: 'بحر', sun: 'شمس', wall: 'حوائط', 'warm-colors': 'ألوان دافئة', marble: 'رخام', classic: 'كلاسيك',
  'classic-offsite': 'كلاسيك', relief: 'نقش بارز', talavera: 'تلافيرا' };
const styleName = (s) => STYLES[s] || s || '';
const waLink = (text) => `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;
const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
