/* eslint-disable */
import Table from './Table';

export default {
  title: "Table",
};

export const Default = () => <Table data={[
  {date:'2019-10-20', race:'Toronto Waterfront Marathon', km:'42.2', time: '4:17:17'}]}/>;

Default.story = {
  name: 'default',
};
