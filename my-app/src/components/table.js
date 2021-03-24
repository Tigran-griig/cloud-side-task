export const columns = [

    {
        title: 'Название',
        dataIndex: 'name',
        sorter: {
            compare: (a, b) => {
                if(a.name === +a.name){
                    return a.name - b.name
                }else{

                    return ('' + a.name).localeCompare(b.name)
                }
            },
            multiple: 1,
        },
    },
    {
        title: 'Эл. адрес',
        dataIndex: 'email',
        sorter: {
            compare: (a, b) => {
                if(a.email === +a.email){
                    return a.email - b.email
                }else{

                    return ('' + a.email).localeCompare(b.email)
                }
            },
            multiple: 2,
        },
    },
    {
        title: 'Телефон',
        dataIndex: 'phone',
        sorter: {
            compare: (a, b) => {
                if(a.phone === +a.phone){
                    return a.phone - b.phone
                }else{

                    return ('' + a.phone).localeCompare(b.phone)
                }
            },
            multiple:3,
        },
    },
    {
        title: 'Страна',
        dataIndex: 'country',
        sorter: {
            compare: (a, b) => {
                if(a.country === +a.country){
                    return a.country - b.country
                }else{

                    return ('' + a.country).localeCompare(b.country)
                }
            },
            multiple:4,
        },
    },



    {
        title: 'Дествия',
        dataIndex: 'actions',
    },
];