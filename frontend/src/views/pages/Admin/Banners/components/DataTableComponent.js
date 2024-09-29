
import React, {  } from 'react';
import { Table } from 'react-bootstrap';
import useStore from '../../../../../store';
import Ordering from './OrderingComponent';
import PaginatorLink from '../../../../../libs/PaginatorLink';
import CreateButton from '../../../../../libs/CreateButton';
import CreateModal from '../modals/CreateModal';
import EditModal from '../modals/EditModal';
import DeleteModal from '../modals/DeleteModal';

const DataTableComponent = () => {
    const store = useStore()
    const items = store.getValue('banners')
    return (
        <div>
            <CreateButton>
                <CreateModal />
            </CreateButton>
            
   
            <Table>
                <thead>
                    <tr>
                        <th style={{ 'width': '20px'}}>ID</th>
                        <th className='text-center'>Ordering</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Created At</th>
                        <th className='text-center'></th>
                    </tr>
                </thead>

                <tbody>
                    {items ? 
                    <>
                        {items?.data?.map((item,index) => (
                            <tr key={index}>
                                <td><span className="badge bg-dark">{item.id}</span></td>
                                <td className='text-center' style={{'width':'100px'}}>

                                    <Ordering id={item.id} direction='up' disabled={index === 0}/>
                                    {' '}
                                    <Ordering id={item.id} direction='down' disabled={index === items.data.length - 1 }/>

                                </td>
                                <td>{item.title}</td>
                                <td style={{'width':'150px'}}>{item.description}</td>
                                <td style={{'width':'180px'}}>{item.created_at}</td>
                                <td className='text-center' style={{'width':'200px'}}>
                                    <EditModal id={item.id} />
                                    {' '}
                                    <DeleteModal id={item.id} />
                                </td>
                            </tr>
                        ))}
                    </>
                    :
                    <tr><td colSpan={7}>loading...</td></tr>
                    }
                </tbody>
            </Table>
            <PaginatorLink store={store} items={items} />
        </div>
    );
};

export default DataTableComponent;