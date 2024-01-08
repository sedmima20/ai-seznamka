import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function AdInsertedPage() {
    const navigate = useNavigate()

    function handleClick() {
        navigate('/vlozit-inzerat')
    }

    return (
        <>
            <section>
                <h1>AI seznamka Zuzana - Vložení inzerátu</h1>
                <div className="ok-message-box">Inzerát byl úspěšně odeslán! Do 24 hodin od jeho odeslání ho můžete libovolně upravovat. Poté se tato možnost zamkne a inzerát bude zaktivován. Děkujeme, že jste se rozhodli využít naši službu AI seznamka Zuzana! ✨</div>
                <button onClick={handleClick}>Upravit inzerát</button>
            </section>
        </>
    )
}
