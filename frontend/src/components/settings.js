import { Button, Row, Container, Col, ListGroup, ListGroupItem, Figure } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
const SettingsConst = () => {
    const arrow = require("../assets/images/left-arrow.png");
    const buttonContents = {
        a:
            <div>
                <h2>Configurações Gerais</h2>
                <p>Bem-vindo às configurações gerais. Nesta seção, você pode personalizar aspectos gerais da sua experiência no aplicativo.</p>
                <h3>Idioma</h3>
                <p>Escolha o idioma preferido para a interface do usuário.</p>
                <h3>Notificações</h3>
                <p>Gerencie suas configurações de notificação para receber alertas e atualizações relevantes.</p>
                <h3>Modo Escuro</h3>
                <p>Ative ou desative o modo escuro para uma experiência visual mais confortável em ambientes de pouca luz.</p>
                <h3>Atualizações Automáticas</h3>
                <p>Configure as preferências de atualização automática para garantir que você tenha sempre a versão mais recente do aplicativo.</p>
                <h3>Outras Configurações</h3>
                <p>Explore outras opções de configuração disponíveis para personalizar sua experiência de uso.</p>
                <p>Adapte as configurações de acordo com suas preferências pessoais.</p>
            </div>,
        b:
            <div>
                <h2>Configurações da Conta</h2>
                <p>Bem-vindo às configurações da sua conta. Aqui você pode personalizar as preferências e informações relacionadas à sua conta.</p>
                <h3>Informações Pessoais</h3>
                <p>Atualize suas informações pessoais, como nome, classificações, etc</p>

                <h3>Preferências de Notificação</h3>
                <p>Escolha suas preferências de notificação para receber atualizações importantes e notificações personalizadas.</p>
                <h3>Privacidade e Segurança</h3>
                <p>Gerencie as configurações de privacidade e segurança da sua conta para garantir a proteção dos seus dados.</p>
                <h3>Temas e Personalização</h3>
                <p>Personalize a aparência da sua conta escolhendo temas e opções de personalização.</p>
                <p>Explore as opções disponíveis e faça as alterações conforme suas necessidades.</p>
            </div>
        ,
        c: <div>
            <h2>Segurança e Privacidade</h2>
            <p>Bem-vindo à seção de segurança e privacidade. Aqui você pode ajustar configurações importantes para garantir a proteção dos seus dados pessoais.</p>
            <h3>Senha</h3>
            <p>Atualize sua senha regularmente e certifique-se de escolher uma senha forte para proteger sua conta.</p>
            <h3>Autenticação de Dois Fatores (2FA)</h3>
            <p>Ative a autenticação de dois fatores para adicionar uma camada extra de segurança à sua conta.</p>
            <h3>Controle de Acesso</h3>
            <p>Gerencie quem pode acessar e interagir com sua conta ajustando as configurações de controle de acesso.</p>
            <h3>Privacidade de Dados</h3>
            <p>Defina suas preferências de privacidade, escolhendo quem pode ver suas informações e atividades.</p>
            <h3>Histórico de Atividades</h3>
            <p>Revise o histórico de atividades da sua conta para manter o controle sobre as ações realizadas.</p>
            <p>Personalize as configurações de segurança e privacidade de acordo com suas necessidades e conforto.</p>
        </div>,
        d: <div>
            <h2>Configurações de Dados</h2>
            <p>Bem-vindo à seção de configurações de dados. Aqui você pode gerenciar como os dados são coletados, armazenados e utilizados em sua conta.</p>
            <h3>Preferências de Coleta de Dados</h3>
            <p>Escolha suas preferências em relação à coleta de dados, decidindo quais informações deseja compartilhar.</p>
            <h3>Backup e Restauração</h3>
            <p>Configure opções de backup para garantir a segurança e disponibilidade dos seus dados. Você também pode restaurar informações quando necessário.</p>
            <h3>Exclusão de Dados</h3>
            <p>Selecione opções de exclusão de dados, permitindo que você remova informações específicas ou todo o histórico de dados, se desejar.</p>
            <h3>Transparência de Dados</h3>
            <p>Acesse relatórios e informações transparentes sobre como seus dados são utilizados para garantir uma experiência mais informada.</p>
            <p>Explore as configurações disponíveis para gerenciar seus dados de maneira eficaz e em conformidade com suas preferências.</p>
        </div>
    };

    const [content, setContent] = useState(<div><h1>Conteúdo padrão</h1></div>);

    const handleButtonClick = (buttonKey) => {
        setContent(buttonContents[buttonKey]);
    };

    return (
        <Container className="h-100 bg-light">
            <Row className="w-100 h-100 p-5 d-flex justify-content-center">

                <Col lg={4} className="">

                    <div>
                        <Link to="/" className="text-decoration-none back">
                            <Figure>

                                <Figure.Image
                                    width={25}
                                    height={25}
                                    src={arrow}
                                /> <Figure.Caption>
                                </Figure.Caption>


                            </Figure>
                            Voltar à página principal </Link>
                    </div>
                    <ListGroup>
                        <ListGroupItem>
                            <Button className="bg-transparent border-0 text-black w-100" onClick={() => handleButtonClick('a')}>
                                <Row className="d-flex align-items-center">
                                    <Col md={4} className="d-flex justify-content-end">
                                        <ion-icon name="cog-sharp"></ion-icon>
                                    </Col>
                                    <Col md={8} className="d-flex justify-content-start">
                                        Configurações gerais
                                    </Col>
                                </Row>
                            </Button>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Button className="bg-transparent border-0 text-black w-100" onClick={() => handleButtonClick('b')}>

                                <Row className="d-flex align-items-center">
                                    <Col md={4} className="d-flex justify-content-end">
                                        <ion-icon name="person-sharp"></ion-icon>
                                    </Col>
                                    <Col md={8} className="d-flex justify-content-start">
                                        Conta do usuário
                                    </Col>
                                </Row>
                            </Button>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Button className="bg-transparent border-0 text-black w-100" onClick={() => handleButtonClick('c')}>
                                <Row className="d-flex align-items-center">
                                    <Col md={4} className="d-flex justify-content-end">
                                        <ion-icon name="lock-open-sharp"></ion-icon>
                                    </Col>
                                    <Col md={8} className="d-flex justify-content-start">
                                        Segurança e Privacidade
                                    </Col>
                                </Row>
                            </Button>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Button className="bg-transparent border-0 text-black w-100" onClick={() => handleButtonClick('d')}>
                                <Row className="d-flex align-items-center">
                                    <Col md={4} className="d-flex justify-content-end">
                                        <ion-icon name="server-sharp"></ion-icon>
                                    </Col>
                                    <Col md={8} className="d-flex justify-content-start">
                                        Dados
                                    </Col>
                                </Row>
                            </Button>
                        </ListGroupItem>
                    </ListGroup>
                </Col>
                <Col lg={8} className="border">
                    <Row>
                        {content}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default SettingsConst;
