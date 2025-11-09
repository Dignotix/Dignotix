import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Hero from '../components/Hero';

describe('Hero Component', () => {
  it('renders hero heading with company name', () => {
    render(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    );
    
    const heading = screen.getByText(/Dignotix/i);
    expect(heading).toBeInTheDocument();
  });

  it('renders tagline', () => {
    render(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    );
    
    const tagline = screen.getByText(/Empower Tomorrow's Health/i);
    expect(tagline).toBeInTheDocument();
  });

  it('renders CTA buttons', () => {
    render(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    );
    
    const investorButton = screen.getByRole('link', { name: /Investor Pitch/i });
    const demoButton = screen.getByRole('link', { name: /Request Demo/i });
    
    expect(investorButton).toBeInTheDocument();
    expect(demoButton).toBeInTheDocument();
  });

  it('CTA buttons have correct links', () => {
    render(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    );
    
    const investorButton = screen.getByRole('link', { name: /Investor Pitch/i });
    const demoButton = screen.getByRole('link', { name: /Request Demo/i });
    
    expect(investorButton).toHaveAttribute('href', '/investors');
    expect(demoButton).toHaveAttribute('href', '/demo');
  });

  it('renders device image with correct alt text', () => {
    render(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    );
    
    const deviceImage = screen.getByAltText(/Dignotix portable diagnostic device/i);
    expect(deviceImage).toBeInTheDocument();
  });
});
