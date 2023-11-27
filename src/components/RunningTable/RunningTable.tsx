import React, { FC } from 'react';
import './RunningTable.scss';
import { DANIEL } from '../../static-daniel.service';
import Table from '../Table/Table';

interface RunningTableProps {}

const RunningTable: FC<RunningTableProps> = () => (
  <div className="RunningTable">
    <Table data={DANIEL.races} />
  </div>
);

export default RunningTable;
