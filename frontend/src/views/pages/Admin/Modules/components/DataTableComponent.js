
import React, {  } from 'react';
import { Form, Badge, Button, Card, Figure, Table } from 'react-bootstrap';
import useStore from '../../../../../store';
import Ordering from './OrderingComponent';
import PaginatorLink from '../../../../../libs/PaginatorLink';
import { Link } from 'react-router-dom';
import StatusComponent from './StatusComponent';

const DataTableComponent = () => {
    const store = useStore()
    const items = store.getValue('modules'); 
    const url = process.env.REACT_APP_SERVER_URL; 
    //console.log(items)

    return (
        <div>

            
   
            <Table>
                <thead>
                    <tr>
                        <th style={{ 'width': '20px'}}>ID</th>
                        <th style={{ 'width': '20px'}} className='text-center'>Ordering</th>
                        <th style={{ 'width': '30px'}}>Status</th>
                        <th style={{ 'width': '90vH'}}>Module</th>
            
                    </tr>
                </thead>

                <tbody>
                    {items ? 
                    (
                        <>
                            {items.data && items.data.length > 0 ? 
                            (
                                <>
                                    {items.data.map((item, index) => (
                                        <tr key={index}>
                                            <td><span className="badge bg-dark">{item.id}</span></td>    
                                            <td className='text-center' style={{width: '100px'}}>
                                                <Ordering id={item.id} direction='up' disabled={index === 0}/>
                                                {' '}
                                                <Ordering id={item.id} direction='down' disabled={index === items.data.length - 1}/>
                                            </td>
                                
                                        
                                            <td>
                                                <StatusComponent id={item.id} is_active={item.is_active} />
                                            </td>
                              
                                            <td style={{width: '*'}}>
                                               
                                                <Card className='p-3'>
                                                    <h3>{item.name.toUpperCase()}</h3>
                                                </Card>
                                            </td>
                                           
                                            
                                        </tr>
                                    ))}
                                </>
                            ) : 
                            (
                                <tr>
                                    <td colSpan={7} className="text-center">No data available</td>
                                </tr>
                            )}
                        </>
                    ) : 
                    (
                        <tr>
                            <td colSpan={7} className="text-center">No data available</td>
                        </tr>
                    )}
                </tbody>

            </Table>
            <PaginatorLink store={store} items={items} />
        </div>
    );
};

export default DataTableComponent;