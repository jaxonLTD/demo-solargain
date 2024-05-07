const data = [
    {
        name: "SOLAR PANELS",
        data: [
            "SOLAR PANELS",
            "SOLAR INVERTERS",
            "NEW TO SOLAR?",
            "POPULAR SOLAR PACKAGES",
            "FAQ ABOUT SOLAR POWER",
            "HOW MUCH DOES SOLAR ENERGY SAVE YOU?",
            "QUESTIONS TO ASK BEFORE YOU BUY",
            "9 REASONS TO INSTALL SOLAR PANELS",
            "INSTALLATION HEATMAP",
            "SOLAR WITH IKEA",
            "SPECIAL OFFERS ON SOLAR PV"
        ]
    },
    {
        name: "SOLAR HOT WATER",
        data: [
            "SOLAR HOT WATER PRODUCTS",
            "ISTORE - AIR TO ENERGY",
            "ISTORE POOL HEATER",
            "SOLAR HOT WATER - FAQ", 
            "DOWNLOADS & BROCHURES",
            "WHY CHOOSE SOLAR HOT WATER?",
            "HOW SOLAR HOT WATER WORKS",
            "SOLAR HOT WATER 5 YEAR SERVICE",
            "HOT WATER WARRANTY REGISTRATION",
            "SPECIAL OFFERS ON HOT WATER"
        ]
    },
    {
        name: "SOLAR BATTERY",
        data: [
            "SOLAR BATTERY PRODUCTS",
            "EV CHARGER RANGE", 
            "HOW BATTERY STORAGE WORKS",
            "EV CHARGER BENEFITS",
            "EV CHARGER DYNAMIC LOAD BALANCING",
            "BATTERY STORAGE SPECIAL OFFERS"
        ]
    },
    {
        name: "SERVICE & SUPPORT",
        data: [
            "SERVICE & SUPPORT CENTRE",
            "MONITOR YOUR INVERTER",
            "DC ISOLATOR RECALLS",
            "INVERTER MODELS WE SERVICE",
            "SOLAR SAVINGS AND PAYBACK CALCULATOR",
            "SOLAR SAVINGS CALCULATOR",
            "CONNECT YOUR INVERTER TO WIFI",
            "WARRANTY DOCUMENTS"
        ]
    },
]

export default function generate_nav () {
    const arr = []; /* ul list */
    for (let i=0; i < data.length; i++) {
        const list = []; /* li list */
        for (let x=0; x < data[i].data.length; x++) {
            list.push(
                <li className="nav-item">
                    <a href="/">{data[i].data[x]}</a>
                </li>
            )
        };

        arr.push(
            <li className="nav-li">
                <a href="/" className="nav-header">{data[i].name}</a>
                <ul className="nav-list">
                    {list}
                </ul>
            </li>
        );
    };

    return arr;
};