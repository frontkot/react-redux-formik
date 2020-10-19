import React from 'react';
import { Formik } from 'formik';
import { validate } from './ValidatePurchaseForm'
import { useSelector, useDispatch } from 'react-redux';
import { getProductsInCart } from '../../store/cart/selectors';
import { getPurchaseValues, checkIsOpenForm } from '../../store/purchaseForm/selectors';
import { openFormWindow } from '../../store/purchaseForm/operations'
import './PurchaseForm.scss';
import { deleteAllProductsFromCart } from '../../store/cart/operations';
import ActionIcon from '../ActionIcon/ActionIcon'
import { confirmOrder } from '../../store/purchaseForm/operations';
import { useHistory } from 'react-router-dom';

const PurchaseFrom = () => {
    const dispatch = useDispatch();
    const initialValues = useSelector(getPurchaseValues);
    const productsInCart = useSelector(getProductsInCart);
    const isFormOpen = useSelector(checkIsOpenForm);
    const history = useHistory()

    const openForm = () => {
        dispatch(openFormWindow(!isFormOpen));
    }

    const submitForm = (info) => {
        dispatch(confirmOrder({productsInOrder: productsInCart, custiomerInfo: info}))
        dispatch(deleteAllProductsFromCart());
        openForm()
        alert('Thank you for using the services of our company')
        history.push('/')
    }
    const handleClick = (e, className) => {
        if(e.target.className === className){
            e.preventDefault()
            openForm()
        }
    }


    return (
        <Formik 
            initialValues={initialValues}
            validate={validate}
            onSubmit={( values ) => {
                submitForm(values)
            }
            }
        >
            {formik => (
                <div className='form-window'
                    onClick={(e) => handleClick(e, 'form-window')}
                >
                    <div className='container'>
                        <div className='form-block'>
                            <h3 className='form-header'>
                                Order form
                                <ActionIcon
                                    className='icon form-closing'
                                    type='cross'
                                    onClick={() => openForm()}
                                    color='#000000' 
                                />
                            </h3>
                            <form onSubmit={formik.handleSubmit} className='form-content'>
                                <label htmlFor='firstName'>
                                    First Name
                                    {formik.touched.firstName && formik.errors.firstName ? <span className='form-error'>{formik.errors.firstName}</span> : null}
                                </label>
                                <input
                                    className={formik.touched.firstName && formik.errors.firstName ? 'form-error_warning' : ''}
                                    id='firstName'
                                    name='firstName'
                                    type='text'
                                    {...formik.getFieldProps('firstName')}
                                />
                                <label htmlFor='lastName'
                                    >Last Name
                                    {formik.touched.lastName && formik.errors.lastName ? <span className='form-error'>{formik.errors.lastName}</span> : null}
                                </label>
                                <input
                                    className={formik.touched.lastName && formik.errors.lastName ? 'form-error_warning' : ''}
                                    id='lastName'
                                    name='lastName'
                                    type='text'
                                    {...formik.getFieldProps('lastName')}
                                />
                                <label htmlFor='age'>
                                    Age
                                    {formik.touched.age && formik.errors.age ? <span className='form-error'>{formik.errors.age}</span> : null}
                                </label>
                                <input
                                    className={formik.touched.age && formik.errors.age ? 'form-error_warning' : ''}
                                    id='age'
                                    name='age'
                                    type='number'
                                    {...formik.getFieldProps('age')}
                                />
                                <label htmlFor='deliveryAdress'>
                                    Delivery Address
                                    {formik.touched.deliveryAdress && formik.errors.deliveryAdress ? <span className='form-error'>{formik.errors.deliveryAdress}</span> : null}
                                </label>
                                <input
                                    className={formik.touched.deliveryAdress && formik.errors.deliveryAdress ? 'form-error_warning' : ''}
                                    id='deliveryAdress'
                                    name='deliveryAdress'
                                    type='text'
                                    {...formik.getFieldProps('deliveryAdress')}
                                />
                                <label htmlFor='mobileNumber'>
                                    Mobile Number
                                    {formik.touched.mobileNumber && formik.errors.mobileNumber ? <span className='form-error'>{formik.errors.mobileNumber}</span> : null}
                                </label>
                                <input
                                    className={formik.touched.mobileNumber && formik.errors.mobileNumber ? 'form-error_warning' : ''}
                                    id='mobileNumber'
                                    name='mobileNumber'
                                    type='tel'
                                    {...formik.getFieldProps('mobileNumber')}
                                />
                                <label htmlFor='dateOfDelivery'>
                                    Date of Delivery
                                    {formik.touched.dateOfDelivery && formik.errors.dateOfDelivery ? <span className='form-error'>{formik.errors.dateOfDelivery}</span> : null}
                                    </label>
                                <input
                                    className={formik.touched.dateOfDelivery && formik.errors.dateOfDelivery ? 'form-error_warning' : ''}
                                    id='dateOfDelivery'
                                    name='dateOfDelivery'
                                    type='date'
                                    {...formik.getFieldProps('dateOfDelivery')}
                                />
                                <label htmlFor='callAfterPlacingOrder' className='form-call_after'>
                                    Call back before shipping?
                                    <input
                                        id='callAfterPlacingOrder'
                                        name='callAfterPlacingOrder'
                                        type='checkbox'
                                        {...formik.getFieldProps('callAfterPlacingOrder')}
                                    />
                                </label>
                                <button 
                                    type='submit' 
                                    className={Object.keys(formik.errors).length === 0 && formik.values.firstName.length !== 0 ? 'form-button' : 'form-button form-button_disabled'} 
                                    disabled={Object.keys(formik.errors).length !== 0 || formik.values.firstName.length === 0}
                                >
                                    Confirm
                                </button>
                                {Object.keys(formik.errors).length === 0 && formik.values.firstName.length !== 0 ? null : <p className='form-info_massage'>* Fill in all the input fields</p>}
                            </form>
                        </div>
                    </div>
                </div>
            )}
            </Formik>

    );
};

export default PurchaseFrom;