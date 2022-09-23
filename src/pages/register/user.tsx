import Head from "next/head";
import styles from "../../styles/register/user.module.css";
import { Input } from '../../components/form/input/Input';
import { SelectBox } from "devextreme-react";

const user = () => {
    const title = 'Cadastro';

    return (
        <div className="mainContainer">
            <Head>
                <title>{title}</title>
            </Head>
            <section className={styles.formSection}>

                <form className={styles.form}>
                    <div className="row">
                        <Input text={'Primeiro Nome'} fieldName={'firstName'} placeholder={'José'} />
                        <Input text={'Nome do Meio'} fieldName={'middleName'} placeholder={'Mendes'} />
                    </div>

                    <div className="row">
                        <Input text={'Último nome'} fieldName={'lastName'} placeholder={'Silva'} />
                        <Input text={'Telefone'} fieldName={'phone'} placeholder={'(11) 9 1234-1234'} />
                    </div>

                    <div className="row">
                        <Input text={'CPF'} fieldName={'cpf'} placeholder={'000.000.000-00'} />
                        <div className="col-md">
                            <SelectBox id="gender"
                                dataSource={[{ Id:1, Nome: 'Australia' },{ Id:2, Nome: 'Jamaica' }, { Id:1, Nome: 'Brasil' }]}
                                displayExpr="Nome"
                                valueExpr="Id"
                                placeholder="Selecione o Gênero"
                                />
                        </div>
                    </div>

                    <div className="row">
                        <Input text={'E-mail'} fieldName={'email'} placeholder={'example@example.com'}/>                       
                        <Input text={'Login'} fieldName={'login'} placeholder={'janna_fadinha'}/>                       
                    </div>

                    <div className="row">
                        <Input text={'Senha'} fieldName={'password'} placeholder={'********'}/>                       
                        <Input text={'Confirme a Senha'} fieldName={'confirmPassword'} placeholder={'********'}/> 
                    </div>

                    <div className="row">
                        <div className="col-md">
                            <SelectBox id="country"
                                dataSource={[{ Id:1, Nome: 'Australia' },{ Id:2, Nome: 'Jamaica' }, { Id:1, Nome: 'Brasil' }]}
                                displayExpr="Nome"
                                valueExpr="Id"
                                placeholder="Selecione o Pais"
                                />
                        </div>
                        <div className="col-md">
                            <SelectBox id="estate"
                                dataSource={[{ Id:1, Nome: 'Australia' },{ Id:2, Nome: 'Jamaica' }, { Id:1, Nome: 'Brasil' }]}
                                displayExpr="Nome"
                                valueExpr="Id"
                                placeholder="Selecione o Estado"
                                />
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-md">
                            <SelectBox id="city"
                                dataSource={[{ Id:1, Nome: 'Australia' },{ Id:2, Nome: 'Jamaica' }, { Id:1, Nome: 'Brasil' }]}
                                displayExpr="Nome"
                                valueExpr="Id"
                                placeholder="Selecione a Cidade"
                                />
                        </div>
                        <Input text={'Rua/Avenida'} fieldName={'street'} placeholder={'Av. Brasil'}/>                       
                    </div>

                    <div className="row">
                        <Input text={'Nº'} type={"number"} fieldName={'houseNumber'} placeholder={'255'}/> 
                        <Input text={'Complemento'} fieldName={'houseComplement'} placeholder={'Bl A Apto 12'}/> 
                    </div>

                </form>

            </section>
        </div>
    );
};

export default user;