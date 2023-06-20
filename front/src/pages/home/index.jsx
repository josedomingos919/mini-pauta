import {
  Card,
  Table,
  Input,
  Button,
  CardHeader,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { useState } from "react";

import Select from "react-select";

import * as S from "./styles";
import { Pauta } from "../../components/pauta";
import { Disciplina } from "../../components/discipline";
import { Students } from "../../components/student";

export const HomePage = () => {
  const tabs = ["Pauta", "Disciplina", "Aluno"];

  const [tab, setTab] = useState(0);

  return (
    <S.Container>
      <b className="mb-4">Mini-Pauta</b>
      <S.Body>
        <Nav tabs className="mb-4">
          {tabs.map((text, index) => (
            <NavItem>
              <NavLink
                onClick={(e) => {
                  e.preventDefault();

                  setTab(index);
                }}
                active={index == tab}
              >
                {text}
              </NavLink>
            </NavItem>
          ))}
        </Nav>
        {tab == 0 && <Pauta />}
        {tab == 1 && <Disciplina />}
        {tab == 2 && <Students />}
      </S.Body>
    </S.Container>
  );
};
