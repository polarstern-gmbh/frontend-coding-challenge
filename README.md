# Frontend Coding Challenge

Hi there and thanks for looking into our challenge.

!! Note: Only use a decent amount of time for the coding challenge. The goal is not to have a 100% perfect implementation that is nicely designed. It's just to demonstrate your understanding of the problem and your ability to create a working solution that follows common coding standards.

## The Challenge

We already have a "normal" tariff calculator on our website, that is basically just a form with zip code and annual consumption of electricity/gas in kWh. It then displays a list of tariffs based on the input.

The Marketing team now wants to test another style of "tariff calculator" that works like a configuration wizard and can be used in magazine articles and such. Most people are not very motivated to fill out long forms, so we want to create a more engaging experience. For this:

-   Create a wizard component that guides users through one questions at a time to determine the best tariff for them.
-   Use the input of the user for each question to query the tariffs from the given API adapter in `util/tariffs.ts`.
-   Show the found tariffs in a simple way including the calculated monthly payment.
    -   The formula is like `monthlyPayment = (annualConsumption / 12 * pricePerUnit) + pricePerMonth`

### Wizard Questions

List of questions with answers and according filtering results:

1. Wie oft willst du dich mit Energiethemen im Jahr beschäftigen? (Eine Auswahl möglich)
    - Gar nicht
        - -> flexibility types of classic and comfort
    - Eher weniger
        - -> flexibility types of classic
    - Eher mehr
        - -> flexibility types of flex and flex plus
2. Was hast du zuhause? (Eine Auswahl möglich)
    - Wärmepumpe
        - -> filter for type of electricity
    - Gasheizung
        - -> filter for type of gas
    - E-Auto und Wallbox
        - -> filter for type of electricity
3. In was für einem Haus wohnst du? (Eine Auswahl möglich)
    - Neubau
        - -> annualConsumption of 2400kWh
    - Altbau
        - -> annualConsumption of 3000kWh

## Nuxt Setup

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

### Setup

Make sure to install dependencies:

```bash
yarn install
```

### Development Server

Start the development server on `http://localhost:3000`:

```bash
yarn dev
```
