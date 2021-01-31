import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

const categories = [
    { name: 'portraits', description: 'Portraits of people in my life' }
  ]
  const mockCurrentCategory = jest.fn();
  const mockSetCurrentCategory = jest.fn();

afterEach(cleanup);

describe('Nav Componant', () => {
    //first test (baseline)
    it('renders', () => {
        render(<Nav
          categories={categories}
          setCurrentCategory={mockSetCurrentCategory}
          currentCategory={mockCurrentCategory}
        />);
      })
    //second test(snapshot) NOTE!! If I change the .Nav file I must delete teh old snapshot and rerun tests
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
          />);  
        expect(asFragment()).toMatchSnapshot();
      });
    //third test (emoji visibility)
        describe('emoji is visible', () => {
            it('insert emoji into h2', () => {
                const { getByLabelText} = render(<Nav
                    categories={categories}
                    setCurrentCategory={mockSetCurrentCategory}
                    currentCategory={mockCurrentCategory}
                  />);
                expect(getByLabelText('camera')).toHaveTextContent('📸');
            });
        })
    //fourth test (links visible)
    describe('links are visible', () => {
        it('inserts text into the links', () => {
          const { getByTestId } = render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
          />);
          expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
          expect(getByTestId('about')).toHaveTextContent('About me');
        });
      })
})