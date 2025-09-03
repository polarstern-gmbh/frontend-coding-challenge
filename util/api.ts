type TariffType = "electricity" | "gas";
type Flexibility = "classic" | "comfort" | "flex" | "flexPlus";

export interface Tariff {
    id: string;
    type: TariffType;
    /**
     * The flexibility type of the tariff:
     * - classic: Normal runtime of 1 year
     * - comfort: 2 years min runtime
     * - flex: changing pricePerUnit each month
     * - flex plus: changing prices according to energy stock market price (each 15min)
     */
    flexibility: Flexibility;
    name: string;
    /**
     * The price per kWh of energy in Euro, e.g. 0.32.
     */
    pricePerUnit: number;
    /**
     * The base price that is charged monthly in Euro, e.g. 10.
     */
    pricePerMonth: number;
}

export interface GetTariffsParams {
    type: TariffType;
    flexibility: Flexibility[];
    /**
     * The annual consumption of energy in kWh, e.g. 3500.
     */
    annualConsumption: number;
}

/**
 * Retrieves a list of tariffs based on the provided parameters.
 *
 * @param params - The parameters used to filter and generate tariffs.
 * @param params.type - The type of tariff ("power" or "gas").
 * @param params.flexibility - An array of flexibility types to include in the results.
 * @param params.annualConsumption - The annual consumption value to filter for proper tariffs.
 * @returns A promise that resolves to an array of tariffs.
 */
export const getTariffs = (params: GetTariffsParams): Promise<Tariff[]> => {
    // Slim generator for 3 mocked tariffs matching the params
    const mockTariffs: Tariff[] = Array.from({ length: 3 }, (_, i) => {
        const flexibilityTypes: Flexibility[] = params.flexibility.length
            ? params.flexibility
            : ["classic", "comfort", "flex", "flexPlus"];
        const flexibility: Flexibility = flexibilityTypes[i % flexibilityTypes.length] || "classic";
        return {
            id: `${params.type}-${flexibility}-${i + 1}`,
            type: params.type,
            flexibility,
            name: `Wirklich ${params.type.toUpperCase()} ${
                flexibility.charAt(0).toUpperCase() + flexibility.slice(1)
            } ${i + 1}`,
            pricePerUnit: 0.25 + i * 0.01,
            pricePerMonth: 10 + i,
        };
    });

    return new Promise((resolve) => {
        setTimeout(() => resolve(mockTariffs), 1000);
    });
};
