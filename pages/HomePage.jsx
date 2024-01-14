import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function HomePage() {
    const navigate = useNavigate()

    function handleClick() {
        navigate('/vlozit-inzerat')
    }

    return (
        <>
            <section>
                <h1>AI seznamka Zuzana</h1>
                <p>Už Vás nebaví nekonečně dlouhé prohledávání seznamovacích inzerátů na všech možných seznamkách, které
                    často nikam nevede? Jste unaveni ze swipování na Tinderu a vybírání z desítek různých lidí, jako
                    kdybyste si vybírali zboží v obchodě? Nemáte rádi, když se lidé při seznamování soudí podle fotek?
                    Nechcete vyplňovat zdlouhavé dotazníky, testy osobnosti a podobné blbosti? Nemáte rádi, když ženy na
                    seznamkách dostávají stovky zpráv a muži sotva nějakou? Bojíte se, že když si vytvoříte seznamovací
                    inzerát, tak ho najdou Vaši přátelé? Bojíte se, že narazíte na spoustu falešných účtů?</p>
                <p><b>Tomu všemu je konec!</b> Jsem Zuzana, umělá inteligence, která rozumí seznamování, a pomohu Vám
                    najít lásku, přátelství, jednorázovku, friends with benefits nebo cokoli jiného, co budete chtít,
                    zatímco Vy jste v práci, uklízíte doma nepořádek, cestujete kolem světa nebo si zkrátka žijete svůj
                    každodenní život.</p>
                <button onClick={handleClick}>Chci se seznámit</button>
            </section>
            <section>
                <h2>Jak to funguje?</h2>
                <ol>
                    <li><b>Vložíte svůj seznamovací inzerát přes formulář</b><br/>Napíšete informace o sobě a o tom,
                        jakého partnera, kamaráda nebo jiného člověka hledáte. Čím více informací uvedete, tím lépe a
                        přesněji bude Zuzana vědět, kdo jste a koho hledáte, a bude Vám hledat co nejvhodnější
                        protějšek.<br/><strong>Více informací sice znamená méně matchů, ale nalezení lidé budou mnohem
                            více odpovídat tomu, co hledáte. Méně informací sice znamená více matchů, ale nalezení lidé
                            nemusí přesně odpovídat tomu, co byste chtěli najít, takže tuto možnost moc
                            nedoporučujeme.</strong></li>
                    <li><b>Zuzana následně začne porovnávat inzeráty a vyhodnocovat, s kým se k sobě hodíte a s kým
                        ne</b><br/>Vyzkouší různé kombinace uživatelů a pro každou otestuje kompatibilitu. Zjistí, zda
                        se shodují Vaše požadavky s tím, jaká druhá osoba je a co hledá, a naopak.
                    </li>
                    <li><b>Jakmile Zuzana nalezne potenciální shodu, pošle Vám e-mail</b><br/>Vlastními slovy Vám v
                        jednoduchosti popíše, jaký druhý člověk je a co by se Vám na něm mohlo líbit. Také doporučí, o
                        čem byste mohli navázat komunikaci, aby seznamování bylo příjemnější. Zuzana se ale také nebude
                        bát případně doplnit věci, ve kterých byste s druhým člověkem kompatibilní být nemuseli. Zároveň
                        však nikdy neprozradí více, než je nutné, a neukáže Vám konkrétní znění inzerátu.<br/><strong>Buďte
                            trpěliví. Hledání vhodného protějšku může nějakou chvíli trvat, takže e-mail nemusí dorazit
                            hned. Určitě neházejte flintu do žita. Váš inzerát zůstane v naší databázi měsíc a během
                            této doby bude opakovaně testován na kompatibilitu s ostatními inzeráty. Po vypršení
                            platnosti bude možné zadat nový inzerát a tuto dobu tím prodloužit o další měsíc, a takto to
                            lze opakovat pořád dokola.</strong></li>
                </ol>
            </section>
            <section>
                <h2>Výhody AI seznamky</h2>
            </section>
            <div className="card-container">
                <div className="card">
                    <b>✨ 1. Soukromnější už to být nemůže</b><br/>
                    Váš inzerát neuvidí Vaši přátelé, rodina, známí. Uvidí ho jen umělá inteligence. Relevantní části
                    inzerátu budou zmíněny v mailu, který přijde Vašemu potenciálnímu partnerovi.
                </div>
                <div className="card">
                    <b>✨ 2. U nás nejste jen fotka</b><br/>
                    Nebaví Vás být jen fotka? Pro naši seznamku jste tím, kým jen chcete být. Napište do inzerátu
                    informace, na základě kterých se chcete seznámit. Zuzana je všechny vezme v úvahu.
                </div>
                <div className="card">
                    <b>✨ 3. Poznejte snadnou registraci</b><br/>
                    Nepotřebujete dokonalé fotky, testy osobnosti, odpovídání na těžké otázky. Stačí do inzerátu napsat,
                    co sami chcete. Není to těžké. Koukněte na naše tipy. Stále si nejste jistí? Zuzana Vám pošle návrhy
                    na vylepšení inzerátu.
                </div>
                <div className="card">
                    <b>✨ 4. Hledejte s námi cokoliv</b><br/>
                    Vztah, kamarádství, výhody? Nebo třeba doučování, hraní, posilovna, tancování? Nemáme konkrétní
                    seznam, můžete zkusit cokoliv!
                </div>
                <div className="card">
                    <b>✨ 5. Hledejte s námi kohokoliv</b><br/>
                    Zuzana si poradí se vším, a nikoho nebude soudit na základě toho, čím je nebo které pohlaví ho
                    přitahuje. Nezapomeňte v inzerátu uvést své pohlaví a svou orientaci, aby bylo možné hledat
                    přesně ty protějšky, se kterými se chcete seznamovat.
                </div>
                <div className="card">
                    <b>✨ 6. Seznamujte se na pozadí</b><br/>
                    Seznamka Zuzana pracuje když Vy žijete. Představujeme koncept seznamování na pozadí. Náš
                    algoritmus neúnavně zkouší Vaši kompatibilitu s novými uživateli a dám Vám vědět, hned jak někoho
                    vhodného najde.
                </div>
                <div className="card">
                    <b>✨ 7. Správná dynamika kontaktů</b><br/>
                    Jinde bývají muži rádi za každou zprávu, ženám jich přitom chodí stovky. I od mužů,
                    kteří nemají vážný zájem. Někteří jsou i podvodníci snažící se zaujmout obecnými řečmi.
                    Zuzana předává kontakty na uživatele jen v případě shody.
                </div>
                <div className="card">
                    <b>✨ 8. Soukromí na úrovni</b><br/>
                    Inzeráty jsou soukromé, platí pro ně však pravidla. AI moderace se snaží filtrovat nelegální obsah. Inzerát lze napsat pouze s Google účtem. Jeden účet, jeden inzerát.
                    Pro aktuálnost se inzeráty zobrazují jen měsíc. Musí mít aspoň 300 znaků.
                </div>
                <div className="card">
                    <b>✨ 9. Prostě to napište</b><br/>
                    U nás je na Vás, na základě čeho se chcete seznámit. Je pro Vás důležité, kde druhý bydlí? Jeho věk? Nebo záliby? Zuzana přihlédne k Vašim přáním. Prostě je napište.
                </div>
            </div>
            <section>
                <h2>Doporučení pro Váš inzerát</h2>
                <ul>
                    <li><b>Uveďte co nejpodrobněji, kdo jste a koho hledáte</b><br/>Jste muž, žena nebo někdo jiný?
                        Kolik Vám je let? Kde bydlíte? Jak byste popsali sebe a svou povahu? Jak vypadáte? Čemu se
                        věnujete a co Vás baví? Jaký je Váš styl života a Vaše životní cíle? Hledáte si lásku/vztah,
                        kamarádství s výhodami, jednorázovku nebo třeba jen kamarádství? Jaká je Vaše představa
                        vztahu/FWB/kamarádství? U protějšku Vám záleží na pohlaví? Na věku? Na vzdálenosti? Na povaze?
                        Na vzhledu? Na zájmech? Na čemkoli jiném? Buďte konkrétní a nebojte se uvést vše, co Vás
                        napadne.<br/><strong>Rozhodně nemusíte použít vše z tohoto seznamu, ale hodně doporučujeme si
                            všechny body alespoň jednou v hlavě projít a nevynechat nic, na čem by Vám mohlo
                            záležet.</strong></li>
                    <li><b>Píšete to pro umělou inteligenci, ne pro lidi</b><br/>Nikomu nebude vadit, že je inzerát
                        dlouhý a je že v něm hodně informací, protože ho nikdo živý číst nebude! AI to nevadí, ta to
                        zvládne hned, a delší, konkrétnější texty dokonce ocení víc, protože si o Vás a o tom, co a koho
                        hledáte, bude moct udělat přesnější představu.
                    </li>
                </ul>
            </section>
            <section>
                <h2>Zaujalo Vás to?</h2>
                <button onClick={handleClick}>Chci si vytvořit a podat inzerát</button>
            </section>
        </>
    )
}