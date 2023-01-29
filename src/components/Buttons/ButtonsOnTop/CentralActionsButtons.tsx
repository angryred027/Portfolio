import { BsSearch } from "react-icons/bs";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { cardTexts } from "src/Consts";
import { cardData } from "src/Data";
import { IProject } from "src/Interfaces";
import { useAppSelector } from "src/redux/app/hooks";
import { actualLanguage } from "src/redux/features/languageSlice";
import { colors } from "src/styles/theme";
import { getTextByLang } from "src/utils/getTextByLang";
import styled from "styled-components";

const CentralActionsButtonsStyle = styled.section`
  position: fixed;
  width: 100%;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  margin: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 20px;
  flex-wrap: wrap;
  flex-direction: row;
  z-index: 100;
  .search {
    background-color: ${colors.black};
    color: ${colors.white};
    padding: 10px 20px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    gap: 10px;
    text-decoration: none;
    transition: 0.3s;
    svg {
      color: ${colors.white};
      fill: white;
    }
  }
`;
const CentralActionsButtons = () => {
  const params = useParams<{ path: string }>();
  const cardPath: string = params.path || "";
  const { language: lang } = useAppSelector(actualLanguage);
  if (!cardPath) return null;

  const project: IProject | undefined = cardData.find(
    (project) => project.path === cardPath
  );
  if (!project) return null;

  const text = getTextByLang(lang, cardTexts);

  const ids = cardData.map((project) => project.id);
  const actualID = ids.indexOf(project.id);
  //da la posición de la carta actual en el array ids
  const prevID = actualID - 1 < 0 ? ids[ids.length - 1] : ids[actualID - 1];
  const nextID = actualID + 1 > ids.length - 1 ? ids[0] : ids[actualID + 1];
  const prevPath = cardData?.find((project) => project.id === prevID)?.path;
  const nextPath = cardData?.find((project) => project.id === nextID)?.path;

  return (
    <>
      <CentralActionsButtonsStyle>
        <Link to={`/${prevPath}`} className="changeProjectLink">
          <FaArrowLeft size={25} />
        </Link>
        <a className="search" href={project.link} target="_blank">
          {text.linkButton}
          <BsSearch color={colors.white} />
        </a>
        <Link to={`/${nextPath}`} className="changeProjectLink">
          <FaArrowRight size={25} />
        </Link>
      </CentralActionsButtonsStyle>
    </>
  );
};

export default CentralActionsButtons;
