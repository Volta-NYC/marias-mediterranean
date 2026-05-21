import Link from "next/link"

type MenuItem = {
  name: string
  price?: string
  description?: string
  origin?: string
  glutenFree?: boolean
}

type MenuSubsection = {
  title: string
  eyebrow?: string
  note?: string
  items: MenuItem[]
}

type MenuCategory = {
  id: string
  title: string
  image: string
  description: string
  items: string[]
  intro: string
  subsections: MenuSubsection[]
}

const sideChoices = [
  "Rice",
  "Vegetable rice",
  "Lemon potatoes",
  "Fresh cut fries",
  "Steamed vegetables",
]

const seafoodSideChoices = [...sideChoices, "Horta"]

const menuCategories: MenuCategory[] = [
  {
    id: "dinner-children",
    title: "Dinner & Children's Menu",
    image: "/img/menu/dinnerchildren.avif",
    description: "The full dinner menu, family plates, seafood, meats, sides, and children's options.",
    items: ["Greek spreads", "Whole fish", "Seafood", "Children's plates"],
    intro: "Greek seafood, meats, specialties, starters, and children's plates served for the full Maria's dinner experience.",
    subsections: [
      {
        title: "Dips & Chips",
        items: [
          { name: "Choices of three spreads, pita chips", price: "17" },
          { name: "Six spreads", price: "25" },
          { name: "Pikilia, choices of three spreads", price: "15" },
          { name: "Pikilia, six spreads", price: "22" },
          { name: "Individual spreads", price: "10", description: "Tirokafteri, tzatziki, hummus, taramosalata, melitzanosalata, and skordalia." },
          { name: "Dolmades", price: "12", description: "Stuffed grape leaves.", glutenFree: true },
          { name: "Raw bar", price: "MP", description: "Oysters or clams on the half shell.", glutenFree: true },
        ],
      },
      {
        title: "Salads",
        note: "Add chicken 10/17, shrimp 10, salmon 16, or octopus 15 to any salad.",
        items: [
          { name: "Seafood Salad", price: "23", description: "Shrimp, calamari, octopus, vegetables, beans, and herbs.", glutenFree: true },
          { name: "Greek", price: "16", description: "Romaine, tomatoes, cucumber, peppers, onions, scallions, dill, kalamata olives, pepperoncini, dolmades, and feta with olive oil vinaigrette.", glutenFree: true },
          { name: "Horiatiki", price: "18", description: "Tomatoes, cucumber, peppers, onions, kalamata olives, pepperoncini, dolmades, and feta with olive oil vinaigrette.", glutenFree: true },
          { name: "Beets", price: "16", description: "Homemade beets over romaine with olive oil vinaigrette and fresh garlic.", glutenFree: true },
          { name: "Prasini", price: "15", description: "Romaine, scallions, dill, olives, and feta with olive oil vinaigrette.", glutenFree: true },
          { name: "Mixed Greens", price: "17", description: "Baby greens, cranberries, and feta tossed in homemade balsamic vinaigrette.", glutenFree: true },
          { name: "Politiki", price: "17", description: "Cabbage, carrots, celery, and roasted peppers with olive oil and lemon dressing. Add beets 21.", glutenFree: true },
          { name: "Mediterranean Bean Salad", price: "16", description: "Variety of beans, vegetables, and herbs over romaine with homemade olive oil and lemon juice dressing.", glutenFree: true },
        ],
      },
      {
        title: "Orektika",
        eyebrow: "Starters",
        items: [
          { name: "Spanakopita", price: "11", description: "Spinach pie." },
          { name: "Stuffed Portobello", price: "16", description: "Portobello, spinach, and feta.", glutenFree: true },
          { name: "Kolokithakia", price: "20", description: "Pan fried zucchini." },
          { name: "Gigantes", price: "14", description: "Giant beans oven baked in tomato sauce.", glutenFree: true },
          { name: "Spitiko Loukaniko", price: "18", description: "Homemade spicy or sweet sausage.", glutenFree: true },
          { name: "Saganaki", price: "17", description: "Pan fried kefalograviera cheese." },
          { name: "Feta Saganaki", price: "17", description: "Sesame coated and pan fried, topped with honey and craisins." },
          { name: "Haloumi", price: "13", description: "Grilled goat cheese with grilled tomatoes on pita." },
          { name: "Stuffed Clams", price: "16", description: "Crabmeat and vegetables." },
          { name: "Calamari", price: "20", description: "Fried or grilled.", glutenFree: true },
          { name: "Midia Axnista", price: "25", description: "Mussels, tomato sauce, ouzo, and feta.", glutenFree: true },
          { name: "Spinach Parmesan", price: "25", description: "Sauteed spinach with parmesan cream sauce." },
          { name: "Octopus", price: "28", description: "Charcoal grilled with balsamic glaze.", glutenFree: true },
          { name: "Keftedes", price: "12", description: "Pan fried Greek style meatballs." },
          { name: "Crab Cake", price: "16/29", description: "Crabmeat and vegetables, pan fried and served with homemade sauce." },
          { name: "Loaded Hummus", price: "19", description: "Hummus topped with sauteed meat, diced red onions, tomatoes, and olives. Served with pita chips." },
          { name: "Maridaki", price: "20", description: "Pan fried smelts." },
        ],
      },
      {
        title: "Soups",
        items: [
          { name: "Avgolemono", price: "12", description: "Chicken soup." },
          { name: "Fakes", price: "12", description: "Lentil soup." },
        ],
      },
      {
        title: "Kreatika",
        eyebrow: "Meats",
        note: `Choose one side: ${sideChoices.join(", ")}. Add side salad 5.`,
        items: [
          { name: "Chicken Souvlaki", price: "24", description: "Chargrilled on a skewer.", glutenFree: true },
          { name: "Beef Souvlaki", price: "32", description: "Chargrilled on a skewer.", glutenFree: true },
          { name: "Pork Souvlaki", price: "24", description: "Chargrilled on a skewer.", glutenFree: true },
          { name: "Lamb Souvlaki", price: "32", description: "Chargrilled on a skewer.", glutenFree: true },
          { name: "Traditional Bifteki", price: "24", description: "Beef, pork, and lamb ground with herbs." },
          { name: "Chicken Bifteki", price: "24", description: "Chargrilled chicken." },
          { name: "Grilled Chicken Breast", price: "22" },
          { name: "Gemisto", price: "34", description: "Breast stuffed with spinach and feta, topped with a creamy light garlic sauce." },
          { name: "Voreio", price: "32", description: "Grilled breast topped with sauteed vegetables, olives, and feta cheese over Greek egg noodles." },
          { name: "Kotobacon", price: "30", description: "Cubes of grilled breast wrapped in bacon.", glutenFree: true },
          { name: "Pork Chops", price: "30", description: "Chargrilled." },
          { name: "Baby Lamb Chops", price: "44", description: "Chargrilled." },
          { name: "Surf & Turf", price: "MP", description: "Add grilled shrimp 15 or lobster tail MP to your choice of meat." },
          { name: "Meat Platter", price: "64 / 119", description: "Small or large assortment of meats." },
        ],
      },
      {
        title: "Thalassina",
        eyebrow: "Seafood",
        note: `Choose one side: ${seafoodSideChoices.join(", ")}. Add side salad 5.`,
        items: [
          { name: "Fish of the Day", price: "MP", description: "Chargrilled and dressed with olive oil and lemon juice.", glutenFree: true },
          { name: "Lavraki", price: "MP", description: "Branzino.", glutenFree: true },
          { name: "Orata", price: "MP", description: "Gilt-head bream, European porgy.", glutenFree: true },
          { name: "Bakaliarakia", price: "24", description: "Whole fried whiting." },
          { name: "Sardines", price: "24", description: "Grilled or fried.", glutenFree: true },
          { name: "Shrimp", price: "30", description: "Grilled or fried.", glutenFree: true },
          { name: "Shrimp Scampi", price: "32" },
          { name: "Swordfish Souvlaki", price: "34", glutenFree: true },
          { name: "Swordfish Steak", price: "36", description: "Chargrilled and topped with a creamy scallion sauce.", glutenFree: true },
          { name: "Sole", price: "33", description: "Broiled and topped with creamy parsley and light garlic sauce.", glutenFree: true },
          { name: "Salmon", price: "38", description: "Broiled and topped with lemon, butter, and light garlic sauce." },
          { name: "Gemisto Flounder", price: "38", description: "Stuffed with spinach and feta, topped with a creamy light garlic sauce.", glutenFree: true },
          { name: "Scallops", price: "37", description: "Broiled and topped with lemon, butter, and light garlic sauce." },
          { name: "Shrimp & Scallops", price: "43" },
        ],
      },
      {
        title: "Greek Specialties",
        items: [
          { name: "Pastichio", price: "25", description: "Layered pasta, ground beef, and bechamel. Served with Greek salad." },
          { name: "Mousaka", price: "28", description: "Layered eggplant, potatoes, ground beef, and bechamel. Served with Greek salad." },
          { name: "Vegetarian Mousaka", price: "28", description: "Layered eggplant, potatoes, lentil, zucchini, and bechamel. Served with Greek salad." },
          { name: "Kokkinisto", price: "29", description: "Boneless short rib stew served over rice.", glutenFree: true },
          { name: "Lamb Shank", price: "MP", description: "Slow cooked with vegetables in a light tomato sauce. Served with orzo." },
          { name: "Garides Saganaki", price: "36", description: "Sauteed with vegetables and feta in a light tomato sauce. Served over white or vegetable rice.", glutenFree: true },
        ],
      },
      {
        title: "Children's Menu",
        items: [
          { name: "Chicken Fingers", price: "18" },
          { name: "Hamburger", price: "17" },
          { name: "Cheese Burger", price: "18" },
          { name: "Chicken or Pork Souvlaki", price: "17", glutenFree: true },
          { name: "Fried Shrimp", price: "21" },
          { name: "Pita Pizza", price: "8" },
          { name: "Pasta", price: "12", description: "Choice of parmesan cheese or marinara. Add chicken 9." },
        ],
      },
      {
        title: "For The Table",
        items: [
          { name: "Fresh Cut Fries", price: "10", glutenFree: true },
          { name: "Lemon Potatoes", price: "10", glutenFree: true },
          { name: "White Rice", price: "8", glutenFree: true },
          { name: "Steamed Vegetables", price: "12", glutenFree: true },
          { name: "Vegetable Rice", price: "10", glutenFree: true },
          { name: "Horta", price: "10", glutenFree: true },
          { name: "Grilled Vegetables", price: "20", glutenFree: true },
        ],
      },
    ],
  },
  {
    id: "lunch",
    title: "Lunch",
    image: "/img/menu/lunch.avif",
    description: "Monday through Saturday lunch plates from 11 am to 3 pm.",
    items: ["Platters", "Greek specialties", "Salads", "Fresh sides"],
    intro: "Available Monday through Saturday from 11 am to 3 pm, with platters, Greek specialties, and salads.",
    subsections: [
      {
        title: "Platters",
        note: "Choice of side: lemon potatoes, fresh cut fries, steamed vegetables, white rice, or vegetable rice.",
        items: [
          { name: "Grilled Chicken Breast", price: "20", description: "Marinated char grilled chicken breast." },
          { name: "Souvlaki Platter", price: "22", description: "Choice of chicken or pork souvlaki." },
          { name: "Bifteki", price: "22", description: "Choice of traditional pork, beef, and lamb patties or chicken patties." },
          { name: "Shrimp", price: "22", description: "Fried or grilled shrimp." },
          { name: "Stuffed Portobello", price: "20", description: "Portobello mushroom stuffed with spinach and feta." },
        ],
      },
      {
        title: "Greek Specialties",
        note: "Served with Greek salad.",
        items: [
          { name: "Mousaka", price: "25", description: "Layered potatoes, eggplants, and ground beef topped with bechamel." },
          { name: "Vegetarian Mousaka", price: "25", description: "Layered potatoes, eggplants, zucchini, and lentils topped with bechamel." },
          { name: "Pastichio", price: "23", description: "Layered casserole of pasta and ground beef topped with bechamel." },
        ],
      },
      {
        title: "Salads",
        note: "Add chicken 10/17, shrimp 10, salmon or octopus 15.",
        items: [
          { name: "Greek", price: "13" },
          { name: "Prasini", price: "12" },
          { name: "Maria's", price: "14" },
          { name: "Horiatiki", price: "16" },
        ],
      },
    ],
  },
  {
    id: "catering",
    title: "Catering",
    image: "/img/menu/catering.avif",
    description: "Off-premise catering for gatherings, office meals, holidays, and family events.",
    items: ["Greek salad trays", "Spanakopitakia", "Souvlaki", "Lemon potatoes"],
    intro: "Greek salads, starters, entrees, and sides prepared for family gatherings, holidays, and off-premise events.",
    subsections: [
      {
        title: "Salads",
        items: [
          { name: "Greek Salad", price: "39" },
          { name: "Mixed Greens", price: "39", description: "With cranberry and feta." },
          { name: "Politiki", price: "39", description: "Cabbage, carrots, celery, and roasted red peppers." },
          { name: "Prasini", price: "34" },
          { name: "Mediterranean Cold Bean Salad", price: "39" },
        ],
      },
      {
        title: "Starters",
        items: [
          { name: "Spanakopitakia", price: "2.25 pc", description: "10 pc. 21, 20 pc. 38, 40 pc. 74." },
          { name: "Dips & Chips", price: "34 / 49", description: "Traditional spreads with fried pita chips. 3 spreads for 6-8 people 34. 5 spreads for 10-14 people 49." },
          { name: "Fried Calamari", price: "49" },
        ],
      },
      {
        title: "Entrees",
        items: [
          { name: "Chicken Souvlaki", price: "69", description: "10 skewers." },
          { name: "Pork Souvlaki", price: "69", description: "10 skewers." },
          { name: "Beef Souvlaki", price: "95", description: "8 flank steak skewers." },
          { name: "Grilled Chicken Breast", price: "64" },
          { name: "Voreio Chicken", price: "75", description: "Grilled chicken breast topped with sauteed vegetables, olives, and feta cheese. Served over hilopites, Greek egg noodles." },
          { name: "Chicken Bifteki", price: "69", description: "10 Greek style chicken patties." },
          { name: "Bifteki", price: "69", description: "10 Greek style lamb, pork, and beef patties." },
          { name: "Fried Shrimp", price: "74" },
          { name: "Grilled Shrimp", price: "74" },
          { name: "Shrimp Saganaki", price: "99", description: "Sauteed shrimp with fresh tomatoes, peppers, and feta over rice." },
          { name: "Salmon Fillet", price: "90", description: "4 fillets topped with lemon butter sauce." },
          { name: "Fillet of Sole", price: "80", description: "5 fillets topped with garlic cream sauce." },
          { name: "Pastichio", price: "70", description: "8-10 portions." },
          { name: "Mousaka", price: "80", description: "8-10 portions." },
          { name: "Vegetarian Mousaka", price: "80", description: "8-10 portions." },
          { name: "Keftedes", price: "69", description: "Fried meatballs. Available in traditional pork, beef, and lamb, or chicken." },
        ],
      },
      {
        title: "Sides",
        items: [
          { name: "Fresh Cut Fries", price: "30" },
          { name: "Lemon Potatoes", price: "30" },
          { name: "Mixed Vegetable Rice", price: "30" },
          { name: "Grilled Vegetables", price: "54" },
          { name: "Steamed Vegetables", price: "44" },
          { name: "White Rice", price: "25" },
        ],
      },
    ],
  },
  {
    id: "wine-spirits",
    title: "Wine & Spirits",
    image: "/img/menu/wine.avif",
    description: "Bottles, cocktails, and pours chosen to sit naturally with bright Greek food.",
    items: ["Greek wines", "Seafood pairings", "Classic cocktails", "Dinner bottles"],
    intro: "Greek bottles, international wines, cocktails, spirits, ouzo, and regional pours selected for Mediterranean food.",
    subsections: [
      {
        title: "Red Wines",
        items: [
          { name: "Cabernet Sauvignon Domaine Bousquet", price: "10/40", description: "Organic, fresh and clean with berry aromas and flavors. Medium body.", origin: "Mendoza, Argentina" },
          { name: "Merlot Domaine Bousquet", price: "10/40", description: "Organic, red fruit and spicy aromas. Medium body with ripe fruit and velvety tannins.", origin: "Mendoza, Argentina" },
          { name: "Malbec Domaine Bousquet", price: "10/40", description: "Organic, mushrooms, figs, and berry aromas. Medium body and round velvety tannins.", origin: "Mendoza, Argentina" },
          { name: "Pinot Noir Le Grand", price: "10/40", description: "Unique French pedigree. Spiced cherry flavor and aromas. Pairs beautifully with fish.", origin: "Limoux, Southern France" },
          { name: "Syrah 'The Black Sheep' Nico Lazaridi", price: "10/40", description: "Mature red fruits, plum, hints of pepper, soft tannins, and fruity aftertaste.", origin: "Pangeon, Greece" },
          { name: "Merlot 'Elias' Estate Andriopoulos", price: "30", description: "Soft, fruity, and smooth wine with plum undertones.", origin: "Long Island" },
          { name: "Merlot Hatzimichalis", price: "70", description: "Vibrant deep red color with mocha and vanilla aromas. Medium body.", origin: "Atlanti Valley, Greece" },
          { name: "Chianti", price: "40", description: "Aged 12 months in oak barrels. Intense lingering aroma and dry velvety flavor.", origin: "Italy" },
          { name: "Pinot Noir Papaioannou", price: "60", description: "Oak matured for 12 months. Earth driven layers, cedar, strawberry, cherry, and savory finish.", origin: "Xerocambos private vineyards, Greece" },
          { name: "Refosco Domaine Merkouri", price: "50", description: "Red fruits, chocolate, coffee, vanilla, and cinnamon. Medium structure with fine tannins.", origin: "Letrini, Peloponese region, Greece" },
          { name: "Cabernet Sauvignon Hatzimichalis", price: "45", description: "Blackberry and blackcurrant fruit with a long savory finish.", origin: "Drama, Greece" },
          { name: "Cabernet Franc 'Cava' Amethystos", price: "90", description: "Domaine Costa Lazaridi. Blackberry and blackcurrant fruit with a long savory finish.", origin: "Drama, Greece" },
          { name: "Cabernet Sauvignon 'Kapnias' Hatzimichalis", price: "65", description: "Matured 24 months in new French oak barrels with blackcurrants, dark berries, and vanilla.", origin: "Atlanti Valley, Greece" },
          { name: "Amethystos Rouge", price: "45", description: "Cabernet Sauvignon, Agiorgitiko, and Merlot. Red forest fruit, cherry jam, spices, and oak.", origin: "Drama, Greece" },
          { name: "Oenotria Land", price: "75", description: "Cabernet Sauvignon and Agiorgitiko with black fruit, vanilla, chocolate, spices, and long finish.", origin: "Drama, Greece" },
          { name: "Agiorgitiko 'Feast' Semeli Winery", price: "30", description: "Cherry and blueberry aromas. Balanced acidity and light body.", origin: "Chrisohou, Naossa, Greece" },
        ],
      },
      {
        title: "White Wines",
        items: [
          { name: "Pinot Grigio", price: "9/25", description: "Light, crisp, and dry with lime and pear notes.", origin: "Italy" },
          { name: "Rhoditis Kouros", price: "9/32", description: "Floral nose, orange, lemon, and kiwi. Medium body and light finish.", origin: "Patra, Greece" },
          { name: "Riesling Starling Castle", price: "9/32", description: "Semi-sweet with citrus, pear, fruity mid palate, and crisp acidity.", origin: "Mosel, Germany" },
          { name: "Chardonnay Le Grand", price: "10/40", description: "Lime, mango, toasted vanilla, lemon-lime palate, subtle oak, and long finish.", origin: "Languedoc-Roussillon, France" },
          { name: "Pinot Noir Rose Maison Nicolas", price: "9/36", description: "Herbal and ripe fruit scents with plum and cherry tones. Medium palate.", origin: "Protegee, France" },
          { name: "Sauvignon Blanc Overstone", price: "9/36", description: "Aromatic nose, crisp dry wine with zesty gooseberry and balanced finish.", origin: "Malborough, New Zealand" },
          { name: "Chardonnay Hatzimichalis", price: "46", description: "Fresh, crisp, subtle oak, citrus, white peach, tropical fruit, honey, vanilla, and long finish.", origin: "Atlanti Valley, Greece" },
          { name: "Chardonnay Elias", price: "30", description: "Cool climate buttery Chardonnay with medium body and citrus flavors.", origin: "Long Island" },
          { name: "Pinot Grigio Santa Margherita", price: "65", description: "Clean and crisp with intense aroma, bone-dry taste, and Golden Delicious apple flavor.", origin: "Alto Adige, Italy" },
          { name: "Pinot Grigio San Angelo", price: "49", description: "Pear, peach, anise, and honey. Fruity, crisp, and refreshing.", origin: "Tuscany, Italy" },
          { name: "Sauvignon Blanc 'Magic Mountain' Nico Lazaridi", price: "80", description: "White peach, mirabel, jasmine, lily, butter, citrus tone, medium body, and long finish.", origin: "Drama, Greece" },
          { name: "Malagouzia Domaine Costa Lazaridi", price: "50", description: "White flowers, peach, apricot, round body, refreshing acidity, and long finish.", origin: "Drama, Macedonia, Greece" },
          { name: "Moschofilero 'Feast' Semeli Winery", price: "40", description: "Rose petals, lemon blossom, citrus, fruit-driven balance, and medium acidity.", origin: "Chrisohou, Naossa, Greece" },
          { name: "Assyrtiko", price: "55", description: "Santorini grape with minerality, exuberant palate, crisp acidity, and long finish.", origin: "Santorini, Greece" },
          { name: "Prosecco", price: "12/36", description: "Fresh pear, pineapple, bright citrus, creaminess, and a touch of sparkle.", origin: "Italy" },
          { name: "White Zinfandel", price: "10", description: "Floral and tropical aromas with strawberry, peach, raspberry, and sweetness.", origin: "California" },
          { name: "Moscato", price: "12", description: "Delicately sweet with peach, pear, apricot, white petals, and sage." },
        ],
      },
      {
        title: "Spirits",
        items: [
          "Grey Goose", "Kettle One", "Titos", "Nue", "Tanqueray", "Bombay Sapphire", "Hendricks", "Grace Gin", "Jose Cuervo: Silver & Gold", "Patron Silver", "Heraduras", "Don Julio", "The Macallan: 15 year, Double Cask & 12 year", "Chivas Regal", "Johnnie Walker: Black, Green & Red", "Glen Levit", "Dewars: 15 year, 12 year & White Label", "Jack Daniels", "Knob Creek", "Bulliet Bourbon", "Maker's Mark", "Jameson", "Hennessy", "Seagrams 7 Crown", "Metaxa 7 Star", "Disaronno Amaretto", "Remy Martin", "Courvoisier Cognac", "Bacardi: Silver & Gold", "Sailor Jerry's Spiced", "And Many More",
        ].map((name) => ({ name })),
      },
      {
        title: "Greek Spirits",
        items: [
          { name: "Sambuca: White & Black" },
          { name: "CiVidina Grappa" },
          { name: "Limoncello" },
          { name: "Tsipouro" },
          { name: "Idoniko", price: "7/19" },
          { name: "Katsaros Family", price: "8" },
          { name: "Tsilili Muscat", price: "30" },
          { name: "Tsilili Family", price: "22" },
          { name: "Agioneri (Meteora)", price: "12", description: "Aged 1 year in oak barrel." },
          { name: "Methexis Cigar", price: "16", description: "Aged 10 years in smoked aged barrel." },
        ],
      },
      {
        title: "Ouzo",
        items: [
          { name: "Plomari", price: "6/16" },
          { name: "Kazanisto", price: "7/18" },
        ],
      },
      {
        title: "Regional",
        items: [
          { name: "Tsikoudia Haraki (Cretan)", price: "8" },
          { name: "Kretaraki (Cretan)", price: "8" },
          { name: "Rakomelo (Cretan)", price: "8" },
          { name: "Zavania (Cyprus)", price: "9" },
          { name: "Masticha (Chios)", price: "6/10" },
        ],
      },
    ],
  },
  {
    id: "specials",
    title: "Specials",
    image: "/img/menu/specials.avif",
    description: "Seasonal dishes and handcrafted cocktails, available for a limited time.",
    items: ["Seasonal seafood", "Homestyle dishes", "Chef favorites", "Desserts"],
    intro: "Seasonal dishes and handcrafted cocktails, available for a limited time while supplies last.",
    subsections: [
      {
        title: "Today's Specials",
        items: [
          { name: "Summer Salad", description: "Watermelon tossed with diced onions, cucumber, and mint, served over baby arugula and drizzled with a honey balsamic." },
          { name: "Berry on the Blvd", description: "Cocktail of muddled strawberries, Rakomelo Greek honey liqueur, and lemonade." },
        ],
      },
    ],
  },
]

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")
}

function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <div className="rounded-md border border-[#e8dcc4] bg-[#fffaf1] p-4 transition hover:border-[#f7c66b] hover:bg-white hover:shadow-[0_14px_34px_rgba(23,33,28,0.08)]">
      <div className="flex gap-4">
        <h4 className="flex-1 text-xl font-semibold leading-tight">{item.name}</h4>
        {item.price ? (
          <div className="font-serif text-2xl font-semibold leading-none text-[#b6402d]">
            {item.price}
          </div>
        ) : null}
      </div>
      {item.description ? (
        <p className="mt-3 text-sm leading-6 text-[#4f574f]">{item.description}</p>
      ) : null}
      <div className="mt-4 flex flex-wrap gap-2">
        {item.origin ? (
          <span className="rounded-md bg-white px-3 py-2 text-xs font-extrabold uppercase tracking-[0.1em] text-[#24564a]">
            {item.origin}
          </span>
        ) : null}
        {item.glutenFree ? (
          <span className="rounded-md bg-[#eef4ef] px-3 py-2 text-xs font-extrabold uppercase tracking-[0.1em] text-[#24564a]">
            Gluten free
          </span>
        ) : null}
      </div>
    </div>
  )
}

export default function MenuPage() {
  return (
    <div id="menu-top" className="bg-[#fffaf1] text-[#17211c]">
      <a
        href="#menu-top"
        aria-label="Back to top"
        className="fixed bottom-5 right-5 z-40 hidden h-12 w-12 items-center justify-center rounded-full border border-[#f7c66b]/60 bg-[#173f37] text-xl font-bold leading-none text-[#f7c66b] shadow-[0_16px_38px_rgba(23,33,28,0.24)] transition hover:-translate-y-1 hover:bg-[#10251f] sm:flex"
      >
        ↑
      </a>

      <section className="relative min-h-[60vh] overflow-hidden">
        <img
          src="/img/menuhero.avif"
          alt="Maria's Mediterranean menu spread"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#111d18]/68" />
        <div className="relative mx-auto flex min-h-[60vh] max-w-7xl flex-col justify-end px-5 pb-12 pt-40 sm:px-8 sm:pt-44 lg:px-10">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#f7c66b] sm:text-sm">
            Menus
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.08] text-white sm:text-5xl">
            Fresh Greek seafood, lunch plates, catering, wine, and daily specials.
          </h1>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="https://www.mariasonbell.com/online-ordering"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#d8452f] px-6 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#b93625]"
            >
              Order Online
            </Link>
            <Link
              href="tel:17182791606"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/70 px-6 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-white hover:text-[#17211c]"
            >
              Call Restaurant
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-18 lg:px-10">
        <div className="mb-8 max-w-3xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#b6402d]">
            Explore The Menu
          </p>
          <h2 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
            Choose a section, then browse the full menu below.
          </h2>
        </div>
        <div className="space-y-6 sm:space-y-8">
          {menuCategories.map((section, index) => (
            <article
              key={section.title}
              className="accent-card grid overflow-hidden rounded-md border bg-white shadow-[0_18px_50px_rgba(23,33,28,0.08)] lg:grid-cols-[0.95fr_1.05fr]"
            >
              <div
                className={`relative min-h-[320px] overflow-hidden bg-[#f8efe0] ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(247,198,107,0.28),transparent_38%)]" />
                <div className="relative flex h-full min-h-[320px] items-center justify-center p-4 sm:p-8">
                  <img
                    src={section.image}
                    alt={`${section.title} menu`}
                    className="max-h-[360px] w-auto max-w-[94%] rounded-sm border border-[#e8dcc4] bg-white object-contain shadow-[0_18px_36px_rgba(23,33,28,0.18)] sm:max-h-[420px] sm:max-w-[88%]"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-10">
                <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#b6402d]">
                  Maria&apos;s Menu
                </p>
                <h2 className="mt-4 text-4xl font-semibold leading-[1.04] sm:text-5xl">
                  {section.title}
                </h2>
                <p className="mt-5 max-w-xl text-[16px] leading-8 text-[#4f574f]">
                  {section.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {section.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md bg-[#eef4ef] px-3 py-2 text-sm font-bold text-[#24564a]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <a
                  href={`#${section.id}`}
                  className="mt-7 inline-flex min-h-12 items-center justify-center rounded-md bg-[#173f37] px-5 text-sm font-extrabold uppercase tracking-[0.12em] text-white transition hover:bg-[#24564a]"
                >
                  View This Section
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[#e8dcc4] bg-white/70 py-5">
        <div className="mx-auto flex max-w-7xl gap-3 overflow-x-auto px-5 sm:px-8 lg:px-10">
          {menuCategories.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="shrink-0 rounded-md border border-[#e8dcc4] bg-white px-4 py-3 text-xs font-extrabold uppercase tracking-[0.12em] text-[#24564a] transition hover:border-[#f7c66b] hover:bg-[#fff4d8]"
            >
              {category.title}
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="space-y-14">
          {menuCategories.map((category) => (
            <section
              key={category.id}
              id={category.id}
              className="scroll-mt-32 rounded-md border border-[#e8dcc4] bg-white p-5 shadow-[0_18px_55px_rgba(23,33,28,0.07)] sm:p-8"
            >
              <div className="grid gap-6 border-b border-[#e8dcc4] pb-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#b6402d]">
                    Full Menu
                  </p>
                  <h2 className="mt-3 text-4xl font-semibold leading-none sm:text-5xl">
                    {category.title}
                  </h2>
                </div>
                <p className="text-[16px] leading-8 text-[#4f574f]">
                  {category.intro}
                </p>
              </div>

              <div className="mt-8 space-y-8">
                {category.subsections.map((subsection) => (
                  <section
                    key={`${category.id}-${subsection.title}`}
                    id={`${category.id}-${slugify(subsection.title)}`}
                    className="scroll-mt-32 rounded-md bg-[#fffaf1] p-4 sm:p-6"
                  >
                    <div className="mb-5 flex flex-col gap-3 border-b border-[#e8dcc4] pb-5 sm:flex-row sm:items-end sm:justify-between">
                      <div>
                        <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#b6402d]">
                          {subsection.eyebrow ?? category.title}
                        </p>
                        <h3 className="mt-2 text-3xl font-semibold leading-none sm:text-4xl">
                          {subsection.title}
                        </h3>
                      </div>
                      {subsection.note ? (
                        <p className="max-w-xl text-sm font-semibold leading-6 text-[#4f574f]">
                          {subsection.note}
                        </p>
                      ) : null}
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      {subsection.items.map((item) => (
                        <MenuItemCard key={`${category.id}-${subsection.title}-${item.name}`} item={item} />
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="bg-[#173f37] py-16 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#f7c66b]">
              Pickup
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight">
              Order online for a 10% pickup discount.
            </h2>
          </div>
          <Link
            href="https://www.mariasonbell.com/online-ordering"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-md bg-white px-6 text-sm font-bold uppercase tracking-[0.12em] text-[#173f37] transition hover:bg-[#f7c66b]"
          >
            Start Order
          </Link>
          <a
            href="#menu-top"
            className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/25 px-6 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:border-[#f7c66b] hover:text-[#f7c66b] sm:hidden"
          >
            Back To Top
          </a>
        </div>
      </section>
    </div>
  )
}
