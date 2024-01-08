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
                <p>Už Vás nebaví nekonečně dlouhé prohledávání seznamovacích inzerátů na všech možných seznamkách, které často nikam nevede? Jste unaveni ze swipování na Tinderu a vybírání z desítek různých lidí, jako kdybyste si vybírali zboží v obchodě? Nemáte rádi, když se lidé při seznamování soudí podle fotek? Nechcete vyplňovat zdlouhavé dotazníky, testy osobnosti a podobné blbosti? Nemáte rádi, když ženy na seznamkách dostávají stovky zpráv a muži sotva nějakou? Bojíte se, že když si vytvoříte seznamovací inzerát, tak ho najdou Vaši přátelé? Bojíte se, že narazíte na spoustu falešných účtů?</p>
                <p><b>Tomu všemu je konec!</b> Jsem Zuzana, umělá inteligence, která rozumí seznamování, a pomohu Vám najít lásku, přátelství, jednorázovku, friends with benefits nebo cokoli jiného, co budete chtít, zatímco Vy jste v práci, uklízíte doma nepořádek, cestujete kolem světa nebo si zkrátka žijete svůj každodenní život.</p>
                <button onClick={handleClick}>Chci se seznámit</button>
            </section>
            <section>
                <h2>Jak to funguje?</h2>
                <ol>
                    <li><b>Vložíte svůj seznamovací inzerát přes formulář</b><br/>Napíšete informace o sobě a o tom, jakého partnera, kamaráda nebo jiného člověka hledáte. Čím více informací uvedete, tím lépe a přesněji bude Zuzana vědět, kdo jste a koho hledáte, a bude Vám hledat co nejvhodnější protějšek.<br/><strong>Více informací sice znamená méně matchů, ale nalezení lidé budou mnohem více odpovídat tomu, co hledáte. Méně informací sice znamená více matchů, ale nalezení lidé nemusí přesně odpovídat tomu, co byste chtěli najít, takže tuto možnost moc nedoporučujeme.</strong></li>
                    <li><b>Zuzana následně začne porovnávat inzeráty a vyhodnocovat, s kým se k sobě hodíte a s kým ne</b><br/>Vyzkouší různé kombinace uživatelů a pro každou otestuje kompatibilitu. Zjistí, zda se shodují Vaše požadavky s tím, jaká druhá osoba je a co hledá, a naopak.</li>
                    <li><b>Jakmile Zuzana nalezne potenciální shodu, pošle Vám e-mail</b><br/>Vlastními slovy Vám v jednoduchosti popíše, jaký druhý člověk je a co by se Vám na něm mohlo líbit. Také doporučí, o čem byste mohli navázat komunikaci, aby seznamování bylo příjemnější. Zuzana se ale také nebude bát případně doplnit věci, ve kterých byste s druhým člověkem kompatibilní být nemuseli. Zároveň však nikdy neprozradí více, než je nutné, a neukáže Vám konkrétní znění inzerátu.<br/><strong>Buďte trpěliví. Hledání vhodného protějšku může nějakou chvíli trvat, takže e-mail nemusí dorazit hned. Určitě neházejte flintu do žita. Váš inzerát zůstane v naší databázi měsíc a během této doby bude opakovaně testován na kompatibilitu s ostatními inzeráty. Po vypršení platnosti bude možné zadat nový inzerát a tuto dobu tím prodloužit o další měsíc, a takto to lze opakovat pořád dokola.</strong></li>
                </ol>
            </section>
            <section>
                <h2>Výhody AI seznamky</h2>
                <ul>
                    <li><b>Anonymnější už to být nemůže</b><br/>Váš inzerát nikdo neuvidí, jen Vy a umělá inteligence Zuzana. Ta Vašemu potenciálnímu protějšku na začátku neprozradí více, než je nutné, a zároveň vše napíše vlastními slovy, neukáže konkrétní znění inzerátu. Mimo jiné také nehrozí, že by Váš inzerát našli Vaši přátelé, známí nebo rodinní příslušníci a podle toho Vás soudili. S Vaším inzerátem se mohou setkat pouze v případě, že se také budou seznamovat a hledat totéž, co Vy.</li>
                    <li><b>Žádné zdlouhavé procházení inzerátů, posuzování lidí podle fotek a zvýhodňování některých uživatelů nad druhými</b><br/>Zuzana udělá vše za Vás, a to tak, aby všichni měli stejné šance a stejné výchozí podmínky.</li>
                    <li><b>Z naší strany Vám zajistíme takové bezpečí, jaké jen umíme</b><br/>Stále je velmi vhodné si definovat a dodržovat zásady bezpečného seznamování se s lidmi na internetu. Abychom Vám však zajistili alespoň základní úroveň bezpečí, umožňujeme každému uživateli seznamky vložit pouze jeden seznamovací inzerát, který navíc musí být propojený s Google účtem. Inzerát také není možné v průběhu jeho platnosti upravovat a každý den si tak hrát na někoho jiného - zadání nového inzerátu je možné až po vypršení platnosti toho původního (jeden měsíc).</li>
                    <li><b>Hledejte cokoliv</b><br/>Zuzana si poradí se vším, a nikoho nebude soudit na základě toho, čím je nebo které pohlaví ho přitahuje. Nezapomeňte v inzerátu uvést své pohlaví a svou orientaci, aby bylo možné hledat přesně ty protějšky, se kterými se chcete seznamovat.</li>
                </ul>
            </section>
            <section>
                <h2>Doporučení pro Váš inzerát</h2>
                <ul>
                    <li><b>Uveďte co nejpodrobněji, kdo jste a koho hledáte</b><br/>Jste muž, žena nebo někdo jiný? Kolik Vám je let? Kde bydlíte? Jak byste popsali sebe a svou povahu? Jak vypadáte? Čemu se věnujete a co Vás baví? Jaký je Váš styl života a Vaše životní cíle? Hledáte si lásku/vztah, kamarádství s výhodami, jednorázovku nebo třeba jen kamarádství? Jaká je Vaše představa vztahu/FWB/kamarádství? U protějšku Vám záleží na pohlaví? Na věku? Na vzdálenosti? Na povaze? Na vzhledu? Na zájmech? Na čemkoli jiném? Buďte konkrétní a nebojte se uvést vše, co Vás napadne.<br/><strong>Rozhodně nemusíte použít vše z tohoto seznamu, ale hodně doporučujeme si všechny body alespoň jednou v hlavě projít a nevynechat nic, na čem by Vám mohlo záležet.</strong></li>
                    <li><b>Píšete to pro umělou inteligenci, ne pro lidi</b><br/>Nikomu nebude vadit, že je inzerát dlouhý a je že v něm hodně informací, protože ho nikdo živý číst nebude! AI to nevadí, ta to zvládne hned, a delší, konkrétnější texty dokonce ocení víc, protože si o Vás a o tom, co a koho hledáte, bude moct udělat přesnější představu.</li>
                </ul>
            </section>
            <section>
                <h2>Zaujalo Vás to?</h2>
                <button onClick={handleClick}>Chci si vytvořit a podat inzerát</button>
            </section>
        </>
    )
}
