import React, { useContext, useState } from 'react';
import cl from '../../components/login/Login.module.css';
import companyLogo from '../../static/imgs/oggetto-logo_tonal-hor-eng_tonal-hor-eng.png';
import { observer } from "mobx-react-lite";
import { Context } from "../../index";
import { Link } from "react-router-dom";
import OgButton from "../UI/ogButton/OgButton";
import OgInput from "../UI/ogInput/OgInput";
import { changeHandler } from '../../utils/changeHandler';


const Register = () => {
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [hasError, setHasError] = useState({
        username: false,
        name: false,
        password: false,
        passwordConfirmation: false
    });

    const { store } = useContext(Context);

    const isFormInvalid = Object.values(hasError).some((error) => error);

    const submit = (event) => {
        event.preventDefault();
        if (!isFormInvalid) {
            store.registration(username, name, password, passwordConfirmation);
        }
    };

    return (
        <div className={cl.login__container}>
            <img className={cl.form__image} src={companyLogo} alt='logo' />
            <form className={cl.my_form} onSubmit={submit}>
                <OgInput
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={(event) => changeHandler(event, setName, setHasError)}
                    placeholder="Имя"
                    style={{ borderColor: hasError.name ? "red" : null }}
                />
                <OgInput
                    type="text"
                    name="username"
                    id="username"
                    value={username}
                    onChange={(event) => changeHandler(event, setUsername, setHasError)}
                    placeholder="Логин"
                    style={{ borderColor: hasError.username ? "red" : null }}
                />
                <OgInput
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(event) => changeHandler(event, setPassword, setHasError)}
                    placeholder="Пароль"
                    style={{ borderColor: hasError.password ? "red" : null }}
                />
                <OgInput
                    type="password"
                    name="passwordConfirmation"
                    id="passwordConfirmation"
                    value={passwordConfirmation}
                    onChange={(event) => changeHandler(event, setPasswordConfirmation, setHasError)}
                    placeholder="Подтверждение пароля"
                    style={{ borderColor: hasError.passwordConfirmation ? "red" : null }}
                />
                <div className={cl.form__btns__container}>
                    <OgButton type="submit" disabled={isFormInvalid}>
                        Зарегистрироваться
                    </OgButton>
                </div>
            </form>
            <hr style={{ margin: "15px 0", inlineSize: "27%" }} />
            <div>
                <p>Уже есть аккаунт? <Link to="/login"
                                           className={cl.links}>
                    Войти</Link></p>
            </div>
        </div>
    );
};

export default observer(Register);