import { render, screen, waitFor } from '@testing-library/react';
import TopBar from '../top-bar';

// Mock the fetchUserCurrencyAndFlag utility
import * as currencyUtil from '../../utils/currency.util';
jest.mock('../../utils/currency.util');

const mockFetch = currencyUtil.fetchUserCurrencyAndFlag as jest.Mock;

describe('TopBar', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders loading state initially', () => {
    render(<TopBar />);
    expect(screen.getByTestId('top-bar-loading')).toBeDefined();
  });

  it('renders fetched currency and flag after success', async () => {
    mockFetch.mockResolvedValueOnce({
      currencyCode: 'EUR',
      flagUrl: '/flags/eu.png',
    });

    render(<TopBar />);
    await waitFor(() => {
      expect(screen.getByText('EUR')).toBeInTheDocument();
      expect(screen.getByTestId('top-bar-flag')).toHaveAttribute('src', '/flags/eu.png');
      expect(screen.getByTestId('top-bar-currency')).toBeInTheDocument();
    });
});

it('renders fallback values on fetch failure', async () => {
    mockFetch.mockRejectedValueOnce(new Error('API error'));
    
    render(<TopBar />);
    await waitFor(() => {
        expect(screen.getByText('USD')).toBeInTheDocument();
        expect(screen.getByTestId('top-bar-flag')).toHaveAttribute('src', '/path/to/default-flag.png');
        expect(screen.getByTestId('top-bar-currency')).toBeInTheDocument();
    });
  });
});