// Styles
import { Container, Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";
import { Contacts } from "@/components/Contacts";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

import { FaGithub } from "react-icons/fa";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  UserImage,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectAreaWrapperColumns,
  ProjectsAreaContent,
} from "./style";

export const Home = (): JSX.Element => {
  const gihubUrl = `https://github.com/${userData.githubUser}`;
  const portfolioUrl = `https://github.com/${userData.githubUser}/portfolio`;
  const gitLab = `https://gitlab.com/${userData.githubUser}/api-blog/-/tree/main/`

  return (
    <main id="home">
      <Header>
        <Container>
          <HeaderContent>
            <Flex>
              <UserImage
                src={`https://github.com/${userData.githubUser}.png`}
                alt={userData.nameUser}
                title={userData.nameUser}
                width={"48px"}
                height={"48px"}
              />
              <Text color="grey4">Olá, meu nome é {userData.nameUser}</Text>
            </Flex>
            <Text as="h1" type="heading1" color="grey5">
              Venha conhecer meus projetos {" "}
              <Text as="span" type="heading1" color="brand1">
                desenvolvidos.
              </Text>{" "}
            </Text>
            <Text type="body1" color="grey2">
            Adoro assuntos relacionados a tecnologias.
            E ai? Vamos nos apresentar?
            </Text>
            <HeaderButtonsArea>
              <Button as="a" type="primary" href="#projects">
                Meus Projetos
              </Button>
              <Button as="a" type="outline" target="_blank" href={portfolioUrl}>
              Veja o code do meu portfólio
              </Button>
              <Button
                color="grey5"
                as="a"
                css={{ "&:hover": { color: "$grey1" } }}
                type="circle"
                target="_blank"
                href={gihubUrl}
              >
                <FaGithub />
              </Button>
            </HeaderButtonsArea>
            <StackCards>
              {stackData.map((stack, index) => (
                <Stack key={index} title={stack.title} icon={stack.img} />
              ))}
            </StackCards>
          </HeaderContent>
        </Container>
      </Header>
      <ProjectsArea id="projects">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey4">
                Meus Projetos
              </Text>
              <Text as="p" type="body1" color="grey2">
                Sobre mim{" "}
                <Text as="span" color="brand5">
                Hoje em formação pela Kenzie Academy Brasil, escola de formação especializada
                  em desenvolvimento fullstack, onde vivenciamos o dia-a-dia das empresas, busco
                  minha colocação na área de fullstack.
                  O que sua empresa irá ganhar com minha contratação? 
                  Bom, veja alguns dos projetos que já tive participação logo abaixo, 
                  com espirito de equipe e que agregará novas ideias e serviço.
                Venha conhecer um de meus projetos paralelos:
                <Button as="a" type="outline" target="_blank" href={gitLab}>
                  Projeto em gitLab
                </Button>
                </Text>
              </Text>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
      <Contacts />
    </main>
  );
};
