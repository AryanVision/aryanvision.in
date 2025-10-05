// lib/constants.ts
interface EmergencyContact {
  name: string;
  number: string;
  type: 'emergency' | 'police' | 'women' | 'complaint' | 'utility';
}

interface EmergencyContacts {
  national: EmergencyContact[];
  andhra: EmergencyContact[];
}

export const EMERGENCY_CONTACTS: EmergencyContacts = {
  national: [
    { name: "Police", number: "100", type: "emergency" },
    { name: "Women Helpline", number: "1091", type: "emergency" },
    { name: "Ambulance", number: "108", type: "emergency" },
    { name: "Fire", number: "101", type: "emergency" },
    { name: "Child Helpline", number: "1098", type: "emergency" },
    { name: "Cyber Crime", number: "1930", type: "emergency" }
  ],
  andhra: [
    { name: "AP Police Control", number: "0866-2470010", type: "police" },
    { name: "AP Women Protection", number: "0866-2470002", type: "women" },
    { name: "AP Anti Corruption", number: "1064", type: "complaint" },
    { name: "AP Electricity", number: "1912", type: "utility" },
    { name: "AP Water Supply", number: "155313", type: "utility" }
  ]
};

export const LEGAL_ISSUES = [
  {
    id: "property",
    title: "Property & Land Disputes",
    description: "Help with property registration, land disputes, and illegal occupation",
    steps: [
      "Collect all property documents",
      "Visit Sub-Registrar office for encumbrance certificate",
      "File complaint with District Collector if needed"
    ],
    contacts: ["District Collector Office", "Tahsildar Office", "Sub-Registrar Office"]
  },
  {
    id: "domestic-violence",
    title: "Domestic Violence & Harassment",
    description: "Immediate protection and legal aid for women facing harassment",
    steps: [
      "Contact Women Police Station immediately",
      "Seek free legal aid from District Legal Services Authority",
      "Access shelter homes through Sakhi Center"
    ],
    contacts: ["Women Police Station", "DLSA", "One Stop Center (Sakhi)"]
  }
];

export const GRIEVANCE_PORTALS = [
  {
    name: "AP State Portal",
    url: "https://ap.gov.in",
    description: "All government services - Ration card, Certificates, Applications",
    helpline: "1100"
  },
  {
    name: "AP Police Services",
    url: "https://appolice.gov.in",
    description: "FIR status, Character certificate, Passport verification",
    helpline: "0866-2470001"
  }
];