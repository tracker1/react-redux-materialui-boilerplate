import './page.scss';

import TopNav from './topnav';
import LeftNav from './leftnav';

export default ({ children }) => (
  <div className="common-layout-page">
    <div className="common-layout-page-leftnav">
      <LeftNav />
    </div>
    <div className="commmon-layout-page-topnav">
      <TopNav />
    </div>
    <div className="common-layout-page-children">
      {children}
    </div>
  </div>
);
