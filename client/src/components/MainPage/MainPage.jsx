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

    return (
        <>
            <section className={styles.content}>
                <div className={styles.search_block}>
                    <input type="text" />
                    <img src={Search_ico} alt="" />
                </div>
                <div className={styles.card_space}>
                    <Button onClick={() => setOpen(true)}>
                        <Card />
                    </Button>
                    

                </div>
            </section>
            <Modal open={open} onClose={() => setOpen(false)}>
                <div className={styles.modal_background}>
                    
                </div>
                <div className={styles.modal}>
                    <div className={styles.top_bar_modal}>
                        <h2>Евгения Савченко</h2>
                        <Button onClick={() => setOpen(false)}>
                            <img src={Close_ico} />
                        </Button>
                    </div>
                    <div className={styles.main_info_block}>
                        <div className={styles.text_content}>
                            <span className={styles.fixed_txt}>Телефон:</span>
                            <span className={styles.fixed_txt}>Почта:</span>
                            <span className={styles.fixed_txt}>Дата приема:</span>
                            <span className={styles.fixed_txt}>Должность:</span>
                            <span className={styles.fixed_txt}>Подразделение:</span>
                        </div>
                        <div className={styles.text_content}>
                            <span className={styles.changeabled_txt}>+7 (918) 078-17-05</span>
                            <span className={styles.changeabled_txt}>yysavch1@mts.ru</span>
                            <span className={styles.changeabled_txt}>15.10.2020</span>
                            <span className={styles.changeabled_txt}>Дизайнер</span>
                            <span className={styles.changeabled_txt}>Трайб автоматизированных систем контактных центров</span>
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