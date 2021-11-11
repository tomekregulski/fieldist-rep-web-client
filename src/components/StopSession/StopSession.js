import React, { useContext } from 'react';

import { SessionContext } from '../../context/SessionContext';
import { ReportContext } from '../../context/ReportContext';

import YesNoModal from '../YesNoModal/YesNoModal';

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
      <YesNoModal
        action={'Stop Session'}
        message={
          'Are you sure that you want to cancel this session? All of your data will be lost'
        }
        callback={handleStopSession}
      />
    </div>
  );
};

export default StopSession;
