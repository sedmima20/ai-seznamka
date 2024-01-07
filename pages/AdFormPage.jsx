import React from 'react'
import { Link } from 'react-router-dom'
import { GoogleLogin } from '@react-oauth/google'

export default function AdFormPage() {
    const [messageBanner, setMessageBanner] = React.useState({
        text: "",
        isError: false
    })

    const [googleToken, setGoogleToken] = React.useState("")

    const [ad, setAd] = React.useState({
        text: "",
        contactInfo: "",
        isNew: true,
        isEditable: true
    })

    function isOlderThan24Hours(dateTimeString) {
        const adDate = new Date(dateTimeString);
        const currentDate = new Date();
        const diff = currentDate.getTime() - adDate.getTime();
        const diffInSeconds = diff / 1000;
        return diffInSeconds > 86400;
    }

    function onGoogleLoginSuccess(credentialResponse) {
        getDatingAd(credentialResponse.credential, (result) => {
            if (!result) {
                setMessageBanner(prevMessageBanner => {
                    return {
                        ...prevMessageBanner,
                        text: "Při odesílání požadavku na náš server došlo k neznámé chybě.",
                        isError: true
                    }
                })
                window.scrollTo(0, 0)
                return;
            }

            if (result.statusCode === 200) {
                setGoogleToken(credentialResponse.credential)
                setAd(prevAd => {
                    return {
                        ...prevAd,
                        text: result.data.ad_text,
                        contactInfo: result.data.contact_info ? result.data.contact_info : "",
                        isNew: false
                    }
                })
                if (isOlderThan24Hours(result.data.created_at)) {
                    setAd(prevAd => {
                        return {
                            ...prevAd,
                            isEditable: false
                        }
                    })
                    setMessageBanner(prevMessageBanner => {
                        return {
                            ...prevMessageBanner,
                            text: "Vítejte zpět! Zdá se, že v naší databázi už seznamovací inzerát máte. V současné chvíli je inzerát aktivní a nemůžete ho upravit. Umělá inteligence Vám nyní hledá vhodné potenciální protějšky. Buďte trpěliví, tento proces může nějakou dobu trvat. Po 30 dnech od vytvoření inzerátu se inzerát stane neplatným a Vy si budete moct vytvořit nový, pokud budete chtít. Pokud svůj inzerát chcete upravit nebo smazat teď, zkontaktujte nás.",
                            isError: false
                        }
                    })
                } else {
                    setMessageBanner(prevMessageBanner => {
                        return {
                            ...prevMessageBanner,
                            text: "Vítejte zpět! Zdá se, že v naší databázi už seznamovací inzerát máte. Do 24 hodin od jeho odeslání ho můžete libovolně upravovat. Poté se tato možnost zamkne a inzerát bude zaktivován.",
                            isError: false
                        }
                    })
                }
                window.scrollTo(0, 0)
            } else if (result.statusCode === 403) {
                setGoogleToken(credentialResponse.credential)
                if (result.data.error_message === "Existing ad is older than one month and can no longer be seen") {
                    setMessageBanner(prevMessageBanner => {
                        return {
                            ...prevMessageBanner,
                            text: "Vítejte zpět! Inzerátu, který jste u nás měli, vypršela platnost. Pokud chcete dál pokračovat v používání seznamky a být znovu zahrnuti do vyhledávání potenciálních protějšků umělou inteligencí, níže si prosím vytvořte nový inzerát.",
                            isError: false
                        }
                    })
                } else {
                    setMessageBanner(prevMessageBanner => {
                        return {
                            ...prevMessageBanner,
                            text: "Přihlášení Google účtem bylo úspěšné, vítejte na seznamce! Zdá se, že jste nový uživatel. Nyní můžete pokračovat zbývajícími kroky formuláře a vytvořit si svůj první seznamovací inzerát ✨",
                            isError: false
                        }
                    })
                }
                window.scrollTo(0, 0)
            } else if (result.statusCode === 401) {
                setMessageBanner(prevMessageBanner => {
                    return {
                        ...prevMessageBanner,
                        text: "Došlo k neznámé chybě při přihlašování Vaším Google účtem.",
                        isError: true
                    }
                })
                window.scrollTo(0, 0)
            } else if (result.statusCode === 500) {
                setMessageBanner(prevMessageBanner => {
                    return {
                        ...prevMessageBanner,
                        text: "Došlo k neznámé chybě na straně serveru.",
                        isError: true
                    }
                })
                window.scrollTo(0, 0)
            } else {
                setMessageBanner(prevMessageBanner => {
                    return {
                        ...prevMessageBanner,
                        text: "Došlo k neznámé chybě.",
                        isError: true
                    }
                })
                window.scrollTo(0, 0)
            }
        })
    }

    function onGoogleLoginError() {
        setMessageBanner(prevMessageBanner => {
            return {
                ...prevMessageBanner,
                text: "Přihlášení Google účtem se nezdařilo, zkuste to prosím znovu.",
                isError: true
            }
        })
        window.scrollTo(0, 0)
    }

    function getDatingAd(token, callback) {
        fetch("https://api.aiseznamka.cz/?action=get_dating_ad", {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                const statusCode = response.status;
                return response.text().then(text => {
                    try {
                        const data = JSON.parse(text);
                        return { statusCode, data };
                    } catch (error) {
                        return { statusCode, data: undefined };
                    }
                })
            })
            .then(result => {
                callback(result);
            })
            .catch(() => {
                callback(undefined);
            });
    }

    function insertDatingAd(token, adText, contactInfo, callback) {
        const formData = new URLSearchParams();
        formData.append('text', adText);
        if (contactInfo !== "") {
            formData.append('contact_info', contactInfo);
        }

        fetch("https://api.aiseznamka.cz/?action=insert_dating_ad", {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData
        })
            .then(response => {
                const statusCode = response.status;
                return response.text().then(text => {
                    try {
                        const data = JSON.parse(text);
                        return { statusCode, data };
                    } catch (error) {
                        return { statusCode, data: undefined };
                    }
                })
            })
            .then(result => {
                callback(result);
            })
            .catch(() => {
                callback(undefined);
            });
    }

    function handleAdTextChange(event) {
        setAd(prevAd => {
            return {
                ...prevAd,
                text: event.target.value
            }
        })
    }

    function handleAdContactInfoChange(event) {
        setAd(prevAd => {
            return {
                ...prevAd,
                contactInfo: event.target.value
            }
        })
    }

    function handleAdSubmit() {
        insertDatingAd(googleToken, ad.text, ad.contactInfo, (result) => {
            if (!result) {
                setMessageBanner(prevMessageBanner => {
                    return {
                        ...prevMessageBanner,
                        text: "Při odesílání požadavku na náš server došlo k neznámé chybě.",
                        isError: true
                    }
                })
                window.scrollTo(0, 0)
                return;
            }

            if (result.statusCode === 201) {
                setAd(prevAd => {
                    return {
                        ...prevAd,
                        isNew: false
                    }
                })
                setMessageBanner(prevMessageBanner => {
                    return {
                        ...prevMessageBanner,
                        text: "Inzerát byl úspěšně odeslán! Do 24 hodin od jeho odeslání ho můžete libovolně upravovat. Poté se tato možnost zamkne a inzerát bude zaktivován. Děkujeme, že jste se rozhodli využít naši službu AI seznamka Zuzana! ✨",
                        isError: false
                    }
                })
                window.scrollTo(0, 0)
            } else if (result.statusCode === 204) {
                setMessageBanner(prevMessageBanner => {
                    return {
                        ...prevMessageBanner,
                        text: "Inzerát byl úspěšně upraven!",
                        isError: false
                    }
                })
                window.scrollTo(0, 0)
            } else if (result.statusCode === 403) {
                if (result.data.error_message === "Ad too short") {
                    setMessageBanner(prevMessageBanner => {
                        return {
                            ...prevMessageBanner,
                            text: "Inzerát je moc krátký, jeho minimální délka je 300 znaků.",
                            isError: true
                        }
                    })
                } else if (result.data.error_message === "Ad too long") {
                    setMessageBanner(prevMessageBanner => {
                        return {
                            ...prevMessageBanner,
                            text: "Inzerát je moc dlouhý, jeho maximální délka je 1300 znaků.",
                            isError: true
                        }
                    })
                } else if (result.data.error_message === "Contact info too long") {
                    setMessageBanner(prevMessageBanner => {
                        return {
                            ...prevMessageBanner,
                            text: "Text s kontaktními údaji je moc dlouhý, jeho maximální délka je 80 znaků.",
                            isError: true
                        }
                    })
                } else {
                    setMessageBanner(prevMessageBanner => {
                        return {
                            ...prevMessageBanner,
                            text: "Inzerát je starší než 24 hodin a už nemůže být upraven.",
                            isError: true
                        }
                    })
                }
                window.scrollTo(0, 0)
            } else if (result.statusCode === 400) {
                setMessageBanner(prevMessageBanner => {
                    return {
                        ...prevMessageBanner,
                        text: "Došlo k neznámé chybě, text inzerátu nebyl odeslán na server.",
                        isError: true
                    }
                })
                window.scrollTo(0, 0)
            } else if (result.statusCode === 401) {
                setMessageBanner(prevMessageBanner => {
                    return {
                        ...prevMessageBanner,
                        text: "Došlo k neznámé chybě při přihlašování Vaším Google účtem.",
                        isError: true
                    }
                })
                window.scrollTo(0, 0)
            } else if (result.statusCode === 500) {
                setMessageBanner(prevMessageBanner => {
                    return {
                        ...prevMessageBanner,
                        text: "Došlo k neznámé chybě na straně serveru.",
                        isError: true
                    }
                })
                window.scrollTo(0, 0)
            } else {
                setMessageBanner(prevMessageBanner => {
                    return {
                        ...prevMessageBanner,
                        text: "Došlo k neznámé chybě.",
                        isError: true
                    }
                })
                window.scrollTo(0, 0)
            }
        })
    }

    return (
        <>
            <section>
                <h1>AI seznamka Zuzana - Vložení inzerátu</h1>
                {messageBanner.text !== "" && <div className={messageBanner.isError ? "error-message-box" : "ok-message-box"}>{messageBanner.text}</div>}
                {ad.isNew && <p>Formulář níže slouží pro vytvoření a odeslání Vašeho inzerátu do databáze naší seznamky. <b>Inzerát zůstane v databázi měsíc, a během této doby ho umělá inteligence Zuzana bude testovat na kompatibilitu s ostatními inzeráty. Pokud Zuzana najde potenciální shodu, pošle Vám e-mail.</b> Váš inzerát se k Vašim potenciálním protějškům přímo nedostane, Zuzana vše napíše vlastními slovy a nikdy nezmíní více informací, než je nutné. Po měsíci bude Váš inzerát smazán, ale pokaždé si budete moct vytvořit nový a prodloužit tak platnost o další měsíc.</p>}
                {ad.isNew && <p><b>Inzeráty ostatních uživatelů seznamky nemůžete vyhledávat a procházet ručně, vše skutečně vyhodnocuje pouze umělá inteligence.</b> Vše, co do inzerátu napíšete, může být Vašim potenciálním protějškům sděleno a vše také bude použito pro hledání vhodných protějšků (testování Vašeho inzerátu na kompatibilitu s ostatními inzeráty), ale Váš inzerát nikdy nebude veřejně viset kdekoli na internetu, na rozdíl od ostatních seznamek.</p>}
                {ad.isNew && <p><b>Hledat můžete kohokoliv - lásku na celý život, kamarádství s výhodami, jednorázovku, kamarádství,...</b> Nebudete ztrácet čas swipováním, prohledáváním hromady různých inzerátů nebo vyplňováním zdlouhavých dotazníků a testů osobnosti. Nebudete soudit a nebudete souzeni podle fotek. Doporučujeme navštívit <Link to="/">domovskou stránku</Link> a přečíst si více informací o naší seznamce, pokud jste tak ještě neučinili.</p>}
                {ad.isNew && <p><strong>Používáním seznamky nám dobrovolně udělujete souhlas se zpracováním osobních údajů za účelem zprostředkování online seznamovací služby v takové podobě, jakou na našich webových stránkách popisujeme, a to dle našich <Link to="/zasady-zpracovani-osobnich-udaju">zásad zpracování osobních údajů</Link>, které si prosím přečtěte.</strong></p>}
            </section>
            <section>
                <h2><b>Krok 1:</b> Přihlaste se svým Google účtem</h2>
                {googleToken === "" && <p><b>Abychom nemuseli řešit vytváření uživatelských účtů a ukládání hesel, využíváme přihlašování přes Google účet. Váš seznamovací inzerát připojíme k primární e-mailové adrese, a primární e-mailová adresa je zároveň jediný osobní údaj z Vašeho Google účtu, který uložíme do naší databáze společně s Vaším inzerátem.</b> Díky tomu, že inzerát bude připojen k e-mailové adrese, se můžete kdykoli znovu přihlásit stejným Google účtem a zkontrolovat nebo upravit obsah Vašeho inzerátu. <b>Na Vaši e-mailovou adresu také budeme posílat potvrzovací e-maily a e-maily týkající se nalezených potenciálních protějšků.</b> Vezměte prosím na vědomí, že <b>e-mailovou adresu budeme zároveň používat jako Váš hlavní kontaktní údaj a budeme ji předávat všem potenciálním protějškům</b>, které seznamka vyhodnotí jako match, aby Vás mohli prostřednictvím této e-mailové adresy zkontaktovat.</p>}
                {googleToken === "" && <p>Pokud ještě Google účet nemáte, můžete si ho u společnosti Google LLC vytvořit v dialogovém okně, které se zobrazí po kliknutí na tlačítko. V opačném případě se tam prosím přihlaste.</p>}
                {googleToken === ""
                    ? <GoogleLogin
                        onSuccess={onGoogleLoginSuccess}
                        onError={onGoogleLoginError}
                    />
                    : <p>Přihlášeno! 👍</p>
                }
                <p>Přihlášení je jednorázové, po zavření těchto stránek budete z naší webové aplikace odhlášeni. Můžete se kdykoli vrátit a znovu se přihlásit.</p>
            </section>
            <section>
                <h2><b>Krok 2:</b> Napište svůj seznamovací inzerát</h2>
                {ad.isEditable && <p>Co a koho hledáte? Lásku? Vztah? Kamarádství? Kamarádství s výhodami? Jednorázovku? Nebo třeba jen někoho na dopisování? Něco jiného? Jak byste popsali sebe a co by měl splňovat Váš protějšek? <b>Buďte konkrétní a napište všechno, co Vás napadne.</b></p>}
                {ad.isEditable && <p><strong>Abychom udrželi inzeráty co nejkvalitnější, délka Vašeho inzerátu musí být minimálně 300 znaků.</strong></p>}
                {ad.isEditable && <p>Pokud si nevíte rady, doporučujeme projít tento seznam a zahrnout všechno, na čem by mohlo záležet Vám nebo Vašemu protějšku: <b>typ vztahu nebo kamarádství, Vaše představa vztahu nebo kamarádství, pohlaví, věk, sexuální orientace, bydliště/vzdálenost, povaha, vzhled, povolání/profese, zájmy a koníčky, styl života / životní cíle, a cokoli dalšího, co Vás napadne</b>.</p>}
                {ad.isEditable && <p><b>Čím více informací uvedete, tím lépe a přesněji bude Zuzana vědět, kdo jste a koho hledáte, a bude Vám hledat co nejvhodnější protějšek.</b> Nikomu nebude vadit, že je inzerát dlouhý a je že v něm hodně informací, protože ho nikdo živý číst nebude! AI to nevadí, ta to zvládne hned, a delší, konkrétnější texty dokonce ocení víc, protože si o Vás a o tom, co a koho hledáte, bude moct udělat přesnější představu.</p>}
                {ad.isEditable && <p>Fantazii se meze skoro nekladou, ale <b>prosíme Vás, aby inzerát nebyl až moc sexuálně explicitní</b>. Inzeráty jsou zpracovávány jazykovými modely, které vytvořila společnost OpenAI, a je potřeba respektovat jejich podmínky týkající se explicitního obsahu. Pokud automatický systém moderace vyhodnotí Váš inzerát jako nevhodný, informujeme Vás o tom e-mailem, abyste ho mohli včas upravit.</p>}
                <textarea
                    value={ad.text}
                    placeholder={
                        googleToken === ""
                            ? "Než začnete psát, v kroku 1 se prosím přihlaste svým Google účtem."
                            : ad.isEditable
                                ? "Klepněte a začněte psát..."
                                : ""
                    }
                    onChange={handleAdTextChange}
                    name="adText"
                    maxLength="1300"
                    disabled={!ad.isEditable || googleToken === ""}
                />
                {ad.isEditable && googleToken !== "" && <p>{ad.text.length} / 1300</p>}
            </section>
            <section>
                <h2><b>Krok 3:</b> Přidejte kontaktní údaje</h2>
                {ad.isEditable && <p><b>Ke svému inzerátu můžete přidat další kontakty na Vás, které budeme předávat Vašim potenciálním protějškům</b>, aby si mohly vybrat, kde Vás zkontaktují. Můžete přidat například odkaz na Váš Facebook, odkaz na Instagram, telefonní číslo, apod. Můžete přidat jeden nebo více kontaktů. <b>Primární e-mailovou adresu z Vašeho Google účtu předáváme automaticky</b>, tu vyplňovat nemusíte.</p>}
                {ad.isEditable && <p><strong>Zadávejte pouze kontaktní údaje, které jsou skutečně Vaše. Nezadávejte do tohoto pole nic, co se kontaktních údajů netýká.</strong> Podobně jako text inzerátu, i tento text bude zpracovávat umělá inteligence, aby Zuzana vše mohla napsat vlastními slovy a také zkontrolovat, zda se skutečně o kontaktní údaje jedná.</p>}
                {ad.isEditable && <p>Přidání kontakntích údajů je dobrovolné. Toto pole můžete klidně nechat prázdné, pokud Vám stačí e-mailová adresa.</p>}
                <textarea
                    value={ad.contactInfo}
                    placeholder={
                        googleToken === ""
                            ? "Než začnete psát, v kroku 1 se prosím přihlaste svým Google účtem."
                            : ad.isEditable
                                ? "Klepněte a začněte psát..."
                                : ""
                    }
                    onChange={handleAdContactInfoChange}
                    name="adContactInfo"
                    maxLength="80"
                    disabled={!ad.isEditable || googleToken === ""}
                />
                {ad.isEditable && googleToken !== "" && <p>{ad.contactInfo.length} / 80</p>}
            </section>
            <section>
                <h2><b>Krok 4:</b> Zkontrolujte a odešlete inzerát</h2>
                {ad.isNew && <p><b>Po odeslání bude Váš inzerát přidán do naší databáze.</b> Pošleme Vám e-mail s potvrzením, že jsme inzerát přijali, a také s návrhy na vylepšení inzerátu. <b>Během následujících 24 hodin, kdy je inzerát neaktivní, se zde můžete kdykoli znovu přihlásit svým Google účtem a obsah inzerátu jakkoli upravit, nebo ho klidně úplně přepsat, pokud budete chtít.</b> V případě, že jste se svým inzerátem spokojeni, nemusíte už dělat nic. <b>Po 24 hodinách dojde k aktivaci inzerátu a umělá inteligence Zuzana Vám začne hledat vhodné potenciální protějšky. Pokud najde shodu, pošle Vám e-mail.</b> V době, kdy je inzerát aktivní, ho zde nebudete moct upravit, ale můžete se kdykoli přihlásit a zobrazit si ho. Po vypršení platnosti inzerátu (30 dní od jeho vytvoření) Vám Zuzana přestane hledat protějšky a informuje Vás e-mailem, že je v případě zájmu možné zadat nový inzerát.</p>}
                {ad.isNew && <p><strong>Připomínáme, že používáním seznamky nám udělujete souhlas se zpracováním osobních údajů, a to dle našich <Link to="/zasady-zpracovani-osobnich-udaju">zásad zpracování osobních údajů</Link>.</strong></p>}
                {ad.isNew && <p><strong>Pokud budete chtít inzerát smazat nebo ho upravit v době, kdy je aktivní, napište nám na <a href="mailto:aiseznamka@gmail.com">aiseznamka@gmail.com</a>, budeme se Vám věnovat.</strong></p>}
                {ad.isNew && <p><strong>Doručení kteréhokoli potvrzovacího e-mailu se může zpozdit až o 5 minut, tak prosím buďte trpěliví. Děkujeme ☺</strong></p>}
                <button onClick={handleAdSubmit} disabled={!ad.isEditable || googleToken === ""}>{ad.isNew ? "Odeslat inzerát" : "Uložit změny"}</button>
                <p><b>Děkujeme, že jste se rozhodli využít naši službu AI seznamka Zuzana, a přejeme Vám hodně štěstí při hledání Vašeho partnera nebo kamaráda! ✨</b></p>
            </section>
        </>
    )
}
