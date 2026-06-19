import React from 'react';
import { render, screen } from '@testing-library/react';
import ServiceCardSkeleton from '../components/ServiceCardSkeleton';
import AgentCardSkeleton from '../components/AgentCardSkeleton';

describe('ServiceCardSkeleton', () => {
  it('renders a card with animate-pulse', () => {
    const { container } = render(<ServiceCardSkeleton />);
    const card = container.firstElementChild as HTMLElement;
    expect(card).toHaveClass('card', 'animate-pulse');
  });

  it('renders the endpoint bar placeholder', () => {
    const { container } = render(<ServiceCardSkeleton />);
    const endpointBar = container.querySelector('.bg-background.rounded-lg.border');
    expect(endpointBar).toBeInTheDocument();
  });

  it('renders the button placeholder', () => {
    const { container } = render(<ServiceCardSkeleton />);
    const button = container.querySelector('.rounded-full.h-10');
    expect(button).toBeInTheDocument();
  });
});

describe('AgentCardSkeleton', () => {
  it('renders a card with animate-pulse', () => {
    const { container } = render(<AgentCardSkeleton />);
    const card = container.firstElementChild as HTMLElement;
    expect(card).toHaveClass('card', 'animate-pulse');
  });

  it('renders three stat placeholders', () => {
    const { container } = render(<AgentCardSkeleton />);
    const statBoxes = container.querySelectorAll('.grid-cols-3 > div');
    expect(statBoxes).toHaveLength(3);
  });

  it('renders a score badge placeholder', () => {
    const { container } = render(<AgentCardSkeleton />);
    const badge = container.querySelector('.rounded-full');
    expect(badge).toBeInTheDocument();
  });
});
