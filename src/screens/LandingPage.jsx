import React from "react"

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header>
        <h1>Módulo 7: DESARROLLO FRONTEND CON REACT JS</h1>
      </header>

      <main>
        <section className="section">
          <h2>Bienvenido</h2>
          <hr className="green-line" />
          <p>
            Este módulo se centra en el uso de <strong>React</strong>, incluyendo la creación de{" "}
            <strong>componentes</strong>, el manejo de <strong>hooks</strong> y el uso de <strong>Redux</strong>.
          </p>
        </section>

        <section className="section">
          <h2>Temas Cubiertos</h2>
          <hr className="green-line" />
          <div className="table-container">
            <table>
              <tbody>
                <tr>
                  <td>Componentes funcionales y de clase</td>
                  <td>
                    Uso de <strong>React Hooks</strong> como useState y useEffect
                  </td>
                  <td>
                    Creación de <strong>custom hooks</strong> como useForm
                  </td>
                </tr>
                <tr>
                  <td>
                    Gestión de estado global con <strong>Redux</strong> en <strong>React</strong>
                  </td>
                  <td>
                    Manejo de <strong>Formularios</strong> en <strong>React</strong>
                  </td>
                  <td>
                    Publicando nuestra <strong>Página</strong> con <strong>GitHub Pages</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="section">
          <h2>Recursos Adicionales</h2>
          <hr className="green-line" />
          <p>Para profundizar en los temas cubiertos, consulta los siguientes recursos:</p>
          <a href="https://github.com/devgador/react2025-frontend" target="_blank" rel="noopener noreferrer">
            Repositorio GitHub
          </a>
        </section>
      </main>
    </div>
  )
}

export default LandingPage

