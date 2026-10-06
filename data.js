// ===============================
// DEER RUN GOLF COURSE - EDITABLE DATA
// Change the values below whenever the course needs an update.
// ===============================

const SITE_DATA = {
  business: {
    name: "Deer Run Golf Course",
    tagline: "9 holes. Great conditions. Good times.",
    address: "3200 Hanover Rd, Horton, MI 49246",
    phone: "517-688-3350",
    bookingUrl: "", // ADD YOUR REAL ONLINE TEE-TIME BOOKING URL HERE
    mapUrl: "https://www.google.com/maps/search/?api=1&query=3200+Hanover+Rd+Horton+MI+49246"
  },

  // These are public-directory hours used as a starting point.
  // Verify them with the course before publishing.
  hours: [
    ["Monday", "8:00 AM – 8:00 PM"],
    ["Tuesday", "8:00 AM – 10:00 PM"],
    ["Wednesday", "8:00 AM – 10:00 PM"],
    ["Thursday", "8:00 AM – 11:00 PM"],
    ["Friday", "8:00 AM – 11:00 PM"],
    ["Saturday", "8:00 AM – 11:00 PM"],
    ["Sunday", "8:00 AM – 8:00 PM"]
  ],

  weeklySpecials: [
    { day: "Monday", title: "Monday Special", description: "Add today's special here.", price: "" },
    { day: "Tuesday", title: "Tuesday Special", description: "Add today's special here.", price: "" },
    { day: "Wednesday", title: "Wednesday Special", description: "Add today's special here.", price: "" },
    { day: "Thursday", title: "Thursday Special", description: "Add today's special here.", price: "" },
    { day: "Friday", title: "Friday Fish Fry", description: "Our popular Friday fish fry. Add current fish, sides and pricing here.", price: "" },
    { day: "Saturday", title: "Saturday Special", description: "Add today's special here.", price: "" },
    { day: "Sunday", title: "Sunday Special", description: "Add today's special here.", price: "" }
  ],

  menu: [
    { category: "Starters", name: "Add appetizer", description: "Replace with your current menu item.", price: "" },
    { category: "Soups & Salads", name: "Seafood Chowder", description: "Add current description.", price: "" },
    { category: "Burgers", name: "Black & Bleu Burger", description: "Add current description and toppings.", price: "" },
    { category: "Salads", name: "Michigan Cherry Salad", description: "Add current description.", price: "" },
    { category: "Sandwiches", name: "Add sandwich", description: "Replace with your current menu item.", price: "" },
    { category: "Dinner", name: "Add dinner entrée", description: "Replace with your current menu item.", price: "" },
    { category: "Fish Fry", name: "Friday Fish Fry", description: "Add current fish choices, sides and pricing.", price: "" }
  ],

  // October 2026 event calendar. Add/remove entries as needed.
  events: [
    // Example:
    // { date: "2026-10-09", title: "Friday Fish Fry", time: "4:00 PM – Close", details: "Weekly restaurant special", type: "Dining" },
  ]
};
