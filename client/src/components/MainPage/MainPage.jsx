import React from "react";
import {Button, Modal} from '@gravity-ui/uikit';
import styles from "./MainPage.module.css"


// Components
import Card from "../Card/Card";

//images
import Search_ico from "./Assets/Search_ico.svg"
import Close_ico from "./Assets/Close_ico.svg"




const MainPage = () => {

    const [open, setOpen] = React.useState(false);
    const [users, setUsers] = React.useState([]);
    const [searchTerm, setSearchTerm] = React.useState('');
    const [userInfo, setUserInfo] = React.useState([])

    const activeCard = (user) => {
        setOpen(true)
        setUserInfo(user);
        console.log(userInfo)
    }

    // Function to fetch user data from the server
    const fetchUsers = async () => {
        try {
        const response = await fetch(`http://localhost:3001/?term=${searchTerm}`);
        const data = await response.json();
        setUsers(data);
        } catch (error) {
        console.error('Error fetching user data:', error);
        }
    };

    // Load user data initially
    React.useEffect(() => {
        fetchUsers();
    }, [searchTerm]);

    return (
        <>
            <div className={styles.content}>
                <div className={styles.search_block}>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className={styles.input}
                    />
                    <img src={Search_ico} onClick={fetchUsers} />
                </div>
                <div className={styles.card_space}>
                    {users.map((user, index) => (
                        <Button className={styles.card} key={index} onClick={() => activeCard([user.name, user.phone, user.email, user.hire_date, user.position_name, user.department])}>
                            <Card 
                                name={user.name}
                                phone={user.phone}
                                email={user.email}
                            />
                        </Button>
                    ))}

                </div>
            </div>
            <Modal open={open} onClose={() => setOpen(false)}>
                <div className={styles.modal_background}>
                    
                </div>
                <div className={styles.modal}>
                    <div className={styles.top_bar_modal}>
                        <h2>{userInfo[0]}</h2>
                        <Button onClick={() => setOpen(false)}>
                            <img src={Close_ico} />
                        </Button>
                    </div>
                    <div className={styles.main_info_block}>
                        <div className={styles.text_block}>
                            <div className={styles.fix_text}>
                                <span className={styles.fixed_txt}>Телефон:</span>
                            </div>
                            <div className={styles.change_text}>
                                <div className={styles.changeabled_txt}>
                                    {userInfo[1]}
                                </div>
                            </div>
                        </div>

                        <div className={styles.text_block}>
                            <div className={styles.fix_text}>
                                <span className={styles.fixed_txt}>Почта:</span>
                            </div>
                            <div className={styles.change_text}>
                                <div className={styles.changeabled_txt}>
                                    {userInfo[2]}
                                </div>
                            </div>
                        </div>

                        <div className={styles.text_block}>
                            <div className={styles.fix_text}>
                                <span className={styles.fixed_txt}>Дата приема:</span>
                            </div>
                            <div className={styles.change_text}>
                                <div className={styles.changeabled_txt}>
                                    {userInfo[3]}
                                </div>
                            </div>
                        </div>

                        <div className={styles.text_block}>
                            <div className={styles.fix_text}>
                                <span className={styles.fixed_txt}>Должность:</span>
                            </div>
                            <div className={styles.change_text}>
                                <div className={styles.changeabled_txt}>
                                    {userInfo[4]}
                                </div>
                            </div>
                        </div>
                       
                        <div className={styles.text_block}>
                            <div className={styles.fix_text}>
                                <span className={styles.fixed_txt}>Подразделение:</span>
                            </div>
                            <div className={styles.change_text}>
                                <div className={styles.changeabled_txt}>
                                    {userInfo[5]}
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={styles.additional_info_block}>
                        <span className={styles.title_text_additional}>Дополнительная информация:</span>
                        <p className={styles.additional_text}>
                            Разработчики используют текст в качестве заполнителя макта страницы. Разработчики используют текст в качестве заполнителя макта страницы.
                        </p>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default MainPage;