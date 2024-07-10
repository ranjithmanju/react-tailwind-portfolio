import { useState, createContext, useContext } from 'react';
import { singleProjectData as singleProjectDataJson } from '../data/singleProjectData';

const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ children }) => {
  const [singleProjectData, setSingleProjectData] = useState(singleProjectDataJson);

  const getProjectById = (id) => {
    return singleProjectData.find(project => project.id === id);
  };

  return (
    <SingleProjectContext.Provider value={{ singleProjectData, setSingleProjectData, getProjectById }}>
      {children}
    </SingleProjectContext.Provider>
  );
};

export const useSingleProject = () => {
  const context = useContext(SingleProjectContext);
  if (!context) {
    throw new Error('useSingleProject must be used within a SingleProjectProvider');
  }
  return context;
};

export default SingleProjectContext;
