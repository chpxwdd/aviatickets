// import data from '~/assets/data/example/searchRecommendations/RT/2A1C1I.json';

import { buildEndpoint } from "~/helpers/sodis";

export default defineEventHandler(async (event) => {

    // const { countryId } = getQuery(event);
    console.log("hotels.js for countryId:", 102)

    return {
        statusCode: 200,
    }

    // return res.prices.map(item => {
    //     return {
    //         id: item.id,
    //         coordinates: [item.lng, item.lat],
    //         title: item.name,
    //         subtitle: String(item.priceFrom),
    //         rating: item.starrating,
    //         stars: item.starcode,
    //         price: item.priceFrom,
    //         bestBuy: item.bestBuy
    //     }
    // });
})