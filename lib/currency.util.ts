/**
 * Function to get user country by IP using ipdata.co
 * @returns {Promise} A promise that resolves to the user's country code
 */
const getUserCountry = async () => {
  const apiKey = process.env.NEXT_PUBLIC_IPDATA_API_KEY; // Using env variable
  if (!apiKey) throw new Error("Missing IPDATA API key");

  const response = await fetch(`https://api.ipdata.co?api-key=${apiKey}`);

  if (!response.ok) {
    throw new Error("Could not fetch country data");
  }

  const data = await response.json();
  return {
    countryCode: data.country_code,
    countryName: data.country_name,
  };
};


/**
 * Function to get currency and flag by country code
 * @param countryCode The 2-letter ISO country code
 * @returns An object containing the currency code and flag URL
 */
const getCurrencyAndFlagByCountryCode = async (countryCode: string) => {
  const response = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);

  if (!response.ok) {
    throw new Error("Could not fetch currency and flag data");
  }

  const data = await response.json();
  const currencyCode = Object.keys(data[0].currencies)[0]; // Extract currency code
  const flagUrl = data[0].flags.png; // Extract flag URL

  return { currencyCode, flagUrl };
};

/**
 * Function to fetch user currency and flag
 * @returns An object containing the currency code and flag URL
 */
export const fetchUserCurrencyAndFlag = async () => {
  try {
    const userCountry = await getUserCountry(); // Get country based on IP
    return await getCurrencyAndFlagByCountryCode(userCountry.countryCode); // Get currency and flag
  } catch (error) {
    // Explicitly cast `error` to `Error` to access `.message`
    if (error instanceof Error) {
      console.error("Error fetching currency and flag:", error.message);
    } else {
      console.error("An unknown error occurred:", error);
    }
    
    return {
      currencyCode: "USD", // Fallback currency
      flagUrl: "/path/to/default-flag.png", // Fallback flag
    };
  }
};
