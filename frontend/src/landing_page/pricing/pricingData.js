// pricingData.js

const pricingData = {
  Equity: {
    headers: ["Equity delivery", "Equity intraday", "F&O - Futures", "F&O - Options"],
    rows: [
      {
        label: "Brokerage",
        values: [
          "Zero Brokerage",
          "0.03% or Rs. 20/executed order whichever is lower",
          "0.03% or Rs. 20/executed order whichever is lower",
          "Flat Rs. 20 per executed order"
        ]
      },
      {
        label: "STT/CTT",
        values: [
          "0.1% on buy & sell",
          "0.025% on the sell side",
          "0.05% on the sell side",
          "0.15% of the intrinsic value on options that are bought and exercised\n0.15% on sell side (on premium)"
        ]
      },
      {
        label: "Transaction charges",
        values: [
          "NSE: 0.00307%\nBSE: 0.00375%",
          "NSE: 0.00307%\nBSE: 0.00375%",
          "NSE: 0.00183%\nBSE: 0",
          "NSE: 0.03553% (on premium)\nBSE: 0.0325% (on premium)"
        ]
      },
      {
        label: "GST",
        values: [
          "18% on (brokerage + SEBI charges + transaction charges)",
          "18% on (brokerage + SEBI charges + transaction charges)",
          "18% on (brokerage + SEBI charges + transaction charges)",
          "18% on (brokerage + SEBI charges + transaction charges)"
        ]
      },
      {
        label: "SEBI charges",
        values: [
          "₹10 / crore",
          "₹10 / crore",
          "₹10 / crore",
          "₹10 / crore"
        ]
      },
      {
        label: "Stamp charges",
        values: [
          "0.015% or ₹1500 / crore on buy side",
          "0.003% or ₹300 / crore on buy side",
          "0.002% or ₹200 / crore on buy side",
          "0.003% or ₹300 / crore on buy side"
        ]
      }
    ]
  },
  Currency: {
    headers: ["Currency futures", "Currency options"],
    rows: [
      {
        label: "Brokerage",
        values: [
          "0.03% or ₹ 20/executed order whichever is lower",
          "₹ 20/executed order"
        ]
      },
      {
        label: "STT/CTT",
        values: [
          "No STT",
          "No STT"
        ]
      },
      {
        label: "Transaction charges",
        values: [
          "NSE: 0.00035%\nBSE: 0.00045%",
          "NSE: 0.0311%\nBSE: 0.001%"
        ]
      },
      {
        label: "GST",
        values: [
          "18% on (brokerage + SEBI charges + transaction charges)",
          "18% on (brokerage + SEBI charges + transaction charges)"
        ]
      },
      {
        label: "SEBI charges",
        values: [
          "₹10 / crore",
          "₹10 / crore"
        ]
      },
      {
        label: "Stamp charges",
        values: [
          "0.0001% or ₹10 / crore on buy side",
          "0.0001% or ₹10 / crore on buy side"
        ]
      }
    ]
  },
  Commodity: {
    headers: ["Commodity futures", "Commodity options"],
    rows: [
      {
        label: "Brokerage",
        values: [
          "0.03% or Rs. 20/executed order whichever is lower",
          "₹ 20/executed order"
        ]
      },
      {
        label: "STT/CTT",
        values: [
          "0.01% on sell side (Non-Agri)",
          "0.05% on sell side"
        ]
      },
      {
        label: "Transaction charges",
        values: [
          "MCX: 0.0021%\nNSE: 0.0001%",
          "MCX: 0.0418%\nNSE: 0.001%"
        ]
      },
      {
        label: "GST",
        values: [
          "18% on (brokerage + SEBI charges + transaction charges)",
          "18% on (brokerage + SEBI charges + transaction charges)"
        ]
      },
      {
        label: "SEBI charges",
        values: [
          "Agri:\n₹1 / crore\nNon-agri:\n₹10 / crore",
          "₹10 / crore"
        ]
      },
      {
        label: "Stamp charges",
        values: [
          "0.002% or ₹200 / crore on buy side",
          "0.003% or ₹300 / crore on buy side"
        ]
      }
    ]
  }
};



// additionalData.js

const additionalData = {
  AccountOpening: {
    headers: ["Charges"],
    rows: [
      { label: "Individual account", values: ["Free"] },
      { label: "Minor account", values: ["Free"] },
      { label: "NRI account", values: ["₹ 500"] },
      { label: "HUF account", values: ["Free (online) / ₹ 500 (offline)"] },
      { label: "Partnership, LLP, and Corporate accounts", values: ["₹ 500 (offline only)"] }
    ]
  },
  DematAMC: {
    headers: ["AMC Cost Structure"],
    rows: [
      { label: "Up to ₹4 lakh", values: ["Free*"] },
      { label: "₹4 lakh - ₹10 lakh", values: ["₹ 100 per year, charged quarterly*"] },
      { label: "Above ₹10 lakh", values: ["₹ 300 per year, charged quarterly"] }
    ],
    footnote: "* Lower AMC is applicable only if the account qualifies as a Basic Services Demat Account (BSDA). BSDA account holders cannot hold more than one demat account."
  },
  OptionalServices: {
    headers: ["Billing Frequency", "Charges"],
    rows: [
      { 
        label: "Tickertape", 
        values: ["Monthly / Quarterly / Annual", "Free: 0 | Pro: 249/699/2399"] 
      },
      { 
        label: "Smallcase", 
        values: ["Per transaction", "Buy & Invest More: 100 | SIP: 10"] 
      },
      { 
        label: "Kite Connect", 
        values: ["Monthly", "Connect: 500 | Personal: Free"] 
      }
    ]
  }
};

export { additionalData, pricingData};