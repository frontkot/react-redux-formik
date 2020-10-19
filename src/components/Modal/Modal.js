import React from 'react';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import ActionIcon from '../ActionIcon/ActionIcon';
import { useSelector, useDispatch } from 'react-redux';
import { checkIsOpen, getModalId } from '../../store/modal/selectors';
import { openModal } from '../../store/modal/operations';
import './Modal.scss';

const Modal = ({
    header, text
}) => {
    const isModalOpen = useSelector(checkIsOpen);
    const dispatch = useDispatch();
    const modalId = useSelector(getModalId);
    
    const openModalWindow = () => {
        dispatch(openModal(!isModalOpen))
    }
    
    const handleClick = (e, className) => {
        if(e.target.className === className){
            e.preventDefault()
            openModalWindow()
        }
    }

    return (
        <div className='modal'>
            {isModalOpen &&
                <div className='modal-window' 
                    onClick={(e) => handleClick(e, 'modal-window')}
                >
                    <div className='modal-block'>
                        <div className='modal-header'>
                            <h3>{header}
                            <ActionIcon 
                                className='icon modal-closing'
                                type='cross'
                                onClick={openModalWindow}
                                color='#ffff' 
                            />
                            </h3>
                        </div>
                        <div className='modal-content'>
                            <p className='modal-text'>
                                {text}
                            </p>
                            <div className='modal-footer'>
                                <Button className='modal-button'
                                        id={modalId}
                                >
                                    Ok
                                </Button>
                                <Button className='modal-button'
                                >
                                    Cancel
                                </Button>
                            </div>
                        </div>
                    </div>
                </div> 
            }       
        </div>
    );
}

export default Modal;

Modal.propTypes = {
    text: PropTypes.string,
    header: PropTypes.string
};

Modal.defaultProps = {
    text: 'Some text',
    header: 'This is header'
};