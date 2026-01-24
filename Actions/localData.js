// Local product data for offline functionality
// This replaces API calls with static data

export const localProducts = [
  {
    _id: "1",
    name: "Luxor Marker Black",
    category: "Markers",
    price: "₹25",
    description: "Premium quality black marker for all writing needs",
    image: "/assets/new_launches/marker_blue.png",
    images: [
      "/assets/new_launches/marker_blue.png",
      "/assets/new_launches/Outline-Marker-Purple.png",
      "/assets/new_launches/Broadtip Marker.png"
    ],
    features: ["Waterproof", "Quick-drying", "Non-toxic"],
    specifications: {
      tip: "Bullet Tip",
      body: "Plastic",
      color: "Black",
      quantity: "Pack of 12"
    }
  },
  {
    _id: "2", 
    name: "Luxor Fineliner Pen",
    category: "Pens",
    price: "₹45",
    description: "Precision fineliner pen for detailed work",
    image: "/assets/new_launches/metal_pens.png",
    images: [
      "/assets/new_launches/metal_pens.png",
      "/assets/new_launches/Elan.png"
    ],
    features: ["0.4mm Tip", "Archival Quality", "Smudge-proof"],
    specifications: {
      tip: "0.4mm",
      ink: "Waterproof",
      body: "Metal",
      color: "Black",
      quantity: "Pack of 6"
    }
  },
  {
    _id: "3",
    name: "Luxor Gel Pen Set",
    category: "Pens", 
    price: "₹120",
    description: "Smooth gel pens in assorted colors",
    image: "/assets/new_launches/Elan.png",
    images: [
      "/assets/new_launches/Elan.png",
      "/assets/new_launches/ikon_6.png"
    ],
    features: ["Gel Ink", "Comfort Grip", "Assorted Colors"],
    specifications: {
      tip: "0.7mm",
      ink: "Gel",
      body: "Plastic",
      colors: "Black, Blue, Red, Green",
      quantity: "Pack of 12"
    }
  },
  {
    _id: "4",
    name: "Luxor Highlighter Set",
    category: "Markers",
    price: "₹85",
    description: "Fluorescent highlighters for study and office",
    image: "/assets/new_launches/Fluorescent.png",
    images: [
      "/assets/new_launches/Fluorescent.png",
      "/assets/new_launches/Pastel.png"
    ],
    features: ["Fluorescent Ink", "Chisel Tip", "Multiple Colors"],
    specifications: {
      tip: "Chisel",
      ink: "Fluorescent",
      body: "Plastic",
      colors: "Yellow, Pink, Green, Blue, Orange",
      quantity: "Pack of 6"
    }
  },
  {
    _id: "5",
    name: "Luxor Whiteboard Markers",
    category: "Markers",
    price: "₹150",
    description: "Professional whiteboard markers for presentations",
    image: "/assets/new_launches/WBM 120 Red.png",
    images: [
      "/assets/new_launches/WBM 120 Red.png",
      "/assets/new_launches/MetallicMarkerGold11.png"
    ],
    features: ["Low Odor", "Erasable", "Bold Colors"],
    specifications: {
      tip: "Bullet",
      ink: "Dry Erase",
      body: "Aluminum",
      colors: "Black, Red, Blue, Green",
      quantity: "Pack of 8"
    }
  },
  {
    _id: "6",
    name: "Luxor Metallic Markers",
    category: "Markers",
    price: "₹95",
    description: "Premium metallic finish markers",
    image: "/assets/new_launches/MetallicMarkerGold11.png",
    images: [
      "/assets/new_launches/MetallicMarkerGold11.png",
      "/assets/new_launches/trendypaintMarkerProject1.png"
    ],
    features: ["Metallic Finish", "Water-based", "Non-toxic"],
    specifications: {
      tip: "Bullet",
      ink: "Water-based",
      body: "Plastic",
      colors: "Gold, Silver, Bronze, Copper",
      quantity: "Pack of 6"
    }
  }
];

export const localCategories = [
  {
    _id: "1",
    category: "Markers",
    cat_type: "marker",
    description: "Professional markers for all writing needs",
    image: "/assets/broadline-marker.png"
  },
  {
    _id: "2",
    category: "Pens", 
    cat_type: "pen",
    description: "Quality pens for writing and drawing",
    image: "/assets/popular1.png"
  },
  {
    _id: "3",
    category: "Art Supplies",
    cat_type: "art",
    description: "Creative art supplies and materials",
    image: "/assets/product1.png"
  }
];

export const popularProducts = [
  {
    _id: "1",
    name: "Luxor PCW",
    image: "/assets/new_launches/PCW.jpg",
    price: "₹299"
  },
  {
    _id: "2", 
    name: "Luxor Kids Collection",
    image: "/assets/new_launches/kids.png",
    price: "₹199"
  },
  {
    _id: "3",
    name: "Luxor Nero",
    image: "/assets/new_launches/neronew.png", 
    price: "₹249"
  },
  {
    _id: "4",
    name: "Luxor Vista",
    image: "/assets/new_launches/vistanew.png",
    price: "₹279"
  }
];

// Mock API functions that return local data
export const getAllGlobalProducts = (_id, page_no) => {
  return Promise.resolve({
    status: true,
    result: { 
      cat_wise_products: localProducts.slice(0, 12) 
    }
  });
};

export const getAllPens = () => {
  return Promise.resolve({
    status: true,
    result: localProducts.filter(p => p.category === "Pens")
  });
};

export const getMarkerCategory = () => {
  return Promise.resolve({
    status: true,
    result: localProducts.filter(p => p.category === "Markers")
  });
};

export const allProductsCategory = () => {
  return Promise.resolve({
    status: true, 
    result: localCategories
  });
};

export const newProductCategory = () => {
  return Promise.resolve({
    status: true,
    result: localCategories
  });
};

export const newProductSubCategory = () => {
  return Promise.resolve({
    status: true,
    result: localCategories
  });
};

export const getCategoryWiseProducts = (_id, cat_type, page_no) => {
  let filtered = localProducts;
  if (cat_type) {
    filtered = localProducts.filter(p => p.cat_type === cat_type);
  }
  return Promise.resolve({
    status: true,
    result: { cat_wise_products: filtered }
  });
};

export const getProductDetail = async (_id) => {
  const product = localProducts.find(p => p._id === _id);
  return Promise.resolve({
    status: true,
    result: { 
      product: product || localProducts[0], 
      popular_pics: popularProducts 
    }
  });
};

export const getProductByOnlyId = (model) => {
  const product = localProducts.find(p => p._id === model._id);
  return Promise.resolve({
    status: true,
    result: product || localProducts[0]
  });
};
