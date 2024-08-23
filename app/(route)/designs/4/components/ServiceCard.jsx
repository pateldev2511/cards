import React from 'react';

const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex items-center bg-background p-6 rounded-md shadow-sm max-w-full border">
      <Icon className="w-16 h-16 text-blue-600 mr-6" />
      <div className="border-l pl-6">
        <h3 className="text-xl text-blue-600 font-semibold">{title}</h3>
        <p className="text-muted-foreground mt-2">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;