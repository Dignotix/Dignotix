import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ContactCard from '../components/ContactCard';

describe('ContactCard Component', () => {
  const mockContact = {
    name: 'Dr. Mohammed Abdo',
    role: 'CEO',
    email: 'Mohammed.abdo@rst.edu.eg',
    phone: '+20 114 429 9280',
    bio: 'Leading expert in diagnostic technology',
    image: '/images/team_mohammed_abdo.png'
  };

  it('renders contact name and role', () => {
    render(<ContactCard contact={mockContact} />);
    
    expect(screen.getByText('Dr. Mohammed Abdo')).toBeInTheDocument();
    expect(screen.getByText('CEO')).toBeInTheDocument();
  });

  it('renders email link with mailto', () => {
    render(<ContactCard contact={mockContact} />);
    
    const emailLink = screen.getByRole('link', { name: new RegExp(mockContact.email, 'i') });
    expect(emailLink).toHaveAttribute('href', `mailto:${mockContact.email}`);
  });

  it('renders phone link with tel', () => {
    render(<ContactCard contact={mockContact} />);
    
    const phoneLink = screen.getByRole('link', { name: new RegExp(mockContact.phone.replace(/\s/g, ''), 'i') });
    expect(phoneLink).toHaveAttribute('href', `tel:${mockContact.phone}`);
  });

  it('renders bio when provided', () => {
    render(<ContactCard contact={mockContact} />);
    
    expect(screen.getByText(mockContact.bio)).toBeInTheDocument();
  });

  it('renders contact image with correct alt text', () => {
    render(<ContactCard contact={mockContact} />);
    
    const image = screen.getByAltText(mockContact.name);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', mockContact.image);
  });

  it('handles missing optional fields gracefully', () => {
    const minimalContact = {
      name: 'John Doe',
      role: 'Manager'
    };
    
    render(<ContactCard contact={minimalContact} />);
    
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Manager')).toBeInTheDocument();
  });
});
