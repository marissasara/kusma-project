
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Table,Button, Badge } from 'react-bootstrap';
import useStore from '../../../../../store';

const DataTable = () => {
    const store = useStore()
    const items = store.getValue('users')
    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th style={{ 'width': '20px'}}><FontAwesomeIcon icon={['fas', 'hashtag']} />{' '}</th>
                        <th><FontAwesomeIcon icon={['fas', 'briefcase']} />{' '}Role</th>
                        <th><FontAwesomeIcon icon={['fas', 'person']} />{' '}Name</th>
                        <th><FontAwesomeIcon icon={['fas', 'envelope']} />{' '}Email</th>
                        <th><FontAwesomeIcon icon={['fas', 'clock']} />{' '}Created At</th>
                        <th className='text-center'><FontAwesomeIcon icon={['fas', 'bolt']} /></th>
                    </tr>
                </thead>

                <tbody>
                    {items?.data?.map((item,index) => (
                        <tr key={index}>
                            <td><span className="badge bg-primary">{item.id}</span></td>
                            <td style={{'width':'80px'}}>
                                {item.roles?.map((role, index) => (
                                    <React.Fragment key={index}>
                                       {' '}<Badge bg='warning' className='p-2 text-dark'>{role.name}</Badge>
                                    </React.Fragment>
                                ))}
                            </td>
                            <td>{item.name}</td>
                            <td style={{'width':'150px'}}>{item.email}</td>
                            <td style={{'width':'180px'}}>{item.created_at}</td>
                            <td className='text-center' style={{'width':'200px'}}></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            
        </div>
    );
};

export default DataTable;