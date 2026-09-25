import './side-bar-aposta.css'



export function SideBarAposta() {
    return (
        <div className='div-side-bar-aposta'>
            <h3>Seu saldo: 1000</h3>

            <form>
                <div className='campo-form-aposta'>
                    <h4>Apostar No</h4>
                             
                    <label htmlFor="blue" className='label-opcao'>Azul</label>
                    <input type="radio" name='opcao' id='blue' value='blue' className='input-opcao' />

                    <label htmlFor="red" className='label-opcao'>Vermelho</label>
                    <input type="radio" name='opcao' id='red' value='red' className='input-opcao' />
                </div>
            </form>
        </div>
    )
}