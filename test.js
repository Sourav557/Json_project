const data =  [
  {
    "DocumentName": "Balance Sheet Analysis (Figures in NPR'000)",
    "AccountHeadings": [
      {
        "Title": "Fiscal Year",
        "Type": "Input",
        "DisplayOrder": 1,
        "Placeholder": "Fiscal Year",
        "Code": "FISCAL_YEAR"
      },
      {
        "Title": "Financial Type",
        "Type": "Dropdown",
        "DisplayOrder": 2,
        "Placeholder": "Audited",
        "Code": "FINANCIAL_TYPE"
      },
      {
        "Title": "Cash at Bank and in Hand",
        "Type": "Input",
        "DisplayOrder": 3,
        "Code": "CABAIH",
        "IsStrong": false
      },
      {
        "Title": "Market Securities",
        "Type": "Input",
        "DisplayOrder": 4,
        "Code": "MARSEC",
        "IsStrong": false
      },
      {
        "Title": "Account Receivables",
        "Type": "Input",
        "DisplayOrder": 5,
        "Code": "ACCREC",
        "IsStrong": false
      },
      {
        "Title": "Account Receivables - intra group",
        "Type": "Input",
        "DisplayOrder": 6,
        "Code": "ACCRECINTGRO",
        "IsStrong": false
      },
      {
        "Title": "Stocks",
        "Type": "Input",
        "DisplayOrder": 7,
        "Code": "STOCKS",
        "IsStrong": false
      },
      {
        "Title": "Advances/Deposits",
        "Type": "Input",
        "DisplayOrder": 8,
        "Code": "ADVADEPOS",
        "IsStrong": false
      },
      {
        "Title": "Other Current Assets",
        "Type": "Input",
        "DisplayOrder": 9,
        "Code": "OTHCURASS",
        "IsStrong": false
      },
      {
        "Title": "Total Current Assets",
        "Type": "Formula",
        "Formula": "CABAIH + MARSEC + ACCREC + ACCRECINTGRO + STOCKS + ADVADEPOS + OTHCURASS",
        "DisplayOrder": 10,
        "Code": "TOTCURASS",
        "IsStrong": true
      },
      {
        "Title": "Land",
        "Type": "Input",
        "DisplayOrder": 11,
        "Code": "LAND",
        "IsStrong": false
      },
      {
        "Title": "Building",
        "Type": "Input",
        "DisplayOrder": 12,
        "Code": "BUILDING",
        "IsStrong": false
      },
      {
        "Title": "Leasehold Improvements",
        "Type": "Input",
        "DisplayOrder": 13,
        "Code": "LEAIMP",
        "IsStrong": false
      },
      {
        "Title": "Plant & Machinery",
        "Type": "Input",
        "DisplayOrder": 14,
        "Code": "PLABMACH",
        "IsStrong": false
      },
      {
        "Title": "Furniture, Fixtures & Equipment",
        "Type": "Input",
        "DisplayOrder": 15,
        "Code": "FURFIXEQU",
        "IsStrong": false
      },
      {
        "Title": "Vehicles",
        "Type": "Input",
        "DisplayOrder": 16,
        "Code": "VEHICLES",
        "IsStrong": false
      },
      {
        "Title": "Net Fixed Assets",
        "Type": "Formula",
        "DisplayOrder": 17,
        "Formula": "LAND + BUILDING + LEAIMP + PLABMACH + FURFIXEQU + VEHICLES",
        "Code": "NEFIAS",
        "IsStrong": true
      },
      {
        "Title": "Advances (to trade unrelated parties)",
        "Type": "Input",
        "DisplayOrder": 18,
        "Code": "ADTOTRUNPA",
        "IsStrong": false
      },
      {
        "Title": "Books and Others",
        "Type": "Input",
        "DisplayOrder": 19,
        "Code": "BOANOT",
        "IsStrong": false
      },
      {
        "Title": "Trade Investments",
        "Type": "Input",
        "DisplayOrder": 20,
        "Code": "TRAINV",
        "IsStrong": false
      },
      {
        "Title": "Goodwill",
        "Type": "Input",
        "DisplayOrder": 21,
        "Code": "GOODWILL",
        "IsStrong": false
      },
      {
        "Title": "Deferred Expenses",
        "Type": "Input",
        "DisplayOrder": 22,
        "Code": "DEFEXP",
        "IsStrong": false
      },
      {
        "Title": "Other Long Term Assets",
        "Type": "Formula",
        "DisplayOrder": 23,
        "Formula": "ADTOTRUNPA+BOANOT+TRAINV+GOODWILL+DEFEXP",
        "Code": "OTHLONTERASS",
        "IsStrong": true
      },
      {
        "Title": "Due to Bank (OD+TR+DL+STL)",
        "Type": "Input",
        "DisplayOrder": 24,
        "Code": "DUTOBAODTRDLSTL",
        "IsStrong": false
      },
      {
        "Title": "Due to Bank (Current Portion of L.T. Loan)",
        "Type": "Input",
        "DisplayOrder": 25,
        "Code": "DUTOBACUPOOFLTLO",
        "IsStrong": false
      },
      {
        "Title": "Sundry Creditors",
        "Type": "Input",
        "DisplayOrder": 26,
        "Code": "SUCR",
        "IsStrong": false
      },
      {
        "Title": "Bills Payable",
        "Type": "Input",
        "DisplayOrder": 27,
        "Code": "BILLPAY",
        "IsStrong": false
      },
      {
        "Title": "Provision for tax",
        "Type": "Input",
        "DisplayOrder": 28,
        "Code": "PRFOTA",
        "IsStrong": false
      },
      {
        "Title": "Advance Received/Deposits",
        "Type": "Input",
        "DisplayOrder": 29,
        "Code": "ADREDE",
        "IsStrong": false
      },
      {
        "Title": "Other Current Liabilities",
        "Type": "Input",
        "DisplayOrder": 30,
        "Code": "OTHCURLIA",
        "IsStrong": false
      },
      {
        "Title": "Total Current Liabilities",
        "Type": "Formula",
        "DisplayOrder": 31,
        "Formula": "DUTOBAODTRDLSTL + DUTOBACUPOOFLTLO + SUCR + BILLPAY + PRFOTA + ADREDE + OTHCURLIA",
        "Code": "TOCULI",
        "IsStrong": true
      },
      {
        "Title": "Working Capital (CA-CL)",
        "Type": "TotalWithFormula",
        "DisplayOrder": 32,
        "Formula": "TOTCURASS - TOCULI",
        "Elements": ["TOTCURASS", "TOCULI"],
        "Calculation": "Vertical",
        "Code": "WOCACACL",
        "IsStrong": true
      },
      {
        "Title": "Net Assets (WC + Total Loan Term Assets)",
        "Type": "TotalWithFormula",
        "DisplayOrder": 33,
        "Formula": "NEFIAS + OTHLONTERASS + WOCACACL",
        "Elements": ["NEFIAS", "OTHLONTERASS", "WOCACACL"],
        "Calculation": "Vertical",
        "Code": "NEASWCTOLOTEAS",
        "IsStrong": true
      },
      {
        "Title": "Net Assets Financed By",
        "Type": "Heading",
        "DisplayOrder": 34,
        "Code": "NEASFIBY",
        "IsStrong": true
      },
      {
        "Title": "Paid up Capital",
        "Type": "Input",
        "DisplayOrder": 35,
        "Code": "PAUPCA",
        "IsStrong": false
      },
      {
        "Title": "Preference Capital",
        "Type": "Input",
        "DisplayOrder": 36,
        "Code": "PRCA",
        "IsStrong": false
      },
      {
        "Title": "Profit & Loss Account",
        "Type": "TotalWithFormula",
        "DisplayOrder": 37,
        "Formula": "NEPRTRTOBASH+0",
        "Elements": ["NEPRTRTOBASH"],
        "Calculation": "Vertical",
        "Code": "PRLOAC",
        "IsStrong": false
      },
      {
        "Title": "Reserves/Surplus/Retained Earnings",
        "Type": "TotalWithFormula",
        "DisplayOrder": 38,
        "Formula": "CUNEPRTRTOBSREEA[0]",
        "Elements": ["CUNEPRTRTOBSREEA"],
        "Code": "RESSURRETEAR",
        "Calculation": "Horizontal",
        "IsStrong": false
      },
      {
        "Title": "Equity Finance",
        "Type": "TotalWithFormula",
        "DisplayOrder": 39,
        "Formula": "(PAUPCA) + (PRCA) + (PRLOAC) + (RESSURRETEAR)",
        "Elements": ["PAUPCA", "PRCA", "PRLOAC", "RESSURRETEAR"],
        "Code": "EQUFIN",
        "Calculation": "Vertical",
        "IsStrong": true
      },
      {
        "Title": "Intangibles (Preliminary Expenses)",
        "Type": "Input",
        "DisplayOrder": 40,
        "Code": "INPREX",
        "IsStrong": false
      },
      {
        "Title": "Intangibles (Others)",
        "Type": "Input",
        "DisplayOrder": 41,
        "Code": "INROTH",
        "IsStrong": false
      },
      {
        "Title": "Total Intangibles",
        "Type": "Formula",
        "DisplayOrder": 42,
        "Formula": "INPREX + INROTH",
        "Code": "TOIN",
        "IsStrong": true
      },
      {
        "Title": "Net Worth",
        "Type": "TotalWithFormula",
        "DisplayOrder": 43,
        "Formula": "EQUFIN-TOIN",
        "Elements": ["EQUFIN", "TOIN"],
        "Calculation": "Vertical",
        "Code": "NEWO",
        "IsStrong": true
      },
      {
        "Title": "Directors/Partners/Proprietors Loans",
        "Type": "Input",
        "DisplayOrder": 44,
        "Code": "DIRPARPROLOA",
        "IsStrong": false
      },
      {
        "Title": "Owners Total Fund Employed",
        "Type": "TotalWithFormula",
        "DisplayOrder": 45,
        "Formula": "DIRPARPROLOA+NEWO",
        "Elements": ["DIRPARPROLOA", "NEWO"],
        "Calculation": "Vertical",
        "Code": "OWNTOTFUNEMP",
        "IsStrong": true
      },
      {
        "Title": "Long TL O/S of previous year",
        "Type": "Input",
        "DisplayOrder": 46,
        "Code": "LONTLOSOFPREYEA",
        "IsStrong": false
      },
      {
        "Title": "Additional TL availed during this year",
        "Type": "Input",
        "DisplayOrder": 47,
        "Code": "ADDTLAVADURTHIYEA",
        "IsStrong": false
      },
      {
        "Title": "TL Paid during this year (FA TL)",
        "Type": "Input",
        "DisplayOrder": 48,
        "Code": "TLPADUTHYEFATL",
        "IsStrong": false
      },
      {
        "Title": "TL paid during this year (WC TL)",
        "Type": "Input",
        "DisplayOrder": 49,
        "Code": "TLPADUTHYEWETL",
        "IsStrong": false
      },
      {
        "Title": "Long Term Loan O/S",
        "Type": "Input",
        "DisplayOrder": 50,
        "Code": "LOTELOOS",
        "IsStrong": false
      },
      {
        "Title": "Other Long Term Liabilities",
        "Type": "Input",
        "DisplayOrder": 51,
        "Code": "OTLOTELI",
        "IsStrong": false
      },
      {
        "Title": "Total Capital Employed = Owner's Total Fund Employed + Long Term Liabilites",
        "Type": "TotalWithFormula",
        "DisplayOrder": 52,
        "Formula": "OWNTOTFUNEMP + LOTELOOS + OTLOTELI",
        "Elements": ["OWNTOTFUNEMP", "LOTELOOS", "OTLOTELI"],
        "Calculation": "Vertical",
        "Code": "TOTCAPEMPOWNTOTFUNEMPLONTERLIA",
        "IsStrong": true
      },
      {
        "Title": "A=B",
        "Type": "TotalWithFormula",
        "DisplayOrder": 53,
        "Formula": "NEASWCTOLOTEAS - TOTCAPEMPOWNTOTFUNEMPLONTERLIA",
        "Elements": ["NEASWCTOLOTEAS", "TOTCAPEMPOWNTOTFUNEMPLONTERLIA"],
        "Calculation": "Vertical",
        "Code": "AEQB",
        "IsStrong": true
      }
    ]
  },
  {
    "DocumentName": "Profit & Loss Account",
    "AccountHeadings": [
      {
        "Title": "Fiscal Year",
        "Type": "Input",
        "DisplayOrder": 1,
        "Placeholder": "Fiscal Year",
        "Code": "FISCAL_YEAR"
      },
      {
        "Title": "Sales/Revenue",
        "Type": "Input",
        "DisplayOrder": 2,
        "Code": "SALREV",
        "IsStrong": true
      },
      {
        "Title": "COGS",
        "Type": "Input",
        "DisplayOrder": 3,
        "Code": "COGS",
        "IsStrong": false
      },
      {
        "Title": "Selling & Distribution Expenses",
        "Type": "Input",
        "DisplayOrder": 4,
        "Code": "SELANDDISXP",
        "IsStrong": false
      },
      {
        "Title": "Gross Trading Profit",
        "Type": "Formula",
        "DisplayOrder": 5,
        "Formula": "SALREV-(COGS)-(SELANDDISXP)",
        "Code": "GROTRAPRO",
        "IsStrong": true
      },
      {
        "Title": "Administration Expenses",
        "Type": "Input",
        "DisplayOrder": 6,
        "Code": "ADMEXP",
        "IsStrong": false
      },
      {
        "Title": "Depreciation",
        "Type": "Input",
        "DisplayOrder": 7,
        "Code": "DEPREC",
        "IsStrong": false
      },
      {
        "Title": "Profit Before Intrest and Tax",
        "Type": "TotalWithFormula",
        "DisplayOrder": 8,
        "Formula": "(GROTRAPRO)-(ADMEXP)-(DEPREC)",
        "Elements": ["GROTRAPRO", "ADMEXP", "DEPREC"],
        "Calculation": "Vertical",
        "Code": "PBIT",
        "IsStrong": true
      },
      {
        "Title": "Other Income",
        "Type": "Input",
        "DisplayOrder": 9,
        "Code": "OTIN",
        "IsStrong": false
      },
      {
        "Title": "Interest Expense",
        "Type": "Input",
        "DisplayOrder": 10,
        "Code": "INTEXP",
        "IsStrong": false
      },
      {
        "Title": "PBT",
        "Type": "TotalWithFormula",
        "DisplayOrder": 11,
        "Formula": "PBIT+OTIN-INTEXP",
        "Elements": ["PBIT", "OTIN", "INTEXP"],
        "Calculation": "Vertical",
        "Code": "PBT",
        "IsStrong": true
      },
      {
        "Title": "Bonus/Provision for Bonus",
        "Type": "Input",
        "DisplayOrder": 12,
        "Code": "BONPROFORBON",
        "IsStrong": false
      },
      {
        "Title": "Tax/Provision for Tax",
        "Type": "Input",
        "DisplayOrder": 13,
        "Code": "TAXPROFORTAX",
        "IsStrong": false
      },
      {
        "Title": "Net Profit After Tax",
        "Type": "TotalWithFormula",
        "DisplayOrder": 14,
        "Formula": "PBT-(BONPROFORBON)-(TAXPROFORTAX)",
        "Elements": ["PBT", "BONPROFORBON", "TAXPROFORTAX"],
        "Calculation": "Vertical",
        "Code": "NPAT",
        "IsStrong": true
      },
      {
        "Title": "Withdrawls - Dividend/Others",
        "Type": "Input",
        "DisplayOrder": 15,
        "Code": "WITDIVOTH",
        "IsStrong": false
      },
      {
        "Title": "Tax Paid of previous year",
        "Type": "Input",
        "DisplayOrder": 16,
        "Code": "TAPAOFPRYE",
        "IsStrong": false
      },
      {
        "Title": "Net Profit Transfered to Balance Sheet",
        "Type": "TotalWithFormula",
        "DisplayOrder": 17,
        "Formula": "NPAT-(WITDIVOTH)-(TAPAOFPRYE)",
        "Elements": ["NPAT", "WITDIVOTH", "TAPAOFPRYE"],
        "Calculation": "Vertical",
        "Code": "NEPRTRTOBASH",
        "IsStrong": true
      },
      {
        "Title": "Cumulative Net Profit Transfered to B/S (Retained Earnings)",
        "Type": "TotalWithFormula",
        "DisplayOrder": 18,
        "Formula": "CUNEPRTRTOBSREEA[0]+NEPRTRTOBASH[1]",
        "Elements": ["CUNEPRTRTOBSREEA", "NEPRTRTOBASH"],
        "Calculation": "Horizontal",
        "Code": "CUNEPRTRTOBSREEA",
        "IsStrong": true
      }
    ]
  },
  {
    "DocumentName": "Cash Flow Analysis",
    "AccountHeadings": [
      {
        "Title": "Fiscal Year",
        "Type": "Input",
        "DisplayOrder": 1,
        "Placeholder": "Fiscal Year",
        "Code": "FISCAL_YEAR"
      },
      {
        "Title": "NPAT",
        "Type": "Formula",
        "DisplayOrder": 1,
        "Formula": "NPAT+0",
        "Elements": ["NPAT"],
        "Calculation": "Horizontal",
        "Code": "NPAT",
        "IsStrong": false
      },
      {
        "Title": "Depreciation",
        "Type": "Formula",
        "DisplayOrder": 2,
        "Formula": "DEPREC+0",
        "Elements": ["DEPREC"],
        "Code": "DEPREC",
        "IsStrong": false
      },
      {
        "Title": "Cash Profit",
        "Type": "Formula",
        "DisplayOrder": 3,
        "Formula": "NPAT+DEPREC",
        "Code": "CASPRO",
        "IsStrong": true
      },
      {
        "Title": "Change in Current Assets",
        "Type": "TotalWithFormula",
        "DisplayOrder": 4,
        "Formula": "-((TOTCURASS[1]-CABAIH[1])-(TOTCURASS[0]-CABAIH[0]))",
        "Elements": ["TOTCURASS", "CABAIH"],
        "Calculation": "Horizontal",
        "Code": "CHINCUAS",
        "IsStrong": false
      },
      {
        "Title": "Change in Current Liabilities",
        "Type": "TotalWithFormula",
        "DisplayOrder": 5,
        "Formula": "TOCULI[1]-TOCULI[0]",
        "Elements": ["TOCULI"],
        "Calculation": "Horizontal",
        "Code": "CHINCULI",
        "IsStrong": false
      },
      {
        "Title": "Cash from Trading Activities/Operation",
        "Type": "TotalWithFormula",
        "DisplayOrder": 6,
        "Formula": "CASPRO+CHINCUAS+CHINCULI",
        "Elements": ["CASPRO", "CHINCUAS", "CHINCULI"],
        "Code": "CAFRTRACOP",
        "Calculation": "Vertical",
        "IsStrong": true
      },
      {
        "Title": "Change in Fixed Assets (Purchase/Sold Out)",
        "Type": "TotalWithFormula",
        "DisplayOrder": 7,
        "Formula": "-((NEFIAS[1]+DEPREC[1])-NEFIAS[0])",
        "Elements": ["NEFIAS", "DEPREC"],
        "Calculation": "Horizontal",
        "Code": "CHINFIASPUSOOU",
        "IsStrong": true
      },
      {
        "Title": "Change in Other Long Term Assets",
        "Type": "TotalWithFormula",
        "DisplayOrder": 8,
        "Formula": "-((OTHLONTERASS[1])-(OTHLONTERASS[0]))",
        "Elements": ["OTHLONTERASS"],
        "Calculation": "Horizontal",
        "Code": "CHINOTLOTEAS",
        "IsStrong": true
      },
      {
        "Title": "Cash after investing activities",
        "Type": "TotalWithFormula",
        "DisplayOrder": 9,
        "Formula": "CAFRTRACOP+CHINFIASPUSOOU+CHINOTLOTEAS",
        "Elements": ["CAFRTRACOP", "CHINFIASPUSOOU", "CHINOTLOTEAS"],
        "Calculation": "Vertical",
        "Code": "CAAFINAC",
        "IsStrong": true
      },

      {
        "Title": "Change in Long Term Debt",
        "Type": "TotalWithFormula",
        "DisplayOrder": 10,
        "Formula": "LOTELOOS[1]-(LOTELOOS[0])",
        "Elements": ["LOTELOOS"],
        "Calculation": "Horizontal",
        "Code": "CHINLOTEDE",
        "IsStrong": true
      },
      {
        "Title": "Change in Other Long Term  Liabilities",
        "Type": "TotalWithFormula",
        "DisplayOrder": 11,
        "Formula": "OTLOTELI[1]-OTLOTELI[0]",
        "Elements": ["OTLOTELI"],
        "Calculation": "Horizontal",
        "Code": "CHINOTLOTELI",
        "IsStrong": true
      },
      {
        "Title": "Change in Ordinary Capital",
        "Type": "TotalWithFormula",
        "DisplayOrder": 12,
        "Formula": "PAUPCA[1]-PAUPCA[0]",
        "Elements": ["PAUPCA"],
        "Calculation": "Horizontal",
        "Code": "CHINORCA",
        "IsStrong": true
      },
      {
        "Title": "Change in Preference Capital",
        "Type": "TotalWithFormula",
        "DisplayOrder": 13,
        "Formula": "PRCA[1]-PRCA[0]",
        "Elements": ["PRCA"],
        "Calculation": "Horizontal",
        "Code": "CHINPRCA",
        "IsStrong": true
      },
      {
        "Title": "Change in Owner's Loan",
        "Type": "TotalWithFormula",
        "DisplayOrder": 14,
        "Formula": "DIRPARPROLOA[1]-DIRPARPROLOA[0]",
        "Elements": ["DIRPARPROLOA"],
        "Calculation": "Horizontal",
        "Code": "CHINOWLO",
        "IsStrong": true
      },
      {
        "Title": "Dividend Payment",
        "Type": "TotalWithFormula",
        "DisplayOrder": 15,
        "Formula": "-WITDIVOTH",
        "Elements": ["WITDIVOTH"],
        "Calculation": "Vertical",
        "Code": "DIPA",
        "IsStrong": true
      },
      {
        "Title": "Tax Paid of the previous Year",
        "Type": "TotalWithFormula",
        "DisplayOrder": 16,
        "Formula": "-TAPAOFPRYE",
        "Elements": ["TAPAOFPRYE"],
        "Calculation": "Vertical",
        "Code": "TAPAOFTHPRYE",
        "IsStrong": true
      },
      {
        "Title": "Cash after Financing Activities",
        "Type": "TotalWithFormula",
        "DisplayOrder": 17,
        "Formula": "CAAFINAC+CHINLOTEDE+CHINOTLOTELI+CHINORCA+CHINPRCA+CHINOWLO+DIPA+TAPAOFTHPRYE",
        "Elements": [
          "CAAFINAC",
          "CHINLOTEDE",
          "CHINOTLOTELI",
          "CHINORCA",
          "CHINPRCA",
          "CHINOWLO",
          "DIPA",
          "TAPAOFTHPRYE"
        ],
        "Calculation": "Vertical",
        "Code": "CAAFFIAV",
        "IsStrong": true
      },
      {
        "Title": "Opening Cash Balance",
        "Type": "TotalWithFormula",
        "DisplayOrder": 18,
        "Formula": "CABAIH[0]",
        "Elements": ["CABAIH"],
        "Calculation": "Horizontal",
        "Code": "OPCABA",
        "IsStrong": true
      },
      {
        "Title": "Closing Cash Balance",
        "Type": "TotalWithFormula",
        "DisplayOrder": 19,
        "Formula": "CAAFFIAV+OPCABA",
        "Elements": ["CAAFFIAV", "OPCABA"],
        "Calculation": "Vertical",
        "Code": "CLCABA",
        "IsStrong": true
      },
      {
        "Title": "Cash Balance as per B/S",
        "Type": "TotalWithFormula",
        "DisplayOrder": 20,
        "Formula": "CABAIH",
        "Elements": ["CABAIH"],
        "Calculation": "Vertical",
        "Code": "CABAASPEBS",
        "IsStrong": true
      },
      {
        "Title": "Difference",
        "Type": "TotalWithFormula",
        "DisplayOrder": 21,
        "Formula": "CLCABA-CABAASPEBS",
        "Elements": ["CLCABA", "CABAASPEBS"],
        "Calculation": "Vertical",
        "Code": "DIFF",
        "IsStrong": true
      }
    ]
  },
  {
    "DocumentName": "Ratio Analysis",
    "AccountHeadings": [
      {
        "Title": "Fiscal Year",
        "Type": "Input",
        "DisplayOrder": 1,
        "Placeholder": "Fiscal Year",
        "Code": "FISCAL_YEAR"
      },
      {
        "Title": "Current Ratio",
        "Type": "TotalWithFormula",
        "DisplayOrder": 1,
        "Formula": "TOTCURASS/TOCULI",
        "Elements": ["TOTCURASS", "TOCULI"],
        "Code": "RAAN",
        "Calculation": "Vertical",
        "IsStrong": false
      },
      {
        "Title": "Quick Ratio",
        "Type": "TotalWithFormula",
        "DisplayOrder": 2,
        "Formula": "(TOTCURASS-STOCKS)/TOCULI",
        "Elements": ["TOTCURASS", "STOCKS", "TOCULI"],
        "Code": "QURA",
        "Calculation": "Vertical",
        "IsStrong": false
      },
      {
        "Title": "Days Stock on Hand (DSHOH)",
        "Type": "TotalWithFormula",
        "DisplayOrder": 3,
        "Formula": "(STOCKS/COGS)*365",
        "Elements": ["STOCKS", "COGS"],
        "Code": "DSHOH",
        "Calculation": "Vertical",
        "IsStrong": false
      },
      {
        "Title": "Days Debtors on Hand (DDSOH)",
        "Type": "TotalWithFormula",
        "DisplayOrder": 4,
        "Formula": "((ACCREC+ACCRECINTGRO)/SALREV)*365",
        "Elements": ["ACCREC", "ACCRECINTGRO", "SALREV"],
        "Code": "DDSOH",
        "Calculation": "Vertical",
        "IsStrong": false
      },
      {
        "Title": "Days Creditors on Hand (DCHOH)",
        "Type": "TotalWithFormula",
        "DisplayOrder": 5,
        "Formula": "(SUCR/COGS)*365",
        "Elements": ["SUCR", "COGS"],
        "Calculation": "Vertical",
        "Code": "DCHOH",
        "IsStrong": false
      },
      {
        "Title": "Net Working Capital Cycle Period",
        "Type": "TotalWithFormula",
        "DisplayOrder": 6,
        "Formula": "DSHOH+DDSOH-DCHOH",
        "Elements": ["DSHOH", "DDSOH", "DCHOH"],
        "Code": "NEWOCACYPE",
        "Calculation": "Vertical",
        "IsStrong": false
      },
      {
        "Title": "Leverage Ratio (Total Liability/Net Worth)",
        "Type": "TotalWithFormula",
        "DisplayOrder": 7,
        "Formula": "(TOCULI+OTLOTELI+LOTELOOS)/NEWO",
        "Elements": ["TOCULI", "OTLOTELI", "LOTELOOS", "NEWO"],
        "Code": "LERETOLINE",
        "Calculation": "Vertical",
        "IsStrong": false
      },
      {
        "Title": "Total Liability: Owner's Total Fund Employed",
        "Type": "TotalWithFormula",
        "DisplayOrder": 9,
        "Formula": "(TOCULI+LOTELOOS+OTLOTELI)/OWNTOTFUNEMP",
        "Elements": ["TOCULI", "OTLOTELI", "LOTELOOS", "OWNTOTFUNEMP"],
        "Code": "TOLIOWTOFUEM",
        "Calculation": "Vertical",
        "IsStrong": false
      },
      {
        "Title": "Long Term Debt: Net Worth",
        "Type": "TotalWithFormula",
        "DisplayOrder": 10,
        "Formula": "LOTELOOS/NEWO",
        "Elements": ["LOTELOOS", "NEWO"],
        "Code": "LOTEDENEWO",
        "Calculation": "Vertical",
        "IsStrong": false
      },
      {
        "Title": "Bank Debt : Equity Ratio (Net Worth)",
        "Type": "TotalWithFormula",
        "DisplayOrder": 11,
        "Formula": "(DUTOBAODTRDLSTL+DUTOBACUPOOFLTLO+LOTELOOS)/NEWO",
        "Elements": ["DUTOBAODTRDLSTL", "DUTOBACUPOOFLTLO", "LOTELOOS", "NEWO"],
        "Code": "BADEEQRANEWO",
        "Calculation": "Vertical",
        "IsStrong": false
      },
      {
        "Title": "Bank Debt : Owner's Total Fund Employed",
        "Type": "TotalWithFormula",
        "DisplayOrder": 12,
        "Formula": "(DUTOBAODTRDLSTL+DUTOBACUPOOFLTLO+LOTELOOS)/OWNTOTFUNEMP",
        "Elements": ["DUTOBAODTRDLSTL", "DUTOBACUPOOFLTLO", "LOTELOOS", "OWNTOTFUNEMP"],
        "Code": "BADEOWSTPFUEM",
        "Calculation": "Vertical",
        "IsStrong": false
      },
      {
        "Title": "Debt Service Coverage Ratio (FA TL)",
        "Type": "TotalWithFormula",
        "DisplayOrder": 13,
        "Formula": "(NPAT+DEPREC)/TLPADUTHYEFATL",
        "Elements": ["NPAT", "DEPREC", "TLPADUTHYEFATL"],
        "Code": "DESECORAFATL",
        "Calculation": "Vertical",
        "IsStrong": false
      },
      {
        "Title": "Interest coverage ratio",
        "Type": "TotalWithFormula",
        "DisplayOrder": 14,
        "Formula": "PBIT/INTEXP",
        "Elements": ["PBIT", "INTEXP"],
        "Code": "INTCOVRA",
        "Calculation": "Vertical",
        "IsStrong": false
      },
      {
        "Title": "Return on Capital Employed (%)",
        "Type": "TotalWithFormula",
        "DisplayOrder": 15,
        "Formula": "(NPAT/TOTCAPEMPOWNTOTFUNEMPLONTERLIA)*100",
        "Elements": ["NPAT", "TOTCAPEMPOWNTOTFUNEMPLONTERLIA"],
        "Calculation": "Vertical",
        "Code": "REONCAEM",
        "IsStrong": false
      },
      {
        "Title": "Return on Equity/Net Worth (%)",
        "Type": "TotalWithFormula",
        "DisplayOrder": 15,
        "Formula": "(NPAT/NEWO)*100",
        "Elements": ["NPAT", "NEWO"],
        "Code": "REONEQNE",
        "Calculation": "Vertical",
        "IsStrong": false
      },
      {
        "Title": "Gross Profit Margin (%)",
        "Type": "TotalWithFormula",
        "DisplayOrder": 15,
        "Formula": "(GROTRAPRO/SALREV)*100",
        "Elements": ["GROTRAPRO", "SALREV"],
        "Code": "GRPRMA",
        "Calculation": "Vertical",
        "IsStrong": false
      },
      {
        "Title": "Net Profit Margin (%)",
        "Type": "TotalWithFormula",
        "DisplayOrder": 15,
        "Formula": "(NPAT/SALREV)*100",
        "Elements": ["NPAT", "SALREV"],
        "Code": "NEPRMA",
        "Calculation": "Vertical",
        "IsStrong": false
      }
    ]
  },
  {
    "DocumentName": "Financial Risk Assessment",
    "AccountHeadings": [
      {
        "Title": "Fiscal Year",
        "Type": "Input",
        "DisplayOrder": 1,
        "Placeholder": "Fiscal Year",
        "Code": "FISCAL_YEAR"
      },
      {
        "Title": "Sales",
        "Type": "TotalWithFormula",
        "DisplayOrder": 1,
        "Formula": "SALREV[1]",
        "Elements": ["SALREV"],
        "Code": "FRASALES",
        "Calculation": "Horizontal",
        "IsStrong": false
      },
      {
        "Title": "Increase In Sales (%)",
        "Type": "TotalWithFormula",
        "DisplayOrder": 2,
        "Formula": "((FRASALES[1]-FRASALES[0])/FRASALES[0])*100",
        "Elements": ["FRASALES", "TOCULI"],
        "Code": "FRAIIS",
        "Calculation": "Horizontal",
        "IsStrong": false
      },
      {
        "Title": "Gross Profit",
        "Type": "TotalWithFormula",
        "DisplayOrder": 3,
        "Formula": "GROTRAPRO[1]",
        "Elements": ["GROTRAPRO"],
        "Code": "FRAGP",
        "Calculation": "Horizontal",
        "IsStrong": false
      },
      {
        "Title": "Net Profit After Tax",
        "Type": "TotalWithFormula",
        "DisplayOrder": 4,
        "Formula": "NPAT[1]",
        "Elements": ["NPAT"],
        "Code": "FRANPAT",
        "Calculation": "Horizontal",
        "IsStrong": false
      },
      {
        "Title": "Cash Profit",
        "Type": "TotalWithFormula",
        "DisplayOrder": 5,
        "Formula": "DEPREC + NPAT",
        "Elements": ["DEPREC", "NPAT"],
        "Calculation": "Vertical",
        "Code": "FRACP",
        "IsStrong": false
      },
      {
        "Title": "NWC",
        "Type": "TotalWithFormula",
        "DisplayOrder": 6,
        "Formula": "WOCACACL[1]",
        "Elements": ["WOCACACL"],
        "Code": "FRANWC",
        "Calculation": "Horizontal",
        "IsStrong": false
      },
      {
        "Title": "Net Worth",
        "Type": "TotalWithFormula",
        "DisplayOrder": 7,
        "Formula": "NEWO[1]",
        "Elements": ["NEWO"],
        "Code": "FRANEWO",
        "Calculation": "Horizontal",
        "IsStrong": false
      },
      {
        "Title": "Current Ratio",
        "Type": "TotalWithFormula",
        "DisplayOrder": 8,
        "Formula": "RAAN[1]",
        "Elements": ["RAAN"],
        "Code": "FRACR",
        "Calculation": "Horizontal",
        "IsStrong": false
      },
      {
        "Title": "Quick Ratio",
        "Type": "TotalWithFormula",
        "DisplayOrder": 9,
        "Formula": "QURA[1]",
        "Elements": ["QURA"],
        "Code": "FRAQR",
        "Calculation": "Horizontal",
        "IsStrong": false
      },
      {
        "Title": "Days Stocks on hand(DSOH)",
        "Type": "TotalWithFormula",
        "DisplayOrder": 10,
        "Formula": "DSHOH[1]",
        "Elements": ["DSHOH"],
        "Code": "FRADSOH",
        "Calculation": "Horizontal",
        "IsStrong": false
      },
      {
        "Title": "Days Debtors on hand(DDOH)",
        "Type": "TotalWithFormula",
        "DisplayOrder": 11,
        "Formula": "DDSOH[1]",
        "Elements": ["DDSOH"],
        "Code": "FRADDOH",
        "Calculation": "Horizontal",
        "IsStrong": false
      },
      {
        "Title": "Days Creditors on hand(DCOH)",
        "Type": "TotalWithFormula",
        "DisplayOrder": 12,
        "Formula": "DCHOH[1]",
        "Elements": ["DCHOH"],
        "Code": "FRADCHOH",
        "Calculation": "Horizontal",
        "IsStrong": false
      },
      {
        "Title": "Net Working Capital Cycle Period",
        "Type": "TotalWithFormula",
        "DisplayOrder": 12,
        "Formula": "NEWOCACYPE[1]",
        "Elements": ["NEWOCACYPE"],
        "Code": "FRANEWOCACYPE",
        "Calculation": "Horizontal",
        "IsStrong": false
      },
      {
        "Title": "Leverage Ratio (Total Liability/Net Worth)",
        "Type": "TotalWithFormula",
        "DisplayOrder": 13,
        "Formula": "LERETOLINE[1]",
        "Elements": ["LERETOLINE"],
        "Code": "FRLERETOLINE",
        "Calculation": "Horizontal",
        "IsStrong": false
      },
      {
        "Title": "Total Liability : Owner's Total Fund Employed",
        "Type": "TotalWithFormula",
        "DisplayOrder": 14,
        "Formula": "LERETOLINE[1]",
        "Elements": ["LERETOLINE"],
        "Code": "FRALERETOLINE",
        "Calculation": "Horizontal",
        "IsStrong": false
      },
      {
        "Title": "Long Term Debt : Net Worth",
        "Type": "TotalWithFormula",
        "DisplayOrder": 15,
        "Formula": "LOTEDENEWO[1]",
        "Elements": ["LOTEDENEWO"],
        "Calculation": "Horizontal",
        "Code": "FRALOTEDENEWO",
        "IsStrong": false
      },
      {
        "Title": "Bank Debt : Equity Ratio (Net Worth)",
        "Type": "TotalWithFormula",
        "DisplayOrder": 16,
        "Formula": "BADEEQRANEWO[1]",
        "Elements": ["BADEEQRANEWO"],
        "Code": "FRABADEEQRANEWO",
        "Calculation": "Horizontal",
        "IsStrong": false
      },
      {
        "Title": "Bank Debt : Owner's Total Fund Employed",
        "Type": "TotalWithFormula",
        "DisplayOrder": 17,
        "Formula": "BADEOWSTPFUEM[1]",
        "Elements": ["BADEOWSTPFUEM"],
        "Code": "FRABADEOWSTPFUEM",
        "Calculation": "Horizontal",
        "IsStrong": false
      },
      {
        "Title": "Debt Service Coverage Ratio (FA TL)",
        "Type": "TotalWithFormula",
        "DisplayOrder": 18,
        "Formula": "DESECORAFATL[1]",
        "Elements": ["DESECORAFATL"],
        "Code": "FRADESECORAFATL",
        "Calculation": "Horizontal",
        "IsStrong": false
      },
      {
        "Title": "Interest coverage ratio",
        "Type": "TotalWithFormula",
        "DisplayOrder": 19,
        "Formula": "INTCOVRA[1]",
        "Elements": ["INTCOVRA"],
        "Code": "FRAINTCOVRA",
        "Calculation": "Horizontal",
        "IsStrong": false
      },
      {
        "Title": "Return on Capital Employed(%)",
        "Type": "TotalWithFormula",
        "DisplayOrder": 20,
        "Formula": "REONCAEM[1]",
        "Elements": ["REONCAEM"],
        "Code": "FRAREONCAEM",
        "Calculation": "Horizontal",
        "IsStrong": false
      },
      {
        "Title": "Return on Equity/Net Worth(%)",
        "Type": "TotalWithFormula",
        "DisplayOrder": 21,
        "Formula": "REONEQNE[1]",
        "Elements": ["REONEQNE"],
        "Code": "FRAREONEQNE",
        "Calculation": "Horizontal",
        "IsStrong": false
      },
      {
        "Title": "Gross Profit Margin(%)",
        "Type": "TotalWithFormula",
        "DisplayOrder": 22,
        "Formula": "GRPRMA[1]",
        "Elements": ["GRPRMA"],
        "Code": "FRAGRPRMA",
        "Calculation": "Horizontal",
        "IsStrong": false
      },
      {
        "Title": "Net Profit Margin(%)",
        "Type": "TotalWithFormula",
        "DisplayOrder": 23,
        "Formula": "NEPRMA[1]",
        "Elements": ["NEPRMA"],
        "Code": "FRANEPRMA",
        "Calculation": "Horizontal",
        "IsStrong": false
      },
      {
        "Title": "Cash from Trading activities/Operation",
        "Type": "TotalWithFormula",
        "DisplayOrder": 24,
        "Formula": "CAFRTRACOP[1]",
        "Elements": ["CAFRTRACOP"],
        "Code": "FRACAFRTRACOP",
        "Calculation": "Horizontal",
        "IsStrong": false
      },
      {
        "Title": "Cash after investing activities",
        "Type": "TotalWithFormula",
        "DisplayOrder": 25,
        "Formula": "CAAFINAC[1]",
        "Elements": ["CAAFINAC"],
        "Code": "FRACAAFINAC",
        "Calculation": "Horizontal",
        "IsStrong": false
      },
      {
        "Title": "Cash after Financing activities",
        "Type": "TotalWithFormula",
        "DisplayOrder": 26,
        "Formula": "CAAFFIAV[1]",
        "Elements": ["CAAFFIAV"],
        "Code": "FRACAAFFIAV",
        "Calculation": "Horizontal",
        "IsStrong": false
      }
    ]
  }
]

const output = {}
for (let item of data){
        for (let heading of item['AccountHeadings']){
            output[heading.Title]= heading.Code

            // output[heading.Code]= heading.Title
        }

}

console.log(output)