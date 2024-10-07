import React, { useState } from 'react';
import Tutorials from '../components/Tutorials'
import Resumes from '../components/Resumes';
import Portfolios from '../components/Portfolios';
import './Resources.css'

function Resources() {
    const [resourceType, setResourceType] = useState('Tutorials');

    const renderComponent = () => {
        switch(resourceType) {
            case 'Tutorials':
                return <Tutorials/>;
            case 'Resumes':
                return <Resumes/>;
            case 'Portfolios':
                return <Portfolios/>;
            default:
                return null;
        }
    }

    return (
        <div className="resources-container">
            <h1>Resources</h1>
            <ul>
                <li
                    className={resourceType === 'Tutorials' ? 'active' : ''}
                    onClick={() => setResourceType('Tutorials')}
                >
                    Tutorials
                </li>
                <li
                    className={resourceType === 'Resumes' ? 'active' : ''}
                    onClick={() => setResourceType('Resumes')}
                >
                    Resumes
                </li>
                <li
                    className={resourceType === 'Portfolios' ? 'active' : ''}
                    onClick={() => setResourceType('Portfolios')}
                >
                    Portfolios
                </li>
            </ul>
            <hr></hr>
            {renderComponent()}
        </div>
    )
}

export default Resources