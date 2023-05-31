import React from 'react';

const Footer = () => {
    const date = new Date();
  return (
      <footer className="footer">
        <div className="container">
          <span className="text-muted">Copyright @{date.getFullYear()} LLR BOys Hostel</span>
        </div>
      </footer>
  );
};

export default Footer;
