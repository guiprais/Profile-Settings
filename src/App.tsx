import {
  Bell,
  CaretRight,
  Devices,
  Key,
  PersonArmsSpread,
  Question,
  SignOut,
  UserCircle,
  UserSwitch
} from '@phosphor-icons/react';

import { Container } from './styles';

function App() {
  return (
    <Container>
      <div className="titleContainer">
        img
        <div>
          <h1>Guilherme de Prais</h1>
          <p>guilherme.prais@gmail.com</p>
        </div>
      </div>

      <div className="settings">
        <hr />

        <section>
          <h2>Conta</h2>

          <div className="sectionBody">
            <div className="button">
              <div>
                <UserCircle />
                <p>Dados pessoais</p>
              </div>
              <CaretRight />
            </div>

            <div className="button">
              <div>
                <Key />
                <p>Informações de login</p>
              </div>
              <CaretRight />
            </div>
          </div>
        </section>

        <hr />

        <section>
          <h2>Preferências</h2>

          <div className="sectionBody">
            <div className="button">
              <div>
                <Bell />
                <p>Notificações</p>
              </div>
              <CaretRight />
            </div>

            <div className="button">
              <div>
                <PersonArmsSpread />
                <p>Acessibilidade</p>
              </div>
              <CaretRight />
            </div>
          </div>
        </section>

        <hr />

        <section>
          <h2>Privacidade</h2>

          <div className="sectionBody">
            <div className="button">
              <div>
                <Devices />
                <p>Aparelhos conectados</p>
              </div>
              <CaretRight />
            </div>

            <div className="button">
              <div>
                <UserSwitch />
                <p>Contas vinculadas</p>
              </div>
              <CaretRight />
            </div>
          </div>
        </section>

        <hr />

        <section>
          <div className="sectionBody">
            <div className="button">
              <div>
                <Question />
                <p>Central de Ajuda</p>
              </div>
            </div>

            <div className="exitButton">
              <div>
                <SignOut />
                <p>Sair</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
}

export default App;
