export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: Category;
  description: string;
  details: string;
  colors: string[];
  images: string[];
}

export const products: Product[] = [
{
    id: "1",
    name: "Queen Comforter Set Seersucker",
    price: 51.99,
    image: "https://m.media-amazon.com/images/I/81VVMnTq4aL._AC_SX679_.jpg",
    category: "Bedding Essentials",
    description: "Experience the tactile beauty of seersucker texture. This 7-piece set offers a breathable, cloud-like feel perfect for year-round comfort in a sophisticated dark grey hue.",
    details: "7-Piece Set | Seersucker Texture | All-Season Weight | 100% Breathable Microfiber | Machine Washable",
    colors: ["Dark Grey", "Slate"],
    images: [
      "https://m.media-amazon.com/images/I/81VVMnTq4aL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81B+WdrFLPL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81OMVpixLCL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81aisry8EXL._AC_SX679_.jpg"
    ]
  },
  {
    id: "2",
    name: "Fleece Queen Comforter Set",
    price: 53.99,
    image: "https://m.media-amazon.com/images/I/71pudUiBJeL._AC_SX679_.jpg",
    category: "Bedding Essentials",
    description: "Surround yourself in ultimate warmth with this plush fleece comforter. Its fluffy cream white texture brings a luxury fuzzy feel to your winter nights.",
    details: "Ultra-Soft Fleece | Heavyweight for Winter | Fluffy Texture | Cream White Aesthetic | Includes 2 Pillow Cases",
    colors: ["Cream White", "Ivory"],
    images: [
      "https://m.media-amazon.com/images/I/71pudUiBJeL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71SFxaL8MgL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71UbwJjdzBL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71FjtkJ+0SL._AC_SX679_.jpg"
    ]
  },
  {
    id: "3",
    name: "Luxury Bed-in-a-Bag Dark Grey",
    price: 49.99,
    image: "https://m.media-amazon.com/images/I/81h5lBDrl2L._AC_SX679_.jpg",
    category: "Bedding Essentials",
    description: "A complete transformation for your bed. This all-season 7-piece set combines simplicity with luxury, featuring a smooth, soft-touch fabric in timeless dark gray.",
    details: "Full 7-Piece Bag Set | Silky Soft Finish | All-Seasons Versatility | Wrinkle Resistant | Modern Minimalist Style",
    colors: ["Dark Gray", "Charcoal"],
    images: [
      "https://m.media-amazon.com/images/I/81h5lBDrl2L._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71ufSkaiTkL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71gIn5m5B0L._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71cIp8TxMIL._AC_SX679_.jpg"
    ]
  },
  {
    id: "4",
    name: "Olive Green Dorm Comforter Set",
    price: 43.99,
    image: "https://m.media-amazon.com/images/I/71oJG7laS5L._AC_SX679_.jpg",
    category: "Bedding Essentials",
    description: "Perfect for students or minimalist spaces, this olive green set brings a touch of nature indoors. Lightweight yet cozy for all-night comfort.",
    details: "Twin/Twin XL Size | 1 Comforter + 1 Pillowcase | Soft Brushed Fabric | Dorm Essential | Earthy Olive Tone",
    colors: ["Olive Green", "Sage"],
    images: [
      "https://m.media-amazon.com/images/I/71oJG7laS5L._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71fBiEosORS._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71apWOpxC+L._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71DvvO-oG5S._AC_SX679_.jpg"
    ]
  },
  {
    id: "5",
    name: "Reversible Cationic Dyeing Set",
    price: 69.99,
    image: "https://m.media-amazon.com/images/I/9183+45BpbL._AC_SX679_.jpg",
    category: "Bedding Essentials",
    description: "Featuring a unique cationic dyeing process for a rich, textured look. This reversible olive green set offers two styles in one for a versatile bedroom aesthetic.",
    details: "Cationic Dyeing Process | Reversible Design | 7-Piece Complete Set | High Durability | Luxury Softness",
    colors: ["Olive Green", "Forest Green"],
    images: [
      "https://m.media-amazon.com/images/I/9183+45BpbL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/91yinZdnq0L._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/915XrUCQDZL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81FGVu5djRL._AC_SX679_.jpg"
    ]
  },
  {
    id: "6",
    name: "Barnaby Checkham Quilt Set",
    price: 154.99,
    image: "https://m.media-amazon.com/images/I/814D-N1CteL._AC_SX679_.jpg",
    category: "Bedding Essentials",
    description: "Premium 100% cotton quilt set featuring a classic turquoise and white check pattern. Oeko-TEX certified for your safety and peace of mind.",
    details: "100% Pure Cotton | Oeko-TEX Certified | 2-Piece Twin XL | Turquoise Accents | All-Season Breathability",
    colors: ["Turquoise White", "Sky Blue"],
    images: ["https://m.media-amazon.com/images/I/814D-N1CteL._AC_SX679_.jpg"]
  },
  {
    id: "7",
    name: "Goose Feather Down Comforter",
    price: 152.99,
    image: "https://m.media-amazon.com/images/I/81Wv8swJcOL._AC_SX679_.jpg",
    category: "Bedding Essentials",
    description: "The gold standard of sleep. Wrapped in 100% cotton, this goose feather and down fiber insert provides hotel-luxury warmth every single night.",
    details: "100% Cotton Shell | Goose Feather Down Fill | Hypoallergenic | Medium Warmth | 90x90 Inch Queen Size",
    colors: ["Pure White"],
    images: [
      "https://m.media-amazon.com/images/I/81Wv8swJcOL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/611wSX8N2vL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71ievHFoyIL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71tUmC9MtyL._AC_SX679_.jpg"
    ]
  },
  {
    id: "8",
    name: "Lightweight Down Alternative Blanket",
    price: 120.0,
    image: "https://m.media-amazon.com/images/I/715d0gk26UL._AC_SX679_.jpg",
    category: "Bedding Essentials",
    description: "A cruelty-free alternative to down that doesn't compromise on comfort. This reversible light grey blanket is hypoallergenic and incredibly easy to wash.",
    details: "Down Alternative Fill | Reversible Light Grey | Hypoallergenic | Machine Washable | Includes 2 Shams",
    colors: ["Light Grey", "Silver"],
    images: [
      "https://m.media-amazon.com/images/I/715d0gk26UL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/8191cv9KUlL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81UDLDesTkL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81IZ6hgKLJL._AC_SX679_.jpg"
    ]
  },
  {
    id: "9",
    name: "Cream Linen Back Tab Curtains",
    price: 15.95,
    image: "https://m.media-amazon.com/images/I/71HJGiZ6OCL._AC_SX679_.jpg",
    category: "Layering & Textiles",
    description: "Invite soft, filtered light into your room with these neutral farmhouse drapes. The linen-textured fabric provides privacy while maintaining an airy feel.",
    details: "Linen Textured | Semi-Sheer | 2-Panel Set | 84-Inch Length | Modern Farmhouse Aesthetic",
    colors: ["Natural Ivory", "Cream"],
    images: [
      "https://m.media-amazon.com/images/I/71HJGiZ6OCL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/91W8Az97LIL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81BTpDxpgAL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81AOv4BC1YL._AC_SX679_.jpg"
    ]
  },
  {
    id: "10",
    name: "Corduroy Stuffed Animal Storage",
    price: 21.99,
    image: "https://m.media-amazon.com/images/I/71PX-3sptVL._AC_SL1500_.jpg",
    category: "Accents & Furniture",
    description: "A clever 2-in-1 solution. Organize plush toys or textiles inside this premium corduroy cover to create a cozy, functional bean bag chair.",
    details: "Premium Corduroy | Storage Solution | No Filler Included | Extra Large Capacity | Washable Cover",
    colors: ["Slate Blue", "Grey"],
    images: [
      "https://m.media-amazon.com/images/I/71PX-3sptVL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/816VZKu-Q5L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/717Ii8banQL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/716TO3CV9ML._AC_SL1500_.jpg"
    ]
  },
  {
    id: "11",
    name: "Macrame Sphericity Wall Hanging",
    price: 33.85,
    image: "https://m.media-amazon.com/images/I/71xErkuhXoL._AC_SX679_.jpg",
    category: "Layering & Textiles",
    description: "Add a bohemian touch with this striking black macrame art. Hand-woven cotton tassels create a bold geometric focal point for any bedroom wall.",
    details: "100% Cotton Tassels | Hand-Woven Macrame | Geometric Design | 15.7\" W x 39\" L | Bold Black Aesthetic",
    colors: ["Midnight Black"],
    images: [
      "https://m.media-amazon.com/images/I/71xErkuhXoL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/61XYAFkxC5L._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/61mwOVmgxkL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71mEM-BIlOL._AC_SX679_.jpg"
    ]
  },
  {
    id: "12",
    name: "Boho Tassel Fiber Art",
    price: 14.5,
    image: "https://m.media-amazon.com/images/I/71H-8-IG5TL._AC_SX679_.jpg",
    category: "Layering & Textiles",
    description: "A delicate touch of fiber art. This small cotton macrame hanging brings organic texture and warmth to cozy corners or small wall spaces.",
    details: "Small Sphericity Cotton | Boho Tassel Decor | Fiber Art | 27\" Length | Natural Cream Tone",
    colors: ["Cream", "Natural"],
    images: [
      "https://m.media-amazon.com/images/I/71H-8-IG5TL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/61yX59Ank-L._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/61-1bs4MPfL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/6115NSU26zL._AC_SX679_.jpg"
    ]
  },
  {
    id: "13",
    name: "Thermal Room Darkening Curtains",
    price: 28.99,
    image: "https://m.media-amazon.com/images/I/61DOVc7us3L._AC_SX679_.jpg",
    category: "Layering & Textiles",
    description: "Achieve the perfect sleep environment. These light grey blackout curtains block light and insulate against heat and cold for ultimate tranquility.",
    details: "Blackout Technology | Thermal Insulated | Grommet Top | 2 Panels Included | Light Grey Finish",
    colors: ["Light Grey", "Silver Grey"],
    images: [
      "https://m.media-amazon.com/images/I/61DOVc7us3L._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/711xuK1P-5S._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/711l4upri5L._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71kFzHP6RVL._AC_SX679_.jpg"
    ]
  },
  {
    id: "14",
    name: "Linen Textured Blackout Drapes",
    price: 46.99,
    image: "https://m.media-amazon.com/images/I/81jLoR4NezL._AC_SX679_.jpg",
    category: "Layering & Textiles",
    description: "Modern farmhouse meets high-performance. These cream beige curtains offer a heavy linen texture with absolute light-blocking capabilities.",
    details: "Cottage Linen Texture | 100% Blackout | Back Tab Design | Heat & Cold Blocking | Cream Beige",
    colors: ["Cream Beige", "Sand"],
    images: [
      "https://m.media-amazon.com/images/I/81jLoR4NezL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81cvYvO7kuL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81Un17h7KNL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/8199nWZi-WL._AC_SX679_.jpg"
    ]
  },
  {
    id: "15",
    name: "Ribbed Rabbit Fur Bean Bag Cover",
    price: 25.99,
    image: "https://m.media-amazon.com/images/I/712ko68NS5L._AC_SX679_.jpg",
    category: "Accents & Furniture",
    description: "Unparalleled softness with a ribbed rabbit fur texture. This luxurious cover serves as both a storage unit and a heavenly floor seat.",
    details: "Faux Rabbit Fur | Ribbed Texture | M-Size Cover | Plush Textile Holder | Creamy White Aesthetic",
    colors: ["Creamy White"],
    images: [
      "https://m.media-amazon.com/images/I/712ko68NS5L._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/610kRJC26AL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71aP+uDmbEL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/7103y2ggqVL._AC_SX679_.jpg"
    ]
  },
  {
    id: "16",
    name: "Wireless Gold Wall Sconces",
    price: 59.99,
    image: "https://m.media-amazon.com/images/I/61CFTpQjMeL._AC_SL1500_.jpg",
    category: "Ambient Lighting",
    description: "Elegant, cable-free lighting for the modern bedroom. These gold sconces are battery-operated and feature RGB color modes with remote control.",
    details: "Battery Operated | RGB Color Modes | Rechargeable | Wireless Remote Control | Set of Two",
    colors: ["Brushed Gold"],
    images: [
      "https://m.media-amazon.com/images/I/61CFTpQjMeL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71gmHtnN8ZL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81j88j4V7dL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71SoNm4-wnL._AC_SL1500_.jpg"
    ]
  },
  {
    id: "17",
    name: "3-in-1 Ocean Wave Projector",
    price: 28.99,
    image: "https://m.media-amazon.com/images/I/71I1UDhtksL._AC_SX679_.jpg",
    category: "Ambient Lighting",
    description: "Transform your ceiling into a cosmic masterpiece. Features Sunset, Ocean Wave, and Northern Lights projections for a dreamy sleep atmosphere.",
    details: "216 Mood Modes | Remote Controlled | Northern Lights Projector | Sleep Timer | Compact Design",
    colors: ["Multi-color"],
    images: [
      "https://m.media-amazon.com/images/I/71I1UDhtksL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81wpmYhoeUL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81tXH-nP6+L._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71V5DiuDwFL._AC_SX679_.jpg"
    ]
  },
  {
    id: "18",
    name: "180 Degree Sunset Lamp",
    price: 19.99,
    image: "https://m.media-amazon.com/images/I/61PVG2fhoWL._AC_SX679_.jpg",
    category: "Ambient Lighting",
    description: "Bring the golden hour into your home any time. This rotating projector creates a warm, romantic sunset glow perfect for photography and relaxation.",
    details: "180 Degree Rotation | USB Powered | High-Definition Lens | Energy Efficient LED | Warm Sunset Glow",
    colors: ["Sunset Gold"],
    images: [
      "https://m.media-amazon.com/images/I/61PVG2fhoWL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71PnRp0BWRL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/61yYPyCpfkL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81FoktLc8EL._AC_SX679_.jpg"
    ]
  },
  {
    id: "19",
    name: "Smart Tree Floor Lamp",
    price: 169.99,
    image: "https://m.media-amazon.com/images/I/712q-hM2JbL._AC_SX679_.jpg",
    category: "Ambient Lighting",
    description: "Futuristic lighting with LuminBlend technology. This tree-shaped lamp syncs with music and offers 64 dynamic scenes, fully compatible with Matter.",
    details: "Matter Compatible | Music Sync | 64 Dynamic Scenes | 3 Rotatable Lights | Smart App Control",
    colors: ["Black", "RGB"],
    images: [
      "https://m.media-amazon.com/images/I/712q-hM2JbL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71EE+0TOpmL._AC_SX569_.jpg",
      "https://m.media-amazon.com/images/I/61QjC9bBrHL._AC_SX569_.jpg",
      "https://m.media-amazon.com/images/I/71Tw84KkOSL._AC_SX569_.jpg"
    ]
  },
  {
    id: "20",
    name: "Nebula Galaxy Projector",
    price: 16.99,
    image: "https://m.media-amazon.com/images/I/71vBAi7yuuL._AC_SX679_.jpg",
    category: "Ambient Lighting",
    description: "Immerse yourself in a starry nebula. This compact projector creates a soothing, moving star field that helps quiet the mind before bed.",
    details: "LED Nebula Effect | Remote & Timer | Adjustable Brightness | Silent Operation | Perfect Night Light",
    colors: ["Galaxy Mix"],
    images: [
      "https://m.media-amazon.com/images/I/71vBAi7yuuL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81wXLId49XL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71yeEzB-7gL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81Tp9ivfA4L._AC_SX679_.jpg"
    ]
  },
  {
    id: "21",
    name: "Dimmable Plug-in Night Light",
    price: 27.99,
    image: "https://m.media-amazon.com/images/I/61BZMkuj85L._AC_SX679_PIbundle-2,TopRight,0,0_SH20_.jpg",
    category: "Ambient Lighting",
    description: "A minimalist night light that thinks for itself. Features a dusk-to-dawn sensor and adjustable brightness for safe, soft hallway and bedroom navigation.",
    details: "Dusk to Dawn Sensor | 3000K Soft White | 0-100LM Adjustable | 2-Pack Set | Modern Plug-in Design",
    colors: ["Soft White"],
    images: [
      "https://m.media-amazon.com/images/I/61BZMkuj85L._AC_SX679_PIbundle-2,TopRight,0,0_SH20_.jpg",
      "https://m.media-amazon.com/images/I/71Xfb+WWNnL._AC_SY879_.jpg",
      "https://m.media-amazon.com/images/I/71YfdzmYsbL._AC_SY879_.jpg",
      "https://m.media-amazon.com/images/I/71ffC1p9tiL._AC_SY879_.jpg"
    ]
  },
  {
    id: "22",
    name: "Modern White & Gold Nightstand",
    price: 106.99,
    image: "https://m.media-amazon.com/images/I/71K3jA0opaL._AC_SX679_.jpg",
    category: "Accents & Furniture",
    description: "Elevate your bedside with this elegant tall nightstand. Featuring a crisp white finish and a graceful gold frame, it offers both closed drawers and an open shelf for curated display.",
    details: "2 Drawers + Open Shelf | Gold-Finished Metal Frame | Modern Minimalist Style | Tall Bedside Height | Easy Assembly",
    colors: ["White/Gold"],
    images: [
      "https://m.media-amazon.com/images/I/71K3jA0opaL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/615KUhVhwaL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/711BG1ujzcL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71bFyIAPD7L._AC_SX679_.jpg"
    ]
  },
  {
    id: "23",
    name: "Solid Wood Rotating Bookshelf",
    price: 239.99,
    image: "https://m.media-amazon.com/images/I/8182qWKtljL._AC_SX679_.jpg",
    category: "Accents & Furniture",
    description: "A masterpiece of functional design. This 360° spinning walnut tower maximizes small spaces while keeping your favorite reads within easy reach on silent rolling wheels.",
    details: "6-Tier Solid Wood | 360° Rotating Base | Silent Rolling Wheels | Walnut Finish | Space-Saving Round Design",
    colors: ["Walnut"],
    images: [
      "https://m.media-amazon.com/images/I/8182qWKtljL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71dpBeruzFL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81GQQgn5RML._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81FiXx790+L._AC_SX679_.jpg"
    ]
  },
  {
    id: "24",
    name: "Smart Charging Nightstand",
    price: 52.99,
    image: "https://m.media-amazon.com/images/I/7193hUEZ0gL._AC_SX679_.jpg",
    category: "Accents & Furniture",
    description: "Modern utility meets cozy ambiance. This nightstand features a built-in charging station and an integrated LED light strip to set the perfect mood for your evening tech routine.",
    details: "USB + AC Charging Ports | Integrated LED Light Strip | 2 Fabric Drawers | Storage Shelf | Tech-Ready Design",
    colors: ["Black", "RGB Light"],
    images: [
      "https://m.media-amazon.com/images/I/7193hUEZ0gL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81d9EIbfnaL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/615v1a-yCeL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71fTbQ2SfaL._AC_SX679_.jpg"
    ]
  },
  {
    id: "25",
    name: "Rustic Brown Nightstand Set",
    price: 59.99,
    image: "https://m.media-amazon.com/images/I/81oPNM7OBbL._AC_SX679_.jpg",
    category: "Accents & Furniture",
    description: "Bring a touch of warmth and rustic charm to your bedroom. This set of two nightstands balances wood-textured tops with soft fabric drawers for a gentle, organic feel.",
    details: "Set of 2 | 2 Fabric Drawers each | Open Display Shelf | Rustic Brown Finish | Lightweight and Durable",
    colors: ["Rustic Brown"],
    images: [
      "https://m.media-amazon.com/images/I/81oPNM7OBbL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/91yC2DsUlTL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/815BB1pe3AL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/91z+e+XkIPL._AC_SX679_.jpg"
    ]
  },
  {
    id: "26",
    name: "Folding Storage Ottoman Bench",
    price: 42.99,
    image: "https://m.media-amazon.com/images/I/81iMwitCsLL._AC_SX679_.jpg",
    category: "Accents & Furniture",
    description: "The ultimate end-of-bed companion. This light gray bench offers a comfortable footrest and a hidden storage chest for linens, blankets, or clutter-free living.",
    details: "Folding Design | 660 lb Load Capacity | Hidden Storage | Light Gray Fabric | 30 Inches Long",
    colors: ["Light Gray"],
    images: [
      "https://m.media-amazon.com/images/I/81iMwitCsLL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/51HHHRzCLmL._AC_.jpg",
      "https://m.media-amazon.com/images/I/81GKkwQ2x-L._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/91OmWomWaFL._AC_SX679_.jpg"
    ]
  },
  {
    id: "27",
    name: "Tall Vertical Shoe Organizer",
    price: 29.99,
    image: "https://m.media-amazon.com/images/I/51Bpdm54rML._AC_SX679_.jpg",
    category: "Accents & Furniture",
    description: "Keep your bedroom sanctuary organized and clean. This narrow, 10-tier vertical rack features a dustproof cover to preserve your footwear in style.",
    details: "10-Tier Vertical Storage | Dustproof Non-Woven Cover | Space-Saving Narrow Design | Capacity: 20-22 Pairs",
    colors: ["Black"],
    images: [
      "https://m.media-amazon.com/images/I/51Bpdm54rML._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/61iSUC7HrTL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/61AoJ-b-UGL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/618FYf81MuL._AC_SX679_.jpg"
    ]
  },
  {
    id: "28",
    name: "Corner Shelf with LED Mood Light",
    price: 65.99,
    image: "https://m.media-amazon.com/images/I/61kXaDlLiNL._AC_SY879_.jpg",
    category: "Accents & Furniture",
    description: "Turn an empty corner into a luminous showcase. This tall 6-tier standing shelf features integrated LED lighting to highlight your favorite accents and create a cozy glow.",
    details: "6-Tier Standing Shelf | Integrated LED Lighting | Metal & Wood Frame | Corner-Saving Design | 67.5” Tall",
    colors: ["White"],
    images: [
      "https://m.media-amazon.com/images/I/61kXaDlLiNL._AC_SY879_.jpg",
      "https://m.media-amazon.com/images/I/61BeBvDtSaL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/719q8mjzs8L._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/715bgS7EZ6L._AC_SX679_.jpg"
    ]
  }
];

export type Category = 
  | "Bedding Essentials" 
  | "Layering & Textiles" 
  | "Ambient Lighting" 
  | "Accents & Furniture";

  export const filters = {
  category: ["All", "Bedding Essentials", "Layering & Textiles", "Ambient Lighting", "Accents & Furniture"],
};