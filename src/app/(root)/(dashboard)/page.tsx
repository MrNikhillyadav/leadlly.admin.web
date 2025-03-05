import React from 'react';
import InstituteOverview from './_components/InstituteOverview';

const Home: React.FC = () => {
  return (
    <div className='min-w-[1294px] pt-[7px] max-h-[864px] '>
        <InstituteOverview 
        name="Chaitanya Bharathi Institute"
        established={2001}
        instituteCode="21XYZ1234"
        address="123, Main Street, City, Country"
        contact="+1234567890"
        email="info@institute.com"
      />
    </div>
  );
};

export default Home;