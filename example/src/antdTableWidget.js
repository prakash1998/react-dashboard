import React,{ useState,useEffect} from 'react';
import 'antd/dist/antd.css';
import { Table, Divider, Tag } from 'antd';
const { Column, ColumnGroup } = Table;
const AntdTable =({refreshHook}) => {
   const [data, setData] = useState([
       {
         key: '1',
         firstName: 'John',
         lastName: 'Brown',
         age: 32,
         address: 'New York No. 1 Lake Park',
         tags: ['nice', 'developer'],
       },
       {
         key: '2',
         firstName: 'Jim',
         lastName: 'Green',
         age: 42,
         address: 'London No. 1 Lake Park',
         tags: ['loser'],
       },
       {
         key: '3',
         firstName: 'Joe',
         lastName: 'Black',
         age: 32,
         address: 'Sidney No. 1 Lake Park',
         tags: ['cool', 'teacher'],
       },
     ])
   useEffect(() => {
       setData( data => data.map(item => { return {...item , age: item.age + 1}}))
   }, [refreshHook])
   return(
       <div style={{backgroundColor:'white'}}>
     <Table dataSource={data} pagination={{ position: 'none' }} >
       <ColumnGroup title="Name">
         <Column title="First Name" dataIndex="firstName" key="firstName" />
         <Column title="Last Name" dataIndex="lastName" key="lastName" />
       </ColumnGroup>
       <Column title="Age" dataIndex="age" key="age" />
       <Column title="Address" dataIndex="address" key="address" />
       <Column
         title="Tags"
         dataIndex="tags"
         key="tags"
         render={tags => (
           <span>
             {tags.map(tag => (
               <Tag color="blue" key={tag}>
                 {tag}
               </Tag>
             ))}
           </span>
         )}
       />
       <Column
         title="Action"
         key="action"
         render={(text, record) => (
           <span>
             <a>Invite {record.lastName}</a>
             <Divider type="vertical" />
             <a>Delete</a>
           </span>
         )}
       />
     </Table>
     </div>
   );
}
export default AntdTable;

export const antdTableWidget = {
   id:"tablewidget",
   Component: AntdTable,
   preferedX:50,
   minWidth:45,
   backgroundColor:'white',
   refreshInterval : 1000,
}