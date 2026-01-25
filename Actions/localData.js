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
    _id: "6539114d1d035f1f14e54c9c",
    name: "Pens",
    created_on: "2023-10-25T12:59:57.480Z",
    file_name: "Pen17025380983401709620320220.jpg",
    master_folder_name: "master_prd_icons/pens"
  },
  {
    _id: "653912250252d0fe24b4346c",
    name: "Markers",
    created_on: "2023-10-25T13:03:33.877Z",
    file_name: "Markers17025385368091709621365183.jpg",
    master_folder_name: "master_prd_icons/markers"
  },
  {
    _id: "653911ba8e6902ca42c1d6e9",
    name: "Highlighters",
    created_on: "2023-10-25T13:01:46.732Z",
    file_name: "Highlighter170253812579317096204171381.jpg",
    master_folder_name: "master_prd_icons/heighlighters",
    product_folder_name: "master_prd_icons/heighlighters/product_images"
  },
  {
    _id: "653911ce6d8ae7473f9325a7",
    name: "Art & Hobby",
    created_on: "2023-10-25T13:02:06.376Z",
    file_name: "Art & Hobby17025381671551709620936301.jpg",
    master_folder_name: "master_prd_icons/art_hobby",
    product_folder_name: "master_prd_icons/art_hobby/product_images"
  },
  {
    _id: "653912399a126cb9bb92f68c",
    name: "Kids Colouring",
    created_on: "2023-10-25T13:03:53.668Z",
    file_name: "Kids Coloring17025385558741709621464766.jpg",
    master_folder_name: "master_prd_icons/kids_coloring",
    product_folder_name: "master_prd_icons/kids_coloring/product_images"
  },
  {
    _id: "653911fdeb3253e94826bcac",
    name: "Notebook and Stationery",
    created_on: "2023-10-25T13:02:53.437Z",
    file_name: "Note Book17025382062711709621221435.png",
    master_folder_name: "master_prd_icons/notebook_and_stationary",
    product_folder_name: "master_prd_icons/notebook_and_stationary/product_images"
  },
  {
    _id: "6539120edb6bdba29040cb2c",
    name: "Value Packs",
    created_on: "2023-10-25T13:03:10.423Z",
    file_name: "VAlue Pack17025382296001709621159588.png",
    master_folder_name: "master_prd_icons/value_packs",
    product_folder_name: "master_prd_icons/value_packs/product_images"
  }
];

// Subcategories for Pens
export const localPenSubCategories = [
  {
    _id: "6537d22343346433a3754325",
    category: "metal pens",
    color: "all colors",
    created_on: "2023-10-24T14:18:11.102Z",
    file_name: "metal_pen.jpg",
    master_folder_name: "master_prd_icons/pens/metal_pens",
    product_folder_name: "master_prd_icons/pens/metal_pens/product_images",
    product_category_type: "6539114d1d035f1f14e54c9c" // Links to Pens category
  },
  {
    _id: "6537d24c6c7d38d8e947c8fa",
    category: "everyday writing",
    color: "all colors",
    created_on: "2023-10-24T14:18:52.052Z",
    file_name: "every_day_writing.jpg",
    master_folder_name: "master_prd_icons/pens/everyday_writing",
    product_folder_name: "master_prd_icons/pens/everyday_writing/product_images",
    product_category_type: "6539114d1d035f1f14e54c9c" // Links to Pens category
  }
];

// Subcategories for Markers
export const localMarkerSubCategories = [
  {
    _id: "65397016d2ea5f856977cf94",
    category: "Permanent Markers",
    created_on: "2023-10-25T19:44:22.460Z",
    file_name: "permament_markers.jpg",
    master_folder_name: "master_prd_icons/markers/permanent_markers",
    product_folder_name: "master_prd_icons/markers/permanent_markers/product_images",
    product_category_type: "653912250252d0fe24b4346c" // Links to Markers category
  },
  {
    _id: "65397048d7b96ccee7f63082",
    category: "WHITEBOARD MARKERS",
    created_on: "2023-10-25T19:45:12.879Z",
    file_name: "whibard_nakrers.jpg",
    master_folder_name: "master_prd_icons/markers/whiteboard_markers",
    product_folder_name: "master_prd_icons/markers/whiteboard_markers/product_images",
    product_category_type: "653912250252d0fe24b4346c" // Links to Markers category
  },
  {
    _id: "65397066f05601bf5d55de41",
    category: "Whiteboard Care Kits",
    created_on: "2023-10-25T19:45:42.984Z",
    file_name: "care_kits.jpeg",
    master_folder_name: "master_prd_icons/markers/whiteboard_care_kits",
    product_folder_name: "master_prd_icons/markers/whiteboard_care_kits/product_images",
    product_category_type: "653912250252d0fe24b4346c" // Links to Markers category
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
