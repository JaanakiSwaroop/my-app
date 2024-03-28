import React, { useEffect, useState } from 'react';
import './Crypto.css'; // Import CSS file for styling

const Crypto = () => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
        if (!response.ok) {
          throw new Error('Failed to fetch cryptocurrency data');
        }
        const data = await response.json();
        const bitcoinPrice = {
          id: 1,
          name: 'Bitcoin',
          price: data.bpi.USD.rate_float.toFixed(2)
        };
        setCryptoData([bitcoinPrice]);
      } catch (error) {
        console.error('Error fetching cryptocurrency data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="crypto-container">
      <h2>Crypto</h2>
      <div className="crypto-cards">
        {cryptoData.map(item => (
          <div className="crypto-card" key={item.id}>
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            {/* Additional cryptocurrency data can be added here */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Crypto;
