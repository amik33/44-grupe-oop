class Shop {
    constructor(pavadinimas, valiuta, preke, prekesKodas, prekesPavadinimas, isigijimoKaina, pardavimoKaina, kiekis, prekiuPapildymas, prekiuPardavimas ){
        this.title = pavadinimas;
        this.currency = valiuta;
        this.product = preke;
        this.productId = prekesKodas;
        this.productName = prekesPavadinimas;
        this.buyPrice = isigijimoKaina;
        this.sellPrice = pardavimoKaina;
        this.amount = kiekis;
        this.productRenewal = prekiuPapildymas;
        this.productSell = prekiuPardavimas;
        this.shopOpen = false;
    }

    shopOpeningHours() {
        if (this.shopOpen) {
            return 'Apsilankykite dar karta';
        }

        this.shopOpen = true;
        return `Sveiki atvyke i ${this.title.toUpperCase()}!` ;
    }

    tradeProgress() {
        if (this.product < this.amount) {
            return `${this.productName}, puikus pasirinkimas.`;
        }

        this.product = true;
        return `Noriu pirkti kede.`;
    }

    tradeDeal(trade) {
        if  (this.sellPrice - this.buyPrice) {
            return `Kokia kaina?`;
        }

    }

    makeDeal(deal) {
        if (this.sellPrice) {
            return `Kedes kaina ${this.sellPrice} ${this.currency}.`;
        }

        this.buyPrice == this.productId ;
        return `Butinai apsilankysiu`;
    }

    finalDeal() {
        if (this.sellPrice + this.buyPrice) {
            return `Supakuokite.`;
        }
            
    }

    comeback() {
        if (this.buyPrice !== this.productId) {
            return `Butinai apsilankysiu.`;
        }

    }

}

export {Shop};