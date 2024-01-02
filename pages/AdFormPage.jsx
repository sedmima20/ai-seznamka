import React from 'react'
import { Link } from 'react-router-dom'

export default function AdFormPage() {
    return (
        <>
            <section>
                <h1>AI seznamka Zuzana - Vložení inzerátu</h1>
                <p>Formulář níže slouží pro vytvoření a odeslání Vašeho inzerátu do databáze naší seznamky. Inzerát zůstane v databázi měsíc, a během této doby ho umělá inteligence Zuzana bude testovat na kompatibilitu s ostatními inzeráty. Pokud Zuzana najde potenciální shodu, pošle Vám e-mail. Váš inzerát se k Vašim potenciálním protějškům přímo nedostane, Zuzana vše napíše vlastními slovy a nikdy nezmíní více informací, než je nutné. Po měsíci bude Váš inzerát smazán, ale pokaždé si budete moct vytvořit nový a prodloužit tak platnost o další měsíc.</p>
                <p>Hledat můžete kohokoliv - lásku na celý život, kamarádství s výhodami, jednorázovku, kamarádství,... Nebudete ztrácet čas swipováním, prohledáváním hromady různých inzerátů nebo vyplňováním zdlouhavých dotazníků a testů osobnosti. Nebudete soudit a nebudete souzeni podle fotek. Doporučujeme navštívit <Link to="/">domovskou stránku</Link> a přečíst si více informací o naší seznamce, pokud jste tak ještě neučinili.</p>
                <p><strong>Používáním seznamky nám dobrovolně udělujete souhlas se zpracováním osobních údajů za účelem zprostředkování online seznamovací služby v takové podobě, jakou na našich webových stránkách popisujeme, a to dle našich <Link to="/zasady-zpracovani-osobnich-udaju">zásad zpracování osobních údajů</Link>, které si prosím přečtěte.</strong></p>
            </section>
        </>
    )
}
