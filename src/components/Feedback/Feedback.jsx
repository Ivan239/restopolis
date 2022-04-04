import React from 'react';
import './Feedback.css';
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

    return <div className='feedback' onClick={() => props.handleCard()}>
        <div className='feedback__content' onClick={(e) => handleFeedback(e)}>
            <CloseIcon handleCard={props.handleCard} />
            <form onSubmit={handleSubmit(onSubmit)} className='feedback__form'>
                <h2 className='feedback__header'>Feedback form</h2>
                <div className='feedback__personal'>
                    <div className='feedback__inputbox'>
                        <p className='feedback__name'>Name</p>
                        <input
                            className='feedback__input'
                            placeholder='Ivan'
                            {...register("Name", { required: true })} />
                    </div>
                    <div className='feedback__inputbox'>
                        <p className='feedback__email'>E-Mail</p>
                        <input
                            type='email'
                            className='feedback__input'
                            placeholder='example@website.com'
                            {...register("Email", { required: true })} />
                    </div>
                </div>
                <div className='feedback__textareabox'>
                    <p className='feedback__text'>What should we know?</p>
                    <textarea
                        className='feedback__textarea'
                        placeholder='You are the best...'
                        {...register("Feedback", { required: true })} />
                </div>
                <input className='feedback__submit' type="submit" value='Send' />
            </form>
        </div>
    </div>;
};

export default Feedback;