import { useState } from "react";
import { registerUser } from '../../api.js';
import Header from '../../components/Header/Header.jsx';

export default function Register() {
    const [formData, setFormData] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
    });
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const res = await registerUser(formData);
            const data = await res.json();

            if (!res.ok) {
                setMessage(data.detail || "Ошибка регистрации");
            } else {
                setMessage(`Пользователь ${data.name} (@${data.username}) успешно зарегистрирован!`);
                setFormData({name: "", username: "", email: "", password: "", });
            }
        } catch (error) {
            console.log(`Register error: ${error}`);
            setMessage("Ошибка подключения к серверу");
        }
    }

    return (
        <>
            <Header active="main" />

            <div itemID="register_container">
                <h2>Регистрация</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Имя"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="username"
                        placeholder="Логин"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Пароль"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Зарегистрироваться</button>
                </form>
                {message && <p>{message}</p>}
            </div>
        </>

    );
}