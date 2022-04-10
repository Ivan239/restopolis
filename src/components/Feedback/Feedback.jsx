import React from 'react';
import styles from './Feedback.module.css';
import CloseIcon from '../CloseIcon/CloseIcon';
import { useForm } from 'react-hook-form'
import { getDatabase, ref, set } from "firebase/database";
import newId from '../newId';

const Feedback = (props) => {

    const handleFeedback = (e) => {
        e.stopPropagation();
    }
    const {
        register,
        handleSubmit,
        reset,
    } = useForm();
    const database = getDatabase();
    const onSubmit = (data) => {
        set(ref(database, `feedbacks/${newId()}`), data);
        reset()
        props.handleCard()
    };

    return <div className={styles.feedback} onClick={() => props.handleCard()}>
        <div className={styles.content} onClick={(e) => handleFeedback(e)}>
            <CloseIcon handleCard={props.handleCard} />
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <h2 className={styles.header}>Feedback form</h2>
                <div className={styles.personal}>
                    <div className={styles.inputbox}>
                        <p className={styles.name}>Name</p>
                        <input
                            className={styles.input}
                            placeholder='Ivan'
                            {...register("Name", { required: true })} />
                    </div>
                    <div className={styles.inputbox}>
                        <p className={styles.email}>E-Mail</p>
                        <input
                            type='email'
                            className={styles.input}
                            placeholder='example@website.com'
                            {...register("Email", { required: true })} />
                    </div>
                </div>
                <div className={styles.textareabox}>
                    <p className={styles.text}>What should we know?</p>
                    <textarea
                        className={styles.textarea}
                        placeholder='You are the best...'
                        {...register("Feedback", { required: true })} />
                </div>
                <input className={styles.submit} type="submit" value='Send' />
            </form>
        </div>
    </div>;
};

export default Feedback;