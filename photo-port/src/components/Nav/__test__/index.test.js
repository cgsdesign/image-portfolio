import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

describe('Nav Componant', () => {
    //first test (baseline)
        it('renders', () => {
            render(<Nav/>);
        });
    //second test(snapshot) NOTE!! If I change the .Nav file I must delete teh old snapshot and rerun tests
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav />);  
        expect(asFragment()).toMatchSnapshot();
      });
    //third test (emoji visibility)
        describe('emoji is visible', () => {
            it('insert emoji into h2', () => {
                const { getByLabelText} = render(<Nav/>);
                expect(getByLabelText('camera')).toHaveTextContent('📸');
            });
        })
    //fourth test (links visible)
    describe('links are visible', () => {
        it('inserts text into the links', () => {
          const { getByTestId } = render(<Nav />);
          expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
          expect(getByTestId('about')).toHaveTextContent('About me');
        });
      })
})