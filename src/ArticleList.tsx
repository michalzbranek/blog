import { useState } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import { Box, Drawer, Toolbar, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const articles = [
  {
    name: "ŽIVOT",
    text: "Nakonec jsem se při přemýšlení na smrt dostal až k přemýšlení nad životem. V různých částech světa to chodí jinak, ale většinou se člověk narodí a volnost stejně nenastane, aspoň ne taková, jakou si ji já představuji. Největší volnost si myslím, že nastává, když má dítě 3 - 6 let. Ano, chodí do školky, ale tam ještě nenastává učení, nebo spíše takové zábavné učení. Jinak se o něj starají rodiče a i když si to neuvědomuje, volnost má. Při dalším studiu už přichází učení, které dost svazuje, ale pořád ne tak, jako práce. Ale děti si už začínají uvědomovat, o čem život je, jak funguje, a vlastně se na tu práci těší, protože si myslí, že pak nastane ta pravá svoboda. Ale ta nenastane. Člověk do te práce chodit musí, no a procento lidí, které opravdu baví práce? To je zanedbatelné. Takže kde je ta svoboda? Možná u pár lidí, kteří se narodí do tak bohatých rodin, že vlastně nemusí nic dělat a díky penězům vlastně ale mohou dělat cokoliv. Já bych byl radši, kdybych se narodil mnohem dříve, v době, kdy se technologie neposunula. Člověk se narodil, zůstal na stejném místě celý život s rodinou, a pak umřel. Ano, většina by tohle nenazvalo svobodou, jenže v té době lidé nevěděli, že existuje svoboda. Tohle byl celý jejich život a byli spokojeni, vděčni. Teď chce každý co nejvíce, protože o tom ví díky internetu. Takže když to mají ostatní, tak musím i já, že? Kdybych si měl představit svůj ideální život v současné době, tak by to asi bylo na pláži. S rodinou bychom měli postavenou chatu a nikdo z nás by nepracoval. Jezdívali bychom na výlety po světě, surfovali, lyžovali. Nyní se člověk narodí už do začarovaného kruhu, protože lidstvo se chce posunovat dále a dále. Mám rád technologie, medicínu a další obory, které se v poslední době hodně posunují, ale zároveň s nimi přichází i ta záporná část. Téměř každý člověk se chce mít lépe, ale možná méně je někdy více.Takže i přesto, že mám pouze 31 let, tak dospívám k názoru, že opravdu ta láska je k nezaplacení. Baví mě v životě čím dál méně věcí, ale co zůstává, je trávit společný čas s přítelkyní. Smrt možná není úplná volnost, ale je to minimálně se vymanění z toho cyklu, který tady na planetě zavládnul. O čem tedy život je? O utrpení? Určitě ano. Člověk se vždy těší na tu dobrou chvíli, ale pravděpodobně těch chvil těžkých je více. Máme strach ze smrti, ze smrti blízkých, ale proč? Je to kvůli emocím. Protože logicky, pokud člověk po smrti netrpí, na čemž se můžeme shodnout, tak má klid. A já si nepřeju v životě nic jiného, než mít klid.",
  },
  {
    name: "VÍRA",
    text: "Dříve jsem si myslel, že víra a s tím i spojené náboženství jsou zbytečné věci. Že ničemu nepomáhají a že jsou pouze pro hloupé lidi. Tímto se jim tedy omlouvám, protože jsem dospěl k jinému závěru. Víra totiž dopomáhá lidem k vyrovnání, k vyrovnání s věcmi, které se nedají rozumem vysvětlit. Vše se totiž rozumem vysvětlit nedá, nebo to možná i někdy jen hlava nechce chápat. Víra nám ale dopomáhá se přes tyto těžké události dostat.Tím, že věříme. Zmíním jednu důležitou věc. Nebavíme se o náboženství, které samozřejmě pod víru patří, bavíme se ale o samotné víře. A ta může být jakákoliv. Víra v sebe sama, v rodinu, v politiku, v práci, jednoduše v cokoliv. K té se člověk může dostat v průběhu života, protože ji potřebuje, protože duše cítí, že takhle by to dál nešlo, a že ta víra je cesta kupředu. Já jsem začal sledovat moje naklonění víře až nyní, ve 30 letech. Do té doby jsem vždy vyloženě zastával, že pokud nejde něco vidět, neexistuje důkaz, že to existuje. To se ale nyní mění. Za následek to budou mít hlavně nemoci, se kterými se potýkám po dlouhou část života. No a možná si nyní právě tělo a hlava řeklo, že je potřeba k cestě kupředu něco dalšího? Možná věřit v duši? Začal jsem číst knihy, s doporučením paní psycholožky, které mě začínají přivádět k jinému názoru. Nevím popravdě, jestli víře věřím na 100%, to spíše asi ne. Ale myslím si, že jsem na správné cestě. A beru to i víte jako co? Jako boj proti nemocím. Snažím se dostat svoje tělo, ale i mysl pod kontrolu. Abych já řekl, jak budeme reagovat, jako tým. A tým má větší sílu, než jedinec. A tomu i já věřím, sám v sebe. Ale všechny knížky zmiňují, že naše duše žije i po smrti, že tělo je jen dočasná schránka. Což by samozřejmě velice usnadnilo srovnání se smrtí. Každý se jí bojí a je to úplně jedno, v jakém věku jedinec je. Pokud ale věříme v duši, která je nesmrtelná, tak proč bychom se měli smrti bát? Člověk může na své duši pracovat v průběhu života, a jakmile bude převtělen po smrti do jiné bytosti, duše bude pokračovat na stejném místě, při které umřelo předchozí tělo.",
  },
  {
    name: "RESPEKT",
    text: "Dost často v mých článcích zmiňuji slovo 'respekt'. Proč ale? Přítelkyni tím vždy naštvu, že zmiňuju to slovo, hlavně co se týče i vztahu. Zmiňuju ho ale proto, protože je podle mě tak důležité. Lidé často zmiňují slova jako kompromis, láska, trpělivost a podobně, jako tu nejdůležitější vlastnost. Jsou velice důležitá, ale za mě to bude respekt. Partner - Respekt k tomu druhému, aby jste se kontrolovali, aby jste ho nezranili svými slovy. Respekt k jeho místu, k jeho citům, k jeho zranitelnosti, silám i slabinám, k jeho lásce. Stejně tak Vám respekt umožní ho milovat, protože ho budete obdivovat. V obdivu najdete i motivaci se učit novým věcem, ať už ve vztahu, v rodině či i v práci. Kamarádi - Co respekt ke kamarádům? Stejné jako u partnera, kamarády si vybrat můžeme, takže bychom měli být kamarády jen s těmi, ke kterým respekt máme. Rodina - Rodinný respekt? Tady je bohužel někdy se potřeba bavit s lidmi, ke kterým respekt nemáte. Člověk si nemůže rodinu vybrat, narozdíl od kamarádů nebo partnera. Děti - Co například respekt ke svým vlastním dětem? Ten je za mě určitě potřeba. Zde zmíním, že se stále setkávám s názory, že čím starší člověk, tím zkušenější. To ale za mě není vůbec pravda. Co když má někdo 40 let, ale v životě toho moc nedokázal a nezažil? Co když má někdo 30 let, ale dokázal a zažil toho mnohem více? Přesně proto si myslím, že prokazovat úctu starším lidem jen z tohoto pohledu není má pravda. Pokud si mou úctu zaslouží, není problém. Ale to by si ji nejdřív museli zasloužit. Nebudu rozdávat respekt jen tak pro nic za nic. Takže mít respekt k vlastním dětem, které se snažíme vychovat tak, aby byli ještě lepší jako my, což je za mě základním kamenem evoluce, je potřeba. Práce - Respekt 'musíte' mít i v práci. Píšu uvozovky, protože ho minimálně musíte mít na oko, pokud to Váš šéf vyžaduje. Předstírat - Respekt v práci a rodině je někdy možné pouze předstírat, někdy se s tím nedá nic dělat. A toto jsou 2 případy, při kterém je potřeba se bavit s člověkem, u kterého ten respekt ani mít nemusíte. Nebo potřeba, často to tak je. Ale ano, můžete dát výpověď nebo říct, že odcházíte z této rodinné oslavy, protože se s tímto člověkem nedá hovořit, ale to udělá opravdu málokdo. Jinak je z mého pohledu součástí života bavit se pouze s lidmi, ke kterým respekt máte. Nalézt - Je možné respekt ztratit, to určitě je. Je možné ho i nalézt zpět? Myslím si, že ta odpověď je stejná jako u lásky, a to možná i proto, že spolu souvisí. Nálezt ji poprvé je možno, i když s vypětím. Podruhé je to ještě horší. Ale nejde to dělat donekonečna.",
  },
  {
    name: "SMRT",
    text: "Pradávný čínský příběh vypráví o rolníkovi, který měl k obdělávání půdy starého koně. Jednou se stalo, že kůň utekl do hor. Když sousedé dávali starci najevo svou lítost v jeho neštěstí, sedlák odpovídal: „Neštěstí? Štěstí? Kdo ví?“ Po týdnu se kůň vrátil a z kopců přivedl stádo divokých koní. Tentokrát sousedé blahopřáli. On opět odpověděl: „Štěstí? Neštěstí? Kdo ví?“ Později, když se rolníkův syn snažil jednoho koně zkrotit, spadl a zlomil si nohu. Všichni pokyvovali hlavami, že je to hrozné neštěstí. „Neštěstí? Štěstí? Kdo ví?“, byla opět jeho odpověď. Za pár týdnů táhlo vesnicí vojsko. Všechny schopné mladíky odvedli. Když viděli rolníkova syna se zlomenou nohou, nechali ho být. Takže to bylo štěstí? Neštěstí? Kdo ví? Všechno, co se na první pohled zdá jako zlo, může být zamaskované dobro. A všechno, co vypadá jako dobro, může být ve skutečnosti zlo. Právě ležím v nemocnici a přemýšlím nad životem a smrtí. Co taky jiného dělat, když má člověk v hlavě astrocytom. Můžu Vás ale ujistit, že ještě neodcházím. Pánové kolem mě leží, v důchodovém věku, a stěžují si, jak je to náročné. A víte co? Ono to asi pro ně je náročné, to nepopírám. Já to ale vidím jinak. Je rozdíl, když umřete např. v 80, nebo ve 40. Tohle si ale uvědomí jen lidé, kterých se to opravdu týká. Doufám, že se už i do České republiky dostal mentální stav, že není za co se stydět, pokud člověk chce pomoci s vlastní psychikou, nýbrž naopak. Moje paní psycholožka mi řekla, že člověk roste neustále se svým věkem, je jedno v jakém životním období. Problémy se zdravím jsou ale samozřejmě ještě větší motivací, která donutí člověka popřemýšlet nad vším možným. A díky tomu se dostáváme k dnešnímu tématu, a to je smrt. Lidé mají strach o ní přemýšlet, no a bavit se o ní? To už vůbec ne. Z mého pohledu je to ale dobrá příprava. Příprava na co? Na konec, protože ten jednou přijde pro nás všechny. A jak se dost často říká v článcích a filmech:'Život bez smrti nemá význam.' Co se ale myslí tím významem? Každý si musí odpovědět sám. Za mě je velice důležité se se smrtí vyrovnat. I to by mohl být význam života. Za pánem zde přišla manželka a baví se o praní prádla, o tom, jak museli stát na zastávce na slunku atd. Lidé si to sami neuvědomí, ale ostatní si řeknou, proč řeší takové hlouposti? To ale s věkem přichází. Ja si ale v mojí situaci mohu říct, proč bych se vůbec chtěl dožít do tohoto stavu? Co třeba sport? Ten já mám velice rád, ale s věkem odchází energie, výdrž, stav těla. Chci se dožít toho, že sport nebudu moci dělat? Možná ani ne. Chápu, že lidé si najdou něco jiného, že se s tím srovnají. Ale pro mě je důležitý můj současný pohled, ne ten do budoucnosti. Takže si za tímto rozhodnutím stojím. Pak je zde ale druhý pohled, emocionální. Proto bych svoji rodinu nechtěl nikdy opustit, to je ale právě problém všech smrtí, tento důvod. Nikdo totiž nechce opustit své blízké a blízcí nechcou, aby je rodina opustila. A nevím, jestli se jde s tímto srovnat dopředu, jde to až po smrti, časem. Nejde o to, co se člověku stane. Nedokážeme ovlivnit vše na světě. Víte ale, co dokážeme? Kontrolovat náš přístup, ten nám nikdy nikdo nevezme. Jakmile člověk pochopí tohle, velmi ho to uklidní a urovná myšlenky. A já dělám opravdu vše možné, kromě standardní medicíny se snažím také zapojit alternativní medicínu. Já si myslím, že jde o část medicíny, kterou v našem 'dospělém' světě zatím docela přehlížíme. Do toho zapojuji i mentální část, protože jsou důkazy, že existují případy vyléčení, které nedokáže současná medicína vysvětlit. A i když už začínám věřit (asi bych řekl ve svoji vlastní víru), tak si nemyslím, že jde o zázraky. Jde o případy, které jednoduše nedokážeme zatím vysvětlit. Nebojte, pouze nyní, jednou na to vysvětlení lidstvo přijde. Pokud člověk cítí, že život končí, ale nelituje ničeho a je srovnán se všemi rozhodnutími, tak pak odejde s pokojem v srdci. A co víc od života můžeme chtít?",
  },
  {
    name: "MYŠLENKY",
    text: "Co je špatně s naším školním systémem - Rozhodně nelituji jediného dne ve škole. Obvzláště, pokud to srovnám s prací. Ale myslím si, že i jak se mění doba a věci se modernizují, tak je potřeba změnit i učivo. Musím říct, že jsem se musel učit věci hlavně nazpaměť, ale k čemu mi to je, když si to teď nepamatuji? Třeba chemie by byla mnohem zábavnější s projekty, s praxí, my jsme se ale učili jen teorii. Je ale pravdou, že tohle je možná jen o smůle a o štěstí, každý má jiného učitele. Takže bych asi změnili revizi učitelů? Ať školy, co jsou jen teoretické změní svoji skladbu tak, aby byla pro žáky zábavnější. Už není doba, kdy se žákům dala facka a musel se učit. Děcka se seberou a půjdou ze školy. Budou si chtít udělat kariéru na TikToku nebo Instagramu. A pár předmětů, které bych chtěl mít za své doby ve skladbě předmětů. Je možno, že v této době už jsou aktuální: Finance - Člověk má nyní strach, jestli se dožije důchodu, a když už ano, tak jestli bude natolik vysoký, aby člověk mohl fungovat. Proto je dobré začít spořit už mnohem dříve, a nejenom pro sebe, ale i pro své děti. Nic takového jsem v životě ve škole neslyšel. Sebereflexe - Je to v podstatě sebehodnocení. Velice Vám pomůže v životě, problém je, že většina lidí se ji ani za svůj život nenaučí. Proto by bylo vhodné ho zahrnout do výuky. Cestovací horečka - Rozumím, že v dobách mých rodičů a prarodičů bylo uvolnění hranic velká věc a spousta lidí chtěla vidět, co je za humny. Nyní to možná bude i sociální dobou, kdy všichni vidí na internetu, co je ve světě. Každopádně lidé si chcou odpočinout z náročných prací a vzít třeba i své děti za něčím zajímavým. Já bych ale cestoval pouze v případě, že bych z cestování něco měl. A ano, v cestování se dají najít pozitiva, ale pouze pokud je člověk někde delší dobu. Pokud zažije úplně jinou kulturu, jazyk, chování. Pak ho to určitě může obohatit. Tohle se ale při týdenní dovolené neděje. Pouze pokud člověk třeba jede na rok. Dilema svalů - Při překladu, při přepisu, jsem přestal posilovat úplně. A je jedno, z jakého důvodu. Proto mažu v podstatě vše, co zde bylo napsáno. Důležité hlavně je, aby člověk dělal to, co ho baví, takže třeba hraju florbal nebo jezdím na kole. Myslím si, že fyzická aktivita je v životě důležitá, ale co to bude? To už je jedno. Hlavní je PROČ to děláte, ne CO děláte. Pár ambiciózních slov o ambici - V této sekci jsem měl popsáno, jak moje ego utrpělo, když mi jedna holka řekla, že nejsem ambiciózní, tak jsem si zde musel vylít srdíčko. A ano, já moc ambiciózní nejsem, protože chci mít svůj klid. A to se mi moc nehodí k ambicím. Bylo mi řečeno, že to jde i zkombinovat, ale tomu moc nevěřím. A ono to není o tom, že bych nedělal vůbec nic, ale velice pomalu, tak jak to vyhovuje mně. Každý má jiný stupeň ambicí. A i k přihlédnutí k této záležitosti je dobré najít si partnera. Když někdo je ambiciózní třeba v práci a druhý zase v rodině, ať se pěkně doplňují. Home Office - Už jsem mnohokrát slyšel hlášku 'Jak můžeš pracovat z domu, vždyť potřebuješ lidi?' Tohle je opravdu individuální záležitost. Někdo se rád těší do práce, někdo je radši doma, někdo to rád kombinuje. Já si rád popřemýšlím o samotě. Benefity: Ušetří čas - Proč bych marnil čas cestováním, když nemusím? Šetřím životní prostředí - Pokud cestování neexistuje, tak má ekologická stopa je mnohem menší. Benefit pro firmu - Ano, pokud mají zarezervované kanceláře, kde nikdo není, chápu je. Proto je dobré zareagovat na situaci a ihned, jakmile to jde, se zbavit kanceláří. Lidé pak používají vlastní vodu, elektřinu doma + samozřejmě peníze ušetřené za místo. Věřím, že probíhající karanténa změní pohled na věc u spousty lidí a firem. Protože firmy uvidí, že nemusí stát nad zaměstnancem s bičem v ruce, ale že jim můžou věřit. A pokud firmy věří zaměstnancům, tak těm se pak bude v práci dařit lépe, protože jsem bez stresu. Finální slova - Jak jsem si znovu procházel tento článek, přišel jsem na jednu věc. Že je o přijetí, o přijetí, že by se měla výuka ve škole změnit, že najít moudrost člověk může i z domu, že může z domu i pracovat, že nemusí být ambiciózní. Celý náš život je o jedné věci. O přijetí.",
  },
];

const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window?: () => Window;
}

function ArticleList(props: Props) {
  const [article, setArticle] = useState(articles[0]);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const changeArticle = (index: number) => {
    setArticle(articles[index]);
  };

  const drawer = (
    <div>
      <Toolbar sx={{ height: 120 }} />
      <List>
        {articles.map((article, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => changeArticle(index)}>
              <ListItemText>
                <Typography fontFamily={"Russo One"} fontSize={20}>
                  {article.name}
                </Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="transparent"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          height: 120,
          borderBottom: 1,
        }}
        elevation={0}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          fontFamily={"Russo One"}
          variant="h4"
          noWrap
          component="div"
          sx={{ mt: 3, ml: 3 }}
        >
          MICHAL ZBRANEK
        </Typography>
        <Typography fontFamily={"Russo One"} variant="h5" sx={{ ml: 3 }}>
          BLOG
        </Typography>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              borderRight: 1
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar sx={{ height: 120 }} />
        <Typography paragraph>{article.text}</Typography>
      </Box>
    </Box>
  );
}

export default ArticleList;
