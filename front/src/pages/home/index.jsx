import { Nav, NavItem, NavLink } from "reactstrap";
import { useState } from "react";
import { PautaScreen } from "../../components/pauta";
import { Disciplina } from "../../components/discipline";
import { Students } from "../../components/student";

import * as S from "./styles";

export const HomePage = () => {
  const tabs = ["Pauta", "Disciplina", "Aluno"];

  const [tab, setTab] = useState(0);

  return (
    <S.Container className="containerP">
      <b className="mb-4">MINI-PAUTA</b>
      <S.Body className="main">
        <Nav tabs className="mb-4">
          {tabs.map((text, index) => (
            <NavItem>
              <NavLink
                onClick={(e) => {
                  e.preventDefault();

                  setTab(index);
                }}
                active={index == tab}
                className="nav-item"
              >
                {text}
              </NavLink>
            </NavItem>
          ))}
        </Nav>
        {tab == 0 && <PautaScreen />}
        {tab == 1 && <Disciplina />}
        {tab == 2 && <Students />}
      </S.Body>
    </S.Container>
  );
};
