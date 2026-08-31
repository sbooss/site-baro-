// ============================================================
// BARÔ SHINKAI — tradutor de idiomas
// Nativo: pt-BR. Demais idiomas traduzem o essencial do site
// (navegação, rodapé, botões e a página inicial completa).
// ============================================================

(function () {

  var LANGS = [
    { code: "pt-BR", label: "Português (Brasil)" },
    { code: "pt-PT", label: "Português (Portugal)" },
    { code: "en",    label: "English" },
    { code: "es",    label: "Español" },
    { code: "ja",    label: "日本語" },
    { code: "ko",    label: "한국어" },
    { code: "it",    label: "Italiano" },
    { code: "fr",    label: "Français" }
  ];

  var DICT = {
    "nav.mentoria":  {"pt-BR":"Mentoria","pt-PT":"Mentoria","en":"Mentorship","es":"Mentoría","ja":"メンタリング","ko":"멘토링","it":"Mentorship","fr":"Mentorat"},
    "nav.consultoria": {"pt-BR":"Consultoria","pt-PT":"Consultoria","en":"Consulting","es":"Consultoría","ja":"コンサルティング","ko":"컨설팅","it":"Consulenza","fr":"Conseil"},
    "nav.live": {"pt-BR":"Ao Vivo","pt-PT":"Ao Vivo","en":"Live Classes","es":"En Vivo","ja":"ライブ授業","ko":"라이브 수업","it":"Diretta","fr":"En Direct"},
    "nav.chef": {"pt-BR":"A Chef","pt-PT":"A Chef","en":"The Chef","es":"La Chef","ja":"シェフ紹介","ko":"셰프 소개","it":"Lo Chef","fr":"La Chef"},
    "nav.terms": {"pt-BR":"Termos","pt-PT":"Termos","en":"Terms","es":"Términos","ja":"利用規約","ko":"이용약관","it":"Termini","fr":"Conditions"},
    "nav.enter": {"pt-BR":"Entrar","pt-PT":"Entrar","en":"Log In","es":"Entrar","ja":"ログイン","ko":"로그인","it":"Accedi","fr":"Connexion"},
    "nav.signup": {"pt-BR":"Criar Conta","pt-PT":"Criar Conta","en":"Sign Up","es":"Crear Cuenta","ja":"新規登録","ko":"회원가입","it":"Crea Account","fr":"Créer un Compte"},
    "nav.explore": {"pt-BR":"Explorar Mentoria","pt-PT":"Explorar Mentoria","en":"Explore the Mentorship","es":"Explorar la Mentoría","ja":"メンタリングを見る","ko":"멘토링 살펴보기","it":"Scopri il Mentorship","fr":"Découvrir le Mentorat"},

    "hero.kicker": {"pt-BR":"Mentoria & Consultoria Japonesa","pt-PT":"Mentoria & Consultoria Japonesa","en":"Japanese Mentorship & Consulting","es":"Mentoría y Consultoría Japonesa","ja":"和食メンタリング＆コンサルティング","ko":"일본 요리 멘토링 & 컨설팅","it":"Mentorship e Consulenza Giapponese","fr":"Mentorat & Conseil Japonais"},
    "hero.title": {
      "pt-BR":"Culinária japonesa<br><em>além da receita.</em>",
      "pt-PT":"Culinária japonesa<br><em>além da receita.</em>",
      "en":"Japanese cuisine<br><em>beyond the recipe.</em>",
      "es":"Cocina japonesa<br><em>más allá de la receta.</em>",
      "ja":"和食は<br><em>レシピの先にある。</em>",
      "ko":"일본 요리,<br><em>레시피 그 이상.</em>",
      "it":"Cucina giapponese<br><em>oltre la ricetta.</em>",
      "fr":"La cuisine japonaise<br><em>au-delà de la recette.</em>"
    },
    "hero.subtitle": {
      "pt-BR":"Técnica. Sazonalidade. Experiência. Uma formação profissional baseada em vivência gastronômica com referências de Tokyo, Osaka e Kyoto.",
      "pt-PT":"Técnica. Sazonalidade. Experiência. Uma formação profissional baseada em vivência gastronómica com referências de Tóquio, Osaka e Quioto.",
      "en":"Technique. Seasonality. Experience. A professional training grounded in culinary experience with references from Tokyo, Osaka and Kyoto.",
      "es":"Técnica. Estacionalidad. Experiencia. Una formación profesional basada en vivencia gastronómica con referencias de Tokio, Osaka y Kioto.",
      "ja":"技術。季節感。経験。東京・大阪・京都での経験を土台にしたプロフェッショナル養成講座。",
      "ko":"기술, 계절감, 경험. 도쿄, 오사카, 교토에서의 미식 경험을 바탕으로 한 전문 교육 과정.",
      "it":"Tecnica. Stagionalità. Esperienza. Una formazione professionale basata su un'esperienza gastronomica con riferimenti a Tokyo, Osaka e Kyoto.",
      "fr":"Technique. Saisonnalité. Expérience. Une formation professionnelle fondée sur une expérience gastronomique à Tokyo, Osaka et Kyoto."
    },
    "hero.cta1": {"pt-BR":"Explorar a Mentoria","pt-PT":"Explorar a Mentoria","en":"Explore the Mentorship","es":"Explorar la Mentoría","ja":"メンタリングを見る","ko":"멘토링 살펴보기","it":"Scopri il Mentorship","fr":"Découvrir le Mentorat"},
    "hero.cta2": {"pt-BR":"Conhecer a Consultoria","pt-PT":"Conhecer a Consultoria","en":"Discover the Consulting","es":"Conocer la Consultoría","ja":"コンサルティングを見る","ko":"컨설팅 알아보기","it":"Scopri la Consulenza","fr":"Découvrir le Conseil"},
    "hero.scroll": {"pt-BR":"Role para explorar","pt-PT":"Deslize para explorar","en":"Scroll to explore","es":"Desliza para explorar","ja":"スクロールしてご覧ください","ko":"스크롤하여 더 보기","it":"Scorri per esplorare","fr":"Faites défiler pour explorer"},
    "hero.tag": {"pt-BR":"Chef & mentora — Barô Shinkai Sushi","pt-PT":"Chef & mentora — Barô Shinkai Sushi","en":"Chef & mentor — Barô Shinkai Sushi","es":"Chef y mentora — Barô Shinkai Sushi","ja":"シェフ兼メンター — Barô Shinkai Sushi","ko":"셰프 & 멘토 — Barô Shinkai Sushi","it":"Chef e mentore — Barô Shinkai Sushi","fr":"Cheffe et mentore — Barô Shinkai Sushi"},

    "manifesto.eyebrow": {"pt-BR":"Manifesto","pt-PT":"Manifesto","en":"Manifesto","es":"Manifiesto","ja":"理念","ko":"철학","it":"Manifesto","fr":"Manifeste"},
    "manifesto.p1": {
      "pt-BR":"Não se trata apenas de <strong>reproduzir receitas.</strong>",
      "pt-PT":"Não se trata apenas de <strong>reproduzir receitas.</strong>",
      "en":"This isn't just about <strong>reproducing recipes.</strong>",
      "es":"No se trata solo de <strong>reproducir recetas.</strong>",
      "ja":"これは単に<strong>レシピを再現すること</strong>ではありません。",
      "ko":"단순히 <strong>레시피를 재현하는 것</strong>이 아닙니다.",
      "it":"Non si tratta solo di <strong>riprodurre ricette.</strong>",
      "fr":"Il ne s'agit pas seulement de <strong>reproduire des recettes.</strong>"
    },
    "manifesto.p2": {
      "pt-BR":"Trata-se de compreender o ingrediente, escolher a técnica certa, entender temperatura, corte e sazonalidade — e construir uma experiência com <strong>propósito.</strong>",
      "pt-PT":"Trata-se de compreender o ingrediente, escolher a técnica certa, entender temperatura, corte e sazonalidade — e construir uma experiência com <strong>propósito.</strong>",
      "en":"It's about understanding the ingredient, choosing the right technique, mastering temperature, cutting and seasonality — and building an experience with <strong>purpose.</strong>",
      "es":"Se trata de comprender el ingrediente, elegir la técnica correcta, entender temperatura, corte y estacionalidad — y construir una experiencia con <strong>propósito.</strong>",
      "ja":"食材を理解し、正しい技術を選び、温度・切り方・季節感を極める。そして<strong>意図のある</strong>体験をつくること。",
      "ko":"재료를 이해하고, 알맞은 기술을 선택하며, 온도와 칼질, 계절감을 익히는 것. 그리고 <strong>목적이 있는</strong> 경험을 만드는 것입니다.",
      "it":"Si tratta di comprendere l'ingrediente, scegliere la tecnica giusta, padroneggiare temperatura, taglio e stagionalità — e costruire un'esperienza con <strong>uno scopo.</strong>",
      "fr":"Il s'agit de comprendre l'ingrédient, choisir la bonne technique, maîtriser la température, la coupe et la saisonnalité — et construire une expérience avec <strong>un but.</strong>"
    },
    "manifesto.quote": {
      "pt-BR":"“Não quero ensinar você apenas a reproduzir receitas japonesas. Quero ensinar você a entender a lógica por trás delas.”",
      "pt-PT":"“Não quero ensinar-te apenas a reproduzir receitas japonesas. Quero ensinar-te a entender a lógica por trás delas.”",
      "en":"“I don't want to teach you to just reproduce Japanese recipes. I want to teach you to understand the logic behind them.”",
      "es":"“No quiero enseñarte solo a reproducir recetas japonesas. Quiero enseñarte a entender la lógica detrás de ellas.”",
      "ja":"「和食のレシピをただ再現する方法を教えたいのではありません。その背景にある論理を理解してほしいのです。」",
      "ko":"“일본 요리 레시피를 단순히 따라 하는 법을 가르치고 싶지 않습니다. 그 안에 담긴 논리를 이해시키고 싶습니다.”",
      "it":"“Non voglio insegnarti solo a riprodurre ricette giapponesi. Voglio insegnarti a comprendere la logica che c'è dietro.”",
      "fr":"« Je ne veux pas seulement vous apprendre à reproduire des recettes japonaises. Je veux vous apprendre à en comprendre la logique. »"
    },

    "cities.eyebrow": {"pt-BR":"Referências e experiência","pt-PT":"Referências e experiência","en":"References & experience","es":"Referencias y experiencia","ja":"経験と背景","ko":"경험과 배경","it":"Riferimenti ed esperienza","fr":"Références et expérience"},
    "cities.title": {
      "pt-BR":"Três cidades. Uma forma<br>de entender a gastronomia.",
      "pt-PT":"Três cidades. Uma forma<br>de entender a gastronomia.",
      "en":"Three cities. One way<br>of understanding gastronomy.",
      "es":"Tres ciudades. Una forma<br>de entender la gastronomía.",
      "ja":"3つの都市。<br>ひとつの美食のかたち。",
      "ko":"세 도시, 하나의<br>미식을 이해하는 방식.",
      "it":"Tre città. Un modo<br>di intendere la gastronomia.",
      "fr":"Trois villes. Une façon<br>de comprendre la gastronomie."
    },
    "cities.lede": {
      "pt-BR":"A vivência em Tokyo, Osaka e Kyoto molda o raciocínio técnico por trás de cada módulo da mentoria — não como roteiro turístico, mas como repertório aplicado ao balcão.",
      "pt-PT":"A vivência em Tóquio, Osaka e Quioto molda o raciocínio técnico por trás de cada módulo da mentoria — não como roteiro turístico, mas como repertório aplicado ao balcão.",
      "en":"Experience in Tokyo, Osaka and Kyoto shapes the technical reasoning behind every module of the mentorship — not as a tourist itinerary, but as a repertoire applied at the counter.",
      "es":"La vivencia en Tokio, Osaka y Kioto moldea el razonamiento técnico detrás de cada módulo de la mentoría — no como itinerario turístico, sino como repertorio aplicado a la barra.",
      "ja":"東京・大阪・京都での経験が、メンタリングの各モジュールを支える技術的な思考を形づくっています。観光ではなく、カウンターで活きる技として。",
      "ko":"도쿄, 오사카, 교토에서의 경험은 멘토링 각 모듈의 기술적 사고를 형성합니다. 관광이 아니라 카운터에서 실제로 쓰이는 레퍼토리로서요.",
      "it":"L'esperienza a Tokyo, Osaka e Kyoto plasma il ragionamento tecnico dietro ogni modulo del mentorship — non come itinerario turistico, ma come repertorio applicato al bancone.",
      "fr":"L'expérience à Tokyo, Osaka et Kyoto façonne le raisonnement technique derrière chaque module du mentorat — non comme un itinéraire touristique, mais comme un répertoire appliqué au comptoir."
    },
    "cities.tokyo.name": {"pt-BR":"Precisão.","pt-PT":"Precisão.","en":"Precision.","es":"Precisión.","ja":"精密さ。","ko":"정밀함.","it":"Precisione.","fr":"Précision."},
    "cities.tokyo.desc": {"pt-BR":"Técnica, ritmo e disciplina de balcão. A base do Edomae sushi.","pt-PT":"Técnica, ritmo e disciplina de balcão. A base do Edomae sushi.","en":"Technique, rhythm and counter discipline. The foundation of Edomae sushi.","es":"Técnica, ritmo y disciplina de barra. La base del sushi Edomae.","ja":"技術、リズム、そしてカウンターでの規律。江戸前寿司の基礎。","ko":"기술, 리듬, 카운터의 규율. 에도마에 스시의 기초.","it":"Tecnica, ritmo e disciplina al bancone. Le basi del sushi Edomae.","fr":"Technique, rythme et discipline au comptoir. Les fondations du sushi Edomae."},
    "cities.osaka.name": {"pt-BR":"Produto.","pt-PT":"Produto.","en":"Product.","es":"Producto.","ja":"素材。","ko":"재료.","it":"Prodotto.","fr":"Produit."},
    "cities.osaka.desc": {"pt-BR":"Energia e cultura gastronômica voltadas ao ingrediente em evidência.","pt-PT":"Energia e cultura gastronómica voltadas ao ingrediente em evidência.","en":"Energy and food culture centred on the ingredient in the spotlight.","es":"Energía y cultura gastronómica centradas en el ingrediente protagonista.","ja":"素材そのものを主役にした、エネルギッシュな食文化。","ko":"재료를 주인공으로 삼는 활기찬 미식 문화.","it":"Energia e cultura gastronomica incentrate sull'ingrediente protagonista.","fr":"Énergie et culture gastronomique centrées sur l'ingrédient mis en valeur."},
    "cities.kyoto.name": {"pt-BR":"Sazonalidade.","pt-PT":"Sazonalidade.","en":"Seasonality.","es":"Estacionalidad.","ja":"季節感。","ko":"계절감.","it":"Stagionalità.","fr":"Saisonnalité."},
    "cities.kyoto.desc": {"pt-BR":"Estética, delicadeza e respeito ao tempo de cada ingrediente.","pt-PT":"Estética, delicadeza e respeito pelo tempo de cada ingrediente.","en":"Aesthetics, delicacy and respect for each ingredient's own time.","es":"Estética, delicadeza y respeto por el tiempo de cada ingrediente.","ja":"美意識、繊細さ、そして食材ごとの旬への敬意。","ko":"미학, 섬세함, 그리고 재료마다의 때를 존중하는 마음.","it":"Estetica, delicatezza e rispetto per il tempo di ogni ingrediente.","fr":"Esthétique, délicatesse et respect du temps propre à chaque ingrédient."},

    "formations.eyebrow": {"pt-BR":"Áreas de Formação","pt-PT":"Áreas de Formação","en":"Training Areas","es":"Áreas de Formación","ja":"講座の分野","ko":"교육 영역","it":"Aree di Formazione","fr":"Domaines de Formation"},
    "formations.title": {
      "pt-BR":"Cinco pilares da<br>culinária tradicional.",
      "pt-PT":"Cinco pilares da<br>culinária tradicional.",
      "en":"Five pillars of<br>traditional cuisine.",
      "es":"Cinco pilares de la<br>cocina tradicional.",
      "ja":"伝統的な和食を<br>支える5つの柱。",
      "ko":"전통 요리를 이루는<br>다섯 가지 기둥.",
      "it":"Cinque pilastri della<br>cucina tradizionale.",
      "fr":"Cinq piliers de la<br>cuisine traditionnelle."
    },
    "formations.hint": {"pt-BR":"Arraste para explorar os cinco módulos","pt-PT":"Arraste para explorar os cinco módulos","en":"Drag to explore the five modules","es":"Arrastra para explorar los cinco módulos","ja":"ドラッグして5つのモジュールをご覧ください","ko":"드래그하여 다섯 모듈을 살펴보세요","it":"Trascina per esplorare i cinque moduli","fr":"Faites glisser pour découvrir les cinq modules"},

    "journey.eyebrow": {"pt-BR":"Sua Jornada","pt-PT":"A Sua Jornada","en":"Your Journey","es":"Tu Trayecto","ja":"学びの旅","ko":"당신의 여정","it":"Il Tuo Percorso","fr":"Votre Parcours"},
    "journey.title": {
      "pt-BR":"Oito encontros até a<br>experiência completa.",
      "pt-PT":"Oito encontros até à<br>experiência completa.",
      "en":"Eight sessions to the<br>complete experience.",
      "es":"Ocho encuentros hasta la<br>experiencia completa.",
      "ja":"8回の講座で<br>完全な体験へ。",
      "ko":"완전한 경험을 위한<br>여덟 번의 수업.",
      "it":"Otto incontri fino<br>all'esperienza completa.",
      "fr":"Huit rencontres jusqu'à<br>l'expérience complète."
    },
    "journey.lede": {
      "pt-BR":"A trilha sugerida conduz do fundamento ao menu autoral — cada etapa constrói a próxima.",
      "pt-PT":"A trilha sugerida conduz do fundamento ao menu de autor — cada etapa constrói a próxima.",
      "en":"The suggested path leads from the fundamentals to a signature menu — each stage builds on the next.",
      "es":"El recorrido sugerido va desde los fundamentos hasta el menú de autor — cada etapa construye la siguiente.",
      "ja":"基礎からオリジナルメニューまで、一歩ずつ積み上げていくカリキュラムです。",
      "ko":"기초부터 시그니처 메뉴까지, 각 단계가 다음 단계로 이어지는 커리큘럼입니다.",
      "it":"Il percorso suggerito va dalle basi al menu d'autore — ogni tappa costruisce la successiva.",
      "fr":"Le parcours proposé va des fondamentaux au menu signature — chaque étape prépare la suivante."
    },

    "shun.eyebrow": {"pt-BR":"Shun — Sazonalidade Japonesa","pt-PT":"Shun — Sazonalidade Japonesa","en":"Shun — Japanese Seasonality","es":"Shun — Estacionalidad Japonesa","ja":"旬 — 日本の季節感","ko":"슌(旬) — 일본의 계절감","it":"Shun — Stagionalità Giapponese","fr":"Shun — Saisonnalité Japonaise"},
    "shun.title": {
      "pt-BR":"A gastronomia muda<br>com o tempo.",
      "pt-PT":"A gastronomia muda<br>com o tempo.",
      "en":"Gastronomy changes<br>with time.",
      "es":"La gastronomía cambia<br>con el tiempo.",
      "ja":"美食は、<br>時とともに変わる。",
      "ko":"미식은 시간과 함께<br>변화합니다.",
      "it":"La gastronomia cambia<br>con il tempo.",
      "fr":"La gastronomie change<br>avec le temps."
    },

    "split.mentoria.eyebrow": {"pt-BR":"Você quer evoluir como profissional?","pt-PT":"Quer evoluir como profissional?","en":"Want to grow as a professional?","es":"¿Quieres evolucionar como profesional?","ja":"プロとして成長したい方へ","ko":"전문가로 성장하고 싶다면","it":"Vuoi crescere come professionista?","fr":"Vous voulez évoluer en tant que professionnel ?"},
    "split.mentoria.title": {"pt-BR":"Mentoria","pt-PT":"Mentoria","en":"Mentorship","es":"Mentoría","ja":"メンタリング","ko":"멘토링","it":"Mentorship","fr":"Mentorat"},
    "split.mentoria.desc": {
      "pt-BR":"Formação e desenvolvimento técnico para cozinheiros, sushiwomen/sushimen, chefs e empreendedores que querem aprofundar a culinária japonesa tradicional.",
      "pt-PT":"Formação e desenvolvimento técnico para cozinheiros, chefs e empreendedores que querem aprofundar a culinária japonesa tradicional.",
      "en":"Technical training and development for cooks, sushi chefs and entrepreneurs who want to deepen their knowledge of traditional Japanese cuisine.",
      "es":"Formación y desarrollo técnico para cocineros, chefs de sushi y emprendedores que quieren profundizar en la cocina japonesa tradicional.",
      "ja":"伝統的な和食をより深く学びたい料理人・寿司職人・起業家のための技術教育プログラム。",
      "ko":"전통 일본 요리를 깊이 배우고자 하는 요리사, 스시 셰프, 창업가를 위한 기술 교육 프로그램입니다.",
      "it":"Formazione tecnica per cuochi, chef di sushi e imprenditori che vogliono approfondire la cucina giapponese tradizionale.",
      "fr":"Formation technique pour cuisiniers, chefs sushi et entrepreneurs souhaitant approfondir la cuisine traditionnelle japonaise."
    },
    "split.consultoria.eyebrow": {"pt-BR":"Você quer evoluir o seu negócio?","pt-PT":"Quer evoluir o seu negócio?","en":"Want to grow your business?","es":"¿Quieres evolucionar tu negocio?","ja":"ビジネスを成長させたい方へ","ko":"비즈니스를 성장시키고 싶다면","it":"Vuoi far crescere la tua attività?","fr":"Vous voulez développer votre entreprise ?"},
    "split.consultoria.title": {"pt-BR":"Consultoria","pt-PT":"Consultoria","en":"Consulting","es":"Consultoría","ja":"コンサルティング","ko":"컨설팅","it":"Consulenza","fr":"Conseil"},
    "split.consultoria.desc": {
      "pt-BR":"Diagnóstico, cardápio, treinamento e padronização para restaurantes e negócios que querem elevar a operação gastronômica japonesa.",
      "pt-PT":"Diagnóstico, ementa, formação e padronização para restaurantes e negócios que querem elevar a operação gastronómica japonesa.",
      "en":"Diagnostics, menu, training and standardisation for restaurants and businesses looking to elevate their Japanese food operation.",
      "es":"Diagnóstico, carta, capacitación y estandarización para restaurantes y negocios que buscan elevar su operación gastronómica japonesa.",
      "ja":"和食業態のオペレーションを向上させたいレストラン・事業者のための診断、メニュー開発、研修、標準化。",
      "ko":"일본 요리 운영을 향상시키고자 하는 레스토랑과 사업체를 위한 진단, 메뉴 개발, 교육, 표준화.",
      "it":"Diagnosi, menu, formazione e standardizzazione per ristoranti e attività che vogliono elevare l'operatività gastronomica giapponese.",
      "fr":"Diagnostic, carte, formation et standardisation pour restaurants et entreprises souhaitant élever leur exploitation gastronomique japonaise."
    },

    "live.eyebrow": {"pt-BR":"Experiências ao vivo","pt-PT":"Experiências ao vivo","en":"Live experiences","es":"Experiencias en vivo","ja":"ライブ体験","ko":"라이브 클래스","it":"Esperienze dal vivo","fr":"Expériences en direct"},
    "live.title": {
      "pt-BR":"Aulas ao vivo,<br>terças e quintas.",
      "pt-PT":"Aulas ao vivo,<br>terças e quintas.",
      "en":"Live classes,<br>Tuesdays and Thursdays.",
      "es":"Clases en vivo,<br>martes y jueves.",
      "ja":"ライブ授業は<br>毎週火曜と木曜。",
      "ko":"라이브 수업은<br>화요일과 목요일.",
      "it":"Lezioni dal vivo,<br>martedì e giovedì.",
      "fr":"Cours en direct,<br>mardis et jeudis."
    },
    "live.lede": {
      "pt-BR":"Turmas reduzidas, acompanhamento direto com a chef e transmissão dentro da própria plataforma.",
      "pt-PT":"Turmas reduzidas, acompanhamento direto com a chef e transmissão dentro da própria plataforma.",
      "en":"Small classes, direct guidance from the chef, and streaming right inside the platform.",
      "es":"Grupos reducidos, acompañamiento directo con la chef y transmisión dentro de la propia plataforma.",
      "ja":"少人数制、シェフによる直接指導、そしてプラットフォーム内でのライブ配信。",
      "ko":"소규모 클래스, 셰프의 직접 지도, 플랫폼 내 실시간 스트리밍.",
      "it":"Classi ridotte, supporto diretto dalla chef e streaming all'interno della piattaforma.",
      "fr":"Petits groupes, accompagnement direct par la cheffe et diffusion directement sur la plateforme."
    },

    "cta.title": {
      "pt-BR":"Entre em um universo<br>gastronômico, não apenas<br>em um curso.",
      "pt-PT":"Entre num universo<br>gastronómico, não apenas<br>num curso.",
      "en":"Step into a culinary<br>universe, not just<br>a course.",
      "es":"Entra en un universo<br>gastronómico, no solo<br>en un curso.",
      "ja":"それは単なる講座ではなく、<br>ひとつの美食の<br>世界です。",
      "ko":"단순한 강좌가 아닌,<br>하나의 미식<br>세계로.",
      "it":"Entra in un universo<br>gastronomico, non solo<br>in un corso.",
      "fr":"Entrez dans un univers<br>gastronomique, pas juste<br>dans un cours."
    },

    "footer.tagline": {
      "pt-BR":"Mentoria profissional e consultoria em culinária japonesa tradicional. Técnica, sazonalidade e experiência.",
      "pt-PT":"Mentoria profissional e consultoria em culinária japonesa tradicional. Técnica, sazonalidade e experiência.",
      "en":"Professional mentorship and consulting in traditional Japanese cuisine. Technique, seasonality and experience.",
      "es":"Mentoría profesional y consultoría en cocina japonesa tradicional. Técnica, estacionalidad y experiencia.",
      "ja":"伝統的な和食のプロフェッショナル向けメンタリング＆コンサルティング。技術、季節感、そして経験。",
      "ko":"전통 일본 요리를 위한 전문 멘토링과 컨설팅. 기술, 계절감, 그리고 경험.",
      "it":"Mentorship professionale e consulenza in cucina giapponese tradizionale. Tecnica, stagionalità ed esperienza.",
      "fr":"Mentorat professionnel et conseil en cuisine traditionnelle japonaise. Technique, saisonnalité et expérience."
    },
    "footer.col.formation": {"pt-BR":"Formação","pt-PT":"Formação","en":"Training","es":"Formación","ja":"講座","ko":"교육","it":"Formazione","fr":"Formation"},
    "footer.col.platform": {"pt-BR":"Plataforma","pt-PT":"Plataforma","en":"Platform","es":"Plataforma","ja":"プラットフォーム","ko":"플랫폼","it":"Piattaforma","fr":"Plateforme"},
    "footer.col.institutional": {"pt-BR":"Institucional","pt-PT":"Institucional","en":"About","es":"Institucional","ja":"サイトについて","ko":"소개","it":"Istituzionale","fr":"À propos"},
    "footer.rights": {"pt-BR":"todos os direitos reservados.","pt-PT":"todos os direitos reservados.","en":"all rights reserved.","es":"todos los derechos reservados.","ja":"無断複写・転載を禁じます。","ko":"모든 권리 보유.","it":"tutti i diritti riservati.","fr":"tous droits réservés."},

    "wa.group": {"pt-BR":"Grupo de Alunos","pt-PT":"Grupo de Alunos","en":"Students' Group","es":"Grupo de Alumnos","ja":"受講生グループ","ko":"수강생 그룹","it":"Gruppo Allievi","fr":"Groupe d'Élèves"}
  };

  function currentLang() {
    return localStorage.getItem("baro-lang") || "pt-BR";
  }

  function applyLang(lang) {
    var htmlEls = document.querySelectorAll("[data-i18n]");
    htmlEls.forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var entry = DICT[key];
      if (!entry) return;
      var text = entry[lang] || entry["pt-BR"];
      if (el.hasAttribute("data-i18n-html")) {
        el.innerHTML = text;
      } else {
        el.textContent = text;
      }
    });
    document.documentElement.setAttribute("lang", lang);
    var labelEl = document.querySelector(".lang-switch__current");
    if (labelEl) {
      var found = LANGS.filter(function (l) { return l.code === lang; })[0];
      labelEl.textContent = lang.split("-")[0].toUpperCase();
    }
    document.querySelectorAll(".lang-switch__option").forEach(function (opt) {
      opt.classList.toggle("is-active", opt.getAttribute("data-lang") === lang);
    });
    localStorage.setItem("baro-lang", lang);
  }

  function buildSwitcher() {
    var mount = document.querySelector("[data-lang-mount]");
    if (!mount) return;
    var wrap = document.createElement("div");
    wrap.className = "lang-switch";
    var btn = document.createElement("button");
    btn.className = "lang-switch__btn";
    btn.type = "button";
    btn.setAttribute("aria-label", "Selecionar idioma");
    btn.innerHTML = '<span class="lang-switch__current">PT</span>';
    var menu = document.createElement("div");
    menu.className = "lang-switch__menu";
    LANGS.forEach(function (l) {
      var opt = document.createElement("button");
      opt.type = "button";
      opt.className = "lang-switch__option";
      opt.setAttribute("data-lang", l.code);
      opt.textContent = l.label;
      opt.addEventListener("click", function () {
        applyLang(l.code);
        wrap.classList.remove("is-open");
      });
      menu.appendChild(opt);
    });
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      wrap.classList.toggle("is-open");
    });
    document.addEventListener("click", function () { wrap.classList.remove("is-open"); });
    wrap.appendChild(btn);
    wrap.appendChild(menu);
    mount.appendChild(wrap);
  }

  document.addEventListener("DOMContentLoaded", function () {
    buildSwitcher();
    applyLang(currentLang());
  });

})();
