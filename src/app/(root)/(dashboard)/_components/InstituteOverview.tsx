import React from 'react';
import { Card } from './ui/Card';
import Image from 'next/image';
import university from "../../../assets/university.png"

interface InstituteOverviewProps {
  name: string;
  established: number;
  instituteCode: string;
  address: string;
  contact: string;
  email: string;
}

interface StatsSectionProps {
  title: string;
  stats: {
    total: number;
    activeCourses?: number;
    activeClasses?: number;
    departments?: number;
    averageAttendance?: number;
    performanceIndex?: number;
    satisfactionRate?: number;
  };
  viewButtonText: string;
  className?: string;
}

const StatsSection: React.FC<StatsSectionProps> = ({ 
  title, 
  stats, 
  viewButtonText ,
  className,
}) => (
  <Card className="p-8 rounded-lg shadow-sm">
    <div className="flex flex-col space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-800">{title} Overview</h2>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm ">Total {title}</p>
          <p className="text-2xl font-bold ">{stats.total}</p>
        </div>
        <div>
          <p className="text-sm ">
            {title === 'Students' 
              ? 'Active Courses' 
              : title === 'Teachers' 
              ? 'Departments' 
              : 'Additional Stat'}
          </p>
          <p className="text-2xl font-bold ">
            {title === 'Students' 
              ? stats.activeCourses 
              : title === 'Teachers' 
              ? stats.departments 
              : 'N/A'}
          </p>
        </div>
        <div>
          <p className="text-sm  ">
            {title === 'Students' 
              ? 'Average Attendance' 
              : title === 'Teachers' 
              ? 'Active Classes' 
              : 'Additional Stat'}
          </p>
          <p className="text-2xl font-bold ">
            {title === 'Students' 
              ? `${stats.averageAttendance}%` 
              : title === 'Teachers' 
              ? stats.activeClasses 
              : 'N/A'}
          </p>
        </div>
        <div>
          <p className="text-sm ">Performance Index</p>
          <p className="text-2xl font-bold ">
            {stats.performanceIndex || stats.satisfactionRate}/10
          </p>
        </div>
      </div>
      <button 
        className="mt-4 w-full py-2 bg-[#0DA21B24] max-w-[493px] h-[55px] mx-auto text-[#0DA21B] rounded-md hover:bg-primary-dark transition-colors">
        {viewButtonText}
        
      </button>
    </div>
  </Card>
);

const InstituteOverview: React.FC<InstituteOverviewProps> = ({
  name,
  established,
  instituteCode,
  address,
  contact,
  email
}) => {
  return (
    <div className="container flex flex-col justify-center max-w-[1155px] items-center gap-4 mx-auto min-h-screen">
        <h1 className='text-start'>Institute Overview & Management</h1>
      <div className="w-full rounded-lg p-6 border  bg-[#9654F412] border-[#9654F4A1]">
        <div className="flex items-center space-x-4">
          <div className="rounded-[8px] flex items-center justify-center">
          <Image
              src={university}
              width={143}
              height={160}
              alt="university image"
            />
          </div>
          <div>
            <p className="text-sm ">Established in {established}</p>
            <h1 className="text-2xl font-semibold ">{name}</h1>
            <p className="text-sm ">Institute Code: {instituteCode}</p>
          </div>
          <div className="grid  text-right">
            <div className="flex items-center space-x-2">
              <div className="text-gray-500"><svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 20L14.5 14.5C17.5376 11.4624 17.5376 6.53757 14.5 3.5C11.4624 0.462435 6.53757 0.462435 3.5 3.5C0.462435 6.53757 0.462437 11.4624 3.5 14.5L9 20Z" stroke="#838383" stroke-width="2" strokeLinejoin="round"/>
</svg> Aff
</div>
              <p className="text-sm">{address}</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-500">📧</span>
              <p className="text-sm">{email}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
              <span className="text-gray-500">📞</span>
              <p className="text-sm">{contact}</p>
            </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 w-full  rounded-lg gap-6">
        <StatsSection 
          title="Students"
          className='border-[#0DA21B8C]' 
          stats={{
            total: 2284,
            activeCourses: 84,
            averageAttendance: 98,
            performanceIndex: 9.0
          }}
          viewButtonText="View Students"
        />
        <StatsSection 
          title="Teachers" 
          stats={{
            total: 24,
            departments: 14,
            activeClasses: 98,
            satisfactionRate: 9.0
          }}
          viewButtonText="View Teachers"
        />
      </div>
    </div>
  );
};

export default InstituteOverview;