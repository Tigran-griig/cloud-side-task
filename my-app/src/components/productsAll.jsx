import React, { useState,useEffect } from 'react';
import './products.scss'
import { MdModeEdit } from "react-icons/md"
import {Button,Tooltip, Input,Form, Select, Table,Modal} from "antd";
import {columns} from './table'
import useWindowSize from "../utils/myHooks/windowSize";
import {connect} from "react-redux";
import {countryActions, productsActions} from "../redux/actions";
const { Option } = Select;




const ProductsAll = ({
                         country,
                         fetchCountryData,
                         products,
                         fetchProductsData,
                         addProducts,
                         deleteItemDatabase,
                         updateItemDatabase
                     }) => {
    const [data,setData] = useState([])
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();
    const [width] = useWindowSize()
    const [activeId,setActiveId] = useState(null)
     useEffect(()=>{
        fetchCountryData()
        fetchProductsData()
    },[])

    const activeProductId = (id) => {
          const node = products.find(item => item.id === id)
          setActiveId(id)
           showModal()
        form.setFieldsValue({
            name: node.name,
            email: node.email,
            phone: node.phone,
            country: node.country,
            city: node.city,
        })
    }
     const deleteItem = () =>{
        if(activeId){
            deleteItemDatabase(activeId)
            handleCancel()
        }
     }
    const editItem = () =>{
        if(activeId){
            const posData = form.getFieldsValue()
          updateItemDatabase(activeId,posData)
            handleCancel()
        }
    }
    useEffect(()=> {
    if(products?.length){
        setData(products?.map(item =>{
            return {
                key: item?.id,
                name: item?.name,
                email: item?.email,
                phone: '+' + item?.phone,
                country: item?.country,
                actions: <Tooltip placement="top" title={'Edit and Delete'}>
                    <Button style={{border: '0', background: 'transparent'}} onClick={()=>activeProductId(item.id)}><MdModeEdit
                        className={'actions--icons__item__icon'}/></Button>
                </Tooltip>
            }

        }))

}

},[products])
    const onSearchProducts = (event)=>{
            if(event.target.value){
                setData(data.filter(it => {
                        const key = Object.keys(it)
                        for (let i = 0; i < key.length; i++) {
                            if (typeof it[key[i]] === "string" && it[key[i]]?.toLowerCase().indexOf(event.target.value?.toLowerCase()) >= 0) {
                                return true
                            }
                        }
                    })
                )
            }else{
                setData(products?.map(item =>{
                    return {
                        key: item?.id,
                        name: item?.name,
                        email: item?.email,
                        phone: '+' + item?.phone,
                        country: item?.country,
                        actions: <Tooltip placement="top" title={'Edit and Delete'}>
                            <Button style={{border: '0', background: 'transparent'}} onClick={()=>activeProductId(item.id)}><MdModeEdit
                                className={'actions--icons__item__icon'}/></Button>
                        </Tooltip>
                    }

                }))
            }
    }


    const onFinish = (values) => {

        addProducts(values)
        handleCancel()
        form.setFieldsValue({
            name: '',
            email: '',
            phone: '',
            country: null,
            city: null,
        })

    }
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        setActiveId(null)

form.setFieldsValue({
    name: '',
    email: '',
    phone: '',
    country: null,
    city: null,
})
    };



    return (
        <div className={"products-all"}>
            <h1 className={'products-all__title'} >Test project firebase </h1>
            <div className={'products-all__search'}>
                <div className={'products-all__search__block'}><p className={'products-all__search__block__title'}>Products title</p></div>
                <div className={'products-all__search__block'}>
                    <Input placeholder="search with your favorite name"
                           onChange={onSearchProducts}
                           style={width>800?{minWidth:300}:{}}
                    />
                </div>
                <div className={'products-all__search__block'}>

                    <Button  className={'products-all__search__block__btn'}  onClick={showModal}>Add product</Button>
                </div>

            </div>

            <Table columns={columns} dataSource={data} />
            <Modal width={600} title={activeId?"Edit and Delete":"Add product"} onCancel={handleCancel} visible={isModalVisible} footer={[null,null]}  >
                <Form className={'form-product-add'}
                      onFinish={onFinish}
                      form={form}
                      initialValues={{ remember: true }} style={{padding:"5px 20px"}}>
                    <Form.Item
                        style={width>900?{ width: '49%' }:{width: '100%'}}

                        name="name"

                        rules={[
                            {
                                required: true,
                                message: 'Please input your name!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input

                            placeholder="name"
                            type={'text'}
                            name="name"

                        />
                    </Form.Item>
                        <Form.Item
                            style={width>900?{ width: '50%' }:{width: '100%'}}

                            name="email"

                            rules={[
                                {
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                },
                                {
                                    required: true,
                                    message: 'Please input your E-mail!',
                                },
                            ]}
                            hasFeedback
                        >
                            <Input

                                placeholder="email"
                                type={'text'}
                                name="email"

                            />
                    </Form.Item>
                    <Form.Item
                        style={width>900?{ width: '49%' }:{width: '100%'}}

                        name="phone"

                        rules={[
                            {
                                required: true,
                                message: 'Please input your phone!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input

                            placeholder="Количество"
                            type={'number'}
                            name="phone"

                        />
                    </Form.Item>

                    <Form.Item
                        style={width>900?{ width: '49%' }:{width: '100%'}}

                        name="country"
                        rules={[
                            {
                                required: true,
                                message: 'Please select your Country!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Select
                            placeholder="Country"

                        >
                            { country?.map(it=> {
                                return <Option key={it.population} value={it.name}>{it.name}</Option>
                            })}

                        </Select>
                    </Form.Item>


                    <div style={{marginTop:'25px',marginLeft:"auto",marginRight:'auto'}} >
                        <Button style={{color:'#120045',margin:'0 10px'}} onClick={handleCancel}>Cancel</Button>
                        {!activeId ?  <Button  style={{color:'#4caf50',margin:'0 10px'}}  htmlType="submit" >Save</Button>:<></>}
                        {activeId?<Button  style={{color:'#BB5A2B',margin:'0 10px'}}   onClick={editItem}>Edit</Button>:<></>}
                        {activeId?<Button  style={{color:'#F70C00'}}   onClick={deleteItem} >Delete</Button>:<></>}
                    </div>
                </Form>
            </Modal>
        </div>
    );
};

export default connect(({country,products})=>({
    country:country?.country,
    products:products?.products
}),{...countryActions,...productsActions})(ProductsAll);



