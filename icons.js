// ไอคอนการ์ตูนของวัตถุ (วาดด้วย SVG ไม่ต้องใช้ไฟล์รูป)
// ชื่อด้านซ้ายต้องตรงกับ "ชื่อ" ใน items.js ทุกตัวอักษร
// ถ้าครูใส่รูปถ่ายไว้ในโฟลเดอร์ images เกมจะใช้รูปถ่ายแทนไอคอน
var ICONS = {
  "ตะปู":
    '<g transform="rotate(35 50 50)">' +
      '<path d="M45 22 H55 V72 L50 90 L45 72 Z" fill="#cfd8dc"/>' +
      '<path d="M48.5 27 V68" stroke="#fff" stroke-width="3"/>' +
      '<rect x="32" y="11" width="36" height="11" rx="4" fill="#b0bec5"/>' +
    '</g>',

  "ช้อนสแตนเลส":
    '<g transform="rotate(-35 50 50)">' +
      '<path d="M46 46 L44 88 Q50 94 56 88 L54 46 Z" fill="#b0bec5"/>' +
      '<ellipse cx="50" cy="28" rx="16" ry="21" fill="#cfd8dc"/>' +
      '<ellipse cx="45" cy="23" rx="4" ry="8" fill="#fff" stroke="none"/>' +
    '</g>',

  "กุญแจ":
    '<g transform="rotate(-25 50 50)">' +
      '<path d="M44 43 H88 V56 H82 V67 H73 V56 H67 V64 H58 V56 H44 Z" fill="#ffca28"/>' +
      '<circle cx="28" cy="50" r="18" fill="#ffca28"/>' +
      '<circle cx="28" cy="50" r="6.5" fill="#fff"/>' +
      '<path d="M18 40 Q22 35 28 35" stroke="#fff" stroke-width="3" fill="none"/>' +
    '</g>',

  "ลวดทองแดง":
    '<path d="M10 70 Q20 70 24 62" fill="none" stroke-width="10"/>' +
    '<path d="M10 70 Q20 70 24 62" fill="none" stroke="#e8894a" stroke-width="4.5"/>' +
    '<ellipse cx="50" cy="50" rx="30" ry="22" fill="none" stroke-width="16"/>' +
    '<ellipse cx="50" cy="50" rx="30" ry="22" fill="none" stroke="#d9773a" stroke-width="10"/>' +
    '<ellipse cx="50" cy="50" rx="30" ry="22" fill="none" stroke="#f4a46a" stroke-width="3" stroke-dasharray="6 7"/>' +
    '<path d="M76 38 Q86 30 90 22" fill="none" stroke-width="10"/>' +
    '<path d="M76 38 Q86 30 90 22" fill="none" stroke="#e8894a" stroke-width="4.5"/>',

  "ไม้ไอศกรีม":
    '<g transform="rotate(-35 50 50)">' +
      '<rect x="38" y="6" width="24" height="88" rx="12" fill="#e9c38c"/>' +
      '<path d="M45 16 V60" stroke="#fff3dc" stroke-width="4"/>' +
      '<path d="M54 30 Q56 45 54 60 M48 66 Q50 76 48 84" stroke="#c99a5b" stroke-width="2.5" fill="none"/>' +
    '</g>',

  "หลอดดูดพลาสติก":
    '<path d="M30 92 V40 Q30 30 38 26 L70 10" fill="none" stroke-width="15"/>' +
    '<path d="M30 92 V40 Q30 30 38 26 L70 10" fill="none" stroke="#ffffff" stroke-width="8"/>' +
    '<path d="M30 92 V40 Q30 30 38 26 L70 10" fill="none" stroke="#ef5350" stroke-width="8" stroke-dasharray="7 7" stroke-linecap="butt"/>',

  "คลิปหนีบกระดาษ":
    '<g transform="rotate(25 50 50)">' +
      '<path d="M38 74 V28 Q38 12 51 12 Q64 12 64 28 V76 Q64 90 54 90 Q44 90 44 76 V34 Q44 26 51 26 Q58 26 58 34 V70" fill="none" stroke-width="11"/>' +
      '<path d="M38 74 V28 Q38 12 51 12 Q64 12 64 28 V76 Q64 90 54 90 Q44 90 44 76 V34 Q44 26 51 26 Q58 26 58 34 V70" fill="none" stroke="#cfd8dc" stroke-width="5"/>' +
    '</g>',

  "กระป๋องอะลูมิเนียม":
    '<path d="M28 20 V82 Q28 90 50 90 Q72 90 72 82 V20 Z" fill="#e53935"/>' +
    '<path d="M28 44 Q50 36 72 44 V62 Q50 54 28 62 Z" fill="#fff" stroke="none"/>' +
    '<path d="M28 20 V82 Q28 90 50 90 Q72 90 72 82 V20" fill="none"/>' +
    '<ellipse cx="50" cy="20" rx="22" ry="7" fill="#cfd8dc"/>' +
    '<ellipse cx="54" cy="19" rx="6" ry="2.5" fill="#90a4ae" stroke="none"/>' +
    '<path d="M35 28 V40 M35 66 V78" stroke="#fff" stroke-width="4"/>',

  "ยางลบ":
    '<g transform="rotate(-20 50 50)">' +
      '<rect x="12" y="34" width="76" height="32" rx="7" fill="#f48fb1"/>' +
      '<path d="M46 34 H81 Q88 34 88 41 V59 Q88 66 81 66 H46 Z" fill="#42a5f5"/>' +
      '<path d="M18 40 H38" stroke="#fff" stroke-width="3"/>' +
    '</g>',

  "ไม้บรรทัดพลาสติก":
    '<g transform="rotate(-30 50 50)">' +
      '<rect x="4" y="37" width="92" height="26" rx="4" fill="#80deea"/>' +
      '<path d="M14 37v8M23 37v12M32 37v8M41 37v12M50 37v8M59 37v12M68 37v8M77 37v12M86 37v8" stroke-width="3"/>' +
    '</g>',

  "กระดาษ":
    '<path d="M26 12 H62 L77 27 V88 H26 Z" fill="#fff"/>' +
    '<path d="M62 12 V27 H77 Z" fill="#cfd8dc"/>' +
    '<path d="M34 42H68M34 54H68M34 66H68M34 78H56" stroke="#64b5f6" stroke-width="3.5"/>',

  "แก้วน้ำ":
    '<path d="M27 14 H73 L66 88 H34 Z" fill="#e1f5fe"/>' +
    '<path d="M30.5 44 Q40 39 50 44 T69.5 44 L66 88 H34 Z" fill="#4fc3f7" stroke="none"/>' +
    '<path d="M27 14 H73 L66 88 H34 Z" fill="none"/>' +
    '<path d="M36 22 L40 78" stroke="#fff" stroke-width="4"/>',

  "ถุงมือยาง":
    '<path d="M32 90 V60 L20 44 Q16 36 24 33 Q30 31 35 40 V23 Q35 15 42 15 Q48 15 48 23 V19 Q48 11 55 11 Q62 11 62 19 V23 Q62 17 68 17 Q74 17 74 24 V33 Q74 28 79 28 Q85 28 85 35 V62 Q85 74 74 80 V90 Z" fill="#ffee58"/>' +
    '<path d="M48 23 V46 M62 23 V46 M74 33 V48" stroke-width="3"/>' +
    '<rect x="29" y="80" width="48" height="12" rx="3" fill="#fdd835"/>',

  "ตะเกียบไม้":
    '<path d="M20 90 L66 10" stroke-width="11"/>' +
    '<path d="M20 90 L66 10" stroke="#d7a86e" stroke-width="5.5"/>' +
    '<path d="M36 92 L84 16" stroke-width="11"/>' +
    '<path d="M36 92 L84 16" stroke="#e0b47c" stroke-width="5.5"/>'
};
