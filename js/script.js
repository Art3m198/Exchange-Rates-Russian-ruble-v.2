function CBR_XML_Daily_Ru(rates) {
    function trend(current, previous) {
      if (current > previous) return ' ▲';
      if (current < previous) return ' ▼';
      return '';
    }

    
    USD.append(rates.Valute.USD.Value);
    USD.innerHTML += trend(rates.Valute.USD.Value, rates.Valute.USD.Previous);
    nameUSD.append(rates.Valute.USD.Name);
    nomUSD.append(rates.Valute.USD.Nominal);

    EUR.append(rates.Valute.EUR.Value);
    EUR.innerHTML += trend(rates.Valute.EUR.Value, rates.Valute.EUR.Previous);
    nameEUR.append(rates.Valute.EUR.Name);
    nomEUR.append(rates.Valute.EUR.Nominal);
    
    BYN.append(rates.Valute.BYN.Value);
    BYN.innerHTML += trend(rates.Valute.BYN.Value, rates.Valute.BYN.Previous);
    nameBYN.append(rates.Valute.BYN.Name);
    nomBYN.append(rates.Valute.BYN.Nominal);

    CAD.append(rates.Valute.CAD.Value);
    CAD.innerHTML += trend(rates.Valute.CAD.Value, rates.Valute.CAD.Previous);
    nameCAD.append(rates.Valute.CAD.Name);
    nomCAD.append(rates.Valute.CAD.Nominal);

    CHF.append(rates.Valute.CHF.Value);
    CHF.innerHTML += trend(rates.Valute.CHF.Value, rates.Valute.CHF.Previous);
    nameCHF.append(rates.Valute.CHF.Name);
    nomCHF.append(rates.Valute.CHF.Nominal);

    CNY.append(rates.Valute.CNY.Value);
    CNY.innerHTML += trend(rates.Valute.CNY.Value, rates.Valute.CNY.Previous);
    nameCNY.append(rates.Valute.CNY.Name);
    nomCNY.append(rates.Valute.CNY.Nominal);

    CZK.append(rates.Valute.CZK.Value);
    CZK.innerHTML += trend(rates.Valute.CZK.Value, rates.Valute.CZK.Previous);
    nameCZK.append(rates.Valute.CZK.Name);
    nomCZK.append(rates.Valute.CZK.Nominal);

    GBP.append(rates.Valute.GBP.Value);
    GBP.innerHTML += trend(rates.Valute.GBP.Value, rates.Valute.GBP.Previous);
    nomGBP.append(rates.Valute.GBP.Nominal);

    JPY.append(rates.Valute.JPY.Value);
    JPY.innerHTML += trend(rates.Valute.JPY.Value, rates.Valute.JPY.Previous);
    nameJPY.append(rates.Valute.JPY.Name);
    nomJPY.append(rates.Valute.JPY.Nominal);

    KZT.append(rates.Valute.KZT.Value);
    KZT.innerHTML += trend(rates.Valute.KZT.Value, rates.Valute.KZT.Previous);
    nameKZT.append(rates.Valute.KZT.Name);
    nomKZT.append(rates.Valute.KZT.Nominal);

    NOK.append(rates.Valute.NOK.Value);
    NOK.innerHTML += trend(rates.Valute.NOK.Value, rates.Valute.NOK.Previous);
    nameNOK.append(rates.Valute.NOK.Name);
    nomNOK.append(rates.Valute.NOK.Nominal);
   
    PLN.append(rates.Valute.PLN.Value);
    PLN.innerHTML += trend(rates.Valute.PLN.Value, rates.Valute.PLN.Previous);
    namePLN.append(rates.Valute.PLN.Name);
    nomPLN.append(rates.Valute.PLN.Nominal);

    SEK.append(rates.Valute.SEK.Value);
    SEK.innerHTML += trend(rates.Valute.SEK.Value, rates.Valute.SEK.Previous);
    nameSEK.append(rates.Valute.SEK.Name);
    nomSEK.append(rates.Valute.SEK.Nominal);

    TRY.append(rates.Valute.TRY.Value);
    TRY.innerHTML += trend(rates.Valute.TRY.Value, rates.Valute.TRY.Previous);
    nameTRY.append(rates.Valute.TRY.Name);
    nomTRY.append(rates.Valute.TRY.Nominal);

    UAH.append(rates.Valute.UAH.Value);
    UAH.innerHTML += trend(rates.Valute.UAH.Value, rates.Valute.UAH.Previous);
    nameUAH.append(rates.Valute.UAH.Name);
    nomUAH.append(rates.Valute.UAH.Nominal);

    var st = rates.Timestamp;
    var dt = new Date(st).toLocaleString();
    date.append(dt);
}
