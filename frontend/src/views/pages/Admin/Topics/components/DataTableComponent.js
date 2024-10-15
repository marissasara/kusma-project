
import React, {  } from 'react';
import { Badge, Button, Card, Figure, Table } from 'react-bootstrap';
import useStore from '../../../../../store';
import Ordering from './OrderingComponent';
import PaginatorLink from '../../../../../libs/PaginatorLink';
import CreateButton from '../../../../../libs/CreateButton';
import CreateModal from '../modals/CreateModal';
import EditModal from '../modals/EditModal';
import DeleteModal from '../modals/DeleteModal';
import ImageModal from '../modals/ImageModal';
import { Link } from 'react-router-dom';

const DataTableComponent = () => {
    const store = useStore()
    const items = store.getValue('topics'); 
    const url = process.env.REACT_APP_SERVER_URL; 
    console.log(items)
    return (
        <div>
            <CreateButton>
                <CreateModal />
            </CreateButton>
            
   
            <Table>
                <thead>
                    <tr>
                        <th style={{ 'width': '20px'}}>ID</th>
                        <th style={{ 'width': '20px'}} className='text-center'>Ordering</th>
                        <th style={{ 'width': '90vH'}}>Topic</th>
                        <th style={{ 'width': '40px'}}>Votes</th>
                        <th>Created At</th>
                        <th className='text-center'></th>
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
                                
                                        
                              
                                            <td style={{width: '*'}}>
                                               
                                                <Card className='p-3'>
                                                    <h3>{item.title}</h3>
                                                    {item.description}
                                                </Card>
                                              
                                                
                                            </td>
                                            <td className='text-center'><Badge className={'text-dark'} bg={'warning'}><h2>{item?.votes_count}</h2></Badge></td>
                                            <td style={{width: '180px'}}>{item.created_at}</td>
                                            <td className='text-center' style={{width: '300px'}}>

                                                <Link to={`/admin/topics/${item.id}/choices`}>
                                                    <Button size="sm" variant="primary">
                                                        Choices
                                                    </Button>
                                                </Link>
                                                {' '}
                                                <EditModal id={item.id} />
                                                {' '}
                                                <DeleteModal id={item.id} />
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