const dataset = [
    { "data": "2021-05-29", "mandante": "Cuiabá", "gm": 2, "gv": 2, "visitante": "Juventude" },
    { "data": "2021-05-29", "mandante": "Bahia", "gm": 3, "gv": 0, "visitante": "Santos" },
    { "data": "2021-05-29", "mandante": "São Paulo", "gm": 0, "gv": 0, "visitante": "Fluminense" },
    { "data": "2021-05-30", "mandante": "Atlético Mineiro", "gm": 1, "gv": 2, "visitante": "Fortaleza" },
    { "data": "2021-05-30", "mandante": "Flamengo", "gm": 1, "gv": 0, "visitante": "Palmeiras" },
    { "data": "2021-05-30", "mandante": "Ceará", "gm": 3, "gv": 2, "visitante": "Grêmio" },
    { "data": "2021-05-30", "mandante": "Chapecoense", "gm": 0, "gv": 3, "visitante": "RB Bragantino" },
    { "data": "2021-05-30", "mandante": "Corinthians", "gm": 0, "gv": 1, "visitante": "Atlético Goianiense" },
    { "data": "2021-05-30", "mandante": "Athletico", "gm": 1, "gv": 0, "visitante": "América Mineiro" },
    { "data": "2021-05-30", "mandante": "Internacional", "gm": 2, "gv": 2, "visitante": "Sport" },
    { "data": "2021-06-05", "mandante": "Atlético Goianiense", "gm": 2, "gv": 0, "visitante": "São Paulo" },
    { "data": "2021-06-05", "mandante": "RB Bragantino", "gm": 3, "gv": 3, "visitante": "Bahia" },
    { "data": "2021-06-05", "mandante": "Santos", "gm": 3, "gv": 1, "visitante": "Ceará" },
    { "data": "2021-06-06", "mandante": "Fluminense", "gm": 1, "gv": 0, "visitante": "Cuiabá" },
    { "data": "2021-06-06", "mandante": "América Mineiro", "gm": 0, "gv": 1, "visitante": "Corinthians" },
    { "data": "2021-06-06", "mandante": "Fortaleza", "gm": 5, "gv": 1, "visitante": "Internacional" },
    { "data": "2021-06-06", "mandante": "Palmeiras", "gm": 3, "gv": 1, "visitante": "Chapecoense" },
    { "data": "2021-06-06", "mandante": "Juventude", "gm": 0, "gv": 3, "visitante": "Athletico" },
    { "data": "2021-06-06", "mandante": "Sport", "gm": 0, "gv": 1, "visitante": "Atlético Mineiro" },
    { "data": "2021-06-12", "mandante": "Palmeiras", "gm": 1, "gv": 1, "visitante": "Corinthians" },
    { "data": "2021-06-12", "mandante": "Santos", "gm": 0, "gv": 0, "visitante": "Juventude" },
    { "data": "2021-06-13", "mandante": "Flamengo", "gm": 2, "gv": 0, "visitante": "América Mineiro" },
    { "data": "2021-06-13", "mandante": "Atlético Mineiro", "gm": 1, "gv": 0, "visitante": "São Paulo" },
    { "data": "2021-06-13", "mandante": "Grêmio", "gm": 0, "gv": 1, "visitante": "Athletico" },
    { "data": "2021-06-13", "mandante": "RB Bragantino", "gm": 2, "gv": 2, "visitante": "Fluminense" },
    { "data": "2021-06-13", "mandante": "Chapecoense", "gm": 0, "gv": 0, "visitante": "Ceará" },
    { "data": "2021-06-13", "mandante": "Bahia", "gm": 0, "gv": 1, "visitante": "Internacional" },
    { "data": "2021-06-13", "mandante": "Fortaleza", "gm": 1, "gv": 0, "visitante": "Sport" },
    { "data": "2021-06-16", "mandante": "São Paulo", "gm": 1, "gv": 1, "visitante": "Chapecoense" },
    { "data": "2021-06-16", "mandante": "Internacional", "gm": 0, "gv": 1, "visitante": "Atlético Mineiro" },
    { "data": "2021-06-16", "mandante": "Corinthians", "gm": 1, "gv": 2, "visitante": "RB Bragantino" },
    { "data": "2021-06-16", "mandante": "Juventude", "gm": 0, "gv": 3, "visitante": "Palmeiras" },
    { "data": "2021-06-17", "mandante": "Ceará", "gm": 1, "gv": 2, "visitante": "Bahia" },
    { "data": "2021-06-17", "mandante": "América Mineiro", "gm": 0, "gv": 0, "visitante": "Cuiabá" },
    { "data": "2021-06-17", "mandante": "Atlético Goianiense", "gm": 0, "gv": 0, "visitante": "Fortaleza" },
    { "data": "2021-06-17", "mandante": "Fluminense", "gm": 1, "gv": 0, "visitante": "Santos" },
    { "data": "2021-06-17", "mandante": "Sport", "gm": 1, "gv": 0, "visitante": "Grêmio" },
    { "data": "2021-06-19", "mandante": "Flamengo", "gm": 2, "gv": 3, "visitante": "RB Bragantino" },
    { "data": "2021-06-20", "mandante": "Palmeiras", "gm": 2, "gv": 1, "visitante": "América Mineiro" },
    { "data": "2021-06-20", "mandante": "Internacional", "gm": 1, "gv": 1, "visitante": "Ceará" },
    { "data": "2021-06-20", "mandante": "Bahia", "gm": 0, "gv": 0, "visitante": "Corinthians" },
    { "data": "2021-06-20", "mandante": "Athletico", "gm": 2, "gv": 1, "visitante": "Atlético Goianiense" },
    { "data": "2021-06-20", "mandante": "Santos", "gm": 2, "gv": 0, "visitante": "São Paulo" },
    { "data": "2021-06-20", "mandante": "Fortaleza", "gm": 1, "gv": 1, "visitante": "Fluminense" },
    { "data": "2021-06-20", "mandante": "Juventude", "gm": 1, "gv": 0, "visitante": "Sport" },
    { "data": "2021-06-21", "mandante": "Atlético Mineiro", "gm": 1, "gv": 1, "visitante": "Chapecoense" },
    { "data": "2021-06-23", "mandante": "Flamengo", "gm": 2, "gv": 1, "visitante": "Fortaleza" },
    { "data": "2021-06-23", "mandante": "São Paulo", "gm": 2, "gv": 2, "visitante": "Cuiabá" },
    { "data": "2021-06-23", "mandante": "RB Bragantino", "gm": 3, "gv": 1, "visitante": "Palmeiras" },
    { "data": "2021-06-23", "mandante": "Atlético Goianiense", "gm": 1, "gv": 0, "visitante": "Fluminense" },
    { "data": "2021-06-24", "mandante": "América Mineiro", "gm": 1, "gv": 1, "visitante": "Juventude" },
    { "data": "2021-06-24", "mandante": "Corinthians", "gm": 2, "gv": 1, "visitante": "Sport" },
    { "data": "2021-06-24", "mandante": "Ceará", "gm": 2, "gv": 1, "visitante": "Atlético Mineiro" },
    { "data": "2021-06-24", "mandante": "Chapecoense", "gm": 1, "gv": 2, "visitante": "Internacional" },
    { "data": "2021-06-24", "mandante": "Grêmio", "gm": 2, "gv": 2, "visitante": "Santos" },
    { "data": "2021-06-24", "mandante": "Bahia", "gm": 2, "gv": 1, "visitante": "Athletico" },
    { "data": "2021-06-27", "mandante": "Juventude", "gm": 1, "gv": 0, "visitante": "Flamengo" },
    { "data": "2021-06-27", "mandante": "Fluminense", "gm": 1, "gv": 1, "visitante": "Corinthians" },
    { "data": "2021-06-27", "mandante": "Grêmio", "gm": 0, "gv": 0, "visitante": "Fortaleza" },
    { "data": "2021-06-27", "mandante": "Palmeiras", "gm": 3, "gv": 2, "visitante": "Bahia" },
    { "data": "2021-06-27", "mandante": "Athletico", "gm": 2, "gv": 2, "visitante": "Chapecoense" },
    { "data": "2021-06-27", "mandante": "América Mineiro", "gm": 1, "gv": 1, "visitante": "Internacional" },
    { "data": "2021-06-27", "mandante": "Santos", "gm": 2, "gv": 0, "visitante": "Atlético Mineiro" },
    { "data": "2021-06-27", "mandante": "Ceará", "gm": 1, "gv": 1, "visitante": "São Paulo" },
    { "data": "2021-06-27", "mandante": "Sport", "gm": 0, "gv": 0, "visitante": "Cuiabá" },
    { "data": "2021-06-28", "mandante": "Atlético Goianiense", "gm": 0, "gv": 1, "visitante": "RB Bragantino" },
    { "data": "2021-06-30", "mandante": "Fortaleza", "gm": 3, "gv": 2, "visitante": "Chapecoense" },
    { "data": "2021-06-30", "mandante": "Fluminense", "gm": 1, "gv": 4, "visitante": "Athletico" },
    { "data": "2021-06-30", "mandante": "Bahia", "gm": 3, "gv": 4, "visitante": "América Mineiro" },
    { "data": "2021-06-30", "mandante": "Internacional", "gm": 1, "gv": 2, "visitante": "Palmeiras" },
    { "data": "2021-06-30", "mandante": "Santos", "gm": 0, "gv": 0, "visitante": "Sport" },
    { "data": "2021-06-30", "mandante": "Corinthians", "gm": 0, "gv": 0, "visitante": "São Paulo" },
    { "data": "2021-06-30", "mandante": "Juventude", "gm": 2, "gv": 0, "visitante": "Grêmio" },
    { "data": "2021-07-01", "mandante": "RB Bragantino", "gm": 0, "gv": 0, "visitante": "Ceará" },
    { "data": "2021-07-01", "mandante": "Atlético Mineiro", "gm": 4, "gv": 1, "visitante": "Atlético Goianiense" },
    { "data": "2021-07-01", "mandante": "Cuiabá", "gm": 0, "gv": 2, "visitante": "Flamengo" },
    { "data": "2021-07-03", "mandante": "América Mineiro", "gm": 2, "gv": 0, "visitante": "Santos" },
    { "data": "2021-07-03", "mandante": "Athletico", "gm": 2, "gv": 1, "visitante": "Fortaleza" },
    { "data": "2021-07-03", "mandante": "Corinthians", "gm": 1, "gv": 1, "visitante": "Internacional" },
    { "data": "2021-07-04", "mandante": "Chapecoense", "gm": 0, "gv": 2, "visitante": "Bahia" },
    { "data": "2021-07-04", "mandante": "Sport", "gm": 0, "gv": 1, "visitante": "Palmeiras" },
    { "data": "2021-07-04", "mandante": "Flamengo", "gm": 0, "gv": 1, "visitante": "Fluminense" },
    { "data": "2021-07-04", "mandante": "São Paulo", "gm": 1, "gv": 2, "visitante": "RB Bragantino" },
    { "data": "2021-07-04", "mandante": "Ceará", "gm": 2, "gv": 0, "visitante": "Juventude" },
    { "data": "2021-07-04", "mandante": "Cuiabá", "gm": 0, "gv": 1, "visitante": "Atlético Mineiro" },
    { "data": "2021-07-04", "mandante": "Grêmio", "gm": 0, "gv": 1, "visitante": "Atlético Goianiense" },
    { "data": "2021-07-06", "mandante": "Santos", "gm": 2, "gv": 1, "visitante": "Athletico" },
    { "data": "2021-07-07", "mandante": "RB Bragantino", "gm": 1, "gv": 1, "visitante": "Cuiabá" },
    { "data": "2021-07-07", "mandante": "Bahia", "gm": 1, "gv": 0, "visitante": "Juventude" },
    { "data": "2021-07-07", "mandante": "Fortaleza", "gm": 4, "gv": 0, "visitante": "América Mineiro" },
    { "data": "2021-07-07", "mandante": "Palmeiras", "gm": 2, "gv": 0, "visitante": "Grêmio" },
    { "data": "2021-07-07", "mandante": "Atlético Mineiro", "gm": 2, "gv": 1, "visitante": "Flamengo" },
    { "data": "2021-07-07", "mandante": "Atlético Goianiense", "gm": 1, "gv": 1, "visitante": "Sport" },
    { "data": "2021-07-07", "mandante": "Fluminense", "gm": 0, "gv": 0, "visitante": "Ceará" },
    { "data": "2021-07-07", "mandante": "Internacional", "gm": 0, "gv": 2, "visitante": "São Paulo" },
    { "data": "2021-07-08", "mandante": "Chapecoense", "gm": 0, "gv": 1, "visitante": "Corinthians" },
    { "data": "2021-07-10", "mandante": "Palmeiras", "gm": 3, "gv": 2, "visitante": "Santos" },
    { "data": "2021-07-10", "mandante": "Grêmio", "gm": 0, "gv": 0, "visitante": "Internacional" },
    { "data": "2021-07-10", "mandante": "Athletico", "gm": 2, "gv": 2, "visitante": "RB Bragantino" },
    { "data": "2021-07-10", "mandante": "São Paulo", "gm": 1, "gv": 0, "visitante": "Bahia" },
    { "data": "2021-07-10", "mandante": "América Mineiro", "gm": 0, "gv": 1, "visitante": "Atlético Mineiro" },
    { "data": "2021-07-10", "mandante": "Sport", "gm": 1, "gv": 2, "visitante": "Fluminense" },
    { "data": "2021-07-11", "mandante": "Juventude", "gm": 1, "gv": 1, "visitante": "Atlético Goianiense" },
    { "data": "2021-07-11", "mandante": "Flamengo", "gm": 2, "gv": 1, "visitante": "Chapecoense" },
    { "data": "2021-07-11", "mandante": "Cuiabá", "gm": 2, "gv": 2, "visitante": "Ceará" },
    { "data": "2021-07-11", "mandante": "Fortaleza", "gm": 1, "gv": 0, "visitante": "Corinthians" },
    { "data": "2021-07-17", "mandante": "Ceará", "gm": 1, "gv": 0, "visitante": "Athletico" },
    { "data": "2021-07-17", "mandante": "São Paulo", "gm": 0, "gv": 1, "visitante": "Fortaleza" },
    { "data": "2021-07-17", "mandante": "Corinthians", "gm": 1, "gv": 2, "visitante": "Atlético Mineiro" },
    { "data": "2021-07-17", "mandante": "Fluminense", "gm": 0, "gv": 1, "visitante": "Grêmio" },
    { "data": "2021-07-18", "mandante": "Chapecoense", "gm": 2, "gv": 3, "visitante": "Cuiabá" },
    { "data": "2021-07-18", "mandante": "Atlético Goianiense", "gm": 0, "gv": 3, "visitante": "Palmeiras" },
    { "data": "2021-07-18", "mandante": "Bahia", "gm": 0, "gv": 5, "visitante": "Flamengo" },
    { "data": "2021-07-18", "mandante": "Internacional", "gm": 1, "gv": 0, "visitante": "Juventude" },
    { "data": "2021-07-18", "mandante": "RB Bragantino", "gm": 2, "gv": 2, "visitante": "Santos" },
    { "data": "2021-07-19", "mandante": "América Mineiro", "gm": 0, "gv": 1, "visitante": "Sport" },
    { "data": "2021-07-21", "mandante": "Cuiabá", "gm": 2, "gv": 1, "visitante": "Atlético Goianiense" },
    { "data": "2021-07-24", "mandante": "Grêmio", "gm": 1, "gv": 1, "visitante": "América Mineiro" },
    { "data": "2021-07-24", "mandante": "Palmeiras", "gm": 1, "gv": 0, "visitante": "Fluminense" },
    { "data": "2021-07-25", "mandante": "Atlético Mineiro", "gm": 3, "gv": 0, "visitante": "Bahia" },
    { "data": "2021-07-25", "mandante": "Fortaleza", "gm": 1, "gv": 0, "visitante": "RB Bragantino" },
    { "data": "2021-07-25", "mandante": "Flamengo", "gm": 5, "gv": 1, "visitante": "São Paulo" },
    { "data": "2021-07-25", "mandante": "Athletico", "gm": 2, "gv": 1, "visitante": "Internacional" },
    { "data": "2021-07-25", "mandante": "Santos", "gm": 0, "gv": 1, "visitante": "Atlético Goianiense" },
    { "data": "2021-07-25", "mandante": "Sport", "gm": 0, "gv": 0, "visitante": "Ceará" },
    { "data": "2021-07-26", "mandante": "Juventude", "gm": 1, "gv": 0, "visitante": "Chapecoense" },
    { "data": "2021-07-26", "mandante": "Cuiabá", "gm": 1, "gv": 2, "visitante": "Corinthians" },
    { "data": "2021-07-31", "mandante": "São Paulo", "gm": 0, "gv": 0, "visitante": "Palmeiras" },
    { "data": "2021-07-31", "mandante": "Internacional", "gm": 0, "gv": 0, "visitante": "Cuiabá" },
    { "data": "2021-07-31", "mandante": "RB Bragantino", "gm": 1, "gv": 0, "visitante": "Grêmio" },
    { "data": "2021-08-01", "mandante": "Corinthians", "gm": 1, "gv": 3, "visitante": "Flamengo" },
    { "data": "2021-08-01", "mandante": "Atlético Mineiro", "gm": 2, "gv": 0, "visitante": "Athletico" },
    { "data": "2021-08-01", "mandante": "Chapecoense", "gm": 0, "gv": 1, "visitante": "Santos" },
    { "data": "2021-08-01", "mandante": "Bahia", "gm": 0, "gv": 1, "visitante": "Sport" },
    { "data": "2021-08-01", "mandante": "Atlético Goianiense", "gm": 1, "gv": 1, "visitante": "América Mineiro" },
    { "data": "2021-08-01", "mandante": "Ceará", "gm": 3, "gv": 1, "visitante": "Fortaleza" },
    { "data": "2021-08-06", "mandante": "Sport", "gm": 0, "gv": 0, "visitante": "RB Bragantino" },
    { "data": "2021-08-07", "mandante": "Athletico", "gm": 1, "gv": 2, "visitante": "São Paulo" },
    { "data": "2021-08-07", "mandante": "Palmeiras", "gm": 2, "gv": 3, "visitante": "Fortaleza" },
    { "data": "2021-08-07", "mandante": "Cuiabá", "gm": 1, "gv": 1, "visitante": "Bahia" },
    { "data": "2021-08-08", "mandante": "América Mineiro", "gm": 1, "gv": 0, "visitante": "Fluminense" },
    { "data": "2021-08-08", "mandante": "Juventude", "gm": 1, "gv": 2, "visitante": "Atlético Mineiro" },
    { "data": "2021-08-08", "mandante": "Santos", "gm": 0, "gv": 0, "visitante": "Corinthians" },
    { "data": "2021-08-08", "mandante": "Flamengo", "gm": 0, "gv": 4, "visitante": "Internacional" },
    { "data": "2021-08-08", "mandante": "Ceará", "gm": 0, "gv": 0, "visitante": "Atlético Goianiense" },
    { "data": "2021-08-09", "mandante": "Grêmio", "gm": 2, "gv": 1, "visitante": "Chapecoense" },
    { "data": "2021-08-14", "mandante": "RB Bragantino", "gm": 1, "gv": 2, "visitante": "Juventude" },
    { "data": "2021-08-14", "mandante": "Atlético Mineiro", "gm": 2, "gv": 0, "visitante": "Palmeiras" },
    { "data": "2021-08-14", "mandante": "São Paulo", "gm": 2, "gv": 1, "visitante": "Grêmio" },
    { "data": "2021-08-15", "mandante": "Flamengo", "gm": 2, "gv": 0, "visitante": "Sport" },
    { "data": "2021-08-15", "mandante": "Corinthians", "gm": 3, "gv": 1, "visitante": "Ceará" },
    { "data": "2021-08-15", "mandante": "Fortaleza", "gm": 1, "gv": 1, "visitante": "Santos" },
    { "data": "2021-08-15", "mandante": "Bahia", "gm": 1, "gv": 2, "visitante": "Atlético Goianiense" },
    { "data": "2021-08-15", "mandante": "Cuiabá", "gm": 1, "gv": 0, "visitante": "Athletico" },
    { "data": "2021-08-15", "mandante": "Internacional", "gm": 4, "gv": 2, "visitante": "Fluminense" },
    { "data": "2021-08-16", "mandante": "Chapecoense", "gm": 1, "gv": 1, "visitante": "América Mineiro" },
    { "data": "2021-08-18", "mandante": "Cuiabá", "gm": 0, "gv": 1, "visitante": "Grêmio" },
    { "data": "2021-08-21", "mandante": "Atlético Goianiense", "gm": 1, "gv": 1, "visitante": "Chapecoense" },
    { "data": "2021-08-21", "mandante": "Grêmio", "gm": 2, "gv": 0, "visitante": "Bahia" },
    { "data": "2021-08-21", "mandante": "Juventude", "gm": 1, "gv": 1, "visitante": "Fortaleza" },
    { "data": "2021-08-22", "mandante": "Palmeiras", "gm": 0, "gv": 2, "visitante": "Cuiabá" },
    { "data": "2021-08-22", "mandante": "Ceará", "gm": 1, "gv": 1, "visitante": "Flamengo" },
    { "data": "2021-08-22", "mandante": "Athletico", "gm": 0, "gv": 1, "visitante": "Corinthians" },
    { "data": "2021-08-22", "mandante": "Santos", "gm": 2, "gv": 2, "visitante": "Internacional" },
    { "data": "2021-08-22", "mandante": "Sport", "gm": 0, "gv": 1, "visitante": "São Paulo" },
    { "data": "2021-08-23", "mandante": "América Mineiro", "gm": 0, "gv": 2, "visitante": "RB Bragantino" },
    { "data": "2021-08-23", "mandante": "Fluminense", "gm": 1, "gv": 1, "visitante": "Atlético Mineiro" },
    { "data": "2021-08-28", "mandante": "Sport", "gm": 0, "gv": 0, "visitante": "Chapecoense" },
    { "data": "2021-08-28", "mandante": "Santos", "gm": 0, "gv": 4, "visitante": "Flamengo" },
    { "data": "2021-08-28", "mandante": "Grêmio", "gm": 0, "gv": 1, "visitante": "Corinthians" },
    { "data": "2021-08-28", "mandante": "Palmeiras", "gm": 2, "gv": 1, "visitante": "Athletico" },
    { "data": "2021-08-29", "mandante": "América Mineiro", "gm": 2, "gv": 0, "visitante": "Ceará" },
    { "data": "2021-08-29", "mandante": "Juventude", "gm": 1, "gv": 1, "visitante": "São Paulo" },
    { "data": "2021-08-29", "mandante": "Atlético Goianiense", "gm": 0, "gv": 0, "visitante": "Internacional" },
    { "data": "2021-08-29", "mandante": "RB Bragantino", "gm": 1, "gv": 1, "visitante": "Atlético Mineiro" },
    { "data": "2021-08-30", "mandante": "Fluminense", "gm": 2, "gv": 0, "visitante": "Bahia" },
    { "data": "2021-08-30", "mandante": "Fortaleza", "gm": 0, "gv": 0, "visitante": "Cuiabá" },
    { "data": "2021-09-02", "mandante": "Fluminense", "gm": 1, "gv": 1, "visitante": "Juventude" },
    { "data": "2021-09-04", "mandante": "Bahia", "gm": 4, "gv": 2, "visitante": "Fortaleza" },
    { "data": "2021-09-04", "mandante": "Cuiabá", "gm": 2, "gv": 1, "visitante": "Santos" },
    { "data": "2021-09-05", "mandante": "Athletico", "gm": 0, "gv": 0, "visitante": "Sport" },
    { "data": "2021-09-07", "mandante": "Corinthians", "gm": 1, "gv": 1, "visitante": "Juventude" },
    { "data": "2021-09-07", "mandante": "Chapecoense", "gm": 1, "gv": 2, "visitante": "Fluminense" },
    { "data": "2021-09-11", "mandante": "América Mineiro", "gm": 2, "gv": 0, "visitante": "Athletico" },
    { "data": "2021-09-11", "mandante": "Juventude", "gm": 1, "gv": 2, "visitante": "Cuiabá" },
    { "data": "2021-09-11", "mandante": "RB Bragantino", "gm": 1, "gv": 2, "visitante": "Chapecoense" },
    { "data": "2021-09-11", "mandante": "Santos", "gm": 0, "gv": 0, "visitante": "Bahia" },
    { "data": "2021-09-12", "mandante": "Grêmio", "gm": 2, "gv": 0, "visitante": "Ceará" },
    { "data": "2021-09-12", "mandante": "Fortaleza", "gm": 0, "gv": 2, "visitante": "Atlético Mineiro" },
    { "data": "2021-09-12", "mandante": "Palmeiras", "gm": 1, "gv": 3, "visitante": "Flamengo" },
    { "data": "2021-09-12", "mandante": "Atlético Goianiense", "gm": 1, "gv": 1, "visitante": "Corinthians" },
    { "data": "2021-09-12", "mandante": "Fluminense", "gm": 2, "gv": 1, "visitante": "São Paulo" },
    { "data": "2021-09-13", "mandante": "Sport", "gm": 0, "gv": 1, "visitante": "Internacional" },
    { "data": "2021-09-18", "mandante": "Chapecoense", "gm": 0, "gv": 2, "visitante": "Palmeiras" },
    { "data": "2021-09-18", "mandante": "Athletico", "gm": 2, "gv": 1, "visitante": "Juventude" },
    { "data": "2021-09-18", "mandante": "Atlético Mineiro", "gm": 3, "gv": 0, "visitante": "Sport" },
    { "data": "2021-09-18", "mandante": "Bahia", "gm": 1, "gv": 1, "visitante": "RB Bragantino" },
    { "data": "2021-09-18", "mandante": "Ceará", "gm": 0, "gv": 0, "visitante": "Santos" },
    { "data": "2021-09-19", "mandante": "Internacional", "gm": 1, "gv": 0, "visitante": "Fortaleza" },
    { "data": "2021-09-19", "mandante": "São Paulo", "gm": 2, "gv": 1, "visitante": "Atlético Goianiense" },
    { "data": "2021-09-19", "mandante": "Corinthians", "gm": 1, "gv": 1, "visitante": "América Mineiro" },
    { "data": "2021-09-19", "mandante": "Flamengo", "gm": 0, "gv": 1, "visitante": "Grêmio" },
    { "data": "2021-09-20", "mandante": "Cuiabá", "gm": 2, "gv": 2, "visitante": "Fluminense" },
    { "data": "2021-09-22", "mandante": "São Paulo", "gm": 0, "gv": 0, "visitante": "América Mineiro" },
    { "data": "2021-09-25", "mandante": "Ceará", "gm": 1, "gv": 0, "visitante": "Chapecoense" },
    { "data": "2021-09-25", "mandante": "Corinthians", "gm": 2, "gv": 1, "visitante": "Palmeiras" },
    { "data": "2021-09-25", "mandante": "São Paulo", "gm": 0, "gv": 0, "visitante": "Atlético Mineiro" },
    { "data": "2021-09-26", "mandante": "América Mineiro", "gm": 1, "gv": 1, "visitante": "Flamengo" },
    { "data": "2021-09-26", "mandante": "Juventude", "gm": 3, "gv": 0, "visitante": "Santos" },
    { "data": "2021-09-26", "mandante": "Fluminense", "gm": 2, "gv": 1, "visitante": "RB Bragantino" },
    { "data": "2021-09-26", "mandante": "Internacional", "gm": 2, "gv": 0, "visitante": "Bahia" },
    { "data": "2021-09-26", "mandante": "Athletico", "gm": 4, "gv": 2, "visitante": "Grêmio" },
    { "data": "2021-09-26", "mandante": "Sport", "gm": 0, "gv": 1, "visitante": "Fortaleza" },
    { "data": "2021-09-26", "mandante": "Atlético Goianiense", "gm": 0, "gv": 0, "visitante": "Cuiabá" },
    { "data": "2021-10-02", "mandante": "Cuiabá", "gm": 0, "gv": 2, "visitante": "América Mineiro" },
    { "data": "2021-10-02", "mandante": "Fortaleza", "gm": 0, "gv": 3, "visitante": "Atlético Goianiense" },
    { "data": "2021-10-02", "mandante": "RB Bragantino", "gm": 2, "gv": 2, "visitante": "Corinthians" },
    { "data": "2021-10-02", "mandante": "Atlético Mineiro", "gm": 1, "gv": 0, "visitante": "Internacional" },
    { "data": "2021-10-03", "mandante": "Chapecoense", "gm": 1, "gv": 1, "visitante": "São Paulo" },
    { "data": "2021-10-03", "mandante": "Flamengo", "gm": 3, "gv": 0, "visitante": "Athletico" },
    { "data": "2021-10-03", "mandante": "Palmeiras", "gm": 1, "gv": 1, "visitante": "Juventude" },
    { "data": "2021-10-03", "mandante": "Grêmio", "gm": 1, "gv": 2, "visitante": "Sport" },
    { "data": "2021-10-05", "mandante": "Corinthians", "gm": 3, "gv": 1, "visitante": "Bahia" },
    { "data": "2021-10-06", "mandante": "Ceará", "gm": 0, "gv": 0, "visitante": "Internacional" },
    { "data": "2021-10-06", "mandante": "Sport", "gm": 3, "gv": 1, "visitante": "Juventude" },
    { "data": "2021-10-06", "mandante": "Atlético Goianiense", "gm": 0, "gv": 2, "visitante": "Athletico" },
    { "data": "2021-10-06", "mandante": "Chapecoense", "gm": 2, "gv": 2, "visitante": "Atlético Mineiro" },
    { "data": "2021-10-06", "mandante": "RB Bragantino", "gm": 1, "gv": 1, "visitante": "Flamengo" },
    { "data": "2021-10-06", "mandante": "América Mineiro", "gm": 2, "gv": 1, "visitante": "Palmeiras" },
    { "data": "2021-10-06", "mandante": "Fluminense", "gm": 0, "gv": 2, "visitante": "Fortaleza" },
    { "data": "2021-10-06", "mandante": "Grêmio", "gm": 2, "gv": 2, "visitante": "Cuiabá" },
    { "data": "2021-10-07", "mandante": "São Paulo", "gm": 1, "gv": 1, "visitante": "Santos" },
    { "data": "2021-10-09", "mandante": "Fluminense", "gm": 0, "gv": 0, "visitante": "Atlético Goianiense" },
    { "data": "2021-10-09", "mandante": "Sport", "gm": 1, "gv": 0, "visitante": "Corinthians" },
    { "data": "2021-10-09", "mandante": "Atlético Mineiro", "gm": 3, "gv": 1, "visitante": "Ceará" },
    { "data": "2021-10-09", "mandante": "Athletico", "gm": 0, "gv": 2, "visitante": "Bahia" },
    { "data": "2021-10-09", "mandante": "Fortaleza", "gm": 0, "gv": 3, "visitante": "Flamengo" },
    { "data": "2021-10-09", "mandante": "Palmeiras", "gm": 2, "gv": 4, "visitante": "RB Bragantino" },
    { "data": "2021-10-09", "mandante": "Juventude", "gm": 1, "gv": 1, "visitante": "América Mineiro" },
    { "data": "2021-10-10", "mandante": "Internacional", "gm": 5, "gv": 2, "visitante": "Chapecoense" },
    { "data": "2021-10-10", "mandante": "Santos", "gm": 1, "gv": 0, "visitante": "Grêmio" },
    { "data": "2021-10-11", "mandante": "Cuiabá", "gm": 0, "gv": 0, "visitante": "São Paulo" },
    { "data": "2021-10-12", "mandante": "RB Bragantino", "gm": 1, "gv": 0, "visitante": "Atlético Goianiense" },
    { "data": "2021-10-12", "mandante": "Bahia", "gm": 0, "gv": 0, "visitante": "Palmeiras" },
    { "data": "2021-10-13", "mandante": "Chapecoense", "gm": 1, "gv": 1, "visitante": "Athletico" },
    { "data": "2021-10-13", "mandante": "Flamengo", "gm": 3, "gv": 1, "visitante": "Juventude" },
    { "data": "2021-10-13", "mandante": "Atlético Mineiro", "gm": 3, "gv": 1, "visitante": "Santos" },
    { "data": "2021-10-13", "mandante": "Fortaleza", "gm": 1, "gv": 0, "visitante": "Grêmio" },
    { "data": "2021-10-13", "mandante": "Corinthians", "gm": 1, "gv": 0, "visitante": "Fluminense" },
    { "data": "2021-10-13", "mandante": "Internacional", "gm": 3, "gv": 1, "visitante": "América Mineiro" },
    { "data": "2021-10-14", "mandante": "Cuiabá", "gm": 1, "gv": 0, "visitante": "Sport" },
    { "data": "2021-10-14", "mandante": "São Paulo", "gm": 1, "gv": 1, "visitante": "Ceará" },
    { "data": "2021-10-16", "mandante": "Chapecoense", "gm": 1, "gv": 2, "visitante": "Fortaleza" },
    { "data": "2021-10-16", "mandante": "América Mineiro", "gm": 0, "gv": 0, "visitante": "Bahia" },
    { "data": "2021-10-17", "mandante": "Palmeiras", "gm": 1, "gv": 0, "visitante": "Internacional" },
    { "data": "2021-10-17", "mandante": "Athletico", "gm": 0, "gv": 1, "visitante": "Fluminense" },
    { "data": "2021-10-17", "mandante": "Grêmio", "gm": 3, "gv": 2, "visitante": "Juventude" },
    { "data": "2021-10-17", "mandante": "Atlético Goianiense", "gm": 2, "gv": 1, "visitante": "Atlético Mineiro" },
    { "data": "2021-10-17", "mandante": "Ceará", "gm": 2, "gv": 2, "visitante": "RB Bragantino" },
    { "data": "2021-10-17", "mandante": "Sport", "gm": 0, "gv": 0, "visitante": "Santos" },
    { "data": "2021-10-17", "mandante": "Flamengo", "gm": 0, "gv": 0, "visitante": "Cuiabá" },
    { "data": "2021-10-18", "mandante": "São Paulo", "gm": 1, "gv": 0, "visitante": "Corinthians" },
    { "data": "2021-10-20", "mandante": "Ceará", "gm": 1, "gv": 2, "visitante": "Palmeiras" },
    { "data": "2021-10-21", "mandante": "Internacional", "gm": 1, "gv": 1, "visitante": "RB Bragantino" },
    { "data": "2021-10-23", "mandante": "Santos", "gm": 0, "gv": 2, "visitante": "América Mineiro" },
    { "data": "2021-10-23", "mandante": "Juventude", "gm": 0, "gv": 0, "visitante": "Ceará" },
    { "data": "2021-10-23", "mandante": "Fluminense", "gm": 3, "gv": 1, "visitante": "Flamengo" },
    { "data": "2021-10-23", "mandante": "Fortaleza", "gm": 3, "gv": 0, "visitante": "Athletico" },
    { "data": "2021-10-24", "mandante": "Atlético Mineiro", "gm": 2, "gv": 1, "visitante": "Cuiabá" },
    { "data": "2021-10-24", "mandante": "Internacional", "gm": 2, "gv": 2, "visitante": "Corinthians" },
    { "data": "2021-10-24", "mandante": "RB Bragantino", "gm": 1, "gv": 0, "visitante": "São Paulo" },
    { "data": "2021-10-24", "mandante": "Bahia", "gm": 3, "gv": 0, "visitante": "Chapecoense" },
    { "data": "2021-10-25", "mandante": "Atlético Goianiense", "gm": 2, "gv": 0, "visitante": "Grêmio" },
    { "data": "2021-10-25", "mandante": "Palmeiras", "gm": 2, "gv": 1, "visitante": "Sport" },
    { "data": "2021-10-27", "mandante": "Bahia", "gm": 1, "gv": 1, "visitante": "Ceará" },
    { "data": "2021-10-27", "mandante": "Santos", "gm": 2, "gv": 0, "visitante": "Fluminense" },
    { "data": "2021-10-28", "mandante": "RB Bragantino", "gm": 3, "gv": 0, "visitante": "Sport" },
    { "data": "2021-10-30", "mandante": "Athletico", "gm": 0, "gv": 1, "visitante": "Santos" },
    { "data": "2021-10-30", "mandante": "Flamengo", "gm": 1, "gv": 0, "visitante": "Atlético Mineiro" },
    { "data": "2021-10-30", "mandante": "Juventude", "gm": 0, "gv": 0, "visitante": "Bahia" },
    { "data": "2021-10-30", "mandante": "América Mineiro", "gm": 2, "gv": 1, "visitante": "Fortaleza" },
    { "data": "2021-10-31", "mandante": "Ceará", "gm": 1, "gv": 0, "visitante": "Fluminense" },
    { "data": "2021-10-31", "mandante": "Grêmio", "gm": 1, "gv": 3, "visitante": "Palmeiras" },
    { "data": "2021-10-31", "mandante": "São Paulo", "gm": 1, "gv": 0, "visitante": "Internacional" },
    { "data": "2021-10-31", "mandante": "Sport", "gm": 2, "gv": 0, "visitante": "Atlético Goianiense" },
    { "data": "2021-11-01", "mandante": "Cuiabá", "gm": 1, "gv": 0, "visitante": "RB Bragantino" },
    { "data": "2021-11-01", "mandante": "Corinthians", "gm": 1, "gv": 0, "visitante": "Chapecoense" },
    { "data": "2021-11-02", "mandante": "Athletico", "gm": 2, "gv": 2, "visitante": "Flamengo" },
    { "data": "2021-11-03", "mandante": "Atlético Mineiro", "gm": 2, "gv": 1, "visitante": "Grêmio" },
    { "data": "2021-11-04", "mandante": "Cuiabá", "gm": 0, "gv": 0, "visitante": "Chapecoense" },
    { "data": "2021-11-05", "mandante": "Flamengo", "gm": 2, "gv": 0, "visitante": "Atlético Goianiense" },
    { "data": "2021-11-06", "mandante": "Corinthians", "gm": 1, "gv": 0, "visitante": "Fortaleza" },
    { "data": "2021-11-06", "mandante": "Internacional", "gm": 1, "gv": 0, "visitante": "Grêmio" },
    { "data": "2021-11-06", "mandante": "Fluminense", "gm": 1, "gv": 0, "visitante": "Sport" },
    { "data": "2021-11-07", "mandante": "Santos", "gm": 0, "gv": 2, "visitante": "Palmeiras" },
    { "data": "2021-11-07", "mandante": "Atlético Mineiro", "gm": 1, "gv": 0, "visitante": "América Mineiro" },
    { "data": "2021-11-07", "mandante": "RB Bragantino", "gm": 0, "gv": 2, "visitante": "Athletico" },
    { "data": "2021-11-07", "mandante": "Bahia", "gm": 1, "gv": 0, "visitante": "São Paulo" },
    { "data": "2021-11-07", "mandante": "Ceará", "gm": 1, "gv": 0, "visitante": "Cuiabá" },
    { "data": "2021-11-08", "mandante": "Chapecoense", "gm": 2, "gv": 2, "visitante": "Flamengo" },
    { "data": "2021-11-09", "mandante": "Grêmio", "gm": 1, "gv": 0, "visitante": "Fluminense" },
    { "data": "2021-11-10", "mandante": "Athletico", "gm": 2, "gv": 1, "visitante": "Ceará" },
    { "data": "2021-11-10", "mandante": "Santos", "gm": 2, "gv": 0, "visitante": "RB Bragantino" },
    { "data": "2021-11-10", "mandante": "Atlético Mineiro", "gm": 3, "gv": 0, "visitante": "Corinthians" },
    { "data": "2021-11-10", "mandante": "Palmeiras", "gm": 4, "gv": 0, "visitante": "Atlético Goianiense" },
    { "data": "2021-11-10", "mandante": "Fortaleza", "gm": 1, "gv": 1, "visitante": "São Paulo" },
    { "data": "2021-11-10", "mandante": "Sport", "gm": 2, "gv": 3, "visitante": "América Mineiro" },
    { "data": "2021-11-10", "mandante": "Juventude", "gm": 2, "gv": 1, "visitante": "Internacional" },
    { "data": "2021-11-11", "mandante": "Flamengo", "gm": 3, "gv": 0, "visitante": "Bahia" },
    { "data": "2021-11-13", "mandante": "Atlético Goianiense", "gm": 0, "gv": 0, "visitante": "Santos" },
    { "data": "2021-11-13", "mandante": "América Mineiro", "gm": 3, "gv": 1, "visitante": "Grêmio" },
    { "data": "2021-11-13", "mandante": "Internacional", "gm": 2, "gv": 1, "visitante": "Athletico" },
    { "data": "2021-11-13", "mandante": "RB Bragantino", "gm": 3, "gv": 0, "visitante": "Fortaleza" },
    { "data": "2021-11-13", "mandante": "Corinthians", "gm": 3, "gv": 2, "visitante": "Cuiabá" },
    { "data": "2021-11-14", "mandante": "São Paulo", "gm": 0, "gv": 4, "visitante": "Flamengo" },
    { "data": "2021-11-14", "mandante": "Fluminense", "gm": 2, "gv": 1, "visitante": "Palmeiras" },
    { "data": "2021-11-14", "mandante": "Ceará", "gm": 2, "gv": 1, "visitante": "Sport" },
    { "data": "2021-11-14", "mandante": "Chapecoense", "gm": 0, "gv": 2, "visitante": "Juventude" },
    { "data": "2021-11-16", "mandante": "Athletico", "gm": 0, "gv": 1, "visitante": "Atlético Mineiro" },
    { "data": "2021-11-16", "mandante": "Grêmio", "gm": 3, "gv": 0, "visitante": "RB Bragantino" },
    { "data": "2021-11-17", "mandante": "Cuiabá", "gm": 1, "gv": 0, "visitante": "Internacional" },
    { "data": "2021-11-17", "mandante": "Santos", "gm": 2, "gv": 0, "visitante": "Chapecoense" },
    { "data": "2021-11-17", "mandante": "América Mineiro", "gm": 0, "gv": 0, "visitante": "Atlético Goianiense" },
    { "data": "2021-11-17", "mandante": "Fortaleza", "gm": 0, "gv": 4, "visitante": "Ceará" },
    { "data": "2021-11-17", "mandante": "Palmeiras", "gm": 0, "gv": 2, "visitante": "São Paulo" },
    { "data": "2021-11-17", "mandante": "Juventude", "gm": 1, "gv": 0, "visitante": "Fluminense" },
    { "data": "2021-11-17", "mandante": "Flamengo", "gm": 1, "gv": 0, "visitante": "Corinthians" },
    { "data": "2021-11-18", "mandante": "Sport", "gm": 1, "gv": 0, "visitante": "Bahia" },
    { "data": "2021-11-20", "mandante": "Atlético Mineiro", "gm": 2, "gv": 0, "visitante": "Juventude" },
    { "data": "2021-11-20", "mandante": "Fortaleza", "gm": 1, "gv": 0, "visitante": "Palmeiras" },
    { "data": "2021-11-20", "mandante": "Chapecoense", "gm": 1, "gv": 3, "visitante": "Grêmio" },
    { "data": "2021-11-20", "mandante": "Atlético Goianiense", "gm": 1, "gv": 1, "visitante": "Ceará" },
    { "data": "2021-11-20", "mandante": "Internacional", "gm": 1, "gv": 2, "visitante": "Flamengo" },
    { "data": "2021-11-21", "mandante": "Corinthians", "gm": 2, "gv": 0, "visitante": "Santos" },
    { "data": "2021-11-21", "mandante": "Fluminense", "gm": 2, "gv": 0, "visitante": "América Mineiro" },
    { "data": "2021-11-21", "mandante": "Bahia", "gm": 0, "gv": 0, "visitante": "Cuiabá" },
    { "data": "2021-11-23", "mandante": "Grêmio", "gm": 2, "gv": 2, "visitante": "Flamengo" },
    { "data": "2021-11-23", "mandante": "Atlético Goianiense", "gm": 1, "gv": 1, "visitante": "Juventude" },
    { "data": "2021-11-23", "mandante": "Palmeiras", "gm": 2, "gv": 2, "visitante": "Atlético Mineiro" },
    { "data": "2021-11-24", "mandante": "São Paulo", "gm": 0, "gv": 0, "visitante": "Athletico" },
    { "data": "2021-11-24", "mandante": "Fluminense", "gm": 1, "gv": 0, "visitante": "Internacional" },
    { "data": "2021-11-25", "mandante": "Santos", "gm": 2, "gv": 0, "visitante": "Fortaleza" },
    { "data": "2021-11-25", "mandante": "Ceará", "gm": 2, "gv": 1, "visitante": "Corinthians" },
    { "data": "2021-11-26", "mandante": "Bahia", "gm": 3, "gv": 1, "visitante": "Grêmio" },
    { "data": "2021-11-27", "mandante": "RB Bragantino", "gm": 1, "gv": 1, "visitante": "América Mineiro" },
    { "data": "2021-11-27", "mandante": "São Paulo", "gm": 2, "gv": 0, "visitante": "Sport" },
    { "data": "2021-11-28", "mandante": "Corinthians", "gm": 1, "gv": 0, "visitante": "Athletico" },
    { "data": "2021-11-28", "mandante": "Atlético Mineiro", "gm": 2, "gv": 1, "visitante": "Fluminense" },
    { "data": "2021-11-28", "mandante": "Internacional", "gm": 1, "gv": 1, "visitante": "Santos" },
    { "data": "2021-11-29", "mandante": "Atlético Goianiense", "gm": 2, "gv": 1, "visitante": "Bahia" },
    { "data": "2021-11-30", "mandante": "Juventude", "gm": 1, "gv": 0, "visitante": "RB Bragantino" },
    { "data": "2021-11-30", "mandante": "América Mineiro", "gm": 3, "gv": 0, "visitante": "Chapecoense" },
    { "data": "2021-11-30", "mandante": "Flamengo", "gm": 2, "gv": 1, "visitante": "Ceará" },
    { "data": "2021-11-30", "mandante": "Cuiabá", "gm": 1, "gv": 3, "visitante": "Palmeiras" },
    { "data": "2021-12-02", "mandante": "Bahia", "gm": 2, "gv": 3, "visitante": "Atlético Mineiro" },
    { "data": "2021-12-02", "mandante": "Grêmio", "gm": 3, "gv": 0, "visitante": "São Paulo" },
    { "data": "2021-12-03", "mandante": "Athletico", "gm": 1, "gv": 0, "visitante": "Cuiabá" },
    { "data": "2021-12-03", "mandante": "Sport", "gm": 1, "gv": 1, "visitante": "Flamengo" },
    { "data": "2021-12-03", "mandante": "Chapecoense", "gm": 0, "gv": 1, "visitante": "Atlético Goianiense" },
    { "data": "2021-12-03", "mandante": "Fortaleza", "gm": 1, "gv": 0, "visitante": "Juventude" },
    { "data": "2021-12-05", "mandante": "Corinthians", "gm": 1, "gv": 1, "visitante": "Grêmio" },
    { "data": "2021-12-05", "mandante": "Atlético Mineiro", "gm": 4, "gv": 3, "visitante": "RB Bragantino" },
    { "data": "2021-12-05", "mandante": "Bahia", "gm": 2, "gv": 0, "visitante": "Fluminense" },
    { "data": "2021-12-05", "mandante": "Ceará", "gm": 0, "gv": 0, "visitante": "América Mineiro" },
    { "data": "2021-12-06", "mandante": "Athletico", "gm": 0, "gv": 0, "visitante": "Palmeiras" },
    { "data": "2021-12-06", "mandante": "São Paulo", "gm": 3, "gv": 1, "visitante": "Juventude" },
    { "data": "2021-12-06", "mandante": "Cuiabá", "gm": 1, "gv": 0, "visitante": "Fortaleza" },
    { "data": "2021-12-06", "mandante": "Flamengo", "gm": 0, "gv": 1, "visitante": "Santos" },
    { "data": "2021-12-06", "mandante": "Internacional", "gm": 1, "gv": 2, "visitante": "Atlético Goianiense" },
    { "data": "2021-12-06", "mandante": "Chapecoense", "gm": 0, "gv": 1, "visitante": "Sport" },
    { "data": "2021-12-09", "mandante": "Fluminense", "gm": 3, "gv": 0, "visitante": "Chapecoense" },
    { "data": "2021-12-09", "mandante": "Palmeiras", "gm": 1, "gv": 0, "visitante": "Ceará" },
    { "data": "2021-12-09", "mandante": "Santos", "gm": 1, "gv": 1, "visitante": "Cuiabá" },
    { "data": "2021-12-09", "mandante": "América Mineiro", "gm": 2, "gv": 0, "visitante": "São Paulo" },
    { "data": "2021-12-09", "mandante": "Grêmio", "gm": 4, "gv": 3, "visitante": "Atlético Mineiro" },
    { "data": "2021-12-09", "mandante": "Fortaleza", "gm": 2, "gv": 1, "visitante": "Bahia" },
    { "data": "2021-12-09", "mandante": "Sport", "gm": 1, "gv": 1, "visitante": "Athletico" },
    { "data": "2021-12-09", "mandante": "RB Bragantino", "gm": 1, "gv": 0, "visitante": "Internacional" },
    { "data": "2021-12-09", "mandante": "Juventude", "gm": 1, "gv": 0, "visitante": "Corinthians" },
    { "data": "2021-12-09", "mandante": "Atlético Goianiense", "gm": 2, "gv": 0, "visitante": "Flamengo" },
];
