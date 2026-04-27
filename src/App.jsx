import { BrowserRouter as Browser, Routes, Route } from "react-router-dom";
function App() {

  return (
    <>
      <Card
        imagem="/capa.jpg"
        titulo="Pixel Quest: Lost Kingdom"
        preco="R$ 79,90"
        precoOriginal="R$ 159,90"
        desconto="−50%"
        review="5,0 · 1.2k"
        adicionarCarrinho={() => console.log('add')}
      />
    </>
  )
}

export default App
