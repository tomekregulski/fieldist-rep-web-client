import React, { useContext } from 'react';

import { SessionContext } from '../../context/SessionContext';
import { ReportContext } from '../../context/ReportContext';

import AlertModal from '../AlertModal/AlertModal';

const StopSession = () => {
  const { reset } = useContext(SessionContext);
  const { resetRpt } = useContext(ReportContext);

  const resetSession = reset;
  const resetReport = resetRpt;

  const handleStopSession = () => {
    localStorage.removeItem('session');
    localStorage.removeItem('currentReport');
    resetSession();
    resetReport();
  };

  return (
    <div>
      <AlertModal action={'Stop Session'} callback={handleStopSession} />
    </div>
  );
};

export default StopSession;
