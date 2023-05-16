import React, { useState } from 'react'
import { useEffect } from 'react'
import { Table, Button } from 'antd';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { getAllProducts,deleteProductByID } from '../../../api/requests'

function Employe() {
    const [filteredInfo, setFilteredInfo] = useState({});
    const [products,setProducts]=useState([])
    const [sortedInfo, setSortedInfo] = useState({});
    const [basket, setBasket] = useState([]);

    useEffect(()=>{
        getAllProducts()
        .then(data=>{
            setProducts(data)

        })
    },[])
    const handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        setFilteredInfo(filters);
        setSortedInfo(sorter);
      };
      const columns = [
        {
          title: 'ID',
          dataIndex: "id",
          key: "id",
    
          filteredValue: filteredInfo.name || null,
          onFilter: (value, record) => record.id.includes(value),
      
          sortOrder: sortedInfo.columnKey === "id"? sortedInfo.order : null,
          ellipsis: true,
        },
        {
            title: 'Image',
            dataIndex: "url",
            key: "url",
      
           render:url =><img alt={url} src={url} style={{width:"150px", height:"150px"}}/>,
        
            
            ellipsis: true,
          },
     
        {
          title: 'Name',
          dataIndex: "name",
          key: "name",
       
          filteredValue: filteredInfo.address || null,
          onFilter: (value, record) => record.name.includes(value),
          sorter: (a, b) => a.name.length - b.name.length,
          sortOrder: sortedInfo.columnKey === "name" ? sortedInfo.order : null,
          ellipsis: true,
        },
        {
          title: 'Surname',
          dataIndex: "surname",
          key: "surname",
       
          filteredValue: filteredInfo.address || null,
          onFilter: (value, record) => record.surname.includes(value),
          sorter: (a, b) => a.surname > b.surname,
          sortOrder: sortedInfo.columnKey === "surname" ? sortedInfo.order : null,
          ellipsis: true,
        },
        {
          title: 'Age',
          dataIndex: "age",
          key: "salary",
       
          filteredValue: filteredInfo.address || null,
          onFilter: (value, record) => record.age.includes(value),
          sorter: (a, b) => a.age > b.age,
          sortOrder: sortedInfo.columnKey === "age" ? sortedInfo.order : null,
          ellipsis: true,
        },
        {
            title: 'Salary',
            dataIndex: "salary",
            key: "salary",
         
            filteredValue: filteredInfo.address || null,
            onFilter: (value, record) => record.salary.includes(value),
            sorter: (a, b) => a.salary > b.salary,
            sortOrder: sortedInfo.columnKey === "salary" ? sortedInfo.order : null,
            ellipsis: true,
          },

          {
            title: 'Postion',
            dataIndex: "position",
            key: "position",
         
            filteredValue: filteredInfo.address || null,
            onFilter: (value, record) => record.postion.includes(value),
            sorter: (a, b) => a.position > b.position,
            sortOrder: sortedInfo.columnKey === "position" ? sortedInfo.order : null,
            ellipsis: true,
          }
          ,
          {
            title: "Delete",
            render: (value) => (
              <Button
                variant="contained"
                color="error"
                onClick={() => {
                  Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      //delete
                      deleteProductByID(value.id);
                      let filteredSuppliers = products.filter(
                        (item) => item.id !== value.id
                      );
                      setProducts(filteredSuppliers);
      
                      //delete data from basket if exists
                      let localBasket = JSON.parse(localStorage.getItem("basket"));
                      let updatedBasket = localBasket.filter(
                        (basketItem) => basketItem.id !== value.id
                      );
                      localStorage.setItem("basket", JSON.stringify(updatedBasket));
                      //update state
                      let updatedBasketState = basket.filter(
                        (item) => item.id !== value.id
                      );
                      setBasket(updatedBasketState);
                      Swal.fire("Deleted!", "Your file has been deleted.", "success");
                    }
                  });
                }}
              >
                Delete
              </Button>
            ),
          },
          {
            title: "Edit",
            render: () => ( 
            <Link to={`/admin/employe/edit/${products.id}`}>
              <Button
                variant="contained"
                color="error"
               
              >
                
               Edit 
              </Button>
              </Link>
            ), 
          }
     
      ]; 
  return (
      <>
        <Table columns={columns} dataSource={products} onChange={handleChange} /> 
      </>  
)
}

export default Employe