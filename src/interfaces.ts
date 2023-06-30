type coreNumber = 2 | 4 | 6 | 8

interface Prosesor {
    brand: string;
    baseModel: string;
    sku: string;
    coreTotal: coreNumber
    clockSpeed: number;
}

interface intel extends Prosesor {
    turboBoost?: boolean // ? mean option
}

interface amd extends Prosesor {
    precisionBoost?: string
}

function createProciIntel(processor: intel): void {
    console.log(`
 prosesor ${processor.brand} berhasil dibuat dengan detail:
 Brand: ${processor.brand}
 Base Model: ${processor.baseModel}
 SKU: ${processor.sku}
 Total Core: ${processor.coreTotal}
 Clock Speed: ${processor.clockSpeed}
 Turbo Boost: ${processor.turboBoost}
    `)
}

function createProciAmd(processor: amd): void {
    console.log(`
 prosesor ${processor.brand} berhasil dibuat dengan detail:
 Brand: ${processor.brand}
 Base Model: ${processor.baseModel}
 SKU: ${processor.sku}
 Total Core: ${processor.coreTotal}
 Clock Speed: ${processor.clockSpeed}
 Precision Boost: ${processor.precisionBoost? processor.precisionBoost : "None"}
`)
}

const I5: intel = {
    brand: "Intel",
    baseModel: "I5 12500H",
    sku: "Teuing",
    coreTotal: 8,
    clockSpeed: 4,
};

const ryzen3: amd = {
    brand: "AMD",
    baseModel: "RYZEN 3 7600",
    sku: "Teuing",
    coreTotal: 8,
    clockSpeed: 4,
    precisionBoost: "Ready"
};

createProciIntel(I5)
createProciAmd(ryzen3)