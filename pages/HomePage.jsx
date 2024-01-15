import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import logo from "../images/logo.png";
import arrow from "../images/arrow.png";

export default function HomePage() {
    const navigate = useNavigate()

    function handleClick() {
        navigate('/vlozit-inzerat')
    }

    return (
        <>
            <section>
                <h1>Zuzana se představuje</h1>
                <div className="content-container">
                    <img src={logo} alt="our mascot Zuzana" className="round-image"/>
                    <div className="text-container">
                        <p>
                            Už Vás nebaví prohledávání seznamovacích inzerátů na seznamkách, které často nikam nevede?
                            Jste unaveni ze swipování na Tinderu a vybírání z desítek lidí a to jen podle fotek, jako
                            když listujete akčním letákem? Nechcete vyplňovat dlouhé dotazníky, testy osobnosti a jiné
                            blbosti?
                            Nemáte rádi, když ženy na seznamkách dostávají stovky zpráv a muži jen pár?
                            Bojíte se, že Váš profil najdou Vaši blízcí?
                        </p>
                        <p>
                            <b>Tomu všemu je konec!</b> Jsem Zuzana, umělá inteligence, která rozumí seznamování, a
                            pomohu Vám
                            najít lásku, přátelství, jednorázovku, přátelství s výhodami nebo cokoli jiného, co budete
                            chtít,
                            zatímco Vy jste v práci, uklízíte doma nepořádek, cestujete kolem světa nebo si zkrátka
                            žijete svůj
                            každodenní život.
                        </p>
                        <button onClick={handleClick}>Chci se seznámit</button>
                    </div>
                </div>
            </section>
            <section>
                <h2>Jak to funguje?</h2>
                <div className="function-card-container">
                    <div>
                        <h3>Vložíte svůj seznamovací inzerát přes náš formulář</h3>
                        Napíšete informace o sobě a o tom,
                        jakého partnera, kamaráda nebo jiného člověka hledáte. Čím více informací uvedete, tím lépe a
                        přesněji bude Zuzana vědět, kdo jste a koho hledáte.
                        <br/>
                        <strong>
                            Tip: doporučujeme zadat do inzerátu spoustu důležitých informací, aby Zuzana měla podle čeho pro
                            Vás
                            hledat protějšky. Pokud napíšete hodně informací, je velká šance, že si s nalezenými lidmi
                            budete rozumět.
                        </strong>
                    </div>
                    <img src={arrow} alt="arrow down" className="arrow"/>
                    <div>
                        <h3>Zuzana následně začne porovnávat inzeráty a vyhodnocovat, s kým se k sobě hodíte a s kým
                            ne</h3>
                        Vyzkouší se různé kombinace uživatelů a pro každou se otestuje kompatibilita. Zjistí, zda
                        se shodují Vaše požadavky s tím, jaká druhá osoba je a co hledá, a naopak.
                    </div>
                    <img src={arrow} alt="arrow down" className="arrow"/>
                    <div>
                        <h3>Hned jak Zuzana nalezne velkou shodu, pošle Vám email</h3>
                        Vlastními slovy Vám popíše, jaký druhý člověk je a co by se Vám na něm mohlo
                        líbit i v čem by mohl být problém.
                        Také na základě znalosti inzerátů doporučí, o čem byste mohli navázat komunikaci, aby
                        seznamování bylo příjemnější.
                        Zuzana ale nikdy neukáže plné znění inzerátu druhého.
                        <br/>
                        V tomto emailu Vám Zuzana vysvětlí Vaše dvě možnosti: buď Vám pošle kontakt na druhou osobu za
                        několik dní, nebo můžete zaplatit a dostat kontakt ihned.
                        <br/>
                        <strong>
                            Tip: buďte trpěliví. Hledání vhodného protějšku může nějakou chvíli trvat, takže email nemusí
                            dorazit hned. Určitě neházejte flintu do žita. Váš inzerát zůstane v naší databázi měsíc a
                            během
                            této doby bude opakovaně testován na kompatibilitu s ostatními inzeráty. Po vypršení
                            platnosti je vždy možné zadat nový inzerát, opět na měsíc.
                        </strong>
                    </div>
                    <img src={arrow} alt="arrow down" className="arrow"/>
                    <div>
                        <h3>Dostanete email s kontaktem na druhou osobu</h3>
                        Vždy půjde o email a pokud druhý zadal i jiný kontakt, tak i tento kontakt.
                        <br/>
                        <strong>
                            Hodně štěstí při komunikaci!
                        </strong>
                    </div>
                </div>
            </section>
            <section>
                <h2>Výhody AI seznamky</h2>
                <div className="benefits-card-container">
                    <div>
                        <h3>1. Soukromější už to být nemůže</h3>
                        Váš inzerát neuvidí Vaši přátelé, rodina, známí. Uvidí ho jen umělá inteligence. Pouze
                        relevantní části
                        inzerátu (ne celý inzerát) budou zmíněny v mailu, který přijde Vašemu potenciálnímu partnerovi.
                    </div>
                    <div>
                        <h3>2. U nás nejste jen fotka</h3>
                        Nebaví Vás být jen fotka? Pro naši seznamku jste lidskou bytostí. Napište do inzerátu
                        informace, na základě kterých se chcete seznámit. Zuzana je všechny vezme v úvahu.
                    </div>
                    <div>
                        <h3>3. Poznejte snadnou registraci</h3>
                        Nepotřebujete dokonalé fotky, testy osobnosti, odpovídání na těžké otázky. Stačí do inzerátu
                        napsat,
                        co sami chcete. Není to těžké. Koukněte na naše tipy. Stále si nejste jistí? Zuzana Vám pošle
                        návrhy
                        na vylepšení inzerátu.
                    </div>
                    <div>
                        <h3>4. Hledejte cokoliv a kohokoliv</h3>
                        Vztah či přátelství? Nebo doučování, hraní, fitko, tancování? Opačné, či stejné pohlaví? Můžete
                        zkusit hledat cokoliv a kohokoliv!
                        Zuzana si poradí se vším a nikoho nebude soudit na základě
                        toho, čím je nebo co ho přitahuje.
                    </div>
                    <div>
                        <h3>5. I bez placení se můžete seznámit</h3>
                        Na rozdíl od jiných seznamek, které jsou bez placení nepoužitelné, Zuzanu můžete používat i
                        zdarma.
                        Také díky tomu zde najdete spoustu různých inzerátů. Pro lepší komfort při seznamování je však
                        samozřejmě lepší zaplatit.
                    </div>
                    <div>
                        <h3>6. Seznamujte se na pozadí</h3>
                        Seznamka Zuzana pracuje, když Vy žijete. Představujeme koncept seznamování na pozadí. Náš
                        algoritmus neúnavně zkouší Vaši kompatibilitu s novými uživateli a dá Vám vědět, hned jak někoho
                        vhodného najde.
                    </div>
                    <div>
                        <h3>7. Správná dynamika kontaktů</h3>
                        Jinde bývají muži rádi za každou zprávu, ženám jich přitom chodí stovky. I od pro ně
                        nerelevantních mužů.
                        Jsou tam i podvodníci snažící se zaujmout obecnými řečmi.
                        Zuzana předává kontakty na uživatele jen v případě shody.
                    </div>
                    <div>
                        <h3>8. Inzeráty na úrovni</h3>
                        Pro inzeráty u nás platí určitá pravidla. AI moderace se snaží filtrovat nelegální obsah.
                        Inzerát lze napsat pouze s Google účtem: jeden účet, jeden inzerát.
                        Pro aktuálnost se inzeráty zobrazují jen měsíc. Musí mít alespoň 300 znaků.
                    </div>
                    <div>
                        <h3>9. Prostě to napište</h3>
                        U nás je na Vás, na základě čeho se chcete seznámit. Je pro Vás důležité, kde druhý bydlí? Jeho
                        věk? Nebo záliby? Nebo jsou důležité konkrétní vlastnosti druhého? Zuzana přihlédne k Vašim
                        přáním. Prostě je napište.
                    </div>
                </div>
            </section>
            <section>
                <h2>Jak je to s placením?</h2>
                Když Zuzana nalezne velkou shodu, informuje Vás o tom emailem a pošle Vám kontakt za několik dní. Máte
                možnost i získat kontakt bez čekání platbou na odkazu v emailu.
                Samozřejmě bychom rádi posílali kontakt hned, bohužel využívání AI nás stojí nemalé peníze, a proto jsme
                se rozhodli, že pozdržení zaslání kontaktu bude určitým znevýhodněním
                pro neplatící uživatele, aby seznamka Zuzana mohla vydělávat. Nechává to našim uživatelům volbu, zda
                chtějí kontakt hned, nebo stačí za nějakou dobu.
                <br/>
                <strong>
                    Tip: součástí emailu o nalezení shody je i skóre kompatibility a další informace. Doporučujeme
                    si
                    zaplatit za zaslání kontaktu ihned v případě opravdu velké shody či pokud Vás
                    popis druhého opravdu zaujme. Byla by škoda nechat si takového člověka ujít. V případě ostatních
                    se
                    platba vyplatí méně.
                </strong>
                <div className="price-card">
                    <div className="price">
                        ZDARMA
                    </div>
                    <br/>
                    <div className="price-desc">
                        Cena za zaslání kontaktu za několik dní
                    </div>
                </div>
                <br/>
                <div className="price-card">
                    <div className="price">
                        29 Kč
                    </div>
                    <br/>
                    <div className="price-desc">
                        Cena za zaslání kontaktu za ihned
                    </div>
                </div>
                <br/>
                <div className="price-reason">Kontaktujete druhého včas, dokud má ještě
                    inzerát a zájem
                </div>
                <div className="price-reason">Předběhnete další potenciální zájemce z naší seznamky
                </div>
                <div className="price-reason">Dáte druhému najevo svůj opravdový zájem
                </div>
            </section>
            <section>
                <h2>Doporučení pro Váš inzerát</h2>
                <div className="advice-card-container">
                    <div>
                        <h3>Kdo jste a koho hledáte</h3>
                        Začít můžete tím, že se představíte (jméno, věk, bydliště, zaměstnání/studium atd).
                        Dále můžete napsat něco víc o sobě (vzhled, osobnost, vlastnosti, zájmy, záliby).
                        Dále jaké máte hodnoty, cíle, jaký je Váš životní styl? Při seznamování může být důležitý i
                        vztah ke sportu, ke zvířatům, k cestování...
                        Nezapomeňte ani na sexualitu či smysl pro humor. Napište také, co je pro Vás důležité, jako
                        například politické názory.
                        Pro vztah můžou být důležité informace i o stupni života (máte děti? bydlíte ještě s rodiči,
                        nebo sami? chodíte do práce, studujete?),
                        vztah k rodině a přátelům či finanční zvyky. A protože ve vztahu je důležitá komunikace,
                        můžete napsat i jak jste zvyklí řešit konflikty, jak partnerovi chcete dávat najevo svoji
                        náklonnost, jakým stylem rádi komunikujete.
                        Na konec můžete napsat, jaká jsou Vaše očekávání od vztahu.
                        A teď ty věci, co jste napsali o sobě, napište taky o tom, jaký má být ten druhý.
                        <br/>
                        <strong>
                            Tip: nemusíte využít vše z tohoto seznamu, ale doporučujeme si všechny body v hlavě projít a
                            nevynechat nic,
                            co se Vám zdá důležité a na základě čeho byste rádi někoho našli.
                        </strong>
                    </div>
                    <div>
                        <h3>Píšete to pro AI, ne pro lidi</h3>
                        Proto například můžete vynechat fráze směřující k lidskému čtenáři, jako třeba „určitě napiš“.
                        Také nevadí větší délka inzerátu.
                    </div>
                    <div>
                        <h3>Myslete na celkový dojem a na to, co Vás charakterizuje</h3>
                        Pomocí čeho se chcete seznámit? Jak se chcete prezentovat? Pokud napíšete informace, které Vás
                        dobře charakterizují,
                        AI Vám může najít lepší protějšky. A protože AI bude inzerát chápat podobně jako člověk, dbejte
                        na to, abyste nejdůležitějším
                        informacím věnovali nejvíce prostoru.
                    </div>
                    <p>Zobrazit další doporučení</p>
                </div>
            </section>
            <section>
                <div className="ending">
                    <h2>Zaujalo Vás to?</h2>
                    <button onClick={handleClick}>Chci si vytvořit a podat inzerát</button>
                </div>
            </section>
        </>
    )
}
