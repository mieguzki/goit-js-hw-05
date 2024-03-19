function getShippingCost(country) {
    const priceAustralia = 170;
    const priceChina = 100;
    const priceChile = 250;
    const priceJamaica = 120;
    switch (country) {
      case 'Australia':
        return `Shipping to ${country} will cost ${priceAustralia} credits`;
        break;
      case 'China':
        return `Shipping to ${country} will cost ${priceChina} credits`;
        break;
      case 'Chile':
        return `Shipping to ${country} will cost ${priceChile} credits`;
        break;
      case 'Jamaica':
        return `Shipping to ${country} will cost ${priceJamaica} credits`;
      default:
        return `Sorry, there is no delivery to your country`;
    }
  }