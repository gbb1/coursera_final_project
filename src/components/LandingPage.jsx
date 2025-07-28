import React from 'react';

const backgroundImageUrl = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80';

function LandingPage({ setCurrentPage }) {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        padding: '2rem',
        width: '100%',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '2rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: 'bold' }}>
          GreenLeaf Plant Store
        </h1>
        <p style={{ fontSize: '1.5rem', maxWidth: '600px', marginBottom: '2rem' }}>
          Discover a wide variety of beautiful, healthy plants to brighten your home and workspace. Whether you're a seasoned plant parent or just getting started, we have something for everyone!
        </p>
        <button
          style={{
            padding: '1rem 2.5rem',
            fontSize: '1.2rem',
            backgroundColor: '#4caf50',
            color: '#fff',
            border: 'none',
            borderRadius: '2rem',
            cursor: 'pointer',
            transition: 'background 0.2s',
          }}
          onClick={() => setCurrentPage('products')}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
