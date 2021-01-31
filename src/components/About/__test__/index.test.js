import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';


afterEach(cleanup);//lets each test run independenty so no leftover data breaks the next test

describe('About component', () => {
    //first test(test and it = the same)
        it('renders', () => {
            render(<About />)
        });
    //second test
        it('matches snapshot DOM node structure', () => {
            const {asFragment} = render(<About />);
            expect(asFragment()).toMatchSnapshot();
        })
  })