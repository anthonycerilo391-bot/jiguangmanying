export function formatPriceString(priceStr: string, decimals?: number): string {
    if (!priceStr) return '';
    
    // Attempt to parse numbers within the string and format them if they look like prices
    // Example input: "提示1.05元/ 1M tokens"
    return priceStr.replace(/(\d+\.\d+|\d+)/g, (match) => {
        const num = parseFloat(match);
        // Only format if it looks like a price (has more than 1 decimal or specifically requested)
        if (decimals !== undefined) {
            return num.toFixed(decimals);
        }
        return match;
    });
}
